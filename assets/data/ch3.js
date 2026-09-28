/* ================= CHƯƠNG III. GÓC VÀ ĐƯỜNG THẲNG SONG SONG ================= */

const figKeBu = (a, textA, textB) => F.rays({
  h: 170, O: [170, 130],
  rays: [{ deg: 0, label: "y", len: 140 }, { deg: 180, label: "x", len: 140 }, { deg: a, label: "z", len: 115 }],
  arcs: [{ from: 0, to: a, text: textA, r: 28 }, { from: a, to: 180, text: textB, r: 22, color: "#2b7489" }]
});

const figDoiDinh = (labels = ["1", "2", "3", "4"]) => F.rays({
  h: 210, O: [170, 105],
  rays: [{ deg: 25, label: "x", len: 140 }, { deg: 205, label: "x'", len: 140 }, { deg: 140, label: "y", len: 125 }, { deg: 320, label: "y'", len: 125 }],
  arcs: [
    { from: 25, to: 140, text: labels[0], r: 30 },
    { from: 140, to: 205, text: labels[1], r: 24, color: "#2b7489" },
    { from: 205, to: 320, text: labels[2], r: 30 },
    { from: 320, to: 385, text: labels[3], r: 24, color: "#2b7489" }
  ],
  Opos: [-3, 17]
});

const figPhanGiac = (tx, tm) => F.rays({
  h: 190, O: [120, 160],
  rays: [{ deg: 0, label: "x", len: 190 }, { deg: 110, label: "y", len: 140 }, { deg: 55, label: "m", len: 160, color: "#d9822b" }],
  arcs: [{ from: 0, to: 55, text: tx, r: 34 }, { from: 55, to: 110, text: tm, r: 34 }]
});

lesson({
  id: "8",
  num: 8,
  label: "Bài 8",
  title: "Góc ở vị trí đặc biệt. Tia phân giác của một góc",
  pages: "40–45",
  intro: m`Hai góc đặt cạnh nhau có thể có những “quan hệ” đặc biệt: kề nhau, bù nhau, đối đỉnh. Biết quan hệ là biết ngay số đo, không cần thước đo góc.`,
  goals: ["Nhận biết hai góc kề bù, hai góc đối đỉnh", "Tính số đo góc nhờ tính chất kề bù, đối đỉnh", "Hiểu tia phân giác của một góc"],
  theory: [
    {
      h: "1. Hai góc kề bù",
      body: m`<p><b>Hai góc kề nhau</b>: có chung đỉnh, chung một cạnh, hai cạnh còn lại nằm về hai phía của cạnh chung.</p>
      <p><b>Hai góc bù nhau</b>: có tổng số đo bằng \(180^\circ\).</p>
      <p><b>Hai góc kề bù</b>: vừa kề nhau, vừa bù nhau — hai cạnh còn lại là hai tia đối nhau (tạo thành một đường thẳng).</p>`,
      fig: figKeBu(60, "60°", "120°"),
      cap: m`\(\widehat{xOz}\) và \(\widehat{zOy}\) kề bù: \(60^\circ + 120^\circ = 180^\circ\)`,
      key: m`<p>Hai góc kề bù có tổng bằng \(180^\circ\). Biết một góc \(\Rightarrow\) góc kia \(= 180^\circ -\) góc đã biết.</p>`
    },
    {
      h: "2. Hai góc đối đỉnh",
      body: m`<p>Khi hai đường thẳng cắt nhau tại \(O\), ta được 4 góc. Hai góc mà mỗi cạnh của góc này là tia đối của một cạnh của góc kia gọi là <b>hai góc đối đỉnh</b>.</p>
      <p>Trong hình: \(\widehat{O_1}\) và \(\widehat{O_3}\) đối đỉnh; \(\widehat{O_2}\) và \(\widehat{O_4}\) đối đỉnh.</p>`,
      fig: figDoiDinh(),
      key: m`<p><b>Hai góc đối đỉnh thì bằng nhau.</b> Còn hai góc cạnh nhau (như \(\widehat{O_1}\) và \(\widehat{O_2}\)) thì kề bù.</p>`,
      tip: "Hình dung chữ X: hai góc “nhìn nhau” qua giao điểm là đối đỉnh."
    },
    {
      h: "3. Tia phân giác của một góc",
      body: m`<p>Tia phân giác của một góc là tia nằm giữa hai cạnh của góc và tạo với hai cạnh ấy hai góc <b>bằng nhau</b>.</p>
      <p>Nói cách khác, tia phân giác chia đôi góc.</p>`,
      fig: figPhanGiac("55°", "55°"),
      cap: m`\(Om\) là tia phân giác của \(\widehat{xOy} = 110^\circ\)`,
      key: m`<p>\(Om\) là tia phân giác của \(\widehat{xOy}\) thì \(\widehat{xOm} = \widehat{mOy} = \dfrac12\widehat{xOy}\).</p>`
    }
  ],
  mistakes: [
    "Nhầm “bù nhau” (tổng 180°) với “phụ nhau” (tổng 90°).",
    "Cho rằng hai góc bằng nhau thì đối đỉnh. Sai! Đối đỉnh thì bằng nhau, nhưng bằng nhau chưa chắc đối đỉnh.",
    "Hai góc bù nhau chưa chắc kề nhau: phải có chung cạnh mới là kề bù."
  ],
  examples: [
    { q: m`Hai đường thẳng cắt nhau tại \(O\), tạo thành \(\widehat{O_1} = 40^\circ\) như hình. Tính \(\widehat{O_2}, \widehat{O_3}, \widehat{O_4}\).`, fig: figDoiDinh(["40°", "2", "3", "4"]), steps: [m`\(\widehat{O_3} = \widehat{O_1} = 40^\circ\) (đối đỉnh).`, m`\(\widehat{O_2} = 180^\circ - 40^\circ = 140^\circ\) (kề bù với \(\widehat{O_1}\)).`, m`\(\widehat{O_4} = \widehat{O_2} = 140^\circ\) (đối đỉnh).`], ans: m`\(\widehat{O_2} = \widehat{O_4} = 140^\circ\), \(\widehat{O_3} = 40^\circ\)` },
    { q: m`Hai góc kề bù, góc này gấp 4 lần góc kia. Tính số đo mỗi góc.`, steps: [m`Gọi góc nhỏ là \(x\), góc lớn là \(4x\).`, m`Kề bù nên \(x + 4x = 180^\circ\), tức \(5x = 180^\circ\).`, m`\(x = 36^\circ\), góc lớn \(= 4\cdot36^\circ = 144^\circ\).`], ans: m`\(36^\circ\) và \(144^\circ\)` }
  ],
  exercises: [
    { q: m`Cho \(\widehat{xOz}\) và \(\widehat{zOy}\) là hai góc kề bù, \(\widehat{xOz} = 65^\circ\). Tính \(\widehat{zOy}\).`, fig: figKeBu(115, "?", "65°"), type: "num", answer: 115, unit: "°", hint: "Tổng hai góc kề bù là 180°.", steps: [m`\(\widehat{zOy} = 180^\circ - 65^\circ\).`, m`\(= 115^\circ\).`], ans: m`\(115^\circ\)` },
    { q: m`Hai đường thẳng cắt nhau, một trong bốn góc tạo thành bằng \(40^\circ\). Tính góc đối đỉnh và góc kề bù với nó.`, type: "nums", fields: [{ label: "Góc đối đỉnh =", answer: 40, unit: "°" }, { label: "Góc kề bù =", answer: 140, unit: "°" }], hint: "Đối đỉnh thì bằng nhau; kề bù thì cộng lại bằng 180°.", steps: [m`Góc đối đỉnh bằng góc đã cho: \(40^\circ\).`, m`Góc kề bù: \(180^\circ - 40^\circ = 140^\circ\).`], ans: m`\(40^\circ\) và \(140^\circ\)` },
    { q: m`\(Om\) là tia phân giác của \(\widehat{xOy} = 110^\circ\). Tính \(\widehat{xOm}\).`, fig: figPhanGiac("?", ""), type: "num", answer: 55, unit: "°", hint: "Tia phân giác chia đôi góc.", steps: [m`\(\widehat{xOm} = \dfrac12\widehat{xOy} = \dfrac{110^\circ}{2}\).`, m`\(= 55^\circ\).`], ans: m`\(55^\circ\)` },
    { q: m`\(Ot\) là tia phân giác của \(\widehat{aOb}\), biết \(\widehat{aOt} = 35^\circ\). Tính \(\widehat{aOb}\).`, type: "num", answer: 70, unit: "°", hint: "Góc lớn gấp đôi mỗi góc nhỏ.", steps: [m`\(\widehat{aOb} = 2\cdot\widehat{aOt} = 2\cdot 35^\circ = 70^\circ\).`], ans: m`\(70^\circ\)` },
    { q: "Hai góc đối đỉnh thì:", type: "choice", choices: ["Bù nhau", "Bằng nhau", "Phụ nhau", "Kề nhau"], answer: 1, hint: "Nhớ lại tính chất trong ô Ghi nhớ.", steps: ["Tính chất: hai góc đối đỉnh thì bằng nhau."] },
    { q: m`Hai đường thẳng cắt nhau tại \(O\). Biết \(\widehat{O_1} + \widehat{O_3} = 100^\circ\) (\(\widehat{O_1}, \widehat{O_3}\) đối đỉnh). Tính \(\widehat{O_1}\) và \(\widehat{O_2}\).`, fig: figDoiDinh(), type: "nums", fields: [{ label: "Ô₁ =", answer: 50, unit: "°" }, { label: "Ô₂ =", answer: 130, unit: "°" }], hint: "Hai góc đối đỉnh bằng nhau nên mỗi góc bằng một nửa tổng.", steps: [m`\(\widehat{O_1} = \widehat{O_3}\) nên \(\widehat{O_1} = 100^\circ : 2 = 50^\circ\).`, m`\(\widehat{O_2}\) kề bù với \(\widehat{O_1}\): \(\widehat{O_2} = 180^\circ - 50^\circ = 130^\circ\).`], ans: m`\(\widehat{O_1} = 50^\circ\), \(\widehat{O_2} = 130^\circ\)` },
    { lv: 2, q: m`Hai góc kề bù, góc này gấp 4 lần góc kia. Tính hai góc.`, type: "nums", fields: [{ label: "Góc nhỏ =", answer: 36, unit: "°" }, { label: "Góc lớn =", answer: 144, unit: "°" }], hint: m`Gọi góc nhỏ là \(x\): \(x + 4x = 180^\circ\).`, steps: [m`\(x + 4x = 180^\circ \Rightarrow 5x = 180^\circ \Rightarrow x = 36^\circ\).`, m`Góc lớn \(= 4\cdot36^\circ = 144^\circ\).`], ans: m`\(36^\circ\) và \(144^\circ\)` },
    { lv: 2, q: "Đúng hay sai: “Hai góc bằng nhau thì đối đỉnh.”", type: "choice", choices: ["Đúng", "Sai"], answer: 1, hint: "Hãy nghĩ đến hai góc 30° ở hai chỗ khác nhau trên tờ giấy.", steps: ["Hai góc 30° vẽ ở hai nơi khác nhau vẫn bằng nhau nhưng không có chung đỉnh, nên không đối đỉnh.", "Chỉ có chiều ngược lại đúng: đối đỉnh thì bằng nhau."] }
  ],
  summary: m`Kề bù: tổng \(180^\circ\). Đối đỉnh: bằng nhau. Tia phân giác chia đôi góc.`
});

lesson({
  id: "9",
  num: 9,
  label: "Bài 9",
  title: "Hai đường thẳng song song và dấu hiệu nhận biết",
  pages: "46–49",
  intro: m`Đường ray tàu hoả, các dòng kẻ trong vở… là hình ảnh của đường thẳng song song. Bài này chỉ cho bạn cách “chứng nhận” hai đường thẳng song song bằng cách nhìn vào các góc.`,
  goals: ["Gọi tên các cặp góc so le trong, đồng vị", "Dùng dấu hiệu để nhận biết hai đường thẳng song song"],
  theory: [
    {
      h: "1. Các góc tạo bởi một đường thẳng cắt hai đường thẳng",
      body: m`<p>Đường thẳng \(c\) cắt hai đường thẳng \(a\), \(b\) tại \(A\) và \(B\), tạo ra 8 góc. Ta đánh số các góc tại mỗi điểm là 1, 2, 3, 4 (ngược chiều kim đồng hồ, bắt đầu từ góc trên bên phải).</p>`,
      fig: F.transversal({}),
      key: m`<p><b>So le trong</b> (nằm “trong” khoảng giữa \(a\), \(b\) và ở hai phía của \(c\)): \(\widehat{A_3}\) và \(\widehat{B_1}\); \(\;\widehat{A_4}\) và \(\widehat{B_2}\).</p>
      <p><b>Đồng vị</b> (cùng vị trí ở hai giao điểm): \(\widehat{A_1}\) và \(\widehat{B_1}\); \(\widehat{A_2}\) và \(\widehat{B_2}\); \(\widehat{A_3}\) và \(\widehat{B_3}\); \(\widehat{A_4}\) và \(\widehat{B_4}\).</p>`,
      tip: "Đồng vị = “cùng góc phần tư”: cùng ở trên-phải, hoặc cùng ở dưới-trái… So le trong = hình chữ Z nằm giữa hai đường thẳng."
    },
    {
      h: "2. Hai đường thẳng song song",
      body: m`<p>Hai đường thẳng song song là hai đường thẳng <b>không có điểm chung</b>. Kí hiệu \(a \parallel b\).</p>`
    },
    {
      h: "3. Dấu hiệu nhận biết",
      body: "",
      key: m`<p>Nếu đường thẳng \(c\) cắt hai đường thẳng \(a\), \(b\) và trong các góc tạo thành có <b>một cặp góc so le trong bằng nhau</b> (hoặc <b>một cặp góc đồng vị bằng nhau</b>) thì \(a \parallel b\).</p>`,
      tip: m`Hệ quả hay dùng: hai đường thẳng cùng vuông góc với một đường thẳng thứ ba thì song song với nhau. (Hai góc đồng vị đều bằng \(90^\circ\).)`
    }
  ],
  mistakes: [
    m`Nhầm \(\widehat{A_1}\) và \(\widehat{B_3}\) là đồng vị. Đồng vị phải cùng số (cùng vị trí): \(\widehat{A_1}\) với \(\widehat{B_1}\).`,
    "Kết luận song song khi hai góc so le trong KHÔNG bằng nhau. Chỉ khi bằng nhau mới kết luận được."
  ],
  examples: [
    { q: m`Trong hình, biết \(\widehat{A_4} = 115^\circ\), \(\widehat{B_2} = 115^\circ\). Hai đường thẳng \(a\) và \(b\) có song song không?`, fig: F.transversal({ nums: false, vals: { A4: "115°", B2: "115°" } }), steps: [m`\(\widehat{A_4}\) (dưới phải, tại A) và \(\widehat{B_2}\) (trên trái, tại B) nằm giữa \(a\), \(b\) và ở hai phía của \(c\): đây là cặp góc so le trong.`, m`Hai góc so le trong bằng nhau (cùng bằng \(115^\circ\)).`, m`Theo dấu hiệu nhận biết: \(a \parallel b\).`], ans: m`\(a \parallel b\)` }
  ],
  exercises: [
    { q: "Theo hình vẽ, cặp góc nào là cặp góc so le trong?", fig: F.transversal({}), type: "choice", choices: [m`\(\widehat{A_1}\) và \(\widehat{B_1}\)`, m`\(\widehat{A_3}\) và \(\widehat{B_1}\)`, m`\(\widehat{A_2}\) và \(\widehat{B_2}\)`, m`\(\widehat{A_4}\) và \(\widehat{B_1}\)`], answer: 1, why: { 0: "Đây là cặp góc đồng vị (cùng vị trí trên-phải).", 2: "Đây là cặp góc đồng vị (cùng vị trí trên-trái).", 3: "Hai góc này nằm cùng một phía của c — gọi là trong cùng phía, không phải so le." }, hint: "So le trong: nằm giữa a và b, ở hai phía khác nhau của c.", steps: [m`\(\widehat{A_3}\) (dưới-trái tại A) và \(\widehat{B_1}\) (trên-phải tại B) đều nằm giữa \(a\) và \(b\).`, m`Chúng ở hai phía khác nhau của \(c\), nên là cặp so le trong.`] },
    { q: m`Góc đồng vị với \(\widehat{A_2}\) là:`, fig: F.transversal({}), type: "choice", choices: [m`\(\widehat{B_4}\)`, m`\(\widehat{B_1}\)`, m`\(\widehat{B_2}\)`, m`\(\widehat{A_4}\)`], answer: 2, hint: "Đồng vị = cùng vị trí ở giao điểm kia.", steps: [m`\(\widehat{A_2}\) ở vị trí trên-trái tại A.`, m`Góc ở vị trí trên-trái tại B là \(\widehat{B_2}\).`] },
    { q: m`Cho hình vẽ với \(\widehat{A_1} = 70^\circ\), \(\widehat{B_1} = 70^\circ\). Kết luận nào đúng?`, fig: F.transversal({ nums: false, vals: { A1: "70°", B1: "70°" } }), type: "choice", choices: [m`\(a \parallel b\)`, m`\(a\) cắt \(b\)`, "Chưa kết luận được"], answer: 0, hint: m`\(\widehat{A_1}\) và \(\widehat{B_1}\) là cặp góc gì?`, steps: [m`\(\widehat{A_1}\) và \(\widehat{B_1}\) là cặp góc đồng vị.`, m`Chúng bằng nhau nên \(a \parallel b\) (dấu hiệu nhận biết).`] },
    { q: m`Cho \(\widehat{A_3} = 65^\circ\) và \(\widehat{B_1} = 60^\circ\). Hai đường thẳng \(a\), \(b\):`, fig: F.transversal({ nums: false, vals: { A3: "65°", B1: "60°" } }), type: "choice", choices: ["Song song", "Không song song"], answer: 1, hint: "Hai góc so le trong có bằng nhau không?", steps: [m`\(\widehat{A_3}\) và \(\widehat{B_1}\) là cặp so le trong nhưng \(65^\circ \ne 60^\circ\).`, m`Nếu \(a \parallel b\) thì hai góc này phải bằng nhau (sẽ học ở Bài 10). Vậy \(a\) không song song với \(b\).`] },
    { q: m`Đường thẳng \(a\) và \(b\) cùng vuông góc với đường thẳng \(c\). Khi đó:`, type: "choice", choices: [m`\(a \perp b\)`, m`\(a \parallel b\)`, m`\(a\) trùng \(c\)`, "Không kết luận được"], answer: 1, hint: "Hai góc đồng vị tạo thành đều bằng bao nhiêu độ?", steps: [m`\(a \perp c\) và \(b \perp c\) nên hai góc đồng vị đều bằng \(90^\circ\).`, m`Theo dấu hiệu nhận biết, \(a \parallel b\).`] },
    { lv: 2, q: m`Biết \(\widehat{A_4} = 3x\) và \(\widehat{B_2} = 105^\circ\). Tìm \(x\) để \(a \parallel b\).`, fig: F.transversal({ nums: false, vals: { A4: "3x", B2: "105°" } }), type: "num", label: "x =", answer: 35, unit: "°", hint: "Cần cặp so le trong bằng nhau.", steps: [m`\(\widehat{A_4}\) và \(\widehat{B_2}\) là cặp so le trong.`, m`Để \(a \parallel b\) cần \(3x = 105^\circ\).`, m`\(x = 105^\circ : 3 = 35^\circ\).`], ans: m`\(x = 35^\circ\)` }
  ],
  summary: m`So le trong bằng nhau, hoặc đồng vị bằng nhau \(\Rightarrow\) hai đường thẳng song song. Cùng vuông góc với đường thứ ba \(\Rightarrow\) song song.`
});

lesson({
  id: "10",
  num: 10,
  label: "Bài 10",
  title: "Tiên đề Euclid. Tính chất của hai đường thẳng song song",
  pages: "51–54",
  intro: m`Bài 9 đi từ “góc bằng nhau” đến “song song”. Bài này đi chiều ngược lại: biết hai đường thẳng song song thì suy ra các góc bằng nhau — rất hay dùng để tính góc.`,
  goals: ["Phát biểu tiên đề Euclid", "Dùng tính chất hai đường thẳng song song để tính góc"],
  theory: [
    {
      h: "1. Tiên đề Euclid",
      body: m`<p>Qua một điểm \(M\) nằm ngoài đường thẳng \(a\), <b>chỉ có một</b> đường thẳng song song với \(a\).</p>
      <p>“Tiên đề” là điều được thừa nhận là đúng, không cần chứng minh.</p>`,
      tip: m`Hệ quả: nếu \(a \parallel c\) và \(b \parallel c\) thì \(a \parallel b\).`
    },
    {
      h: "2. Tính chất của hai đường thẳng song song",
      body: m`<p>Nếu một đường thẳng cắt hai đường thẳng <b>song song</b> thì:</p>`,
      fig: F.transversal({ parallel: true }),
      key: m`<ul><li>Hai góc <b>so le trong</b> bằng nhau: \(\widehat{A_3} = \widehat{B_1}\), \(\widehat{A_4} = \widehat{B_2}\).</li>
      <li>Hai góc <b>đồng vị</b> bằng nhau: \(\widehat{A_1} = \widehat{B_1}\), …</li>
      <li>Suy ra hai góc <b>trong cùng phía</b> bù nhau: \(\widehat{A_4} + \widehat{B_1} = 180^\circ\).</li></ul>`
    },
    {
      h: "3. Vuông góc và song song",
      body: m`<p>Nếu \(a \parallel b\) và \(c \perp a\) thì \(c \perp b\).</p>`
    }
  ],
  mistakes: [
    "Dùng tính chất “so le trong bằng nhau” khi đề KHÔNG cho hai đường thẳng song song.",
    m`Cho rằng hai góc trong cùng phía bằng nhau. Chúng <b>bù nhau</b> (tổng \(180^\circ\)).`
  ],
  examples: [
    { q: m`Cho \(a \parallel b\), \(\widehat{A_1} = 60^\circ\). Tính \(\widehat{B_1}\) và \(\widehat{B_2}\).`, fig: F.transversal({ parallel: true, nums: false, vals: { A1: "60°", B1: "?", B2: "?" } }), steps: [m`\(\widehat{B_1} = \widehat{A_1} = 60^\circ\) (hai góc đồng vị, \(a \parallel b\)).`, m`\(\widehat{B_2}\) kề bù với \(\widehat{B_1}\): \(\widehat{B_2} = 180^\circ - 60^\circ = 120^\circ\).`], ans: m`\(\widehat{B_1} = 60^\circ\), \(\widehat{B_2} = 120^\circ\)` }
  ],
  exercises: [
    { q: m`Cho \(a \parallel b\), \(\widehat{A_1} = 50^\circ\). Tính \(\widehat{B_1}\).`, fig: F.transversal({ parallel: true, nums: false, vals: { A1: "50°", B1: "?" } }), type: "num", answer: 50, unit: "°", hint: "Hai góc này ở cùng vị trí.", steps: [m`\(\widehat{A_1}\) và \(\widehat{B_1}\) là hai góc đồng vị.`, m`Vì \(a \parallel b\) nên \(\widehat{B_1} = \widehat{A_1} = 50^\circ\).`], ans: m`\(50^\circ\)` },
    { q: m`Cho \(a \parallel b\), \(\widehat{A_3} = 72^\circ\). Tính \(\widehat{B_1}\).`, fig: F.transversal({ parallel: true, nums: false, vals: { A3: "72°", B1: "?" } }), type: "num", answer: 72, unit: "°", hint: "Đây là cặp so le trong.", steps: [m`\(\widehat{A_3}\) và \(\widehat{B_1}\) so le trong.`, m`\(a \parallel b\) nên \(\widehat{B_1} = 72^\circ\).`], ans: m`\(72^\circ\)` },
    { q: m`Cho \(a \parallel b\), \(\widehat{A_4} = 110^\circ\). Tính \(\widehat{B_1}\).`, fig: F.transversal({ parallel: true, nums: false, vals: { A4: "110°", B1: "?" } }), type: "num", answer: 70, unit: "°", hint: "Hai góc trong cùng phía thì bù nhau.", steps: [m`\(\widehat{A_4}\) và \(\widehat{B_1}\) là hai góc trong cùng phía.`, m`Vì \(a \parallel b\) nên \(\widehat{A_4} + \widehat{B_1} = 180^\circ\).`, m`\(\widehat{B_1} = 180^\circ - 110^\circ = 70^\circ\).`], ans: m`\(70^\circ\)` },
    { q: m`Qua điểm \(M\) nằm ngoài đường thẳng \(d\), vẽ được bao nhiêu đường thẳng song song với \(d\)?`, type: "num", answer: 1, hint: "Tiên đề Euclid.", steps: ["Theo tiên đề Euclid, chỉ có đúng một đường thẳng như vậy."], ans: "1" },
    { q: m`Cho \(a \parallel b\) và đường thẳng \(c \perp a\). Góc tạo bởi \(c\) và \(b\) bằng bao nhiêu độ?`, type: "num", answer: 90, unit: "°", hint: "Đồng vị với góc vuông.", steps: [m`\(c \perp a\) nên góc tại giao điểm với \(a\) là \(90^\circ\).`, m`Góc đồng vị với nó tại \(b\) cũng bằng \(90^\circ\) (vì \(a \parallel b\)), tức \(c \perp b\).`], ans: m`\(90^\circ\)` },
    { q: m`Cho \(a \parallel c\) và \(b \parallel c\). Khi đó:`, type: "choice", choices: [m`\(a \perp b\)`, m`\(a \parallel b\) (hoặc trùng nhau)`, m`\(a\) cắt \(b\)`], answer: 1, hint: "Hệ quả của tiên đề Euclid.", steps: ["Hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì song song với nhau."] },
    { lv: 2, q: m`Cho \(a \parallel b\), \(\widehat{A_2} = 125^\circ\). Tính \(\widehat{B_3}\).`, fig: F.transversal({ parallel: true, nums: false, vals: { A2: "125°", B3: "?" } }), type: "num", answer: 55, unit: "°", hint: m`Tính \(\widehat{A_3}\) trước (kề bù với \(\widehat{A_2}\)), rồi dùng đồng vị.`, steps: [m`\(\widehat{A_3} = 180^\circ - 125^\circ = 55^\circ\) (kề bù).`, m`\(\widehat{B_3} = \widehat{A_3} = 55^\circ\) (đồng vị, \(a \parallel b\)).`], ans: m`\(55^\circ\)` }
  ],
  summary: m`Có song song \(\Rightarrow\) so le trong bằng nhau, đồng vị bằng nhau, trong cùng phía bù nhau.`
});

lesson({
  id: "11",
  num: 11,
  label: "Bài 11",
  title: "Định lí và chứng minh định lí",
  pages: "55–57",
  intro: m`Trong hình học, ta không tin vào mắt nhìn mà tin vào lập luận. Bài này dạy cách đọc một định lí (phần nào là “cho”, phần nào là “phải suy ra”) và cách viết một chứng minh ngắn.`,
  goals: ["Tách giả thiết, kết luận của định lí", "Viết định lí dạng “Nếu … thì …”", "Hiểu cấu trúc một chứng minh"],
  theory: [
    {
      h: "1. Định lí, giả thiết, kết luận",
      body: m`<p><b>Định lí</b> là một khẳng định được suy ra từ những khẳng định đúng đã biết.</p>
      <p>Định lí thường có dạng: <b>Nếu</b> <i>(điều đã cho)</i> <b>thì</b> <i>(điều suy ra)</i>.</p>
      <ul><li><b>Giả thiết (GT)</b>: phần nằm giữa “nếu” và “thì”.</li><li><b>Kết luận (KL)</b>: phần sau “thì”.</li></ul>`,
      key: m`<p>Ví dụ: “<u>Nếu</u> hai góc đối đỉnh <u>thì</u> hai góc đó bằng nhau.”<br>GT: \(\widehat{O_1}\) và \(\widehat{O_3}\) đối đỉnh. &nbsp; KL: \(\widehat{O_1} = \widehat{O_3}\).</p>`
    },
    {
      h: "2. Chứng minh định lí",
      body: m`<p>Chứng minh là dùng lập luận (dựa trên định nghĩa, tính chất đã biết) để từ giả thiết suy ra kết luận. Mỗi bước phải có lí do.</p>
      <p><b>Chứng minh: hai góc đối đỉnh thì bằng nhau.</b></p>
      <ol>
        <li>\(\widehat{O_1} + \widehat{O_2} = 180^\circ\) (hai góc kề bù).</li>
        <li>\(\widehat{O_3} + \widehat{O_2} = 180^\circ\) (hai góc kề bù).</li>
        <li>Từ (1) và (2): \(\widehat{O_1} = 180^\circ - \widehat{O_2} = \widehat{O_3}\).</li>
      </ol>`,
      fig: figDoiDinh(),
      tip: "Khi viết chứng minh, sau mỗi dòng hãy ghi lí do trong ngoặc: (gt), (kề bù), (đối đỉnh), (so le trong)…"
    }
  ],
  mistakes: [
    "Lấy điều cần chứng minh làm lí do (dùng kết luận để chứng minh chính nó).",
    "Tin vào hình vẽ: “nhìn thấy bằng nhau” không phải là lí do."
  ],
  examples: [
    { q: m`Viết định lí “Hai đường thẳng phân biệt cùng song song với một đường thẳng thứ ba thì song song với nhau” dưới dạng “Nếu … thì …”, và ghi GT, KL.`, steps: [m`Dạng nếu–thì: “Nếu hai đường thẳng phân biệt \(a\), \(b\) cùng song song với đường thẳng \(c\) thì \(a\) song song với \(b\).”`, m`GT: \(a \parallel c\), \(b \parallel c\) (\(a\), \(b\) phân biệt).`, m`KL: \(a \parallel b\).`], ans: m`GT: \(a \parallel c,\ b \parallel c\); KL: \(a \parallel b\)` }
  ],
  exercises: [
    { q: "Giả thiết của định lí “Nếu hai góc đối đỉnh thì hai góc đó bằng nhau” là:", type: "choice", choices: ["Hai góc bằng nhau", "Hai góc đối đỉnh", "Hai góc kề bù", "Cả câu"], answer: 1, hint: "Giả thiết nằm giữa “nếu” và “thì”.", steps: ["Phần giữa “nếu” và “thì”: “hai góc đối đỉnh”."] },
    { q: "Kết luận của định lí “Nếu một đường thẳng cắt hai đường thẳng song song thì hai góc so le trong bằng nhau” là:", type: "choice", choices: ["Một đường thẳng cắt hai đường thẳng song song", "Hai đường thẳng song song", "Hai góc so le trong bằng nhau", "Hai góc đồng vị bằng nhau"], answer: 2, hint: "Kết luận là phần sau chữ “thì”.", steps: ["Phần sau “thì”: “hai góc so le trong bằng nhau”."] },
    { q: "Định lí “Hai góc kề bù có tổng bằng 180°” viết dưới dạng “Nếu … thì …” là:", type: "choice", choices: ["Nếu hai góc có tổng 180° thì chúng kề bù.", "Nếu hai góc kề bù thì tổng của chúng bằng 180°.", "Nếu hai góc bằng nhau thì tổng bằng 180°.", "Nếu tổng bằng 180° thì hai góc bằng nhau."], answer: 1, why: { 0: "Câu này đảo ngược GT và KL — và nó sai (hai góc bù nhau chưa chắc kề nhau)." }, hint: "Điều được cho là “hai góc kề bù”.", steps: ["Điều đã biết (GT): hai góc kề bù.", "Điều suy ra (KL): tổng bằng 180°."] },
    { q: m`Trong chứng minh “hai góc đối đỉnh thì bằng nhau”, dòng \(\widehat{O_1} + \widehat{O_2} = 180^\circ\) có lí do là:`, fig: figDoiDinh(), type: "choice", choices: ["Hai góc đối đỉnh", "Hai góc kề bù", "Hai góc so le trong", "Giả thiết"], answer: 1, hint: m`\(\widehat{O_1}\) và \(\widehat{O_2}\) có chung một cạnh, hai cạnh còn lại tạo thành đường thẳng.`, steps: [m`\(\widehat{O_1}\) và \(\widehat{O_2}\) là hai góc kề bù nên tổng bằng \(180^\circ\).`] },
    { q: "Đúng hay sai: “Định lí là điều ta đoán ra được khi nhìn hình vẽ.”", type: "choice", choices: ["Đúng", "Sai"], answer: 1, hint: "Định lí phải được suy ra bằng lập luận.", steps: ["Định lí là khẳng định được suy ra (chứng minh) từ những khẳng định đúng đã biết, không phải đoán từ hình."] },
    { lv: 2, q: m`Cho \(Om\) là tia phân giác của \(\widehat{xOy}\) và \(\widehat{xOy} = 80^\circ\). Muốn chứng minh \(\widehat{xOm} = 40^\circ\), lí do cần dùng là:`, type: "choice", choices: ["Định nghĩa tia phân giác", "Tính chất hai góc đối đỉnh", "Tiên đề Euclid", "Tính chất hai góc kề bù"], answer: 0, hint: "Tia phân giác làm gì với góc?", steps: [m`Theo định nghĩa tia phân giác: \(\widehat{xOm} = \dfrac12\widehat{xOy} = 40^\circ\).`] }
  ],
  summary: "Định lí: Nếu (GT) thì (KL). Chứng minh: đi từ GT đến KL, mỗi bước có lí do."
});

review({
  chapter: 3,
  pages: "50, 58–59",
  recap: [
    "Kề bù: tổng 180°. Đối đỉnh: bằng nhau. Tia phân giác chia đôi góc.",
    "So le trong bằng nhau (hoặc đồng vị bằng nhau) ⇒ hai đường thẳng song song.",
    "Hai đường thẳng song song ⇒ so le trong bằng nhau, đồng vị bằng nhau, trong cùng phía bù nhau.",
    "Định lí: Nếu (giả thiết) thì (kết luận)."
  ],
  exercises: [
    { q: m`Cho \(\widehat{xOy} = 130^\circ\). Tính góc kề bù với nó.`, type: "num", answer: 50, unit: "°", hint: "180° − 130°.", steps: [m`\(180^\circ - 130^\circ = 50^\circ\).`], ans: m`\(50^\circ\)` },
    { q: m`\(Ot\) là tia phân giác của góc bẹt \(\widehat{xOy}\) (\(180^\circ\)). Tính \(\widehat{xOt}\).`, type: "num", answer: 90, unit: "°", hint: "Góc bẹt bằng 180°.", steps: [m`\(\widehat{xOt} = 180^\circ : 2 = 90^\circ\).`], ans: m`\(90^\circ\)` },
    { q: m`Cho \(a \parallel b\), \(\widehat{A_4} = 3x\), \(\widehat{B_1} = 2x\) (hai góc trong cùng phía). Tìm \(x\).`, fig: F.transversal({ parallel: true, nums: false, vals: { A4: "3x", B1: "2x" } }), type: "num", label: "x =", answer: 36, unit: "°", hint: "Trong cùng phía bù nhau: 3x + 2x = 180°.", steps: [m`\(a \parallel b\) nên \(3x + 2x = 180^\circ\).`, m`\(5x = 180^\circ \Rightarrow x = 36^\circ\).`], ans: m`\(x = 36^\circ\)` },
    { q: m`Cho \(a \parallel b\), \(\widehat{A_1} = 58^\circ\). Tính \(\widehat{B_3}\).`, fig: F.transversal({ parallel: true, nums: false, vals: { A1: "58°", B3: "?" } }), type: "num", answer: 58, unit: "°", hint: m`\(\widehat{B_3}\) đối đỉnh với \(\widehat{B_1}\).`, steps: [m`\(\widehat{B_1} = \widehat{A_1} = 58^\circ\) (đồng vị).`, m`\(\widehat{B_3} = \widehat{B_1} = 58^\circ\) (đối đỉnh).`], ans: m`\(58^\circ\)` },
    { q: m`Hai đường thẳng \(xx'\) và \(yy'\) cắt nhau tại \(O\) sao cho \(\widehat{xOy} = 90^\circ\). Ba góc còn lại bằng bao nhiêu?`, type: "choice", choices: [m`Đều bằng \(90^\circ\)`, m`\(90^\circ, 45^\circ, 45^\circ\)`, m`\(90^\circ, 180^\circ, 90^\circ\)`, "Không tính được"], answer: 0, hint: "Dùng kề bù và đối đỉnh.", steps: [m`Góc kề bù với \(90^\circ\) là \(90^\circ\).`, m`Các góc đối đỉnh bằng nhau nên cả bốn góc đều bằng \(90^\circ\). Khi đó \(xx' \perp yy'\).`] },
    { lv: 2, q: m`Cho \(a \parallel b\). Đường thẳng \(c\) cắt \(a\) tại \(A\), cắt \(b\) tại \(B\) và \(\widehat{A_3} - \widehat{B_2} = 40^\circ\) (hai góc trong cùng phía). Tính \(\widehat{A_3}\).`, type: "num", answer: 110, unit: "°", hint: "Tổng hai góc là 180°, hiệu là 40°.", steps: [m`\(\widehat{A_3} + \widehat{B_2} = 180^\circ\) (trong cùng phía) và \(\widehat{A_3} - \widehat{B_2} = 40^\circ\).`, m`Cộng lại: \(2\widehat{A_3} = 220^\circ \Rightarrow \widehat{A_3} = 110^\circ\).`], ans: m`\(110^\circ\)` }
  ]
});
