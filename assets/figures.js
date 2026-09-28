(function () {
  const INK = "#1c2430";
  const ACC = "#d9822b";
  const BRAND = "#1f5f5b";
  const PALETTE = ["#2b7489", "#d9822b", "#c0513a", "#6f8f2a", "#9a4a86", "#a87a1f", "#5a5f9e"];
  const r2 = (n) => Math.round(n * 100) / 100;
  const rad = (d) => (d * Math.PI) / 180;
  const fmt = (v) => String(v).replace(".", ",").replace(/^-/, "−");

  const F = {};

  F.svg = (w, h, inner, label) =>
    `<svg class="fig-svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label || "Hình minh hoạ"}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

  F.text = (x, y, s, cls = "t", anchor = "middle") =>
    `<text x="${r2(x)}" y="${r2(y)}" class="${cls}" text-anchor="${anchor}" dominant-baseline="middle">${s}</text>`;

  F.line = (a, b, opt = {}) =>
    `<line x1="${r2(a[0])}" y1="${r2(a[1])}" x2="${r2(b[0])}" y2="${r2(b[1])}" stroke="${opt.color || INK}" stroke-width="${opt.w || 1.6}" ${opt.dash ? `stroke-dasharray="${opt.dash}"` : ""} stroke-linecap="round"/>`;

  F.dot = (p, color = INK, r = 3.2) => `<circle cx="${r2(p[0])}" cy="${r2(p[1])}" r="${r}" fill="${color}"/>`;

  /** Trục số. points: [{v, label, color}] ; div: số phần chia mỗi đơn vị ; labels: [{v, text}] nhãn thêm phía dưới */
  F.numberLine = ({ min = -2, max = 2, div = 1, points = [], labels = [], w = 360 } = {}) => {
    const pad = 26, y = 38, h = 78;
    const x = (v) => pad + ((v - min) / (max - min)) * (w - 2 * pad);
    let s = F.line([pad - 14, y], [w - pad + 16, y], { w: 1.7 });
    s += `<path d="M${w - pad + 18} ${y} l-9 -4.5 v9z" fill="${INK}"/>`;
    const n = Math.round((max - min) * div);
    for (let i = 0; i <= n; i++) {
      const v = min + i / div;
      const isInt = Math.abs(v - Math.round(v)) < 1e-9;
      s += F.line([x(v), y - (isInt ? 7 : 4.5)], [x(v), y + (isInt ? 7 : 4.5)], { w: isInt ? 1.7 : 1.1 });
      if (isInt) s += F.text(x(v), y + 22, fmt(Math.round(v)));
    }
    labels.forEach((l) => (s += F.text(x(l.v), y + 22, l.text, "t acc")));
    points.forEach((p) => {
      s += `<circle cx="${r2(x(p.v))}" cy="${y}" r="5.5" fill="${p.color || ACC}" stroke="#fff" stroke-width="1.5"/>`;
      s += F.text(x(p.v), y - 17, p.label, "t b");
    });
    return F.svg(w, h, s, "Trục số");
  };

  const pt = (O, deg, len) => [O[0] + len * Math.cos(rad(deg)), O[1] - len * Math.sin(rad(deg))];
  const arcPath = (O, a, b, r) => {
    const p1 = pt(O, a, r), p2 = pt(O, b, r);
    const large = ((b - a + 360) % 360) > 180 ? 1 : 0;
    return `M${r2(p1[0])} ${r2(p1[1])} A${r} ${r} 0 ${large} 0 ${r2(p2[0])} ${r2(p2[1])}`;
  };

  /** Các tia chung gốc O. rays: [{deg, label, len}] ; arcs: [{from, to, text, r, color, double}] */
  F.rays = ({ w = 340, h = 200, O = [170, 120], rays = [], arcs = [], Olabel = "O", Opos = [0, 16] } = {}) => {
    let s = "";
    arcs.forEach((a) => {
      const r = a.r || 26;
      const c = a.color || ACC;
      s += `<path d="${arcPath(O, a.from, a.to, r)}" fill="none" stroke="${c}" stroke-width="2"/>`;
      if (a.double) s += `<path d="${arcPath(O, a.from, a.to, r + 5)}" fill="none" stroke="${c}" stroke-width="2"/>`;
      if (a.text) {
        const mid = a.from + (((a.to - a.from + 360) % 360) / 2);
        const p = pt(O, mid, r + (a.tr || 17));
        s += F.text(p[0], p[1], a.text, "t acc");
      }
    });
    rays.forEach((r) => {
      const end = pt(O, r.deg, r.len || 120);
      s += F.line(O, end, { w: 1.8, color: r.color });
      if (r.label) {
        const lp = pt(O, r.deg, (r.len || 120) + 13);
        s += F.text(lp[0], lp[1], r.label, "t b");
      }
    });
    s += F.dot(O, INK, 3.4);
    if (Olabel) s += F.text(O[0] + Opos[0], O[1] + Opos[1], Olabel, "t b");
    return F.svg(w, h, s, "Hình vẽ góc");
  };

  /** Đường thẳng c cắt hai đường thẳng a, b tại A, B. vals: {A1:'60°', B2:'?'} */
  F.transversal = ({ nums = true, vals = {}, parallel = false, names = ["a", "b", "c"], w = 340, h = 230 } = {}) => {
    const yA = 78, yB = 168;
    const A = [196, yA], B = [148, yB];
    const dx = A[0] - B[0], dy = B[1] - A[1];
    const L = Math.hypot(dx, dy);
    const t1 = [A[0] + (dx / L) * 62, A[1] - (dy / L) * 62];
    const t2 = [B[0] - (dx / L) * 62, B[1] + (dy / L) * 62];
    let s = "";
    s += F.line([22, yA], [w - 22, yA], { w: 1.8 });
    s += F.line([22, yB], [w - 22, yB], { w: 1.8 });
    s += F.line(t1, t2, { w: 1.8, color: BRAND });
    if (parallel) {
      [yA, yB].forEach((y) => (s += `<path d="M${w - 70} ${y - 5} l7 5 l-7 5" fill="none" stroke="${INK}" stroke-width="1.6"/>`));
    }
    s += F.text(w - 14, yA - 12, names[0], "t b");
    s += F.text(w - 14, yB - 12, names[1], "t b");
    s += F.text(t1[0] + 12, t1[1] + 2, names[2], "t b");
    s += F.dot(A) + F.dot(B);
    s += F.text(A[0] - 42, A[1] - 11, "A", "t b");
    s += F.text(B[0] + 42, B[1] + 12, "B", "t b");
    // Đánh số góc ngược chiều kim đồng hồ, bắt đầu từ góc phía trên bên phải.
    const up = (Math.atan2(dy, dx) * 180) / Math.PI;
    const bis = { 1: up / 2, 2: (up + 180) / 2, 3: (up + 360) / 2, 4: (up + 540) / 2 };
    const put = (P, name) => {
      [1, 2, 3, 4].forEach((k) => {
        const key = name + k;
        const label = vals[key] != null ? vals[key] : nums ? String(k) : "";
        if (!label) return;
        const rr = vals[key] != null ? 30 : 20;
        const p = pt(P, bis[k], rr);
        s += F.text(p[0], p[1], label, vals[key] != null ? "t acc" : "t s");
      });
    };
    put(A, "A");
    put(B, "B");
    return F.svg(w, h, s, "Đường thẳng c cắt hai đường thẳng a và b");
  };

  /** Tam giác. P: {A:[x,y],...}; names: nhãn; ticks: {AB:1}; arcs: {A:1}; angles: {A:'50°'}; right: 'A' */
  F.tri = ({ P, names = {}, ticks = {}, arcs = {}, angles = {}, right = null, extra = "" }) => {
    const keys = Object.keys(P);
    const G = [0, 1].map((i) => keys.reduce((a, k) => a + P[k][i], 0) / keys.length);
    let s = `<path d="M${keys.map((k) => P[k].map(r2).join(" ")).join(" L")} Z" fill="rgba(31,95,91,.05)" stroke="${INK}" stroke-width="1.8" stroke-linejoin="round"/>`;
    const unit = (a, b) => { const d = Math.hypot(b[0] - a[0], b[1] - a[1]); return [(b[0] - a[0]) / d, (b[1] - a[1]) / d]; };
    Object.entries(ticks).forEach(([side, n]) => {
      const a = P[side[0]], b = P[side[1]];
      const u = unit(a, b), nrm = [-u[1], u[0]];
      const mid = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
      for (let i = 0; i < n; i++) {
        const off = (i - (n - 1) / 2) * 5;
        const c = [mid[0] + u[0] * off, mid[1] + u[1] * off];
        s += F.line([c[0] - nrm[0] * 6, c[1] - nrm[1] * 6], [c[0] + nrm[0] * 6, c[1] + nrm[1] * 6], { w: 1.6, color: ACC });
      }
    });
    keys.forEach((k, i) => {
      const V = P[k];
      const others = keys.filter((x) => x !== k);
      const u1 = unit(V, P[others[0]]), u2 = unit(V, P[others[1]]);
      if (right === k) {
        const a = [V[0] + u1[0] * 11, V[1] + u1[1] * 11], b = [V[0] + u2[0] * 11, V[1] + u2[1] * 11];
        const c = [V[0] + (u1[0] + u2[0]) * 11, V[1] + (u1[1] + u2[1]) * 11];
        s += `<path d="M${r2(a[0])} ${r2(a[1])} L${r2(c[0])} ${r2(c[1])} L${r2(b[0])} ${r2(b[1])}" fill="none" stroke="${INK}" stroke-width="1.3"/>`;
      }
      const n = arcs[k] || 0;
      for (let j = 0; j < n; j++) {
        const r = 17 + j * 4.5;
        const a = [V[0] + u1[0] * r, V[1] + u1[1] * r], b = [V[0] + u2[0] * r, V[1] + u2[1] * r];
        const cross = u1[0] * u2[1] - u1[1] * u2[0];
        s += `<path d="M${r2(a[0])} ${r2(a[1])} A${r} ${r} 0 0 ${cross > 0 ? 1 : 0} ${r2(b[0])} ${r2(b[1])}" fill="none" stroke="${ACC}" stroke-width="1.8"/>`;
      }
      if (angles[k]) {
        const bi = [u1[0] + u2[0], u1[1] + u2[1]], bl = Math.hypot(bi[0], bi[1]) || 1;
        s += F.text(V[0] + (bi[0] / bl) * 36, V[1] + (bi[1] / bl) * 36, angles[k], "t acc");
      }
      const d = [V[0] - G[0], V[1] - G[1]], dl = Math.hypot(d[0], d[1]);
      const name = names[k] != null ? names[k] : k;
      if (name) s += F.text(V[0] + (d[0] / dl) * 14, V[1] + (d[1] / dl) * 14, name, "t b");
      void i;
    });
    return s + extra;
  };

  /** Biểu đồ hình quạt tròn. data: [{label, value}] (value tính theo %) */
  F.pie = ({ data, title = "", w = 360 }) => {
    const cx = 92, cy = title ? 118 : 96, R = 78;
    const h = Math.max(cy + R + 16, (title ? 44 : 20) + data.length * 26 + 10);
    let s = title ? F.text(w / 2, 16, title, "t ttl") : "";
    let a0 = 90;
    const total = data.reduce((a, d) => a + d.value, 0);
    data.forEach((d, i) => {
      const sweep = (d.value / total) * 360;
      const a1 = a0 - sweep;
      const p0 = pt([cx, cy], a0, R), p1 = pt([cx, cy], a1, R);
      const large = sweep > 180 ? 1 : 0;
      const color = d.color || PALETTE[i % PALETTE.length];
      if (sweep >= 359.9) s += `<circle cx="${cx}" cy="${cy}" r="${R}" fill="${color}"/>`;
      else s += `<path d="M${cx} ${cy} L${r2(p0[0])} ${r2(p0[1])} A${R} ${R} 0 ${large} 1 ${r2(p1[0])} ${r2(p1[1])} Z" fill="${color}" stroke="#fff" stroke-width="2"/>`;
      if (d.show !== false && sweep > 16) {
        const pm = pt([cx, cy], (a0 + a1) / 2, R * 0.62);
        s += F.text(pm[0], pm[1], d.text || fmt(d.value) + "%", "t w");
      }
      const ly = (title ? 44 : 22) + i * 26;
      s += `<rect x="${cx + R + 22}" y="${ly - 7}" width="14" height="14" rx="3" fill="${color}"/>`;
      s += F.text(cx + R + 44, ly, d.label, "t", "start");
      a0 = a1;
    });
    return F.svg(w, h, s, title || "Biểu đồ hình quạt tròn");
  };

  /** Biểu đồ đoạn thẳng. xs: nhãn trục ngang, ys: giá trị */
  F.lineChart = ({ xs, ys, yMin = 0, yMax, yStep, title = "", yLabel = "", xLabel = "", w = 360, h = 250, color = "#c0513a" }) => {
    const L = 46, R = 16, T = title ? 40 : 18, B = 44;
    const X = (i) => L + 14 + (i * (w - L - R - 28)) / (xs.length - 1);
    const Y = (v) => T + ((yMax - v) / (yMax - yMin)) * (h - T - B);
    let s = title ? F.text(w / 2, 16, title, "t ttl") : "";
    for (let v = yMin; v <= yMax + 1e-9; v += yStep) {
      s += F.line([L, Y(v)], [w - R, Y(v)], { color: "#e4dccb", w: 1 });
      s += F.text(L - 8, Y(v), fmt(r2(v)), "t s", "end");
    }
    s += F.line([L, T - 8], [L, h - B], { w: 1.6 }) + F.line([L, h - B], [w - R + 4, h - B], { w: 1.6 });
    if (yLabel) s += `<text class="t s" transform="translate(12 ${(T + h - B) / 2}) rotate(-90)" text-anchor="middle">${yLabel}</text>`;
    if (xLabel) s += F.text((L + w - R) / 2, h - 8, xLabel, "t s");
    s += `<polyline points="${ys.map((v, i) => `${r2(X(i))},${r2(Y(v))}`).join(" ")}" fill="none" stroke="${color}" stroke-width="2.4" stroke-linejoin="round"/>`;
    ys.forEach((v, i) => {
      s += `<circle cx="${r2(X(i))}" cy="${r2(Y(v))}" r="4.2" fill="${color}" stroke="#fff" stroke-width="1.5"/>`;
      s += F.text(X(i), Y(v) - 13, fmt(v), "t s");
      s += F.text(X(i), h - B + 15, xs[i], "t s");
    });
    return F.svg(w, h, s, title || "Biểu đồ đoạn thẳng");
  };

  window.F = F;
})();
