/* ================= CHƯƠNG I. SỐ HỮU TỈ ================= */

lesson({
  id: "1",
  num: 1,
  label: "Bài 1",
  title: "Tập hợp các số hữu tỉ",
  pages: "5–9",
  intro: m`Số nguyên (…, −2, −1, 0, 1, 2, …) chưa đủ để nói “nửa cân”, “âm một phần tư”. Số hữu tỉ là “họ” rộng hơn, gồm mọi số viết được dưới dạng phân số.`,
  goals: [
    "Nhận biết một số có phải số hữu tỉ không",
    "Biểu diễn số hữu tỉ trên trục số, tìm số đối",
    "So sánh hai số hữu tỉ"
  ],
  theory: [
    {
      h: "1. Số hữu tỉ là gì?",
      body: m`<p>Số hữu tỉ là số viết được dưới dạng phân số \(\dfrac{a}{b}\) với \(a, b\) là số nguyên và \(b \ne 0\).</p>
      <p>Ví dụ: \(\dfrac{-3}{4}\); \(\;0{,}5 = \dfrac12\); \(\;-2 = \dfrac{-2}{1}\); \(\;1\dfrac14 = \dfrac54\); \(\;0 = \dfrac01\).</p>`,
      key: m`<p>Tập hợp các số hữu tỉ kí hiệu là \(\mathbb{Q}\). Mọi số nguyên, số thập phân hữu hạn, hỗn số… đều là số hữu tỉ.</p>`,
      tip: m`Một số hữu tỉ có nhiều cách viết: \(\dfrac12 = \dfrac24 = \dfrac{-3}{-6} = 0{,}5\). Tất cả là <b>cùng một số</b>.`
    },
    {
      h: "2. Biểu diễn trên trục số",
      body: m`<p>Để biểu diễn \(\dfrac{a}{b}\) (mẫu dương): chia mỗi đoạn đơn vị thành \(b\) phần bằng nhau, rồi đếm \(a\) phần — sang phải nếu dương, sang trái nếu âm.</p>
      <p>Hình dưới: mỗi đơn vị chia 4 phần. Điểm \(M\) biểu diễn \(\dfrac34\), điểm \(N\) biểu diễn \(-\dfrac54\).</p>`,
      fig: F.numberLine({ min: -2, max: 2, div: 4, points: [{ v: 0.75, label: "M" }, { v: -1.25, label: "N", color: "#2b7489" }] })
    },
    {
      h: "3. Số đối",
      body: m`<p>Hai số nằm đối xứng nhau qua điểm 0 trên trục số gọi là hai số <b>đối nhau</b>. Số đối của \(a\) kí hiệu là \(-a\).</p>
      <p>Ví dụ: số đối của \(\dfrac25\) là \(-\dfrac25\); số đối của \(-0{,}7\) là \(0{,}7\).</p>`,
      key: m`<p>\(-(-a) = a\) &nbsp;và&nbsp; \(a + (-a) = 0\).</p>`
    },
    {
      h: "4. So sánh hai số hữu tỉ",
      body: m`<p>Cách chắc ăn nhất: <b>viết hai số về phân số cùng mẫu dương</b>, rồi so sánh tử. Tử lớn hơn thì số lớn hơn.</p>
      <p>Hoặc đổi cả hai ra số thập phân rồi so sánh.</p>
      <ul>
        <li>Số hữu tỉ lớn hơn 0 gọi là <b>số hữu tỉ dương</b>; nhỏ hơn 0 là <b>số hữu tỉ âm</b>. Số 0 không dương cũng không âm.</li>
        <li>Nếu \(a < b\) thì trên trục số, điểm \(a\) nằm bên trái điểm \(b\).</li>
      </ul>`,
      key: m`<p>Số âm \(<\) 0 \(<\) số dương. Hai số âm: số nào có phần số lớn hơn thì <b>nhỏ hơn</b>.</p>`
    }
  ],
  mistakes: [
    m`Cho rằng \(\dfrac{3}{-4}\) không phải số hữu tỉ. Thực ra \(\dfrac{3}{-4} = \dfrac{-3}{4}\), vẫn là số hữu tỉ.`,
    m`So sánh tử khi mẫu khác nhau: \(\dfrac23\) và \(\dfrac34\) không so sánh được bằng cách nhìn tử 2 và 3 ngay mà phải quy đồng.`,
    m`Quên rằng mẫu số phải khác 0: \(\dfrac{5}{0}\) không có nghĩa.`
  ],
  examples: [
    {
      q: m`So sánh \(-0{,}6\) và \(-\dfrac23\).`,
      steps: [
        m`Đổi \(-0{,}6\) ra phân số: \(-0{,}6 = -\dfrac{6}{10} = -\dfrac35\).`,
        m`Quy đồng mẫu 15: \(-\dfrac35 = \dfrac{-9}{15}\), \(\;-\dfrac23 = \dfrac{-10}{15}\).`,
        m`So sánh tử: \(-10 < -9\) nên \(\dfrac{-10}{15} < \dfrac{-9}{15}\).`
      ],
      ans: m`\(-\dfrac23 < -0{,}6\)`
    },
    {
      q: m`Sắp xếp theo thứ tự tăng dần: \(\dfrac12;\; -1;\; 0{,}3;\; -\dfrac14\).`,
      steps: [
        m`Đổi hết ra số thập phân: \(\dfrac12 = 0{,}5\); \(-\dfrac14 = -0{,}25\).`,
        m`Các số âm: \(-1\) và \(-0{,}25\). Vì \(1 > 0{,}25\) nên \(-1 < -0{,}25\).`,
        m`Các số dương: \(0{,}3 < 0{,}5\).`
      ],
      ans: m`\(-1 < -\dfrac14 < 0{,}3 < \dfrac12\)`
    }
  ],
  exercises: [
    {
      q: m`Cách viết nào <b>không</b> biểu diễn một số hữu tỉ?`,
      type: "choice",
      choices: [m`\(\dfrac{-2}{5}\)`, m`\(0\)`, m`\(\dfrac{7}{0}\)`, m`\(1{,}25\)`],
      answer: 2,
      hint: "Nhớ điều kiện của mẫu số.",
      steps: [m`\(\dfrac{-2}{5}\), \(0 = \dfrac01\), \(1{,}25 = \dfrac54\) đều viết được dạng phân số với mẫu khác 0.`, m`\(\dfrac{7}{0}\) có mẫu bằng 0 nên không có nghĩa, không phải số hữu tỉ.`]
    },
    { q: m`Viết \(0{,}75\) dưới dạng phân số tối giản.`, type: "num", answer: "3/4", fraction: "reduced", hint: m`\(0{,}75 = \dfrac{75}{100}\), rồi rút gọn.`, steps: [m`\(0{,}75 = \dfrac{75}{100}\).`, m`Chia cả tử và mẫu cho 25: \(\dfrac{3}{4}\).`], ans: m`\(\dfrac34\)` },
    { q: m`Số đối của \(-\dfrac57\) là bao nhiêu?`, type: "num", answer: "5/7", hint: "Số đối chỉ đổi dấu, giữ nguyên phần số.", steps: [m`Số đối của \(a\) là \(-a\).`, m`\(-\left(-\dfrac57\right) = \dfrac57\).`], ans: m`\(\dfrac57\)` },
    { q: m`Số đối của \(0{,}4\) là bao nhiêu?`, type: "num", answer: -0.4, hint: "Đổi dấu.", steps: [m`Số đối của \(0{,}4\) là \(-0{,}4\).`], ans: "−0,4" },
    {
      q: m`Điểm \(A\) trên trục số dưới đây biểu diễn số hữu tỉ nào?`,
      fig: F.numberLine({ min: -2, max: 1, div: 4, points: [{ v: -0.75, label: "A" }] }),
      type: "num", answer: "-3/4",
      hint: "Mỗi đơn vị được chia thành mấy phần? A cách 0 mấy phần, về phía nào?",
      steps: [m`Mỗi đoạn đơn vị được chia thành 4 phần, mỗi phần là \(\dfrac14\).`, m`Điểm A nằm bên trái 0, cách 0 đúng 3 phần.`, m`Vậy A biểu diễn \(-\dfrac34\).`],
      ans: m`\(-\dfrac34\)`
    },
    {
      q: m`So sánh \(-\dfrac34\) và \(-\dfrac45\).`,
      type: "choice",
      choices: [m`\(-\dfrac34 > -\dfrac45\)`, m`\(-\dfrac34 < -\dfrac45\)`, m`\(-\dfrac34 = -\dfrac45\)`],
      answer: 0,
      hint: "Quy đồng mẫu 20 rồi so sánh tử.",
      steps: [m`\(-\dfrac34 = \dfrac{-15}{20}\), \(-\dfrac45 = \dfrac{-16}{20}\).`, m`Vì \(-15 > -16\) nên \(-\dfrac34 > -\dfrac45\).`]
    },
    {
      q: m`Số nào nằm giữa 0 và 1 trên trục số?`,
      type: "choice",
      choices: [m`\(\dfrac54\)`, m`\(-\dfrac13\)`, m`\(\dfrac23\)`, m`\(\dfrac32\)`],
      answer: 2,
      hint: "Số nằm giữa 0 và 1 phải dương và nhỏ hơn 1 (tử nhỏ hơn mẫu).",
      steps: [m`\(\dfrac54 > 1\), \(\dfrac32 > 1\); \(-\dfrac13 < 0\).`, m`Chỉ có \(\dfrac23\) thoả mãn \(0 < \dfrac23 < 1\).`]
    },
    {
      lv: 2,
      q: m`Sắp xếp theo thứ tự tăng dần: \(-\dfrac12;\; 0{,}3;\; -0{,}7;\; \dfrac14\).`,
      type: "choice",
      choices: [
        m`\(-\dfrac12 < -0{,}7 < \dfrac14 < 0{,}3\)`,
        m`\(-0{,}7 < -\dfrac12 < \dfrac14 < 0{,}3\)`,
        m`\(-0{,}7 < -\dfrac12 < 0{,}3 < \dfrac14\)`,
        m`\(\dfrac14 < 0{,}3 < -\dfrac12 < -0{,}7\)`
      ],
      answer: 1,
      hint: "Đổi hết sang số thập phân.",
      steps: [m`\(-\dfrac12 = -0{,}5\); \(\dfrac14 = 0{,}25\).`, m`Số âm: \(-0{,}7 < -0{,}5\) (vì 0,7 > 0,5).`, m`Số dương: \(0{,}25 < 0{,}3\).`]
    },
    {
      lv: 2,
      q: m`Nhiệt độ lúc 5 giờ sáng ở Sa Pa là \(-1{,}5^\circ\text{C}\), ở Mẫu Sơn là \(-\dfrac74\;{}^\circ\text{C}\). Nơi nào lạnh hơn?`,
      type: "choice",
      choices: ["Sa Pa", "Mẫu Sơn", "Bằng nhau"],
      answer: 1,
      hint: m`Nơi lạnh hơn có nhiệt độ nhỏ hơn. Đổi \(-\dfrac74\) ra số thập phân.`,
      steps: [m`\(-\dfrac74 = -1{,}75\).`, m`Vì \(1{,}75 > 1{,}5\) nên \(-1{,}75 < -1{,}5\).`, m`Nhiệt độ ở Mẫu Sơn thấp hơn nên Mẫu Sơn lạnh hơn.`]
    }
  ],
  summary: m`Số hữu tỉ = số viết được thành phân số \(\dfrac ab\) (\(b \ne 0\)). Muốn so sánh: quy đồng cùng mẫu dương hoặc đổi ra số thập phân.`
});

lesson({
  id: "2",
  num: 2,
  label: "Bài 2",
  title: "Cộng, trừ, nhân, chia số hữu tỉ",
  pages: "10–13",
  intro: m`Tin vui: bạn không phải học quy tắc mới. Cộng trừ nhân chia số hữu tỉ làm y hệt phân số, chỉ cần cẩn thận với dấu.`,
  goals: ["Thực hiện 4 phép tính với số hữu tỉ", "Dùng tính chất để tính nhanh, tính hợp lí"],
  theory: [
    {
      h: "1. Cộng và trừ",
      body: m`<p>Viết các số về dạng phân số (hoặc cùng dạng số thập phân) rồi tính như phân số / số thập phân.</p>
      <p>\(-\dfrac23 + 0{,}5 = -\dfrac46 + \dfrac36 = -\dfrac16\)</p>
      <p>Phép cộng số hữu tỉ có các tính chất quen thuộc: <b>giao hoán</b> \(a + b = b + a\), <b>kết hợp</b> \((a+b)+c = a+(b+c)\), cộng với 0, cộng với số đối bằng 0.</p>`,
      tip: m`Thấy các số hạng có thể “bù” nhau thành số tròn thì gom chúng lại trước.`
    },
    {
      h: "2. Nhân và chia",
      body: m`<p>\(\dfrac ab \cdot \dfrac cd = \dfrac{a\cdot c}{b \cdot d}\) &nbsp;&nbsp; \(\dfrac ab : \dfrac cd = \dfrac ab \cdot \dfrac dc\) (với \(c \ne 0\))</p>
      <p>Số \(\dfrac{d}{c}\) gọi là <b>số nghịch đảo</b> của \(\dfrac cd\). Tích của một số với số nghịch đảo của nó bằng 1.</p>`,
      key: m`<p>Quy tắc dấu giống số nguyên: cùng dấu \(\to\) dương, khác dấu \(\to\) âm.</p>`
    },
    {
      h: "3. Tính nhanh bằng cách đặt thừa số chung",
      body: m`<p>Tính chất phân phối: \(a\cdot b + a \cdot c = a\cdot(b + c)\).</p>
      <p>\(\dfrac57\cdot\left(-\dfrac34\right) + \dfrac57\cdot\left(-\dfrac14\right) = \dfrac57\cdot\left(-\dfrac34 - \dfrac14\right) = \dfrac57 \cdot (-1) = -\dfrac57\)</p>`
    }
  ],
  mistakes: [
    m`Chia thì đảo số chia (số đứng sau), không đảo số bị chia: \(\dfrac23 : \dfrac45 = \dfrac23\cdot\dfrac54\).`,
    m`Nghịch đảo của \(-\dfrac35\) là \(-\dfrac53\) (vẫn giữ dấu âm), không phải \(\dfrac53\).`,
    m`Đổi hỗn số sai: \(-1\dfrac23 = -\dfrac53\), không phải \(\dfrac{-1\cdot3+2}{3}\).`
  ],
  examples: [
    {
      q: m`Tính \(0{,}6 - \dfrac32\).`,
      steps: [m`Đổi \(0{,}6 = \dfrac{3}{5}\).`, m`Quy đồng mẫu 10: \(\dfrac35 = \dfrac6{10}\), \(\dfrac32 = \dfrac{15}{10}\).`, m`\(\dfrac{6}{10} - \dfrac{15}{10} = \dfrac{-9}{10}\).`],
      ans: m`\(-\dfrac{9}{10}\) (hay \(-0{,}9\))`
    },
    {
      q: m`Tính \(\left(-\dfrac{3}{5}\right) : \dfrac{9}{10}\).`,
      steps: [m`Chia là nhân với nghịch đảo: \(-\dfrac35 \cdot \dfrac{10}{9}\).`, m`Rút gọn chéo: 3 với 9 (chia 3), 10 với 5 (chia 5): \(-\dfrac{1}{1}\cdot\dfrac{2}{3}\).`, m`Khác dấu nên kết quả âm.`],
      ans: m`\(-\dfrac23\)`
    }
  ],
  exercises: [
    { q: m`Tính \(-\dfrac14 + \dfrac56\).`, type: "num", answer: "7/12", hint: "Mẫu chung là 12.", steps: [m`\(-\dfrac14 = -\dfrac{3}{12}\), \(\dfrac56 = \dfrac{10}{12}\).`, m`\(\dfrac{-3 + 10}{12} = \dfrac{7}{12}\).`], ans: m`\(\dfrac7{12}\)` },
    { q: m`Tính \(0{,}6 - \dfrac32\).`, type: "num", answer: -0.9, hint: m`\(\dfrac32 = 1{,}5\).`, steps: [m`\(\dfrac32 = 1{,}5\).`, m`\(0{,}6 - 1{,}5 = -0{,}9\).`], ans: m`\(-0{,}9 = -\dfrac{9}{10}\)` },
    { q: m`Tính \(\left(-\dfrac49\right)\cdot\dfrac{15}{8}\).`, type: "num", answer: "-5/6", hint: "Rút gọn chéo 4 với 8, 15 với 9.", steps: [m`Rút gọn chéo: \(4\) và \(8\) chia 4 được \(1\) và \(2\); \(15\) và \(9\) chia 3 được \(5\) và \(3\).`, m`\(-\dfrac{1\cdot 5}{3 \cdot 2} = -\dfrac56\).`], ans: m`\(-\dfrac56\)` },
    { q: m`Tính \(\left(-\dfrac35\right) : \dfrac{9}{10}\).`, type: "num", answer: "-2/3", hint: m`Đổi thành \(-\dfrac35\cdot\dfrac{10}{9}\).`, steps: [m`\(-\dfrac35\cdot\dfrac{10}{9} = -\dfrac{30}{45}\).`, m`Rút gọn cho 15: \(-\dfrac23\).`], ans: m`\(-\dfrac23\)` },
    { q: m`Tính \((-2{,}5)\cdot 0{,}4\).`, type: "num", answer: -1, hint: m`\(2{,}5 \cdot 0{,}4 = 1\).`, steps: [m`\(2{,}5\cdot0{,}4 = 1\).`, m`Khác dấu nên kết quả là \(-1\).`], ans: "−1" },
    { q: m`Số nghịch đảo của \(-1\dfrac23\) là bao nhiêu?`, type: "num", answer: "-3/5", hint: "Đổi hỗn số ra phân số trước, rồi lật ngược.", steps: [m`\(-1\dfrac23 = -\dfrac53\).`, m`Nghịch đảo của \(-\dfrac53\) là \(-\dfrac35\) (giữ dấu).`], ans: m`\(-\dfrac35\)` },
    { lv: 2, q: m`Tính hợp lí: \(\left(-\dfrac37\right)\cdot\dfrac{5}{11} + \left(-\dfrac37\right)\cdot\dfrac{6}{11}\).`, type: "num", answer: "-3/7", hint: m`Đặt \(-\dfrac37\) ra ngoài làm thừa số chung.`, steps: [m`\(= -\dfrac37\cdot\left(\dfrac5{11} + \dfrac6{11}\right)\).`, m`\(\dfrac5{11}+\dfrac6{11} = \dfrac{11}{11} = 1\).`, m`\(-\dfrac37 \cdot 1 = -\dfrac37\).`], ans: m`\(-\dfrac37\)` },
    { lv: 2, q: m`Tính nhanh: \(\dfrac{2}{3} + \left(-\dfrac{5}{7}\right) + \dfrac13 + \dfrac{-2}{7}\).`, type: "num", answer: 0, hint: "Gom các phân số cùng mẫu với nhau.", steps: [m`Nhóm: \(\left(\dfrac23 + \dfrac13\right) + \left(-\dfrac57 - \dfrac27\right)\).`, m`\(= 1 + (-1) = 0\).`], ans: "0" },
    { lv: 2, q: m`Một chai nước có \(1{,}5\) lít. Bạn Lan rót ra \(\dfrac34\) lít. Trong chai còn lại bao nhiêu lít?`, type: "num", answer: 0.75, unit: "lít", hint: m`\(\dfrac34 = 0{,}75\).`, steps: [m`Số nước còn lại \(= 1{,}5 - \dfrac34\).`, m`\(\dfrac34 = 0{,}75\) nên \(1{,}5 - 0{,}75 = 0{,}75\) (lít).`], ans: "0,75 lít" }
  ],
  summary: m`Cộng trừ: quy đồng. Nhân: tử × tử, mẫu × mẫu. Chia: nhân với nghịch đảo. Luôn xét dấu trước khi tính phần số.`
});

lesson({
  id: "3",
  num: 3,
  label: "Bài 3",
  title: "Luỹ thừa với số mũ tự nhiên của một số hữu tỉ",
  pages: "16–19",
  intro: m`Luỹ thừa chỉ là cách viết gọn phép nhân lặp lại. Thay vì viết \(2\cdot2\cdot2\cdot2\cdot2\), ta viết \(2^5\).`,
  goals: ["Tính luỹ thừa của số hữu tỉ, kể cả số âm", "Nhân, chia hai luỹ thừa cùng cơ số; luỹ thừa của luỹ thừa"],
  theory: [
    {
      h: "1. Luỹ thừa là gì?",
      body: m`<p>\(x^n = \underbrace{x\cdot x\cdots x}_{n \text{ thừa số}}\) &nbsp;(đọc là “\(x\) mũ \(n\)”). \(x\) là <b>cơ số</b>, \(n\) là <b>số mũ</b>.</p>
      <p>Quy ước: \(x^1 = x\); \(\;x^0 = 1\) (với \(x \ne 0\)).</p>
      <p>Với phân số: \(\left(\dfrac ab\right)^n = \dfrac{a^n}{b^n}\). Ví dụ \(\left(\dfrac23\right)^3 = \dfrac{8}{27}\).</p>`
    },
    {
      h: "2. Dấu của luỹ thừa số âm",
      body: m`<p>\((-2)^2 = (-2)\cdot(-2) = 4\) &nbsp;&nbsp; \((-2)^3 = (-2)\cdot(-2)\cdot(-2) = -8\)</p>`,
      key: m`<p>Số âm với <b>số mũ chẵn</b> \(\to\) kết quả dương. Số âm với <b>số mũ lẻ</b> \(\to\) kết quả âm.</p>`
    },
    {
      h: "3. Ba công thức cần thuộc",
      body: m`<ul>
        <li>Nhân cùng cơ số — <b>cộng</b> số mũ: \(x^m \cdot x^n = x^{m+n}\)</li>
        <li>Chia cùng cơ số — <b>trừ</b> số mũ: \(x^m : x^n = x^{m-n}\) (\(x \ne 0\), \(m \ge n\))</li>
        <li>Luỹ thừa của luỹ thừa — <b>nhân</b> số mũ: \(\left(x^m\right)^n = x^{m\cdot n}\)</li>
      </ul>`,
      tip: m`Không nhớ công thức? Viết ra: \(x^2\cdot x^3 = (x\cdot x)\cdot(x\cdot x\cdot x)\) — đếm được 5 chữ \(x\), vậy là \(x^5\).`
    }
  ],
  mistakes: [
    m`\(2^3\) không phải \(2\cdot3 = 6\). \(2^3 = 2\cdot2\cdot2 = 8\).`,
    m`\((-2)^4 = 16\) nhưng \(-2^4 = -(2^4) = -16\). Dấu ngoặc rất quan trọng!`,
    m`\(\left(x^2\right)^3 = x^6\) chứ không phải \(x^5\).`,
    m`\(3^2 \cdot 3^4 = 3^6\), không phải \(9^6\) hay \(3^8\).`
  ],
  examples: [
    { q: m`Tính \(\left(-\dfrac23\right)^3\).`, steps: [m`\(\left(-\dfrac23\right)^3 = \dfrac{(-2)^3}{3^3}\).`, m`\((-2)^3 = -8\) (mũ lẻ nên âm), \(3^3 = 27\).`], ans: m`\(-\dfrac{8}{27}\)` },
    { q: m`Viết gọn và tính \((0{,}5)^3 \cdot (0{,}5)^2\).`, steps: [m`Cùng cơ số \(0{,}5\), nhân thì cộng số mũ: \((0{,}5)^{3+2} = (0{,}5)^5\).`, m`\((0{,}5)^5 = 0{,}5\cdot0{,}5\cdot0{,}5\cdot0{,}5\cdot0{,}5 = 0{,}03125\).`], ans: m`\((0{,}5)^5 = 0{,}03125\)` }
  ],
  exercises: [
    { q: m`Tính \(\left(-\dfrac12\right)^3\).`, type: "num", answer: "-1/8", hint: "Số mũ lẻ thì kết quả mang dấu gì?", steps: [m`\(\left(-\dfrac12\right)^3 = \dfrac{(-1)^3}{2^3} = \dfrac{-1}{8}\).`], ans: m`\(-\dfrac18\)` },
    { q: m`Tính \((-3)^4\).`, type: "num", answer: 81, hint: "Mũ chẵn nên kết quả dương.", steps: [m`\(3^4 = 3\cdot3\cdot3\cdot3 = 81\).`, m`Mũ chẵn nên \((-3)^4 = 81\).`], ans: "81" },
    { q: m`Tính \(\left(\dfrac23\right)^2\).`, type: "num", answer: "4/9", hint: "Bình phương cả tử và mẫu.", steps: [m`\(\dfrac{2^2}{3^2} = \dfrac49\).`], ans: m`\(\dfrac49\)` },
    { q: m`Tính \((-0{,}5)^2\).`, type: "num", answer: 0.25, hint: m`\((-0{,}5)\cdot(-0{,}5)\)`, steps: [m`\((-0{,}5)\cdot(-0{,}5) = 0{,}25\).`], ans: "0,25" },
    {
      q: m`Kết quả của \(3^5 \cdot 3^2\) là:`,
      type: "choice",
      choices: [m`\(3^{10}\)`, m`\(9^7\)`, m`\(3^7\)`, m`\(3^3\)`],
      answer: 2,
      why: { 0: m`Nhân cùng cơ số thì <b>cộng</b> số mũ, không nhân.`, 1: m`Cơ số giữ nguyên là 3, không nhân cơ số với nhau.`, 3: m`Trừ số mũ là dùng cho phép chia.` },
      hint: "Nhân cùng cơ số: giữ cơ số, cộng số mũ.",
      steps: [m`\(3^5 \cdot 3^2 = 3^{5+2} = 3^7\).`]
    },
    { q: m`Tính \((0{,}2)^6 : (0{,}2)^4\).`, type: "num", answer: 0.04, hint: "Chia cùng cơ số: trừ số mũ.", steps: [m`\((0{,}2)^{6-4} = (0{,}2)^2\).`, m`\((0{,}2)^2 = 0{,}04\).`], ans: "0,04" },
    { q: m`Tìm số tự nhiên \(n\), biết \(2^n = 32\).`, type: "num", label: "n =", answer: 5, hint: "Nhân 2 liên tiếp cho đến khi được 32.", steps: [m`\(2\cdot2\cdot2\cdot2\cdot2 = 32\), tức \(2^5 = 32\).`, m`Vậy \(n = 5\).`], ans: "n = 5" },
    { lv: 2, q: m`Tính \(\left[\left(-\dfrac12\right)^2\right]^3\).`, type: "num", answer: "1/64", hint: "Luỹ thừa của luỹ thừa: nhân số mũ.", steps: [m`\(\left[\left(-\dfrac12\right)^2\right]^3 = \left(-\dfrac12\right)^{6}\).`, m`Mũ chẵn nên dương: \(\dfrac{1}{2^6} = \dfrac1{64}\).`], ans: m`\(\dfrac1{64}\)` },
    { lv: 2, q: m`Một mảnh đất hình vuông có cạnh \(1{,}2\) m. Diện tích mảnh đất là bao nhiêu mét vuông?`, type: "num", answer: 1.44, unit: "m²", hint: m`Diện tích hình vuông = cạnh\(^2\).`, steps: [m`Diện tích \(= (1{,}2)^2 = 1{,}2\cdot1{,}2\).`, m`\(= 1{,}44\) (m²).`], ans: "1,44 m²" }
  ],
  summary: m`Nhân cùng cơ số: cộng mũ. Chia: trừ mũ. Luỹ thừa của luỹ thừa: nhân mũ. Số âm mũ chẵn ra dương, mũ lẻ ra âm.`
});

lesson({
  id: "4",
  num: 4,
  label: "Bài 4",
  title: "Thứ tự thực hiện các phép tính. Quy tắc chuyển vế",
  pages: "20–22",
  intro: m`Cùng một dãy phép tính, làm sai thứ tự là ra đáp số khác. Bài này cũng dạy “chiêu” chuyển vế để tìm \(x\) — kĩ năng bạn sẽ dùng suốt những năm sau.`,
  goals: ["Tính biểu thức theo đúng thứ tự", "Bỏ dấu ngoặc đúng quy tắc", "Tìm x bằng quy tắc chuyển vế"],
  theory: [
    {
      h: "1. Thứ tự thực hiện phép tính",
      body: m`<ol>
        <li>Trong ngoặc trước: \((\;) \to [\;] \to \{\;\}\).</li>
        <li>Luỹ thừa.</li>
        <li>Nhân và chia (từ trái sang phải).</li>
        <li>Cộng và trừ (từ trái sang phải).</li>
      </ol>`,
      tip: m`Câu thần chú: <b>Ngoặc – Mũ – Nhân chia – Cộng trừ</b>.`
    },
    {
      h: "2. Quy tắc dấu ngoặc",
      body: m`<ul>
        <li>Bỏ ngoặc có dấu <b>“+”</b> đằng trước: giữ nguyên dấu các số hạng trong ngoặc. \(a + (b - c) = a + b - c\).</li>
        <li>Bỏ ngoặc có dấu <b>“−”</b> đằng trước: <b>đổi dấu tất cả</b> số hạng trong ngoặc. \(a - (b - c) = a - b + c\).</li>
      </ul>`
    },
    {
      h: "3. Quy tắc chuyển vế",
      body: m`<p>Một đẳng thức có hai vế: vế trái = vế phải. Khi chuyển một số hạng từ vế này sang vế kia, <b>phải đổi dấu</b> số hạng đó.</p>
      <p>\(x + a = b \;\Rightarrow\; x = b - a\) &nbsp;&nbsp; \(x - a = b \;\Rightarrow\; x = b + a\)</p>`,
      key: m`<p>Chuyển vế: “\(+\)” thành “\(-\)”, “\(-\)” thành “\(+\)”. Với phép nhân \(a\cdot x = b\) thì \(x = b : a\) (\(a \ne 0\)).</p>`,
      tip: m`Tìm xong \(x\), hãy thay ngược vào đề để kiểm tra. Hai vế bằng nhau là đúng.`
    }
  ],
  mistakes: [
    m`Làm cộng trước nhân: \(2 + 3\cdot4 = 14\), không phải \(20\).`,
    m`Bỏ ngoặc có dấu trừ nhưng chỉ đổi dấu số hạng đầu: \(5 - (3 - 1) = 5 - 3 + 1\), không phải \(5 - 3 - 1\).`,
    m`Chuyển vế mà quên đổi dấu: \(x + 2 = 5 \Rightarrow x = 5 - 2\), không phải \(5 + 2\).`
  ],
  examples: [
    { q: m`Tìm \(x\), biết \(x + \dfrac23 = \dfrac12\).`, steps: [m`Chuyển \(\dfrac23\) sang vế phải, đổi dấu: \(x = \dfrac12 - \dfrac23\).`, m`Quy đồng mẫu 6: \(x = \dfrac36 - \dfrac46 = -\dfrac16\).`, m`Thử lại: \(-\dfrac16 + \dfrac46 = \dfrac36 = \dfrac12\). Đúng!`], ans: m`\(x = -\dfrac16\)` },
    { q: m`Tìm \(x\), biết \(2x - 0{,}5 = 1{,}3\).`, steps: [m`Chuyển \(-0{,}5\) sang vế phải thành \(+0{,}5\): \(2x = 1{,}3 + 0{,}5 = 1{,}8\).`, m`\(x = 1{,}8 : 2 = 0{,}9\).`], ans: m`\(x = 0{,}9\)` }
  ],
  exercises: [
    { q: m`Tính \(2 + 3\cdot\left(-\dfrac12\right)^2\).`, type: "num", answer: "11/4", hint: "Luỹ thừa trước, rồi nhân, cuối cùng cộng.", steps: [m`\(\left(-\dfrac12\right)^2 = \dfrac14\).`, m`\(3\cdot\dfrac14 = \dfrac34\).`, m`\(2 + \dfrac34 = \dfrac{8}{4} + \dfrac34 = \dfrac{11}{4}\).`], ans: m`\(\dfrac{11}4 = 2{,}75\)` },
    { q: m`Tính \(\left(\dfrac12 - \dfrac13\right)\cdot 6\).`, type: "num", answer: 1, hint: "Tính trong ngoặc trước.", steps: [m`\(\dfrac12 - \dfrac13 = \dfrac36 - \dfrac26 = \dfrac16\).`, m`\(\dfrac16 \cdot 6 = 1\).`], ans: "1" },
    { q: m`Bỏ ngoặc rồi tính: \(5 - \left(3 - \dfrac14\right)\).`, type: "num", answer: "9/4", hint: "Dấu trừ trước ngoặc: đổi dấu mọi số hạng trong ngoặc.", steps: [m`\(5 - 3 + \dfrac14\).`, m`\(= 2 + \dfrac14 = \dfrac94\).`], ans: m`\(\dfrac94\)` },
    { q: m`Tìm \(x\): \(x - \dfrac34 = \dfrac12\).`, type: "num", label: "x =", answer: "5/4", hint: m`Chuyển \(-\dfrac34\) sang vế phải thành \(+\dfrac34\).`, steps: [m`\(x = \dfrac12 + \dfrac34\).`, m`\(= \dfrac24 + \dfrac34 = \dfrac54\).`], ans: m`\(x = \dfrac54\)` },
    { q: m`Tìm \(x\): \(x + 0{,}7 = -1{,}2\).`, type: "num", label: "x =", answer: -1.9, hint: m`\(x = -1{,}2 - 0{,}7\).`, steps: [m`\(x = -1{,}2 - 0{,}7\).`, m`Cùng dấu âm: \(1{,}2 + 0{,}7 = 1{,}9\) nên \(x = -1{,}9\).`], ans: m`\(x = -1{,}9\)` },
    { q: m`Tìm \(x\): \(3x + \dfrac12 = 2\).`, type: "num", label: "x =", answer: "1/2", hint: "Chuyển 1/2 sang vế phải trước, rồi chia cho 3.", steps: [m`\(3x = 2 - \dfrac12 = \dfrac32\).`, m`\(x = \dfrac32 : 3 = \dfrac32\cdot\dfrac13 = \dfrac12\).`], ans: m`\(x = \dfrac12\)` },
    { q: m`Tìm \(x\): \(\dfrac23 - x = \dfrac16\).`, type: "num", label: "x =", answer: "1/2", hint: m`Chuyển \(x\) sang phải, \(\dfrac16\) sang trái: \(\dfrac23 - \dfrac16 = x\).`, steps: [m`\(x = \dfrac23 - \dfrac16\).`, m`\(= \dfrac46 - \dfrac16 = \dfrac36 = \dfrac12\).`], ans: m`\(x = \dfrac12\)` },
    { lv: 2, q: m`Tính \((-2)^2 : \dfrac45 - 1\).`, type: "num", answer: 4, hint: "Luỹ thừa → chia → trừ.", steps: [m`\((-2)^2 = 4\).`, m`\(4 : \dfrac45 = 4\cdot\dfrac54 = 5\).`, m`\(5 - 1 = 4\).`], ans: "4" },
    { lv: 2, q: m`Mẹ đưa Minh một số tiền. Minh mua rau hết 25,5 nghìn đồng thì còn lại 74,5 nghìn đồng. Hỏi mẹ đã đưa Minh bao nhiêu nghìn đồng?`, type: "num", answer: 100, unit: "nghìn đồng", hint: m`Gọi số tiền là \(x\): \(x - 25{,}5 = 74{,}5\).`, steps: [m`Gọi \(x\) là số tiền mẹ đưa: \(x - 25{,}5 = 74{,}5\).`, m`Chuyển vế: \(x = 74{,}5 + 25{,}5 = 100\).`], ans: "100 nghìn đồng" }
  ],
  summary: m`Ngoặc – Mũ – Nhân chia – Cộng trừ. Bỏ ngoặc có dấu “−” thì đổi dấu hết. Chuyển vế thì đổi dấu.`
});

review({
  chapter: 1,
  pages: "14–15, 23–25",
  recap: [
    m`Số hữu tỉ: viết được dạng \(\dfrac ab\), \(b \ne 0\). So sánh bằng cách quy đồng hoặc đổi ra số thập phân.`,
    m`Bốn phép tính làm như phân số; chia là nhân với nghịch đảo.`,
    m`\(x^m\cdot x^n = x^{m+n}\), \(x^m : x^n = x^{m-n}\), \((x^m)^n = x^{mn}\).`,
    "Thứ tự: Ngoặc – Mũ – Nhân chia – Cộng trừ. Chuyển vế phải đổi dấu."
  ],
  exercises: [
    { q: m`Tính \(\dfrac{-5}{12} + \dfrac{3}{8}\).`, type: "num", answer: "-1/24", hint: "Mẫu chung nhỏ nhất của 12 và 8 là 24.", steps: [m`\(\dfrac{-5}{12} = \dfrac{-10}{24}\), \(\dfrac38 = \dfrac{9}{24}\).`, m`\(\dfrac{-10 + 9}{24} = -\dfrac{1}{24}\).`], ans: m`\(-\dfrac1{24}\)` },
    { q: m`Tính \(1{,}25 \cdot \left(-\dfrac{4}{5}\right)\).`, type: "num", answer: -1, hint: m`\(1{,}25 = \dfrac54\).`, steps: [m`\(1{,}25 = \dfrac54\).`, m`\(\dfrac54\cdot\left(-\dfrac45\right) = -1\).`], ans: "−1" },
    { q: m`Số nào lớn nhất: \(-\dfrac{2}{3};\; -0{,}6;\; -\dfrac{5}{8};\; -0{,}65\)?`, type: "choice", choices: [m`\(-\dfrac23\)`, m`\(-0{,}6\)`, m`\(-\dfrac58\)`, m`\(-0{,}65\)`], answer: 1, hint: "Đổi ra số thập phân. Với số âm, phần số nhỏ nhất thì số đó lớn nhất.", steps: [m`\(-\dfrac23 \approx -0{,}667\); \(-\dfrac58 = -0{,}625\).`, m`Phần số: 0,6 < 0,625 < 0,65 < 0,667.`, m`Số có phần số nhỏ nhất là \(-0{,}6\) nên nó lớn nhất.`] },
    { q: m`Tính \(\dfrac{2^5 \cdot 2^3}{2^6}\).`, type: "num", answer: 4, hint: "Tử: cộng số mũ. Chia: trừ số mũ.", steps: [m`\(2^5\cdot2^3 = 2^8\).`, m`\(2^8 : 2^6 = 2^2 = 4\).`], ans: "4" },
    { q: m`Tìm \(x\): \(\dfrac12 x - \dfrac13 = \dfrac16\).`, type: "num", label: "x =", answer: 1, hint: "Chuyển vế −1/3 trước, rồi chia cho 1/2.", steps: [m`\(\dfrac12x = \dfrac16 + \dfrac13 = \dfrac16 + \dfrac26 = \dfrac12\).`, m`\(x = \dfrac12 : \dfrac12 = 1\).`], ans: "x = 1" },
    { lv: 2, q: m`Tính \(\left(-\dfrac{1}{3}\right)^2 \cdot 9 - \left(0{,}5 - \dfrac32\right)\).`, type: "num", answer: 2, hint: "Tính luỹ thừa và ngoặc trước.", steps: [m`\(\left(-\dfrac13\right)^2 = \dfrac19\), nên \(\dfrac19\cdot 9 = 1\).`, m`\(0{,}5 - \dfrac32 = 0{,}5 - 1{,}5 = -1\).`, m`\(1 - (-1) = 2\).`], ans: "2" },
    { lv: 2, q: m`Một cửa hàng nhập 50 kg gạo. Ngày đầu bán \(\dfrac25\) số gạo, ngày thứ hai bán \(12{,}5\) kg. Hỏi còn lại bao nhiêu ki-lô-gam gạo?`, type: "num", answer: 17.5, unit: "kg", hint: m`Ngày đầu bán \(\dfrac25\cdot50\) kg.`, steps: [m`Ngày đầu bán \(\dfrac25\cdot 50 = 20\) (kg).`, m`Còn lại \(50 - 20 - 12{,}5 = 17{,}5\) (kg).`], ans: "17,5 kg" }
  ]
});
