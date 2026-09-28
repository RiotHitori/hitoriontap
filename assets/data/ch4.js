/* ================= CHƯƠNG IV. TAM GIÁC BẰNG NHAU ================= */

const triABC = (angles = {}, opt = {}) => F.svg(340, 190, F.tri({ P: { A: [120, 28], B: [40, 165], C: [300, 165] }, angles, arcs: opt.arcs || {}, ticks: opt.ticks || {}, right: opt.right }));
const triRight = (angles = {}) => F.svg(320, 190, F.tri({ P: { A: [60, 165], B: [60, 30], C: [280, 165] }, angles, right: "A" }));
const twoTri = (o1 = {}, o2 = {}) => F.svg(360, 170,
  F.tri({ P: { A: [72, 25], B: [14, 145], C: [146, 145] }, ...o1 }) +
  F.tri({ P: { D: [288, 25], E: [222, 145], F: [352, 145] }, ...o2 }));
const figBowtie = F.svg(340, 190,
  F.tri({ P: { O: [170, 95], A: [50, 30], C: [50, 160] }, names: { O: "" }, ticks: { OA: 1, OC: 2 }, arcs: { O: 1 } }) +
  F.tri({ P: { O: [170, 95], B: [290, 160], D: [290, 30] }, names: { O: "" }, ticks: { OB: 1, OD: 2 }, arcs: { O: 1 } }) +
  F.text(170, 72, "O", "t b"));
const figIsoAH = F.svg(320, 200,
  F.tri({ P: { A: [160, 25], B: [50, 175], C: [270, 175] }, ticks: { AB: 1, CA: 1 } }) +
  F.line([160, 25], [160, 175], { w: 1.6 }) +
  `<path d="M160 164 h11 v11" fill="none" stroke="#1c2430" stroke-width="1.3"/>` +
  F.text(160, 190, "H", "t b"));
const figTrungTruc = F.svg(340, 210,
  F.line([60, 150], [280, 150], { w: 1.8 }) + F.dot([60, 150]) + F.dot([280, 150]) +
  F.line([170, 20], [170, 200], { w: 1.8, color: "#2b7489" }) +
  `<path d="M170 139 h11 v11" fill="none" stroke="#1c2430" stroke-width="1.3"/>` +
  F.line([60, 150], [170, 55], { dash: "5 4", w: 1.4 }) + F.line([280, 150], [170, 55], { dash: "5 4", w: 1.4 }) + F.dot([170, 55], "#d9822b", 4) +
  F.text(48, 162, "A", "t b") + F.text(292, 162, "B", "t b") + F.text(158, 166, "I", "t b") + F.text(184, 48, "M", "t b") + F.text(182, 26, "d", "t b") +
  F.line([112, 146], [112, 154], { color: "#d9822b" }) + F.line([228, 146], [228, 154], { color: "#d9822b" }));

lesson({
  id: "12",
  num: 12,
  label: "Bài 12",
  title: "Tổng các góc trong một tam giác",
  pages: "60–62",
  intro: m`Dù tam giác to hay nhỏ, méo hay đều, ba góc cộng lại luôn bằng \(180^\circ\). Chỉ một câu này thôi mà giải được rất nhiều bài tính góc.`,
  goals: ["Tính góc còn lại khi biết hai góc", "Phân loại tam giác nhọn, vuông, tù", "Dùng tính chất hai góc nhọn của tam giác vuông"],
  theory: [
    {
      h: "1. Định lí tổng ba góc",
      body: m`<p>Thử xé ba góc của một tam giác giấy và ghép sát nhau: chúng tạo thành một đường thẳng, tức là góc bẹt \(180^\circ\).</p>`,
      fig: triABC({ A: "70°", B: "60°", C: "50°" }, { arcs: { A: 1, B: 1, C: 1 } }),
      key: m`<p>Trong mọi tam giác \(ABC\): \(\widehat A + \widehat B + \widehat C = 180^\circ\).</p>`
    },
    {
      h: "2. Phân loại tam giác theo góc",
      body: m`<ul><li><b>Tam giác nhọn</b>: cả ba góc đều nhọn (\(< 90^\circ\)).</li><li><b>Tam giác vuông</b>: có một góc vuông (\(= 90^\circ\)).</li><li><b>Tam giác tù</b>: có một góc tù (\(> 90^\circ\)).</li></ul>
      <p>Một tam giác không thể có hai góc vuông hay hai góc tù (vì tổng sẽ vượt \(180^\circ\)).</p>`
    },
    {
      h: "3. Tam giác vuông",
      body: m`<p>Trong tam giác \(ABC\) vuông tại \(A\): \(AB, AC\) là <b>cạnh góc vuông</b>, \(BC\) (đối diện góc vuông) là <b>cạnh huyền</b>.</p>`,
      fig: triRight({}),
      key: m`<p>Trong tam giác vuông, hai góc nhọn có tổng bằng \(90^\circ\) (ta nói chúng <b>phụ nhau</b>): \(\widehat B + \widehat C = 90^\circ\).</p>`
    }
  ],
  mistakes: [
    m`Cộng nhầm thành \(360^\circ\) — đó là tổng các góc của tứ giác, không phải tam giác.`,
    "Gọi cạnh huyền là cạnh dài bất kì. Cạnh huyền là cạnh đối diện góc vuông."
  ],
  examples: [
    { q: m`Tam giác \(ABC\) có \(\widehat A = 50^\circ\), \(\widehat B = 70^\circ\). Tính \(\widehat C\).`, steps: [m`\(\widehat C = 180^\circ - \widehat A - \widehat B\).`, m`\(= 180^\circ - 50^\circ - 70^\circ = 60^\circ\).`], ans: m`\(\widehat C = 60^\circ\)` },
    { q: m`Tam giác có các góc tỉ lệ \(1 : 2 : 3\). Tam giác đó là tam giác gì?`, steps: [m`Gọi ba góc là \(x, 2x, 3x\). Ta có \(x + 2x + 3x = 180^\circ\).`, m`\(6x = 180^\circ \Rightarrow x = 30^\circ\). Ba góc là \(30^\circ, 60^\circ, 90^\circ\).`, "Có một góc vuông nên đây là tam giác vuông."], ans: "Tam giác vuông" }
  ],
  exercises: [
    { q: m`Tam giác \(ABC\) có \(\widehat A = 50^\circ\), \(\widehat B = 70^\circ\). Tính \(\widehat C\).`, fig: triABC({ A: "50°", B: "70°", C: "?" }), type: "num", answer: 60, unit: "°", hint: "Ba góc cộng lại bằng 180°.", steps: [m`\(\widehat C = 180^\circ - 50^\circ - 70^\circ = 60^\circ\).`], ans: m`\(60^\circ\)` },
    { q: m`Tam giác \(ABC\) vuông tại \(A\) có \(\widehat B = 35^\circ\). Tính \(\widehat C\).`, fig: triRight({ B: "35°", C: "?" }), type: "num", answer: 55, unit: "°", hint: "Hai góc nhọn trong tam giác vuông có tổng 90°.", steps: [m`\(\widehat B + \widehat C = 90^\circ\).`, m`\(\widehat C = 90^\circ - 35^\circ = 55^\circ\).`], ans: m`\(55^\circ\)` },
    { q: m`Một tam giác có hai góc là \(30^\circ\) và \(45^\circ\). Tam giác đó là:`, type: "choice", choices: ["Tam giác nhọn", "Tam giác vuông", "Tam giác tù"], answer: 2, hint: "Tính góc thứ ba trước.", steps: [m`Góc thứ ba \(= 180^\circ - 30^\circ - 45^\circ = 105^\circ\).`, m`\(105^\circ > 90^\circ\) là góc tù nên đây là tam giác tù.`] },
    { q: "Tam giác có ba góc bằng nhau. Mỗi góc bằng bao nhiêu độ?", type: "num", answer: 60, unit: "°", hint: "Chia đều 180° cho 3.", steps: [m`Mỗi góc \(= 180^\circ : 3 = 60^\circ\).`], ans: m`\(60^\circ\)` },
    { q: m`Tam giác \(ABC\) có \(\widehat A = 80^\circ\) và \(\widehat B = \widehat C\). Tính \(\widehat B\).`, type: "num", answer: 50, unit: "°", hint: m`\(\widehat B + \widehat C = 180^\circ - 80^\circ\).`, steps: [m`\(\widehat B + \widehat C = 180^\circ - 80^\circ = 100^\circ\).`, m`Hai góc bằng nhau nên \(\widehat B = 100^\circ : 2 = 50^\circ\).`], ans: m`\(50^\circ\)` },
    { q: "Có tam giác nào có hai góc vuông không?", type: "choice", choices: ["Có", "Không"], answer: 1, hint: "Hai góc vuông đã có tổng bao nhiêu?", steps: [m`Hai góc vuông có tổng \(180^\circ\), góc thứ ba sẽ bằng \(0^\circ\) — vô lí.`, "Vậy không có tam giác nào có hai góc vuông."] },
    { lv: 2, q: m`Các góc \(\widehat A, \widehat B, \widehat C\) của tam giác tỉ lệ với \(1 : 2 : 3\). Tính \(\widehat C\).`, type: "num", answer: 90, unit: "°", hint: m`Gọi ba góc là \(x, 2x, 3x\).`, steps: [m`\(x + 2x + 3x = 180^\circ \Rightarrow 6x = 180^\circ \Rightarrow x = 30^\circ\).`, m`\(\widehat C = 3x = 90^\circ\).`], ans: m`\(90^\circ\)` },
    { lv: 2, q: m`Mái nhà hình tam giác cân có góc ở đỉnh là \(120^\circ\), hai góc ở chân mái bằng nhau. Mỗi góc ở chân mái bằng bao nhiêu độ?`, type: "num", answer: 30, unit: "°", hint: "180° − 120° rồi chia 2.", steps: [m`Tổng hai góc ở chân mái \(= 180^\circ - 120^\circ = 60^\circ\).`, m`Mỗi góc \(= 60^\circ : 2 = 30^\circ\).`], ans: m`\(30^\circ\)` }
  ],
  summary: m`Tổng ba góc tam giác \(= 180^\circ\). Tam giác vuông: hai góc nhọn cộng lại \(= 90^\circ\).`
});

lesson({
  id: "13",
  num: 13,
  label: "Bài 13",
  title: "Hai tam giác bằng nhau. Trường hợp bằng nhau thứ nhất (c.c.c)",
  pages: "63–67",
  intro: m`Hai tam giác bằng nhau là hai tam giác “in cùng một khuôn”: đặt chồng lên nhau thì khít hoàn toàn. Nhưng không cần kiểm tra cả 6 yếu tố — chỉ cần 3 cạnh là đủ.`,
  goals: ["Viết đúng kí hiệu hai tam giác bằng nhau", "Tìm cạnh, góc tương ứng", "Chứng minh hai tam giác bằng nhau theo trường hợp cạnh–cạnh–cạnh"],
  theory: [
    {
      h: "1. Hai tam giác bằng nhau",
      body: m`<p>Hai tam giác bằng nhau nếu chúng có các cạnh tương ứng bằng nhau và các góc tương ứng bằng nhau.</p>
      <p>Kí hiệu \(\Delta ABC = \Delta DEF\) nghĩa là: \(A \leftrightarrow D\), \(B \leftrightarrow E\), \(C \leftrightarrow F\), nên</p>
      <p>\(AB = DE,\; BC = EF,\; CA = FD\) &nbsp;và&nbsp; \(\widehat A = \widehat D,\; \widehat B = \widehat E,\; \widehat C = \widehat F\).</p>`,
      fig: twoTri({ ticks: { AB: 1, BC: 2, CA: 3 } }, { ticks: { DE: 1, EF: 2, FD: 3 } }),
      key: m`<p><b>Thứ tự các chữ cái rất quan trọng</b>: đỉnh viết ở vị trí thứ nhất tương ứng với nhau, thứ hai với thứ hai…</p>`
    },
    {
      h: "2. Trường hợp cạnh – cạnh – cạnh (c.c.c)",
      body: "",
      key: m`<p>Nếu ba cạnh của tam giác này bằng ba cạnh của tam giác kia thì hai tam giác đó bằng nhau.</p>`,
      tip: m`Cách trình bày mẫu:<br>Xét \(\Delta ABC\) và \(\Delta DEF\) có:<br>\(AB = DE\) (gt); \(BC = EF\) (gt); \(CA = FD\) (gt)<br>\(\Rightarrow \Delta ABC = \Delta DEF\) (c.c.c).`
    }
  ],
  mistakes: [
    m`Viết sai thứ tự: nếu \(AB = DE, BC = EF, CA = FD\) thì phải viết \(\Delta ABC = \Delta DEF\), không phải \(\Delta ABC = \Delta DFE\).`,
    "Quên “cạnh chung”: khi hai tam giác dùng chung một cạnh, đó là một cặp cạnh bằng nhau miễn phí."
  ],
  examples: [
    { q: m`Tứ giác \(ABCD\) có \(AB = CD\), \(BC = DA\). Chứng minh \(\Delta ABC = \Delta CDA\).`, fig: F.svg(340, 170, F.tri({ P: { A: [50, 140], B: [110, 30], C: [290, 30] }, ticks: { AB: 1, BC: 2 } }) + F.tri({ P: { A: [50, 140], C: [290, 30], D: [230, 140] }, names: { A: "", C: "" }, ticks: { CD: 1, DA: 2 } })), steps: [m`Xét \(\Delta ABC\) và \(\Delta CDA\) có:`, m`\(AB = CD\) (gt); \(BC = DA\) (gt);`, m`\(AC\) là cạnh chung.`, m`Vậy \(\Delta ABC = \Delta CDA\) (c.c.c).`], ans: m`\(\Delta ABC = \Delta CDA\) (c.c.c)` }
  ],
  exercises: [
    { q: m`Cho \(\Delta ABC = \Delta MNP\). Cạnh tương ứng với cạnh \(BC\) là:`, type: "choice", choices: ["MN", "NP", "MP", "PN hoặc MN"], answer: 1, hint: "B ↔ N, C ↔ P.", steps: [m`Từ kí hiệu: \(A \leftrightarrow M\), \(B \leftrightarrow N\), \(C \leftrightarrow P\).`, m`Nên \(BC \leftrightarrow NP\).`] },
    { q: m`Cho \(\Delta ABC = \Delta MNP\) và \(\widehat B = 60^\circ\). Tính \(\widehat N\).`, type: "num", answer: 60, unit: "°", hint: "B và N là hai đỉnh tương ứng.", steps: [m`\(B\) và \(N\) đứng ở vị trí thứ hai nên tương ứng với nhau.`, m`\(\widehat N = \widehat B = 60^\circ\).`], ans: m`\(60^\circ\)` },
    { q: m`Cho \(\Delta ABC = \Delta DEF\) với \(AB = 3\) cm, \(BC = 4\) cm, \(AC = 5\) cm. Tính chu vi tam giác \(DEF\).`, type: "num", answer: 12, unit: "cm", hint: "Hai tam giác bằng nhau có các cạnh bằng nhau nên chu vi bằng nhau.", steps: [m`\(DE = 3\), \(EF = 4\), \(DF = 5\) (cm).`, m`Chu vi \(= 3 + 4 + 5 = 12\) (cm).`], ans: "12 cm" },
    { q: m`\(\Delta ABC\) và \(\Delta DEF\) có \(AB = DE\), \(BC = EF\), \(CA = FD\). Cách viết nào đúng?`, type: "choice", choices: [m`\(\Delta ABC = \Delta DFE\)`, m`\(\Delta ABC = \Delta EDF\)`, m`\(\Delta ABC = \Delta DEF\)`, m`\(\Delta BAC = \Delta DEF\)`], answer: 2, hint: "Ghép các đỉnh: A với D (vì AB = DE, CA = FD)...", steps: [m`\(AB = DE\) và \(CA = FD\): đỉnh chung của AB, CA là A; của DE, FD là D \(\Rightarrow A \leftrightarrow D\).`, m`Tương tự \(B \leftrightarrow E\), \(C \leftrightarrow F\).`, m`Viết: \(\Delta ABC = \Delta DEF\).`] },
    { q: m`Trong ví dụ tứ giác \(ABCD\) có \(AB = CD\), \(BC = DA\), cặp cạnh bằng nhau thứ ba dùng để chứng minh \(\Delta ABC = \Delta CDA\) là:`, type: "choice", choices: [m`\(AB = BC\)`, m`\(AC\) là cạnh chung`, m`\(BD\) là cạnh chung`, m`\(AD = DC\)`], answer: 1, hint: "Cạnh nào nằm trong cả hai tam giác?", steps: [m`Cạnh \(AC\) thuộc cả \(\Delta ABC\) và \(\Delta CDA\), nên \(AC = CA\) (cạnh chung).`] },
    { lv: 2, q: m`Cho \(\Delta ABC = \Delta DEF\), \(\widehat A = 50^\circ\), \(\widehat E = 70^\circ\). Tính \(\widehat F\).`, type: "num", answer: 60, unit: "°", hint: m`\(\widehat B = \widehat E\), rồi dùng tổng ba góc.`, steps: [m`\(\widehat B = \widehat E = 70^\circ\).`, m`\(\widehat C = 180^\circ - 50^\circ - 70^\circ = 60^\circ\).`, m`\(\widehat F = \widehat C = 60^\circ\).`], ans: m`\(60^\circ\)` }
  ],
  summary: m`\(\Delta ABC = \Delta DEF\): các đỉnh tương ứng theo thứ tự viết. Ba cặp cạnh bằng nhau \(\Rightarrow\) hai tam giác bằng nhau (c.c.c).`
});

lesson({
  id: "14",
  num: 14,
  label: "Bài 14",
  title: "Trường hợp bằng nhau thứ hai (c.g.c) và thứ ba (g.c.g) của tam giác",
  pages: "70–73",
  intro: m`Không phải lúc nào cũng biết đủ ba cạnh. Bài này cho thêm hai “chìa khoá” nữa: hai cạnh và góc xen giữa, hoặc một cạnh và hai góc kề.`,
  goals: ["Nhận ra góc xen giữa hai cạnh, hai góc kề một cạnh", "Chứng minh tam giác bằng nhau theo c.g.c và g.c.g"],
  theory: [
    {
      h: "1. Cạnh – góc – cạnh (c.g.c)",
      body: m`<p><b>Góc xen giữa</b> hai cạnh là góc tạo bởi chính hai cạnh đó. Ví dụ góc xen giữa \(AB\) và \(AC\) là \(\widehat A\).</p>`,
      fig: twoTri({ ticks: { AB: 1, AC: 2 }, arcs: { A: 1 } }, { ticks: { DE: 1, DF: 2 }, arcs: { D: 1 } }),
      key: m`<p>Nếu hai cạnh và <b>góc xen giữa</b> của tam giác này bằng hai cạnh và góc xen giữa của tam giác kia thì hai tam giác bằng nhau.</p>`
    },
    {
      h: "2. Góc – cạnh – góc (g.c.g)",
      body: m`<p>Hai góc <b>kề</b> cạnh \(BC\) là \(\widehat B\) và \(\widehat C\) (hai góc ở hai đầu cạnh đó).</p>`,
      fig: twoTri({ ticks: { BC: 1 }, arcs: { B: 1, C: 2 } }, { ticks: { EF: 1 }, arcs: { E: 1, F: 2 } }),
      key: m`<p>Nếu một cạnh và <b>hai góc kề</b> cạnh ấy của tam giác này bằng một cạnh và hai góc kề của tam giác kia thì hai tam giác bằng nhau.</p>`
    },
    {
      h: "3. Chọn trường hợp nào?",
      body: m`<ul><li>Biết 3 cặp cạnh \(\to\) c.c.c.</li><li>Biết 2 cặp cạnh + góc nằm giữa chúng \(\to\) c.g.c.</li><li>Biết 1 cặp cạnh + 2 góc ở hai đầu cạnh đó \(\to\) g.c.g.</li></ul>`,
      tip: m`Hai cạnh và một góc <b>không xen giữa</b> thì CHƯA đủ để kết luận hai tam giác bằng nhau.`
    }
  ],
  mistakes: [
    m`Dùng c.g.c với góc không xen giữa: \(AB = DE\), \(AC = DF\), \(\widehat B = \widehat E\) là chưa đủ.`,
    "Quên các “quà tặng” thường gặp: cạnh chung, hai góc đối đỉnh bằng nhau."
  ],
  examples: [
    { q: m`Hai đoạn thẳng \(AB\) và \(CD\) cắt nhau tại trung điểm \(O\) của mỗi đoạn. Chứng minh \(\Delta OAC = \Delta OBD\).`, fig: figBowtie, steps: [m`Xét \(\Delta OAC\) và \(\Delta OBD\) có:`, m`\(OA = OB\) (\(O\) là trung điểm \(AB\));`, m`\(\widehat{AOC} = \widehat{BOD}\) (hai góc đối đỉnh);`, m`\(OC = OD\) (\(O\) là trung điểm \(CD\)).`, m`Góc \(O\) xen giữa hai cạnh nên \(\Delta OAC = \Delta OBD\) (c.g.c).`], ans: m`\(\Delta OAC = \Delta OBD\) (c.g.c)` }
  ],
  exercises: [
    { q: m`Trong \(\Delta ABC\), góc xen giữa hai cạnh \(AB\) và \(BC\) là:`, type: "choice", choices: [m`\(\widehat A\)`, m`\(\widehat B\)`, m`\(\widehat C\)`], answer: 1, hint: "Tìm đỉnh chung của hai cạnh.", steps: [m`\(AB\) và \(BC\) có chung đỉnh \(B\), nên góc xen giữa là \(\widehat B\).`] },
    { q: m`\(\Delta ABC\) và \(\Delta DEF\) có \(AB = DE\), \(\widehat B = \widehat E\), \(BC = EF\). Hai tam giác bằng nhau theo trường hợp:`, type: "choice", choices: ["c.c.c", "c.g.c", "g.c.g", "Chưa đủ điều kiện"], answer: 1, hint: m`\(\widehat B\) có nằm giữa \(AB\) và \(BC\) không?`, steps: [m`\(\widehat B\) là góc xen giữa \(AB\) và \(BC\); \(\widehat E\) xen giữa \(DE\) và \(EF\).`, "Hai cạnh và góc xen giữa: trường hợp c.g.c."] },
    { q: m`\(\Delta ABC\) và \(\Delta DEF\) có \(\widehat B = \widehat E\), \(BC = EF\), \(\widehat C = \widehat F\). Hai tam giác bằng nhau theo trường hợp:`, type: "choice", choices: ["c.c.c", "c.g.c", "g.c.g", "Chưa đủ điều kiện"], answer: 2, hint: "Một cạnh và hai góc ở hai đầu cạnh đó.", steps: [m`\(\widehat B, \widehat C\) là hai góc kề cạnh \(BC\).`, "Một cạnh và hai góc kề: trường hợp g.c.g."] },
    { q: m`\(\Delta ABC\) và \(\Delta DEF\) có \(AB = DE\), \(AC = DF\), \(\widehat B = \widehat E\). Có kết luận được hai tam giác bằng nhau không?`, type: "choice", choices: ["Có, theo c.g.c", "Có, theo g.c.g", "Chưa kết luận được"], answer: 2, hint: m`Góc xen giữa \(AB\) và \(AC\) là góc nào?`, steps: [m`Góc xen giữa \(AB\) và \(AC\) là \(\widehat A\), không phải \(\widehat B\).`, "Hai cạnh và một góc không xen giữa thì chưa đủ để kết luận."] },
    { q: m`Hai đoạn thẳng \(AB\), \(CD\) cắt nhau tại trung điểm \(O\) của mỗi đoạn (hình). Biết \(AC = 5\) cm. Tính \(BD\).`, fig: figBowtie, type: "num", answer: 5, unit: "cm", hint: m`\(\Delta OAC = \Delta OBD\) (c.g.c) — xem Ví dụ.`, steps: [m`\(\Delta OAC = \Delta OBD\) (c.g.c) như ví dụ mẫu.`, m`\(AC\) và \(BD\) là hai cạnh tương ứng nên \(BD = AC = 5\) cm.`], ans: "5 cm" },
    { lv: 2, q: m`\(\Delta ABC\) và \(\Delta MNP\) có \(\widehat B = \widehat N = 60^\circ\), \(BC = NP = 4\) cm, \(\widehat C = \widehat P = 50^\circ\). Biết \(AB = 3{,}5\) cm. Tính \(MN\).`, type: "num", answer: 3.5, unit: "cm", hint: "Chứng minh hai tam giác bằng nhau trước (g.c.g), rồi dùng cạnh tương ứng.", steps: [m`\(\Delta ABC = \Delta MNP\) (g.c.g) vì có \(BC = NP\) và hai góc kề bằng nhau.`, m`\(MN\) tương ứng với \(AB\) nên \(MN = 3{,}5\) cm.`], ans: "3,5 cm" }
  ],
  summary: "c.g.c: hai cạnh + góc XEN GIỮA. g.c.g: một cạnh + hai góc KỀ cạnh đó."
});

lesson({
  id: "15",
  num: 15,
  label: "Bài 15",
  title: "Các trường hợp bằng nhau của tam giác vuông",
  pages: "75–79",
  intro: m`Tam giác vuông đã có sẵn một cặp góc bằng nhau (góc vuông), nên cần ít thông tin hơn để kết luận bằng nhau.`,
  goals: ["Nhớ 4 trường hợp bằng nhau của tam giác vuông", "Áp dụng vào bài tính độ dài, số đo góc"],
  theory: [
    {
      h: "1. Bốn trường hợp",
      body: m`<p>Hai tam giác vuông bằng nhau nếu có:</p>
      <ol>
        <li><b>Hai cạnh góc vuông</b> tương ứng bằng nhau (suy từ c.g.c).</li>
        <li><b>Một cạnh góc vuông và một góc nhọn kề</b> cạnh ấy bằng nhau (suy từ g.c.g).</li>
        <li><b>Cạnh huyền và một góc nhọn</b> bằng nhau.</li>
        <li><b>Cạnh huyền và một cạnh góc vuông</b> bằng nhau.</li>
      </ol>`,
      fig: triRight({}),
      cap: m`\(AB, AC\): cạnh góc vuông; \(BC\): cạnh huyền`,
      key: m`<p>Hai trường hợp đặc biệt chỉ có ở tam giác vuông: <b>cạnh huyền – góc nhọn</b> và <b>cạnh huyền – cạnh góc vuông</b>.</p>`
    },
    {
      h: "2. Một ứng dụng quen thuộc",
      body: m`<p>Tam giác \(ABC\) có \(AB = AC\), kẻ \(AH \perp BC\). Khi đó \(\Delta AHB = \Delta AHC\) (cạnh huyền – cạnh góc vuông: \(AB = AC\), \(AH\) chung), nên \(HB = HC\).</p>`,
      fig: figIsoAH
    }
  ],
  mistakes: [
    "Nhầm cạnh huyền với cạnh góc vuông. Cạnh huyền luôn đối diện góc vuông và là cạnh dài nhất.",
    "Dùng “cạnh góc vuông – góc nhọn” nhưng góc nhọn không kề với cạnh đó mà vẫn ghi g.c.g. (Khi ấy có thể dùng tổng góc để đưa về góc kề.)"
  ],
  examples: [
    { q: m`Tam giác \(ABC\) có \(AB = AC = 5\) cm, \(BC = 8\) cm, \(AH \perp BC\) tại \(H\). Tính \(HB\).`, fig: figIsoAH, steps: [m`Xét hai tam giác vuông \(AHB\) và \(AHC\) (vuông tại \(H\)):`, m`\(AB = AC\) (cạnh huyền); \(AH\) chung (cạnh góc vuông).`, m`\(\Rightarrow \Delta AHB = \Delta AHC\) (cạnh huyền – cạnh góc vuông) \(\Rightarrow HB = HC\).`, m`\(HB = 8 : 2 = 4\) (cm).`], ans: "HB = 4 cm" }
  ],
  exercises: [
    { q: m`\(\Delta ABC\) vuông tại \(A\), \(\Delta DEF\) vuông tại \(D\), có \(AB = DE\), \(AC = DF\). Hai tam giác bằng nhau theo trường hợp:`, type: "choice", choices: ["Hai cạnh góc vuông", "Cạnh huyền – góc nhọn", "Cạnh huyền – cạnh góc vuông", "Cạnh góc vuông – góc nhọn kề"], answer: 0, hint: m`\(AB, AC\) là cạnh gì của tam giác vuông tại \(A\)?`, steps: [m`\(AB, AC\) và \(DE, DF\) đều là các cạnh góc vuông.`, "Trường hợp: hai cạnh góc vuông."] },
    { q: m`Hai tam giác vuông \(ABC\) (vuông tại \(A\)) và \(DEF\) (vuông tại \(D\)) có \(BC = EF\), \(\widehat B = \widehat E\). Chúng bằng nhau theo trường hợp:`, type: "choice", choices: ["Hai cạnh góc vuông", "Cạnh huyền – góc nhọn", "Cạnh huyền – cạnh góc vuông", "Không bằng nhau"], answer: 1, hint: m`\(BC\) là cạnh gì?`, steps: [m`\(BC, EF\) là cạnh huyền; \(\widehat B = \widehat E\) là góc nhọn.`, "Trường hợp: cạnh huyền – góc nhọn."] },
    { q: m`Hai tam giác vuông \(ABC\) (vuông tại \(A\)) và \(DEF\) (vuông tại \(D\)) có \(BC = EF\), \(AB = DE\). Chúng bằng nhau theo trường hợp:`, type: "choice", choices: ["Hai cạnh góc vuông", "Cạnh huyền – góc nhọn", "Cạnh huyền – cạnh góc vuông", "c.c.c"], answer: 2, hint: "Một cặp cạnh huyền, một cặp cạnh góc vuông.", steps: ["BC = EF (cạnh huyền), AB = DE (cạnh góc vuông).", "Trường hợp: cạnh huyền – cạnh góc vuông."] },
    { q: "Trong tam giác vuông, cạnh huyền là cạnh:", type: "choice", choices: ["Kề với góc vuông", "Đối diện với góc vuông", "Ngắn nhất", "Bất kì"], answer: 1, hint: "Xem hình minh hoạ trong phần Hiểu nhanh.", steps: ["Cạnh huyền là cạnh đối diện với góc vuông (và là cạnh dài nhất)."] },
    { q: m`Tam giác \(ABC\) có \(AB = AC\), \(AH \perp BC\) tại \(H\), \(BC = 10\) cm. Tính \(HC\).`, fig: figIsoAH, type: "num", answer: 5, unit: "cm", hint: m`\(\Delta AHB = \Delta AHC\) nên \(H\) là trung điểm \(BC\).`, steps: [m`\(\Delta AHB = \Delta AHC\) (cạnh huyền – cạnh góc vuông) nên \(HB = HC\).`, m`\(HC = 10 : 2 = 5\) (cm).`], ans: "5 cm" },
    { lv: 2, q: m`\(\Delta ABC\) vuông tại \(A\) có \(\widehat B = 40^\circ\); \(\Delta DEF\) vuông tại \(D\) có \(\widehat E = 40^\circ\), \(EF = BC\) và \(DF = 3\) cm. Tính \(AC\).`, type: "num", answer: 3, unit: "cm", hint: "Hai tam giác bằng nhau theo cạnh huyền – góc nhọn. AC tương ứng với cạnh nào?", steps: [m`\(BC = EF\) (cạnh huyền), \(\widehat B = \widehat E\) (góc nhọn) \(\Rightarrow \Delta ABC = \Delta DEF\).`, m`\(AC\) tương ứng với \(DF\) nên \(AC = 3\) cm.`], ans: "3 cm" }
  ],
  summary: "Tam giác vuông: 2 cạnh góc vuông; cạnh góc vuông + góc nhọn kề; cạnh huyền + góc nhọn; cạnh huyền + cạnh góc vuông."
});

lesson({
  id: "16",
  num: 16,
  label: "Bài 16",
  title: "Tam giác cân. Đường trung trực của đoạn thẳng",
  pages: "80–84",
  intro: m`Mái nhà, biển báo “nhường đường”… đều có hình tam giác cân. Bài này cũng giới thiệu đường trung trực — đường thẳng mà mọi điểm trên đó cách đều hai đầu đoạn thẳng.`,
  goals: ["Nhận biết và tính góc trong tam giác cân, tam giác đều", "Hiểu đường trung trực và tính chất cách đều"],
  theory: [
    {
      h: "1. Tam giác cân",
      body: m`<p>Tam giác cân là tam giác có <b>hai cạnh bằng nhau</b>. Với \(\Delta ABC\) cân tại \(A\) (\(AB = AC\)): \(AB, AC\) là <b>cạnh bên</b>, \(BC\) là <b>cạnh đáy</b>, \(\widehat B, \widehat C\) là <b>góc ở đáy</b>, \(\widehat A\) là <b>góc ở đỉnh</b>.</p>`,
      fig: F.svg(320, 190, F.tri({ P: { A: [160, 25], B: [60, 170], C: [260, 170] }, ticks: { AB: 1, CA: 1 }, arcs: { B: 1, C: 1 } })),
      key: m`<p>Trong tam giác cân, <b>hai góc ở đáy bằng nhau</b>. Ngược lại, tam giác có hai góc bằng nhau là tam giác cân.</p>
      <p>Công thức nhanh: \(\widehat B = \widehat C = \dfrac{180^\circ - \widehat A}{2}\); \(\;\widehat A = 180^\circ - 2\widehat B\).</p>`
    },
    {
      h: "2. Tam giác đều",
      body: m`<p>Tam giác đều là tam giác có <b>ba cạnh bằng nhau</b>. Mỗi góc của tam giác đều bằng \(60^\circ\).</p>`,
      tip: m`Tam giác cân có một góc bằng \(60^\circ\) thì là tam giác đều.`
    },
    {
      h: "3. Đường trung trực của đoạn thẳng",
      body: m`<p>Đường thẳng vuông góc với đoạn thẳng tại <b>trung điểm</b> của nó gọi là đường trung trực của đoạn thẳng đó.</p>`,
      fig: figTrungTruc,
      cap: m`\(d\) là đường trung trực của \(AB\); \(M \in d\) thì \(MA = MB\)`,
      key: m`<p>Điểm nằm trên đường trung trực của một đoạn thẳng thì <b>cách đều</b> hai đầu mút của đoạn thẳng đó. Ngược lại, điểm cách đều hai đầu mút thì nằm trên đường trung trực.</p>`
    }
  ],
  mistakes: [
    "Nhầm góc ở đỉnh với góc ở đáy. Góc ở đỉnh là góc tạo bởi hai cạnh bên (hai cạnh bằng nhau).",
    "Đường trung trực phải vừa vuông góc vừa đi qua trung điểm; thiếu một trong hai điều kiện là không phải."
  ],
  examples: [
    { q: m`Tam giác \(ABC\) cân tại \(A\) có \(\widehat A = 40^\circ\). Tính \(\widehat B\) và \(\widehat C\).`, steps: [m`Hai góc ở đáy bằng nhau: \(\widehat B = \widehat C\).`, m`\(\widehat B + \widehat C = 180^\circ - 40^\circ = 140^\circ\).`, m`\(\widehat B = \widehat C = 140^\circ : 2 = 70^\circ\).`], ans: m`\(\widehat B = \widehat C = 70^\circ\)` }
  ],
  exercises: [
    { q: m`Tam giác \(ABC\) cân tại \(A\), \(\widehat A = 40^\circ\). Tính \(\widehat B\).`, type: "num", answer: 70, unit: "°", hint: "(180° − góc đỉnh) : 2.", steps: [m`\(\widehat B = (180^\circ - 40^\circ) : 2 = 70^\circ\).`], ans: m`\(70^\circ\)` },
    { q: m`Tam giác \(ABC\) cân tại \(A\), \(\widehat B = 65^\circ\). Tính \(\widehat A\).`, type: "num", answer: 50, unit: "°", hint: m`\(\widehat C = \widehat B\).`, steps: [m`\(\widehat C = \widehat B = 65^\circ\).`, m`\(\widehat A = 180^\circ - 2\cdot65^\circ = 50^\circ\).`], ans: m`\(50^\circ\)` },
    { q: m`Tam giác vuông cân (cân và có góc ở đỉnh bằng \(90^\circ\)). Mỗi góc ở đáy bằng:`, type: "num", answer: 45, unit: "°", hint: "(180° − 90°) : 2.", steps: [m`\((180^\circ - 90^\circ) : 2 = 45^\circ\).`], ans: m`\(45^\circ\)` },
    { q: "Tam giác đều có cạnh 5 cm. Chu vi của nó là:", type: "num", answer: 15, unit: "cm", hint: "Ba cạnh bằng nhau.", steps: [m`Chu vi \(= 3\cdot5 = 15\) (cm).`], ans: "15 cm" },
    { q: m`Điểm \(M\) nằm trên đường trung trực của đoạn \(AB\), biết \(MA = 7\) cm. Tính \(MB\).`, fig: figTrungTruc, type: "num", answer: 7, unit: "cm", hint: "Điểm trên trung trực cách đều hai đầu mút.", steps: [m`\(M\) thuộc đường trung trực của \(AB\) nên \(MB = MA = 7\) cm.`], ans: "7 cm" },
    { q: m`Đường thẳng \(d\) là đường trung trực của đoạn \(AB = 10\) cm, cắt \(AB\) tại \(I\). Tính \(IA\).`, type: "num", answer: 5, unit: "cm", hint: "I là trung điểm của AB.", steps: [m`Đường trung trực đi qua trung điểm nên \(I\) là trung điểm \(AB\).`, m`\(IA = 10 : 2 = 5\) (cm).`], ans: "5 cm" },
    { q: m`Tam giác cân có một góc bằng \(60^\circ\) là tam giác gì?`, type: "choice", choices: ["Tam giác vuông", "Tam giác tù", "Tam giác đều", "Không xác định được"], answer: 2, hint: "Thử cả hai khả năng: 60° là góc đỉnh, hoặc góc đáy.", steps: [m`Nếu \(60^\circ\) là góc đỉnh: hai góc đáy \(= (180^\circ - 60^\circ):2 = 60^\circ\).`, m`Nếu \(60^\circ\) là góc đáy: góc đỉnh \(= 180^\circ - 120^\circ = 60^\circ\).`, m`Cả hai trường hợp ba góc đều bằng \(60^\circ\) \(\Rightarrow\) tam giác đều.`] },
    { lv: 2, q: m`Tam giác cân có góc ở đáy bằng \(50^\circ\). Góc ở đỉnh bằng bao nhiêu?`, type: "num", answer: 80, unit: "°", hint: "180° − 2·50°.", steps: [m`Góc đỉnh \(= 180^\circ - 2\cdot 50^\circ = 80^\circ\).`], ans: m`\(80^\circ\)` }
  ],
  summary: m`Tam giác cân: hai góc đáy bằng nhau. Tam giác đều: mỗi góc \(60^\circ\). Điểm trên trung trực cách đều hai đầu đoạn thẳng.`
});

review({
  chapter: 4,
  pages: "68–69, 74, 85–87",
  recap: [
    "Tổng ba góc của tam giác bằng 180°.",
    "Ba trường hợp bằng nhau: c.c.c, c.g.c (góc xen giữa), g.c.g (hai góc kề).",
    "Tam giác vuông thêm: cạnh huyền – góc nhọn, cạnh huyền – cạnh góc vuông.",
    "Tam giác cân: hai góc đáy bằng nhau. Điểm trên trung trực cách đều hai đầu mút."
  ],
  exercises: [
    { q: m`Tam giác \(MNP\) có \(\widehat M = 90^\circ\), \(\widehat N = 2\widehat P\). Tính \(\widehat P\).`, type: "num", answer: 30, unit: "°", hint: m`\(\widehat N + \widehat P = 90^\circ\).`, steps: [m`\(\widehat N + \widehat P = 90^\circ\), mà \(\widehat N = 2\widehat P\) nên \(3\widehat P = 90^\circ\).`, m`\(\widehat P = 30^\circ\).`], ans: m`\(30^\circ\)` },
    { q: m`Cho \(\Delta ABC = \Delta HIK\). Góc tương ứng với \(\widehat C\) là:`, type: "choice", choices: [m`\(\widehat H\)`, m`\(\widehat I\)`, m`\(\widehat K\)`], answer: 2, hint: "Đỉnh thứ ba ứng với đỉnh thứ ba.", steps: [m`\(C\) ở vị trí thứ ba, \(K\) cũng ở vị trí thứ ba \(\Rightarrow \widehat C = \widehat K\).`] },
    { q: m`\(\Delta ABC\) và \(\Delta A'B'C'\) có \(AB = A'B'\), \(\widehat A = \widehat A'\), \(\widehat B = \widehat B'\). Hai tam giác bằng nhau theo trường hợp:`, type: "choice", choices: ["c.c.c", "c.g.c", "g.c.g"], answer: 2, hint: m`\(\widehat A, \widehat B\) là hai góc kề cạnh nào?`, steps: [m`\(\widehat A, \widehat B\) kề cạnh \(AB\).`, "Một cạnh và hai góc kề: g.c.g."] },
    { q: m`Tam giác \(ABC\) cân tại \(B\), \(\widehat A = 72^\circ\). Tính \(\widehat B\).`, type: "num", answer: 36, unit: "°", hint: "Cân tại B nên hai góc đáy là A và C.", steps: [m`Cân tại \(B\) nên \(\widehat C = \widehat A = 72^\circ\).`, m`\(\widehat B = 180^\circ - 2\cdot72^\circ = 36^\circ\).`], ans: m`\(36^\circ\)` },
    { q: m`Tam giác \(ABC\) cân tại \(A\) có chu vi 20 cm, cạnh đáy \(BC = 6\) cm. Tính \(AB\).`, type: "num", answer: 7, unit: "cm", hint: "Hai cạnh bên bằng nhau.", steps: [m`\(AB + AC = 20 - 6 = 14\) (cm).`, m`\(AB = AC\) nên \(AB = 14 : 2 = 7\) (cm).`], ans: "7 cm" },
    { lv: 2, q: m`Cho \(\Delta ABC\) cân tại \(A\), \(M\) là trung điểm của \(BC\). Biết \(\widehat{BAC} = 50^\circ\). Tính \(\widehat{BAM}\).`, type: "num", answer: 25, unit: "°", hint: m`\(\Delta ABM = \Delta ACM\) (c.c.c), nên \(AM\) là tia phân giác của \(\widehat A\).`, steps: [m`\(\Delta ABM\) và \(\Delta ACM\) có \(AB = AC\), \(BM = CM\), \(AM\) chung \(\Rightarrow\) bằng nhau (c.c.c).`, m`Suy ra \(\widehat{BAM} = \widehat{CAM}\), tức \(AM\) là tia phân giác của \(\widehat{BAC}\).`, m`\(\widehat{BAM} = 50^\circ : 2 = 25^\circ\).`], ans: m`\(25^\circ\)` }
  ]
});
