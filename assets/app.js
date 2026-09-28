(function () {
  const C = window.COURSE;
  const app = document.getElementById("app");
  const SESSION_KEY = "ontoan7:session";
  const LETTERS = "ABCDEFGH";
  const session = { token: null, name: "", progress: null, ready: false };

  async function api(path, { method = "GET", body, keepalive } = {}) {
    const headers = { "content-type": "application/json" };
    if (session.token) headers.authorization = `Bearer ${session.token}`;
    let res;
    try {
      res = await fetch(path, { method, headers, keepalive, body: body ? JSON.stringify(body) : undefined });
    } catch (err) {
      const e = new Error("Không kết nối được máy chủ. Kiểm tra mạng rồi thử lại.");
      e.status = 0;
      throw e;
    }
    let data = {};
    try { data = await res.json(); } catch (err) { /* phản hồi không phải JSON */ }
    if (!res.ok) {
      const e = new Error(data.error || `Máy chủ báo lỗi (${res.status}).`);
      e.status = res.status;
      throw e;
    }
    return data;
  }

  // Tiến độ nằm trên máy chủ (file .json theo tên người học); trình duyệt chỉ giữ mã phiên đăng nhập.
  const store = {
    data: { ex: {} },
    pending: {},
    guide: false,
    timer: null,
    get(id) { return this.data.ex[id]; },
    set(id, st) {
      const cur = this.data.ex[id];
      if (cur === "ok") return;
      if (cur === "shown" && st !== "shown") return;
      this.data.ex[id] = st;
      this.pending[id] = st;
      this.schedule();
    },
    markGuide() {
      if (session.progress) session.progress.seenGuide = true;
      this.guide = true;
      this.schedule(0);
    },
    schedule(ms = 600) {
      clearTimeout(this.timer);
      setSaveState("saving");
      this.timer = setTimeout(() => this.flush(), ms);
    },
    hasPending() { return this.guide || Object.keys(this.pending).length > 0; },
    async flush(keepalive) {
      clearTimeout(this.timer);
      if (!session.token || !this.hasPending()) return;
      const ex = this.pending, guide = this.guide;
      this.pending = {};
      this.guide = false;
      try {
        await api("/api/progress", { method: "PUT", body: guide ? { ex, seenGuide: true } : { ex }, keepalive });
        if (!this.hasPending()) setSaveState("saved");
      } catch (err) {
        this.pending = { ...ex, ...this.pending };
        this.guide = this.guide || guide;
        if (err.status === 401) return expireSession();
        setSaveState("error");
        this.timer = setTimeout(() => this.flush(), 6000);
      }
    }
  };
  const order = [];
  C.chapters.forEach((ch) => {
    ch.lessons.forEach((id) => C.lessons[id] && order.push({ type: "bai", id, ch }));
    if (ch.review && C.reviews[ch.id]) order.push({ type: "on-tap", id: String(ch.id), ch });
  });
  const chapterOf = (id) => C.chapters.find((ch) => ch.lessons.includes(id));
  const unitTitle = (u) => (u.type === "bai" ? `${C.lessons[u.id].label}. ${C.lessons[u.id].title}` : `Ôn tập ${u.ch.code}`);
  const unitHref = (u) => `#/${u.type}/${u.id}`;
  const exercisesOf = (u) => (u.type === "bai" ? C.lessons[u.id].exercises : C.reviews[u.id].exercises) || [];
  const exId = (u, i) => `${u.type === "bai" ? "b" : "o"}${u.id}-${i + 1}`;
  const unitStats = (u) => {
    const list = exercisesOf(u);
    let done = 0, ok = 0;
    list.forEach((_, i) => { const st = store.get(exId(u, i)); if (st) done++; if (st === "ok") ok++; });
    return { total: list.length, done, ok };
  };
  function parseNum(raw) {
    if (raw == null) return null;
    let s = String(raw).trim().toLowerCase().replace(/[−–—]/g, "-").replace(/\s+/g, "");
    s = s.replace(/[^0-9,./+\-]/g, "");
    if (!s) return null;
    if (s.includes(",")) s = s.replace(/\./g, "").replace(/,/g, ".");
    else if ((s.match(/\./g) || []).length > 1) s = s.replace(/\./g, "");
    const parts = s.split("/");
    const isNum = (t) => /^[+-]?(\d+\.?\d*|\.\d+)$/.test(t);
    if (parts.length === 1) {
      if (!isNum(parts[0])) return null;
      return { value: parseFloat(parts[0]), frac: false };
    }
    if (parts.length === 2 && isNum(parts[0]) && isNum(parts[1])) {
      const a = parseFloat(parts[0]), b = parseFloat(parts[1]);
      if (b === 0) return null;
      return { value: a / b, frac: true, a, b };
    }
    return null;
  }
  const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
  const same = (x, y, tol) => Math.abs(x - y) <= (tol != null ? tol : 1e-9 * Math.max(1, Math.abs(y)));

  function checkValue(input, spec) {
    const p = parseNum(input);
    if (!p) return { ok: false, msg: "Mình chưa đọc được số này. Hãy nhập dạng 5 ; -1,5 hoặc 3/4." };
    const answers = [].concat(spec.answer).map((a) => (typeof a === "number" ? a : parseNum(a).value));
    const hit = answers.some((a) => same(p.value, a, spec.tol));
    if (!hit) return { ok: false };
    if (spec.fraction && !p.frac) return { ok: false, msg: "Giá trị đúng rồi, nhưng đề bài yêu cầu viết dưới dạng phân số (ví dụ 3/4)." };
    if (spec.fraction === "reduced" && p.frac) {
      const intish = Number.isInteger(p.a) && Number.isInteger(p.b);
      if (!intish || gcd(p.a, p.b) !== 1) return { ok: false, msg: "Đúng giá trị rồi, nhưng phân số chưa tối giản. Rút gọn thêm nhé!" };
    }
    return { ok: true };
  }

  /* ---------------- render tiện ích ---------------- */
  const html = (s) => (s == null ? "" : String(s));
  const figHtml = (fig, cap) => (fig ? `<div class="fig">${fig}</div>${cap ? `<p class="fig-cap">${cap}</p>` : ""}` : "");

  function typeset(el) {
    const run = () => window.renderMathInElement && window.renderMathInElement(el, {
      delimiters: [
        { left: "\\[", right: "\\]", display: true },
        { left: "\\(", right: "\\)", display: false }
      ],
      throwOnError: false
    });
    if (window.renderMathInElement) run();
    else window.addEventListener("load", run, { once: true });
  }

  function toast(msg) {
    document.querySelectorAll(".toast").forEach((t) => t.remove());
    const t = document.createElement("div");
    t.className = "toast";
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2200);
  }

  function setNav(which) {
    document.querySelectorAll("[data-nav]").forEach((a) => a.classList.toggle("on", a.dataset.nav === which));
  }

  /* ---------------- trang chủ ---------------- */
  function renderHome() {
    setNav("home");
    let total = 0, done = 0;
    order.forEach((u) => { const s = unitStats(u); total += s.total; done += s.done; });
    const next = order.find((u) => { const s = unitStats(u); return s.done < s.total; }) || order[0];
    const started = done > 0;

    const chapters = C.chapters.map((ch) => {
      const units = order.filter((u) => u.ch === ch);
      const items = units.map((u) => {
        const s = unitStats(u);
        const pct = s.total ? Math.round((s.done / s.total) * 100) : 0;
        const L = u.type === "bai" ? C.lessons[u.id] : null;
        const n = u.type === "bai" ? L.short || L.num : "Ôn";
        const sub = u.type === "bai" ? (L.pages ? `SGK trang ${L.pages}` : L.sub || "") : "Bài tập tổng hợp cả chương";
        return `<li><a class="lesson-link" href="${unitHref(u)}">
          <span class="n ${u.type === "on-tap" || String(n).length > 2 ? "review" : ""}">${n}</span>
          <span class="t">${u.type === "bai" ? L.title : "Ôn tập " + ch.code.toLowerCase()}<span class="s">${sub}</span></span>
          <span class="meter">${s.done === s.total && s.total ? '<span class="done-mark">Xong</span>' : `${s.done}/${s.total}`}<span class="bar"><i style="width:${pct}%"></i></span></span>
        </a></li>`;
      }).join("");
      return `<section class="chapter" style="--c:${ch.color}">
        <div class="chapter-head"><span class="code">${ch.code}</span><h2>${ch.title}</h2></div>
        <ul class="lesson-list">${items}</ul>
      </section>`;
    }).join("");

    app.innerHTML = `
      <section class="hero">
        <p class="hello">Chào <b>${esc(lastWord(session.name))}</b>, ${started ? "mình học tiếp nhé." : "chúc bạn học vui."}</p>
        <span class="eyebrow">Toán 7 · Tập một · Kết nối tri thức</span>
        <h1>Học lại Toán, <span class="scribble">từ chỗ bị hổng<svg viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true"><path d="M3 14 C 40 5, 90 4, 197 9" stroke="#d9822b" stroke-width="5" fill="none" stroke-linecap="round"/></svg></span>.</h1>
        <p class="lead">Mỗi bài được giảng lại bằng lời thường, có ví dụ giải từng bước và bài tập để tự làm. Làm sai không sao — bấm <b>Gợi ý</b> để được mách nước, hoặc <b>Giải giúp tôi</b> để xem lời giải chi tiết.</p>
        <div class="hero-actions">
          <a class="btn primary" href="${unitHref(next)}">${started ? "Học tiếp: " + unitTitle(next) : "Bắt đầu từ phần Khởi động"}</a>
          ${started ? "" : '<a class="btn ghost" href="#/bai/1">Vào thẳng Bài 1</a>'}
        </div>
      </section>

      <div class="howto" aria-label="Cách học">
        <div><b>1</b><span>Đọc phần <strong>Hiểu nhanh</strong> – chỉ những ý chính, có ô Ghi nhớ.</span></div>
        <div><b>2</b><span>Xem <strong>Ví dụ mẫu</strong>, bấm để hiện từng bước giải.</span></div>
        <div><b>3</b><span>Tự làm <strong>Bài tập</strong>. Bí thì xem gợi ý hoặc lời giải.</span></div>
      </div>

      ${started ? `<div class="progress-strip"><span class="big">${Math.round((done / total) * 100)}%</span><span class="txt">Bạn đã làm ${done}/${total} bài tập. Cứ đều đặn mỗi ngày một bài là ổn.</span></div>` : ""}

      ${chapters}
    `;
    typeset(app);
  }

  /* ---------------- bài tập ---------------- */
  function exerciseHtml(e, id, idx) {
    const st = store.get(id);
    let input = "";
    if (e.type === "choice") {
      input = `<div class="choices" role="group">${e.choices.map((c, i) =>
        `<button type="button" class="choice" data-i="${i}"><span class="letter">${LETTERS[i]}</span><span>${c}</span></button>`).join("")}</div>`;
    } else {
      const fields = e.type === "nums" ? e.fields : [{ label: e.label, unit: e.unit }];
      input = `<div class="answer-row"><div class="multi">${fields.map((f, i) =>
        `<label class="field">${f.label ? `<span class="pre">${f.label}</span>` : ""}<input type="text" inputmode="text" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="done" data-f="${i}" placeholder="Nhập đáp số" aria-label="Đáp số ${f.label || ""}">${f.unit ? `<span class="unit">${f.unit}</span>` : ""}</label>`).join("")}</div>
        <button type="button" class="btn primary" data-act="check">Kiểm tra</button></div>
        <div class="keys" aria-label="Phím nhanh"><button type="button" data-key="-">−</button><button type="button" data-key="/">/</button><button type="button" data-key=",">,</button><span class="note">Phân số gõ 3/4, số thập phân dùng dấu phẩy.</span></div>`;
    }
    const state = st === "ok" ? "Đã giải đúng" : st === "shown" ? "Đã xem lời giải" : "";
    return `<article class="ex ${st || ""}" id="ex-${id}" data-id="${id}" data-idx="${idx}">
      <div class="ex-head"><span class="ex-num">Bài ${idx + 1}</span><span class="lvl ${e.lv === 2 ? "l2" : ""}">${e.lv === 2 ? "Vận dụng" : "Cơ bản"}</span><span class="ex-state">${state}</span></div>
      <div class="ex-q">${e.q}</div>
      ${figHtml(e.fig)}
      ${input}
      <div class="feedback" aria-live="polite"></div>
      <div class="ex-actions">
        ${e.hint ? '<button type="button" class="btn ghost small" data-act="hint">Gợi ý</button>' : ""}
        <button type="button" class="btn small" data-act="solve">Giải giúp tôi</button>
      </div>
      <div class="hint-slot"></div>
      <div class="sol-slot"></div>
    </article>`;
  }

  function solutionHtml(e, title) {
    const final = e.ans != null ? e.ans : e.type === "choice" ? `${LETTERS[e.answer]}. ${e.choices[e.answer]}` : [].concat(e.answer)[0];
    return `<div class="solution"><h4>${title}</h4>
      ${e.steps && e.steps.length ? `<ol>${e.steps.map((s) => `<li>${s}</li>`).join("")}</ol>` : ""}
      <span class="final">Đáp số: ${final}</span></div>`;
  }

  function currentList() {
    const r = parseRoute();
    if (r.type === "bai") return C.lessons[r.id].exercises;
    if (r.type === "on-tap") return C.reviews[r.id].exercises;
    return [];
  }

  function showSolution(card, e, title) {
    const slot = card.querySelector(".sol-slot");
    slot.innerHTML = solutionHtml(e, title);
    typeset(slot);
  }

  function markCard(card, st) {
    card.classList.remove("ok", "shown");
    const real = store.get(card.dataset.id);
    card.classList.add(real || st);
    card.querySelector(".ex-state").textContent = real === "ok" ? "Đã giải đúng" : "Đã xem lời giải";
    updateProgress();
  }

  function fillAnswer(card, e) {
    if (e.type === "choice") {
      const box = card.querySelector(".choices");
      box.querySelectorAll(".choice").forEach((b) => b.classList.toggle("good", +b.dataset.i === e.answer));
      box.classList.add("locked");
    } else {
      const vals = e.type === "nums" ? e.fields.map((f) => [].concat(f.answer)[0]) : [[].concat(e.answer)[0]];
      card.querySelectorAll("input[data-f]").forEach((inp, i) => {
        inp.value = String(vals[i]).replace(".", ",");
        inp.closest(".field").classList.remove("bad");
        inp.closest(".field").classList.add("good");
      });
    }
  }

  function onCheck(card, e, choiceIdx) {
    const id = card.dataset.id;
    const fb = card.querySelector(".feedback");
    let ok = false, msg = "";
    if (e.type === "choice") {
      ok = choiceIdx === e.answer;
      const btn = card.querySelector(`.choice[data-i="${choiceIdx}"]`);
      if (ok) { btn.classList.add("good"); card.querySelector(".choices").classList.add("locked"); }
      else { btn.classList.add("bad"); msg = e.why && e.why[choiceIdx] ? e.why[choiceIdx] : ""; }
    } else {
      const inputs = [...card.querySelectorAll("input[data-f]")];
      if (inputs.some((i) => !i.value.trim())) { fb.className = "feedback bad"; fb.innerHTML = "Bạn điền đáp số vào ô trống trước nhé."; return; }
      const specs = e.type === "nums" ? e.fields.map((f) => ({ ...e, ...f })) : [e];
      const results = inputs.map((inp, i) => checkValue(inp.value, specs[i]));
      results.forEach((r, i) => {
        const fld = inputs[i].closest(".field");
        fld.classList.toggle("good", r.ok);
        fld.classList.toggle("bad", !r.ok);
      });
      ok = results.every((r) => r.ok);
      msg = (results.find((r) => r.msg) || {}).msg || "";
    }
    const tries = (+card.dataset.tries || 0) + (ok ? 0 : 1);
    card.dataset.tries = tries;
    if (ok) {
      const praise = ["Chính xác!", "Đúng rồi!", "Làm tốt lắm!", "Chuẩn luôn!"][Math.floor(Math.random() * 4)];
      fb.className = "feedback ok";
      fb.innerHTML = `${praise}<small>Đọc lại phần giải thích bên dưới để chắc chắn bạn hiểu vì sao.</small>`;
      store.set(id, "ok");
      markCard(card, "ok");
      showSolution(card, e, "Giải thích");
    } else {
      fb.className = "feedback bad";
      const base = tries >= 2 ? "Vẫn chưa đúng. Bấm “Giải giúp tôi” để xem từng bước nhé." : "Chưa đúng, thử lại xem! Có thể bấm “Gợi ý”.";
      fb.innerHTML = msg ? `${msg}<small>${base}</small>` : base;
      if (tries >= 2) card.querySelector('[data-act="solve"]').classList.add("pulse");
    }
    typeset(fb);
  }

  function bindExercises(root) {
    root.addEventListener("click", (ev) => {
      const card = ev.target.closest(".ex");
      if (!card) return;
      const e = currentList()[+card.dataset.idx];
      if (!e) return;
      const choice = ev.target.closest(".choice");
      if (choice) {
        if (card.querySelector(".choices").classList.contains("locked") || choice.classList.contains("bad")) return;
        onCheck(card, e, +choice.dataset.i);
        return;
      }
      const key = ev.target.closest("[data-key]");
      if (key) {
        const inp = card.querySelector("input[data-f]:focus") || card._lastInput || card.querySelector("input[data-f]");
        const pos = inp.selectionStart != null ? inp.selectionStart : inp.value.length;
        inp.value = inp.value.slice(0, pos) + key.dataset.key + inp.value.slice(inp.selectionEnd != null ? inp.selectionEnd : pos);
        inp.focus();
        try { inp.setSelectionRange(pos + 1, pos + 1); } catch (err) { /* một số trình duyệt không hỗ trợ */ }
        return;
      }
      const act = ev.target.closest("[data-act]");
      if (!act) return;
      if (act.dataset.act === "check") onCheck(card, e);
      if (act.dataset.act === "hint") {
        const slot = card.querySelector(".hint-slot");
        slot.innerHTML = slot.innerHTML ? "" : `<div class="hint">${e.hint}</div>`;
        typeset(slot);
      }
      if (act.dataset.act === "solve") {
        fillAnswer(card, e);
        const fb = card.querySelector(".feedback");
        if (!card.classList.contains("ok")) {
          store.set(card.dataset.id, "shown");
          markCard(card, "shown");
          fb.className = "feedback";
          fb.innerHTML = "";
        }
        act.classList.remove("pulse");
        showSolution(card, e, "Lời giải từng bước");
        card.querySelector(".sol-slot").scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
    root.addEventListener("focusin", (ev) => {
      if (ev.target.matches("input[data-f]")) ev.target.closest(".ex")._lastInput = ev.target;
    });
    root.addEventListener("keydown", (ev) => {
      if (ev.key === "Enter" && ev.target.matches("input[data-f]")) {
        const card = ev.target.closest(".ex");
        onCheck(card, currentList()[+card.dataset.idx]);
      }
    });
    root.addEventListener("input", (ev) => {
      if (ev.target.matches("input[data-f]")) ev.target.closest(".field").classList.remove("bad", "good");
    });
  }

  function updateProgress() {
    const r = parseRoute();
    const u = order.find((x) => x.type === r.type && x.id === r.id);
    if (!u) return;
    const s = unitStats(u);
    const bar = app.querySelector(".ex-progress .bar i");
    if (bar) bar.style.width = `${s.total ? (s.done / s.total) * 100 : 0}%`;
    const txt = app.querySelector(".ex-progress .txt");
    if (txt) txt.textContent = `${s.done}/${s.total} bài`;
    const cnt = app.querySelector(".subnav .cnt");
    if (cnt) cnt.textContent = `${s.done}/${s.total}`;
    if (s.done === s.total && s.total && !app.dataset.celebrated) {
      app.dataset.celebrated = "1";
      toast(`Hoàn thành ${s.total}/${s.total} bài tập. Giỏi lắm!`);
    }
  }

  function exercisesSection(u, list, step) {
    const s = unitStats(u);
    return `<section class="section" id="s-ex">
      <h2><span class="step">${step}</span>Bài tập tự luyện</h2>
      <div class="ex-progress"><span class="txt">${s.done}/${s.total} bài</span><span class="bar"><i style="width:${s.total ? (s.done / s.total) * 100 : 0}%"></i></span></div>
      ${list.map((e, i) => exerciseHtml(e, exId(u, i), i)).join("")}
    </section>`;
  }

  function restoreSolved(u, list) {
    list.forEach((e, i) => {
      const st = store.get(exId(u, i));
      if (!st) return;
      const card = app.querySelector(`#ex-${exId(u, i)}`);
      if (!card) return;
      fillAnswer(card, e);
      showSolution(card, e, st === "ok" ? "Giải thích" : "Lời giải từng bước");
    });
  }

  function pager(u) {
    const i = order.indexOf(u);
    const prev = order[i - 1], next = order[i + 1];
    return `<div class="pager">
      ${prev ? `<a href="${unitHref(prev)}"><small>← Bài trước</small>${unitTitle(prev)}</a>` : ""}
      ${next ? `<a class="next" href="${unitHref(next)}"><small>Bài tiếp theo →</small>${unitTitle(next)}</a>` : ""}
    </div>`;
  }

  /* ---------------- trang bài học ---------------- */
  function renderLesson(id) {
    setNav("home");
    const L = C.lessons[id];
    const u = order.find((x) => x.type === "bai" && x.id === id);
    if (!L || !u) return renderNotFound();
    const ch = u.ch;
    const list = L.exercises || [];
    let step = 0;

    const theory = (L.theory || []).map((t) => `<div class="theory"><h3>${t.h}</h3>${t.body || ""}${figHtml(t.fig, t.cap)}${t.key ? `<div class="key">${t.key}</div>` : ""}${t.tip ? `<div class="tip">${t.tip}</div>` : ""}</div>`).join("");
    const mistakes = L.mistakes && L.mistakes.length ? `<div class="mistakes"><h3>Lỗi hay gặp</h3><ul>${L.mistakes.map((x) => `<li>${x}</li>`).join("")}</ul></div>` : "";
    const examples = (L.examples || []).map((x, i) => `<div class="example" data-ex="${i}">
        <div class="ex-top"><span class="tag">Ví dụ ${i + 1}</span><div>${x.q}</div>${figHtml(x.fig)}</div>
        <ol class="steps"></ol>
        <div class="ctrl"><button type="button" class="btn small primary" data-step="next">Xem bước 1</button><button type="button" class="btn small ghost" data-step="all">Hiện hết lời giải</button></div>
      </div>`).join("");

    app.innerHTML = `<div class="page lesson" style="--c:${ch.color}">
      <a class="back" href="#/">← Tất cả bài học</a>
      <header class="lesson-head">
        <p class="kicker">${ch.code} · ${ch.title}</p>
        <h1><span class="lnum">${L.label}.</span> ${L.title}</h1>
        ${L.pages ? `<p class="pages">Tương ứng SGK Toán 7 tập một, trang ${L.pages}</p>` : ""}
        ${L.intro ? `<p class="lead">${L.intro}</p>` : ""}
        ${L.goals ? `<div class="goals"><b>Học xong bài này bạn sẽ</b><ul>${L.goals.map((g) => `<li>${g}</li>`).join("")}</ul></div>` : ""}
      </header>
      <nav class="subnav" aria-label="Mục trong bài">
        ${theory ? '<button type="button" data-jump="s-theory">Hiểu nhanh</button>' : ""}
        ${examples ? '<button type="button" data-jump="s-examples">Ví dụ mẫu</button>' : ""}
        ${list.length ? `<button type="button" data-jump="s-ex">Bài tập <span class="cnt">${unitStats(u).done}/${list.length}</span></button>` : ""}
      </nav>
      ${theory ? `<section class="section" id="s-theory"><h2><span class="step">${++step}</span>Hiểu nhanh</h2>${theory}${mistakes}</section>` : ""}
      ${examples ? `<section class="section" id="s-examples"><h2><span class="step">${++step}</span>Ví dụ mẫu</h2>${examples}</section>` : ""}
      ${list.length ? exercisesSection(u, list, ++step) : ""}
      <div class="lesson-end"><h3>Tóm lại</h3>${L.summary ? `<p>${L.summary}</p>` : "<p>Làm lại những bài bạn phải xem lời giải sau một, hai ngày — đó là cách nhớ lâu nhất.</p>"}</div>
      ${pager(u)}
    </div>`;

    bindLessonExtras(L);
    restoreSolved(u, list);
    typeset(app);
  }

  function bindLessonExtras(L) {
    app.querySelectorAll("[data-jump]").forEach((b) => b.addEventListener("click", () => {
      document.getElementById(b.dataset.jump).scrollIntoView({ behavior: "smooth", block: "start" });
    }));
    app.querySelectorAll(".example").forEach((box) => {
      const x = L.examples[+box.dataset.ex];
      const ol = box.querySelector(".steps");
      const nextBtn = box.querySelector('[data-step="next"]');
      const allBtn = box.querySelector('[data-step="all"]');
      const steps = x.steps.concat(x.ans ? [`<b>Kết luận:</b> ${x.ans}`] : []);
      const add = (i) => {
        const li = document.createElement("li");
        li.innerHTML = steps[i];
        if (x.ans && i === steps.length - 1) li.className = "final";
        ol.appendChild(li);
        typeset(li);
      };
      const refresh = () => {
        const n = ol.children.length;
        if (n >= steps.length) { nextBtn.remove(); allBtn.remove(); box.querySelector(".ctrl").remove(); return; }
        nextBtn.textContent = `Xem bước ${n + 1}/${steps.length}`;
      };
      nextBtn.addEventListener("click", () => { add(ol.children.length); refresh(); });
      allBtn.addEventListener("click", () => { for (let i = ol.children.length; i < steps.length; i++) add(i); refresh(); });
      refresh();
    });
  }

  /* ---------------- ôn tập chương ---------------- */
  function renderReview(chId) {
    setNav("home");
    const R = C.reviews[chId];
    const u = order.find((x) => x.type === "on-tap" && x.id === chId);
    if (!R || !u) return renderNotFound();
    const ch = u.ch;
    app.innerHTML = `<div class="page lesson" style="--c:${ch.color}">
      <a class="back" href="#/">← Tất cả bài học</a>
      <header class="lesson-head">
        <p class="kicker">${ch.code} · ${ch.title}</p>
        <h1><span class="lnum">Ôn tập.</span> ${ch.title}</h1>
        ${R.pages ? `<p class="pages">Tương ứng phần Luyện tập chung và Bài tập cuối chương, SGK trang ${R.pages}</p>` : ""}
        <p class="lead">${R.intro || "Bài tập trộn lẫn các bài trong chương. Nếu một câu làm bạn bí, hãy quay lại bài học tương ứng."}</p>
        ${R.recap ? `<div class="goals"><b>Nhắc lại nhanh</b><ul>${R.recap.map((g) => `<li>${g}</li>`).join("")}</ul></div>` : ""}
      </header>
      ${exercisesSection(u, R.exercises, 1)}
      <div class="lesson-end"><h3>Xong chương!</h3><p>Nếu bạn phải xem lời giải từ 3 câu trở lên, hãy mở lại phần “Hiểu nhanh” của các bài trong chương rồi làm lại vào hôm sau.</p></div>
      ${pager(u)}
    </div>`;
    restoreSolved(u, R.exercises);
    typeset(app);
  }

  /* ---------------- thuật ngữ ---------------- */
  function renderTerms() {
    setNav("terms");
    const items = C.glossary.slice().sort((a, b) => a.term.localeCompare(b.term, "vi"));
    app.innerHTML = `<div class="page">
      <header class="lesson-head">
        <p class="kicker" style="--c:#1f5f5b">Bảng thuật ngữ · SGK trang 118–119</p>
        <h1>Tra cứu thuật ngữ</h1>
        <p class="lead">Quên nghĩa một từ? Gõ vào ô tìm kiếm. Bấm vào tên bài để mở lại bài học có từ đó.</p>
      </header>
      <input class="search" type="search" placeholder="Tìm: tam giác cân, số vô tỉ, chu kì..." aria-label="Tìm thuật ngữ">
      <ul class="terms">${items.map((t) => {
        const L = t.lesson && C.lessons[t.lesson];
        return `<li data-k="${(t.term + " " + t.def).toLowerCase()}"><div class="term">${t.term}</div><div class="def">${t.def}</div>${L ? `<div class="where"><a href="#/bai/${t.lesson}">${L.label}. ${L.title}</a> · SGK trang ${t.page}</div>` : ""}</li>`;
      }).join("")}</ul>
    </div>`;
    const input = app.querySelector(".search");
    const strip = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d");
    input.addEventListener("input", () => {
      const q = strip(input.value.trim().toLowerCase());
      app.querySelectorAll(".terms li").forEach((li) => { li.hidden = q && !strip(li.dataset.k).includes(q); });
    });
    typeset(app);
  }

  function renderNotFound() {
    app.innerHTML = `<div class="page"><h1>Không tìm thấy trang</h1><p class="lead">Có thể đường dẫn đã cũ.</p><a class="btn" href="#/">Về danh sách bài học</a></div>`;
  }

  /* ---------------- đăng nhập & phiên ---------------- */
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const lastWord = (name) => String(name || "").trim().split(/\s+/).pop() || "";

  function saveSession() {
    try {
      localStorage.setItem(SESSION_KEY, JSON.stringify({ token: session.token, name: session.name }));
      localStorage.setItem("ontoan7:lastName", session.name);
    } catch (err) { /* chế độ riêng tư: vẫn học được, chỉ phải đăng nhập lại */ }
  }

  function clearSession() {
    session.token = null;
    session.ready = false;
    session.progress = null;
    store.data = { ex: {} };
    store.pending = {};
    store.guide = false;
    clearTimeout(store.timer);
    try { localStorage.removeItem(SESSION_KEY); } catch (err) { /* bỏ qua */ }
  }

  function expireSession() {
    clearSession();
    showGate("Phiên đăng nhập đã hết hạn, bạn đăng nhập lại nhé.");
  }

  function showGate(msg) {
    session.ready = false;
    document.body.classList.add("gated");
    renderUser();
    setNav("");
    document.title = "Đăng nhập – Ôn Toán 7";
    let lastName = "";
    try { lastName = localStorage.getItem("ontoan7:lastName") || ""; } catch (err) { /* bỏ qua */ }
    app.innerHTML = `<div class="gate">
      <div class="gate-card">
        <p class="kicker">Lớp ôn Toán 7 · Tập một</p>
        <h1>Chào bạn, mình vào học nhé.</h1>
        <p class="lead">Nhập mật khẩu lớp và họ tên của bạn. Tiến độ được lưu theo tên, nên lần sau hãy nhập <b>đúng tên này</b> để học tiếp.</p>
        <form class="gate-form" novalidate>
          <label class="g-field"><span>Mật khẩu lớp</span>
            <span class="pw"><input name="password" type="password" autocomplete="current-password" autocapitalize="characters" autocorrect="off" spellcheck="false" placeholder="Do giáo viên cung cấp"><button type="button" class="pw-eye" aria-label="Hiện mật khẩu">Hiện</button></span>
          </label>
          <label class="g-field"><span>Họ và tên người học</span>
            <input name="learner" type="text" autocomplete="name" maxlength="40" placeholder="Ví dụ: Nguyễn Văn An" value="${esc(lastName)}">
          </label>
          <p class="gate-err" role="alert">${esc(msg || "")}</p>
          <button class="btn primary" type="submit">Vào học</button>
        </form>
      </div>
      <p class="gate-foot">Website được tạo bởi <b>Nguyễn Phú Quốc</b></p>
    </div>`;
    const form = app.querySelector(".gate-form");
    const pw = form.querySelector('[name="password"]');
    const learner = form.querySelector('[name="learner"]');
    const errBox = form.querySelector(".gate-err");
    const submit = form.querySelector('[type="submit"]');
    const eye = form.querySelector(".pw-eye");
    eye.addEventListener("click", () => {
      const show = pw.type === "password";
      pw.type = show ? "text" : "password";
      eye.textContent = show ? "Ẩn" : "Hiện";
      eye.setAttribute("aria-label", show ? "Ẩn mật khẩu" : "Hiện mật khẩu");
    });
    form.addEventListener("submit", async (ev) => {
      ev.preventDefault();
      const password = pw.value.trim();
      const name = learner.value.replace(/\s+/g, " ").trim();
      const fail = (m, el) => { errBox.textContent = m; if (el) el.focus(); };
      if (!password) return fail("Bạn chưa nhập mật khẩu lớp.", pw);
      if (name.length < 2) return fail("Hãy nhập họ tên người học.", learner);
      submit.disabled = true;
      submit.textContent = "Đang vào…";
      errBox.textContent = "";
      try {
        const d = await api("/api/login", { method: "POST", body: { password, name } });
        session.token = d.token;
        start(d);
      } catch (err) {
        fail(err.message, err.status === 401 ? pw : null);
        submit.disabled = false;
        submit.textContent = "Vào học";
      }
    });
    pw.focus({ preventScroll: true });
  }

  function start(d) {
    session.name = d.name;
    session.progress = d.progress || { ex: {} };
    store.data = { ex: { ...(session.progress.ex || {}) } };
    store.pending = {};
    store.guide = false;
    session.ready = true;
    saveSession();
    document.body.classList.remove("gated");
    renderUser();
    setSaveState("saved");
    route();
    if (!session.progress.seenGuide) openGuide(true);
  }

  async function boot() {
    let saved = null;
    try { saved = JSON.parse(localStorage.getItem(SESSION_KEY)); } catch (err) { /* bỏ qua */ }
    if (!saved || !saved.token) return showGate();
    session.token = saved.token;
    session.name = saved.name || "";
    document.body.classList.add("gated");
    app.innerHTML = `<div class="gate"><p class="loading">Đang mở tiến độ học của ${esc(session.name) || "bạn"}…</p></div>`;
    try {
      start(await api("/api/progress"));
    } catch (err) {
      if (err.status === 401) return expireSession();
      app.innerHTML = `<div class="gate"><div class="gate-card">
        <h1>Chưa kết nối được</h1>
        <p class="lead">${esc(err.message)}</p>
        <div class="hero-actions"><button type="button" class="btn primary" data-retry>Thử lại</button><button type="button" class="btn ghost" data-other>Đăng nhập tên khác</button></div>
      </div></div>`;
      app.querySelector("[data-retry]").addEventListener("click", boot);
      app.querySelector("[data-other]").addEventListener("click", () => { clearSession(); showGate(); });
    }
  }

  async function logout() {
    closeMenu();
    await store.flush();
    clearSession();
    if (location.hash && location.hash !== "#/") history.replaceState(null, "", "#/");
    showGate();
  }

  /* ---------------- menu người dùng ---------------- */
  const userBox = document.getElementById("user");

  function renderUser() {
    if (!session.ready) { userBox.hidden = true; userBox.innerHTML = ""; return; }
    userBox.hidden = false;
    const first = lastWord(session.name);
    userBox.innerHTML = `<button type="button" class="user-btn" aria-haspopup="true" aria-expanded="false" aria-label="Tài khoản: ${esc(session.name)}">
        <span class="av">${esc(first.charAt(0).toUpperCase())}</span><span class="nm">${esc(first)}</span><i class="save-dot" aria-hidden="true"></i>
      </button>
      <div class="user-menu" hidden>
        <p class="um-name">${esc(session.name)}<small class="save-txt">Đã lưu lên máy chủ</small></p>
        <button type="button" data-menu="guide">Hướng dẫn sử dụng</button>
        <button type="button" data-menu="download">Tải file tiến độ (.json)</button>
        <button type="button" data-menu="logout" class="danger">Đăng xuất</button>
      </div>`;
  }

  function closeMenu() {
    const menu = userBox.querySelector(".user-menu");
    if (!menu || menu.hidden) return;
    menu.hidden = true;
    userBox.querySelector(".user-btn").setAttribute("aria-expanded", "false");
  }

  userBox.addEventListener("click", (ev) => {
    const btn = ev.target.closest(".user-btn");
    if (btn) {
      const menu = userBox.querySelector(".user-menu");
      menu.hidden = !menu.hidden;
      btn.setAttribute("aria-expanded", String(!menu.hidden));
      return;
    }
    const item = ev.target.closest("[data-menu]");
    if (!item) return;
    closeMenu();
    if (item.dataset.menu === "guide") openGuide(false);
    if (item.dataset.menu === "download") downloadProgress();
    if (item.dataset.menu === "logout") logout();
  });
  document.addEventListener("click", (ev) => { if (!userBox.contains(ev.target)) closeMenu(); });
  document.addEventListener("keydown", (ev) => { if (ev.key === "Escape") closeMenu(); });

  let saveErrorShown = false;
  function setSaveState(st) {
    const dot = userBox.querySelector(".save-dot");
    const txt = userBox.querySelector(".save-txt");
    if (!dot) return;
    dot.className = `save-dot ${st}`;
    txt.textContent = st === "saving" ? "Đang lưu…" : st === "error" ? "Chưa lưu được – đang thử lại" : "Đã lưu lên máy chủ";
    if (st === "error" && !saveErrorShown) { saveErrorShown = true; toast("Mạng chập chờn, tiến độ sẽ được lưu lại khi có mạng."); }
    if (st === "saved") saveErrorShown = false;
  }

  function downloadProgress() {
    let total = 0, ok = 0, shown = 0;
    order.forEach((u) => exercisesOf(u).forEach((_, i) => {
      total++;
      const st = store.get(exId(u, i));
      if (st === "ok") ok++;
      if (st === "shown") shown++;
    }));
    const data = {
      ...session.progress,
      name: session.name,
      ex: store.data.ex,
      summary: { total, done: ok + shown, solvedAlone: ok, viewedSolution: shown },
      exportedAt: new Date().toISOString()
    };
    const slug = (session.progress && session.progress.key) || "nguoi-hoc";
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }));
    a.download = `tien-do-${slug}.json`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }

  /* ---------------- bảng hướng dẫn ---------------- */
  function guideHtml(first) {
    const row = (demo, text) => `<li><div class="g-demo">${demo}</div><div class="g-txt">${text}</div></li>`;
    const pill = (t) => `<span class="demo-pill">${t}</span>`;
    const btn = (t, cls = "") => `<span class="btn small demo ${cls}">${t}</span>`;
    return `<div class="guide-in">
      <button type="button" class="guide-x" data-close aria-label="Đóng">×</button>
      <p class="kicker">${first ? `Chào ${esc(lastWord(session.name))}!` : "Hướng dẫn sử dụng"}</p>
      <h2>Ôn Toán 7 dùng như thế nào?</h2>

      <section class="g-about">
        <p>Website được tạo bởi <b>Nguyễn Phú Quốc</b>, dành cho người mất gốc và học viên bổ túc muốn học lại Toán 7 tập một (bộ Kết nối tri thức). Mỗi bài được giảng lại bằng lời thường, chia nhỏ từng bước, kèm ví dụ mẫu và bài tập tự luyện có gợi ý, lời giải chi tiết. Bạn cứ học chậm, sai thì làm lại — không ai chấm điểm cả.</p>
        <p class="g-ai">Website có tích hợp model AI <b>Goslynk N7</b> của <a href="https://goslynk.com" target="_blank" rel="noopener">Goslynk.com</a>.</p>
      </section>

      <h3>Trên thanh đầu trang</h3>
      <ul class="g-list">
        ${row(pill("Bài học"), "Về danh sách tất cả các bài. Mỗi bài có thanh nhỏ cho biết bạn đã làm được bao nhiêu bài tập.")}
        ${row(pill("Thuật ngữ"), "Tra nghĩa các từ Toán học (số vô tỉ, tam giác cân…) và mở lại bài có từ đó.")}
        ${row(`<span class="demo-user"><span class="av">${esc(lastWord(session.name).charAt(0).toUpperCase())}</span><i class="save-dot saved"></i></span>`, "Nút có chữ cái đầu tên bạn: mở lại bảng hướng dẫn này, tải file tiến độ (.json) hoặc đăng xuất. Chấm xanh nghĩa là tiến độ đã lưu lên máy chủ.")}
      </ul>

      <h3>Trong mỗi bài học</h3>
      <ul class="g-list">
        ${row(`${pill("Hiểu nhanh")} ${pill("Ví dụ mẫu")} ${pill("Bài tập 0/6")}`, "Bấm để nhảy nhanh tới phần đó. <b>Hiểu nhanh</b> là lý thuyết ngắn gọn, ô vàng <b>Ghi nhớ</b> là phần cần thuộc.")}
        ${row(`${btn("Xem bước 1/3", "primary")} ${btn("Hiện hết lời giải", "ghost")}`, "Ở ví dụ mẫu: xem lời giải từng bước một (nên tự nghĩ trước khi bấm), hoặc hiện luôn cả bài.")}
        ${row(`<span class="demo-field">3/4</span> ${btn("Kiểm tra", "primary")}`, "Gõ đáp số vào ô rồi bấm <b>Kiểm tra</b> (hoặc phím Enter). Đúng thì phần <b>Giải thích</b> hiện ra để bạn hiểu vì sao đúng.")}
        ${row(`<span class="demo-key">−</span><span class="demo-key">/</span><span class="demo-key">,</span>`, "Phím nhanh: dấu âm, dấu phân số và dấu phẩy thập phân — tiện khi bàn phím điện thoại không có sẵn.")}
        ${row(`<span class="demo-choice"><span class="letter">A</span>Đáp án</span>`, "Câu trắc nghiệm: bấm thẳng vào đáp án. Chọn sai sẽ có lời nhắc vì sao sai, bạn chọn lại được.")}
        ${row(btn("Gợi ý", "ghost"), "Mách nước bước đầu tiên, chưa lộ đáp án. Nên bấm cái này trước khi xem lời giải.")}
        ${row(btn("Giải giúp tôi"), "Điền sẵn đáp án và hiện <b>lời giải từng bước</b>. Sai hai lần nút này sẽ nhún nhẹ để nhắc bạn.")}
        ${row(`<span class="demo-state ok">Đã giải đúng</span><span class="demo-state shown">Đã xem lời giải</span>`, "Trạng thái của từng bài tập. Bài “Đã xem lời giải” nên làm lại sau một, hai hôm.")}
        ${row(`${pill("← Bài trước")} ${pill("Bài tiếp theo →")}`, "Ở cuối trang, chuyển sang bài kế tiếp theo đúng thứ tự sách giáo khoa.")}
      </ul>

      <div class="tip">Tiến độ tự lưu lên máy chủ thành file riêng theo tên của bạn. Đổi máy hay đổi điện thoại vẫn học tiếp được — chỉ cần nhập đúng mật khẩu lớp và đúng họ tên đã dùng.</div>
      <div class="guide-foot"><button type="button" class="btn primary" data-close>${first ? "Đã hiểu, bắt đầu học" : "Đóng"}</button></div>
    </div>`;
  }

  function openGuide(first) {
    document.querySelectorAll("dialog.guide").forEach((d) => d.remove());
    const dlg = document.createElement("dialog");
    dlg.className = "guide";
    dlg.setAttribute("aria-label", "Hướng dẫn sử dụng");
    dlg.innerHTML = guideHtml(first);
    document.body.appendChild(dlg);
    const close = () => (dlg.open && dlg.close ? dlg.close() : finish());
    const finish = () => {
      if (first) store.markGuide();
      dlg.remove();
      document.body.classList.remove("modal-open");
    };
    dlg.addEventListener("close", finish);
    dlg.addEventListener("click", (ev) => { if (ev.target === dlg || ev.target.closest("[data-close]")) close(); });
    document.body.classList.add("modal-open");
    if (dlg.showModal) dlg.showModal();
    else dlg.setAttribute("open", "");
    dlg.querySelector(".guide-x").focus({ preventScroll: true });
    dlg.scrollTop = 0;
  }

  /* ---------------- router ---------------- */
  function parseRoute() {
    const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    return { type: parts[0] || "home", id: parts[1] };
  }

  function route() {
    if (!session.ready) return;
    closeMenu();
    const r = parseRoute();
    delete app.dataset.celebrated;
    if (r.type === "bai") renderLesson(r.id);
    else if (r.type === "on-tap") renderReview(r.id);
    else if (r.type === "thuat-ngu") renderTerms();
    else renderHome();
    window.scrollTo(0, 0);
    const title = r.type === "bai" && C.lessons[r.id] ? `${C.lessons[r.id].label}. ${C.lessons[r.id].title}` : r.type === "on-tap" ? "Ôn tập chương" : r.type === "thuat-ngu" ? "Thuật ngữ" : "";
    document.title = title ? `${title} – Ôn Toán 7` : "Ôn Toán 7 – Học lại từ gốc";
  }

  bindExercises(app);
  window.addEventListener("hashchange", route);
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") store.flush(true); });
  window.addEventListener("pagehide", () => store.flush(true));
  boot();
})();
