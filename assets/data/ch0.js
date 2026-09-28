lesson({
  id: "0",
  num: 0,
  short: "0",
  label: "Khởi động",
  title: "Ôn nhanh số nguyên và phân số",
  sub: "Nên học trước nếu bạn đã quên lớp 6",
  intro: m`Toán 7 xây trên hai viên gạch của lớp 6: <b>số âm</b> và <b>phân số</b>. Nếu hai thứ này còn lung lay thì cả chương Số hữu tỉ sẽ khó. Dành 20 phút ở đây sẽ tiết kiệm cho bạn rất nhiều thời gian về sau.`,
  goals: [
    "Cộng, trừ, nhân, chia số nguyên có dấu mà không nhầm dấu",
    "Rút gọn, quy đồng, cộng trừ nhân chia phân số"
  ],
  theory: [
    {
      h: "1. Số âm là gì? Nhìn trên trục số",
      body: m`<p>Hãy nghĩ đến nhiệt độ: \(-3^\circ\text{C}\) là lạnh hơn \(0^\circ\text{C}\) ba độ. Trên trục số, số âm nằm <b>bên trái</b> số 0, số dương nằm <b>bên phải</b>.</p>
      <p>Số nào nằm càng về bên trái thì càng nhỏ. Vì vậy \(-5 < -2\) (dù 5 lớn hơn 2).</p>`,
      fig: F.numberLine({ min: -5, max: 5, points: [{ v: -5, label: "−5" }, { v: -2, label: "−2" }, { v: 3, label: "3", color: "#2b7489" }] }),
      key: m`<p>Hai số <b>đối nhau</b> cách đều số 0, ví dụ \(3\) và \(-3\). Tổng hai số đối luôn bằng 0.</p>`
    },
    {
      h: "2. Cộng và trừ số nguyên",
      body: m`<ul>
        <li><b>Cùng dấu:</b> cộng hai phần số, giữ nguyên dấu. \((-4) + (-6) = -10\).</li>
        <li><b>Khác dấu:</b> lấy phần số lớn trừ phần số nhỏ, dấu theo số có phần số lớn hơn. \((-9) + 4 = -5\) vì \(9 > 4\) nên mang dấu của \(-9\).</li>
        <li><b>Phép trừ:</b> đổi thành cộng với số đối. \(a - b = a + (-b)\). Ví dụ \(3 - 8 = 3 + (-8) = -5\).</li>
      </ul>`,
      tip: m`Nghĩ theo tiền: có 4 nghìn, nợ 9 nghìn \(\Rightarrow\) trả xong vẫn còn nợ 5 nghìn, tức là \(-5\).`
    },
    {
      h: "3. Nhân và chia: chỉ cần nhớ quy tắc dấu",
      body: m`<p>Nhân (hoặc chia) phần số như bình thường, sau đó xét dấu:</p>`,
      key: m`<p><b>Cùng dấu → kết quả dương.</b> \((-6)\cdot(-4) = 24\)<br><b>Khác dấu → kết quả âm.</b> \((-6)\cdot 4 = -24\), \(\;15 : (-3) = -5\)</p>`
    },
    {
      h: "4. Phân số: rút gọn và quy đồng",
      body: m`<p>Phân số \(\dfrac{a}{b}\) nghĩa là chia thành \(b\) phần bằng nhau, lấy \(a\) phần (\(b \ne 0\)).</p>
      <ul>
        <li><b>Rút gọn:</b> chia cả tử và mẫu cho cùng một số. \(\dfrac{18}{24} = \dfrac{18:6}{24:6} = \dfrac{3}{4}\). Khi không chia tiếp được nữa, ta có phân số <b>tối giản</b>.</li>
        <li><b>Quy đồng mẫu:</b> nhân tử và mẫu với cùng một số để hai phân số có chung mẫu. \(\dfrac12 = \dfrac36\), \(\dfrac13 = \dfrac26\).</li>
      </ul>`
    },
    {
      h: "5. Bốn phép tính với phân số",
      body: m`<ul>
        <li><b>Cộng/trừ:</b> quy đồng mẫu rồi cộng/trừ tử, giữ nguyên mẫu. \(\dfrac12 + \dfrac13 = \dfrac36 + \dfrac26 = \dfrac56\).</li>
        <li><b>Nhân:</b> tử nhân tử, mẫu nhân mẫu. \(\dfrac23 \cdot \dfrac45 = \dfrac{8}{15}\).</li>
        <li><b>Chia:</b> nhân với phân số đảo ngược của số chia. \(\dfrac23 : \dfrac45 = \dfrac23 \cdot \dfrac54 = \dfrac{10}{12} = \dfrac56\).</li>
      </ul>`,
      tip: m`Trước khi nhân, hãy rút gọn chéo (tử bên này với mẫu bên kia) để số nhỏ lại, đỡ tính toán.`
    }
  ],
  mistakes: [
    m`Cộng tử với tử, mẫu với mẫu: \(\dfrac12 + \dfrac13 \ne \dfrac25\). Phải quy đồng trước!`,
    m`Nghĩ rằng \(-5 > -2\) vì 5 lớn hơn 2. Với số âm, phần số càng lớn thì số càng <b>nhỏ</b>.`,
    m`Quên đổi dấu khi trừ số âm: \(4 - (-3) = 4 + 3 = 7\), không phải 1.`
  ],
  examples: [
    {
      q: m`Tính \((-12) + 7 - (-5)\).`,
      steps: [
        m`Đổi phép trừ thành cộng số đối: \(-(-5) = +5\). Biểu thức thành \((-12) + 7 + 5\).`,
        m`Tính từ trái sang phải: \((-12) + 7 = -5\) (khác dấu: \(12 - 7 = 5\), mang dấu âm).`,
        m`\(-5 + 5 = 0\).`
      ],
      ans: m`\((-12) + 7 - (-5) = 0\)`
    },
    {
      q: m`Tính \(\dfrac{3}{4} - \dfrac{5}{6}\).`,
      steps: [
        m`Mẫu chung nhỏ nhất của 4 và 6 là 12.`,
        m`Quy đồng: \(\dfrac34 = \dfrac{9}{12}\), \(\dfrac56 = \dfrac{10}{12}\).`,
        m`Trừ tử, giữ mẫu: \(\dfrac{9 - 10}{12} = \dfrac{-1}{12}\).`
      ],
      ans: m`\(-\dfrac{1}{12}\)`
    }
  ],
  exercises: [
    { q: m`Tính \((-7) + 12\).`, type: "num", answer: 5, hint: m`Hai số khác dấu: lấy \(12 - 7\), dấu theo số có phần số lớn hơn.`, steps: [m`Khác dấu nên lấy \(12 - 7 = 5\).`, m`Phần số 12 lớn hơn và 12 mang dấu dương, nên kết quả dương.`], ans: "5" },
    { q: m`Tính \((-5) - 8\).`, type: "num", answer: -13, hint: m`Đổi thành \((-5) + (-8)\).`, steps: [m`\((-5) - 8 = (-5) + (-8)\).`, m`Hai số cùng dấu âm: cộng phần số \(5 + 8 = 13\), giữ dấu âm.`], ans: "−13" },
    { q: m`Tính \(4 - (-9)\).`, type: "num", answer: 13, hint: m`Trừ một số âm = cộng số dương.`, steps: [m`\(4 - (-9) = 4 + 9\).`, m`\(= 13\).`], ans: "13" },
    { q: m`Tính \((-6)\cdot(-4)\).`, type: "num", answer: 24, hint: "Cùng dấu thì tích dương.", steps: [m`Phần số: \(6 \cdot 4 = 24\).`, m`Hai thừa số cùng dấu âm nên tích dương.`], ans: "24" },
    { q: m`Tính \((-45) : 5\).`, type: "num", answer: -9, hint: "Khác dấu thì thương âm.", steps: [m`\(45 : 5 = 9\).`, m`Khác dấu nên kết quả âm: \(-9\).`], ans: "−9" },
    { q: m`Rút gọn phân số \(\dfrac{18}{24}\) về dạng tối giản.`, type: "num", answer: "3/4", fraction: "reduced", hint: "Tìm số lớn nhất mà cả 18 và 24 đều chia hết.", steps: [m`ƯCLN(18, 24) = 6.`, m`\(\dfrac{18}{24} = \dfrac{18:6}{24:6} = \dfrac34\).`], ans: m`\(\dfrac34\)` },
    { q: m`Tính \(\dfrac12 + \dfrac13\).`, type: "num", answer: "5/6", hint: "Mẫu chung là 6.", steps: [m`\(\dfrac12 = \dfrac36\), \(\dfrac13 = \dfrac26\).`, m`\(\dfrac36 + \dfrac26 = \dfrac56\).`], ans: m`\(\dfrac56\)` },
    { q: m`Tính \(\dfrac34 \cdot \dfrac89\).`, type: "num", answer: "2/3", hint: "Tử nhân tử, mẫu nhân mẫu, rồi rút gọn (hoặc rút gọn chéo trước).", steps: [m`Rút gọn chéo: 3 với 9 (chia 3), 8 với 4 (chia 4): \(\dfrac{1}{1}\cdot\dfrac{2}{3}\).`, m`Kết quả \(\dfrac23\).`], ans: m`\(\dfrac23\)` },
    { lv: 2, q: m`Tính \(\dfrac25 : \dfrac{4}{15}\).`, type: "num", answer: "3/2", hint: "Chia cho một phân số = nhân với phân số đảo ngược.", steps: [m`\(\dfrac25 : \dfrac4{15} = \dfrac25 \cdot \dfrac{15}{4}\).`, m`\(= \dfrac{30}{20} = \dfrac32\).`], ans: m`\(\dfrac32\)` },
    { lv: 2, q: m`Buổi sáng nhiệt độ là \(-3^\circ\text{C}\), đến trưa tăng thêm \(8^\circ\text{C}\). Nhiệt độ buổi trưa là bao nhiêu độ C?`, type: "num", answer: 5, unit: "°C", hint: m`Tính \(-3 + 8\).`, steps: [m`Nhiệt độ trưa \(= -3 + 8\).`, m`Khác dấu: \(8 - 3 = 5\), mang dấu dương.`], ans: m`\(5^\circ\text{C}\)` }
  ],
  summary: m`Dấu: cùng dấu nhân/chia ra dương, khác dấu ra âm. Phân số: cộng trừ phải quy đồng, nhân thì thẳng hàng, chia thì đảo ngược.`
});
