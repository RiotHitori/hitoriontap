/* ================= HOẠT ĐỘNG THỰC HÀNH TRẢI NGHIỆM ================= */

lesson({
  id: "gg",
  num: "TH1",
  short: "TH1",
  label: "Thực hành 1",
  title: "Vẽ hình đơn giản với phần mềm GeoGebra",
  pages: "110–114",
  intro: m`GeoGebra là phần mềm vẽ hình miễn phí, chạy ngay trên điện thoại hoặc trình duyệt (vào <a href="https://www.geogebra.org/geometry" target="_blank" rel="noopener">geogebra.org/geometry</a>). Vẽ bằng máy giúp bạn kiểm tra lại những tính chất đã học ở Chương III và IV.`,
  goals: ["Vẽ hai đường thẳng song song", "Vẽ tia phân giác, đường trung trực", "Vẽ tam giác và đo góc để kiểm tra tổng 180°"],
  theory: [
    {
      h: "1. Vẽ hai đường thẳng song song",
      body: m`<ol><li>Chọn công cụ <b>Đường thẳng</b> (qua 2 điểm) \(\to\) chấm điểm \(A\), rồi điểm \(B\): được đường thẳng \(AB\).</li>
      <li>Tạo một điểm \(C\) nằm ngoài đường thẳng \(AB\).</li>
      <li>Chọn công cụ <b>Đường thẳng song song</b> \(\to\) chọn điểm \(C\) \(\to\) chọn đường thẳng \(AB\).</li></ol>
      <p>Thử kéo điểm \(C\): đường thẳng mới luôn song song với \(AB\) — đúng như tiên đề Euclid, qua \(C\) chỉ có một đường như vậy.</p>`
    },
    {
      h: "2. Vẽ tia phân giác của một góc",
      body: m`<ol><li>Vẽ góc \(\widehat{xOy}\) bằng hai tia chung gốc \(O\).</li><li>Chọn công cụ <b>Đường phân giác</b> \(\to\) lần lượt chọn một điểm trên \(Ox\), điểm \(O\), một điểm trên \(Oy\).</li><li>Dùng công cụ <b>Góc</b> để đo hai góc tạo thành: chúng luôn bằng nhau.</li></ol>`
    },
    {
      h: "3. Vẽ đường trung trực của đoạn thẳng",
      body: m`<ol><li>Vẽ đoạn thẳng \(AB\) bằng công cụ <b>Đoạn thẳng</b>.</li><li>Chọn công cụ <b>Đường trung trực</b> \(\to\) chọn \(A\) rồi \(B\).</li><li>Lấy một điểm \(M\) trên đường trung trực, dùng công cụ <b>Khoảng cách hoặc độ dài</b> đo \(MA\), \(MB\): luôn bằng nhau.</li></ol>`
    },
    {
      h: "4. Vẽ tam giác và kiểm tra tổng ba góc",
      body: m`<ol><li>Chọn công cụ <b>Đa giác</b> \(\to\) chấm ba điểm \(A, B, C\) rồi chấm lại điểm \(A\) để khép kín.</li><li>Dùng công cụ <b>Góc</b> đo ba góc của tam giác.</li><li>Kéo các đỉnh: số đo từng góc thay đổi nhưng tổng luôn là \(180^\circ\).</li></ol>`,
      tip: "Muốn vẽ tam giác biết độ dài cạnh, dùng công cụ “Đoạn thẳng với độ dài cố định” và “Đường tròn khi biết tâm và bán kính”, giống cách vẽ bằng compa."
    }
  ],
  exercises: [
    { q: "Muốn vẽ đường thẳng đi qua điểm C và song song với đường thẳng AB trong GeoGebra, ta dùng công cụ nào?", type: "choice", choices: ["Đường vuông góc", "Đường thẳng song song", "Đường trung trực", "Đa giác"], answer: 1, hint: "Tên công cụ nói lên tất cả.", steps: ["Công cụ “Đường thẳng song song”: chọn điểm C, rồi chọn đường thẳng AB."] },
    { q: "Vẽ tia phân giác Om của góc xOy = 84° bằng GeoGebra rồi đo góc xOm. Kết quả đo được là bao nhiêu độ?", type: "num", answer: 42, unit: "°", hint: "Tia phân giác chia đôi góc.", steps: [m`\(\widehat{xOm} = 84^\circ : 2 = 42^\circ\).`], ans: m`\(42^\circ\)` },
    { q: "Lấy điểm M trên đường trung trực của đoạn AB và đo được MA = 4,6 cm. Khi đo MB, GeoGebra hiển thị:", type: "num", answer: 4.6, unit: "cm", hint: "Điểm trên trung trực cách đều A và B.", steps: ["M nằm trên trung trực của AB nên MB = MA = 4,6 cm."], ans: "4,6 cm" },
    { q: "Vẽ tam giác ABC bằng GeoGebra, đo được góc A = 47,3° và góc B = 61,2°. Góc C hiển thị là:", type: "num", answer: 71.5, unit: "°", hint: "180° − 47,3° − 61,2°.", steps: [m`\(\widehat C = 180^\circ - 47{,}3^\circ - 61{,}2^\circ = 71{,}5^\circ\).`], ans: m`\(71{,}5^\circ\)` }
  ],
  summary: "Phần mềm chỉ giúp kiểm tra; lý do vì sao đúng vẫn nằm ở các định lí đã học."
});

const pieGender = F.pie({ title: "Cơ cấu dân số theo giới tính (2020)", data: [{ label: "Nữ", value: 50.2 }, { label: "Nam", value: 49.8 }] });
const pieArea = F.pie({ title: "Cơ cấu dân số theo nơi sinh sống (2020)", data: [{ label: "Thành thị", value: 36.8 }, { label: "Nông thôn", value: 63.2 }] });
const linePop = F.lineChart({
  title: "Dân số Việt Nam (triệu người)",
  xs: ["2012", "2014", "2016", "2018", "2020"],
  ys: [88.81, 90.73, 92.69, 94.67, 97.58],
  yMin: 86, yMax: 100, yStep: 2,
  yLabel: "triệu người", xLabel: "Năm"
});

lesson({
  id: "ds",
  num: "TH2",
  short: "TH2",
  label: "Thực hành 2",
  title: "Dân số và cơ cấu dân số Việt Nam",
  pages: "115–117",
  intro: m`Áp dụng Chương V vào số liệu thật: dân số nước ta tăng thế nào, bao nhiêu người sống ở thành thị? Số liệu dưới đây theo Tổng cục Thống kê (nay là Cục Thống kê), đã làm tròn.`,
  goals: ["Đọc biểu đồ đoạn thẳng về dân số", "Đọc biểu đồ hình quạt tròn về cơ cấu dân số", "Tính số dân từ tỉ lệ phần trăm"],
  theory: [
    {
      h: "1. Thu thập số liệu",
      body: m`<p>Số liệu dân số có thể lấy từ trang của Cục Thống kê (<a href="https://www.nso.gov.vn" target="_blank" rel="noopener">nso.gov.vn</a>, mục Dân số và lao động) hoặc worldometers.info. Năm 2020, dân số Việt Nam khoảng <b>97,58 triệu người</b>.</p>`
    },
    {
      h: "2. Dân số qua các năm",
      body: "",
      fig: linePop,
      key: m`<p>Các đoạn thẳng đều đi lên: dân số nước ta <b>tăng liên tục</b>, mỗi năm tăng khoảng 1 triệu người.</p>`
    },
    {
      h: "3. Cơ cấu dân số năm 2020",
      body: "",
      fig: pieGender + pieArea,
      tip: m`Số dân thành thị \(\approx 97{,}58 \cdot 36{,}8\% \approx 35{,}9\) triệu người.`
    }
  ],
  exercises: [
    { q: "Theo biểu đồ, dân số Việt Nam năm 2016 khoảng bao nhiêu triệu người?", fig: linePop, type: "num", answer: 92.69, unit: "triệu người", hint: "Đọc giá trị tại năm 2016.", steps: ["Điểm tại năm 2016 ghi 92,69."], ans: "92,69 triệu người" },
    { q: "Từ năm 2012 đến năm 2020, dân số tăng thêm bao nhiêu triệu người?", fig: linePop, type: "num", answer: 8.77, unit: "triệu người", hint: "97,58 − 88,81.", steps: [m`\(97{,}58 - 88{,}81 = 8{,}77\) (triệu người).`], ans: "8,77 triệu người" },
    { q: "Năm 2020, tỉ lệ dân số sống ở nông thôn là bao nhiêu phần trăm?", fig: pieArea, type: "num", answer: 63.2, unit: "%", hint: "Đọc trên biểu đồ, hoặc 100% − 36,8%.", steps: [m`\(100\% - 36{,}8\% = 63{,}2\%\).`], ans: "63,2%" },
    { q: "Năm 2020, nam hay nữ chiếm tỉ lệ cao hơn?", fig: pieGender, type: "choice", choices: ["Nam", "Nữ", "Bằng nhau"], answer: 1, hint: "So sánh 49,8% và 50,2%.", steps: ["Nữ 50,2% > Nam 49,8%."] },
    { lv: 2, q: "Năm 2020, số dân sống ở nông thôn khoảng bao nhiêu triệu người? (làm tròn đến hàng phần mười)", type: "num", answer: 61.7, unit: "triệu người", hint: "97,58 × 63,2%.", steps: [m`\(97{,}58\cdot\dfrac{63{,}2}{100} = 61{,}67056\ldots\)`, m`Làm tròn đến hàng phần mười: \(\approx 61{,}7\) triệu người.`], ans: "≈ 61,7 triệu người" }
  ],
  summary: "Biểu đồ đoạn thẳng cho thấy xu thế; biểu đồ hình quạt cho thấy cơ cấu. Muốn ra số người thì nhân tổng với tỉ lệ."
});

/* ================= BẢNG THUẬT NGỮ (SGK trang 118–119) ================= */

COURSE.glossary = [
  { term: "Biểu đồ đoạn thẳng", def: "Biểu đồ biểu diễn sự thay đổi của một đại lượng theo thời gian, các điểm liên tiếp nối với nhau bằng đoạn thẳng.", lesson: "19", page: 100 },
  { term: "Biểu đồ hình quạt tròn", def: "Biểu đồ dùng hình tròn chia thành các hình quạt để so sánh các phần trong toàn bộ dữ liệu.", lesson: "18", page: 93 },
  { term: "Cạnh góc vuông", def: "Cạnh kề với góc vuông của tam giác vuông.", lesson: "12", page: 62 },
  { term: "Cạnh huyền", def: "Cạnh đối diện với góc vuông của tam giác vuông.", lesson: "12", page: 62 },
  { term: "Căn bậc hai số học", def: m`Căn bậc hai số học của số \(a\) không âm là số \(x\) không âm sao cho \(x^2 = a\).`, lesson: "6", page: 30 },
  { term: "Chu kì", def: m`Nhóm chữ số lặp lại mãi trong số thập phân vô hạn tuần hoàn, ví dụ chu kì của \(0{,}2(7)\) là 7.`, lesson: "5", page: 27 },
  { term: "Chứng minh định lí", def: "Dùng lập luận để từ giả thiết và những khẳng định đúng đã biết suy ra kết luận của định lí.", lesson: "11", page: 56 },
  { term: "Cơ số, số mũ", def: m`Trong luỹ thừa \(x^n\), \(x\) là cơ số, \(n\) là số mũ.`, lesson: "3", page: 16 },
  { term: "Đẳng thức", def: m`Biểu thức có dạng \(A = B\); \(A\) là vế trái, \(B\) là vế phải.`, lesson: "4", page: 21 },
  { term: "Định lí", def: "Khẳng định được suy ra từ những khẳng định đúng đã biết.", lesson: "11", page: 55 },
  { term: "Độ chính xác", def: "Khi làm tròn đến một hàng nào đó, kết quả có độ chính xác bằng một nửa đơn vị hàng làm tròn.", lesson: "5", page: 27 },
  { term: "Đường trung trực của đoạn thẳng", def: "Đường thẳng vuông góc với đoạn thẳng tại trung điểm của đoạn thẳng đó.", lesson: "16", page: 82 },
  { term: "Giá trị tuyệt đối", def: m`\(|a| = a\) khi \(a \ge 0\) và \(|a| = -a\) khi \(a < 0\). \(|a|\) là khoảng cách từ điểm \(a\) đến gốc 0 trên trục số.`, lesson: "7", page: 35 },
  { term: "Giả thiết, kết luận", def: "Trong định lí dạng “Nếu … thì …”: giả thiết là phần giữa “nếu” và “thì”, kết luận là phần sau “thì”.", lesson: "11", page: 55 },
  { term: "Góc kề với cạnh", def: m`Trong tam giác \(ABC\), hai góc \(\widehat B\) và \(\widehat C\) là hai góc kề cạnh \(BC\).`, lesson: "14", page: 72 },
  { term: "Góc xen giữa hai cạnh", def: m`Góc tạo bởi hai cạnh đó, ví dụ \(\widehat A\) xen giữa hai cạnh \(AB\) và \(AC\).`, lesson: "14", page: 71 },
  { term: "Hai đường thẳng song song", def: "Hai đường thẳng không có điểm chung.", lesson: "9", page: 47 },
  { term: "Hai đường thẳng vuông góc", def: "Hai đường thẳng cắt nhau sao cho trong các góc tạo thành có một góc vuông.", lesson: "8", page: 43 },
  { term: "Hai góc bù nhau", def: "Hai góc có tổng số đo bằng 180°.", lesson: "8", page: 41 },
  { term: "Hai góc đối đỉnh", def: "Hai góc mà mỗi cạnh của góc này là tia đối của một cạnh của góc kia.", lesson: "8", page: 42 },
  { term: "Hai góc đồng vị", def: "Hai góc ở cùng vị trí tại hai giao điểm khi một đường thẳng cắt hai đường thẳng.", lesson: "9", page: 46 },
  { term: "Hai góc kề bù", def: "Hai góc có một cạnh chung, hai cạnh còn lại là hai tia đối nhau.", lesson: "8", page: 41 },
  { term: "Hai góc kề nhau", def: "Hai góc có chung đỉnh, chung một cạnh và hai cạnh còn lại nằm về hai phía của cạnh chung.", lesson: "8", page: 41 },
  { term: "Hai góc so le trong", def: "Hai góc nằm giữa hai đường thẳng bị cắt và ở hai phía của đường thẳng cắt.", lesson: "9", page: 46 },
  { term: "Hai tam giác bằng nhau", def: "Hai tam giác có ba cạnh tương ứng bằng nhau và ba góc tương ứng bằng nhau.", lesson: "13", page: 64 },
  { term: "Luỹ thừa", def: m`\(x^n\) là tích của \(n\) thừa số \(x\).`, lesson: "3", page: 16 },
  { term: "Quy tắc chuyển vế", def: "Khi chuyển một số hạng từ vế này sang vế kia của một đẳng thức, ta phải đổi dấu số hạng đó.", lesson: "4", page: 21 },
  { term: "Quy tắc dấu ngoặc", def: "Bỏ ngoặc có dấu “−” đằng trước thì đổi dấu tất cả các số hạng trong ngoặc; dấu “+” thì giữ nguyên.", lesson: "4", page: 20 },
  { term: "Số hữu tỉ", def: m`Số viết được dưới dạng phân số \(\dfrac ab\) với \(a, b \in \mathbb Z\), \(b \ne 0\) (hay số thập phân hữu hạn hoặc vô hạn tuần hoàn).`, lesson: "1", page: 6 },
  { term: "Số hữu tỉ âm, số hữu tỉ dương", def: "Số hữu tỉ nhỏ hơn 0 là số hữu tỉ âm; lớn hơn 0 là số hữu tỉ dương. Số 0 không dương, không âm.", lesson: "1", page: 8 },
  { term: "Số thập phân hữu hạn", def: "Số thập phân có hữu hạn chữ số sau dấu phẩy, ví dụ 0,8; 1,25.", lesson: "5", page: 27 },
  { term: "Số thập phân vô hạn tuần hoàn", def: "Số thập phân có vô số chữ số sau dấu phẩy và có một nhóm chữ số lặp lại mãi.", lesson: "5", page: 27 },
  { term: "Số thập phân vô hạn không tuần hoàn", def: "Số thập phân có vô số chữ số sau dấu phẩy và không có nhóm chữ số nào lặp lại theo chu kì.", lesson: "6", page: 29 },
  { term: "Số thực", def: "Số hữu tỉ và số vô tỉ được gọi chung là số thực.", lesson: "7", page: 33 },
  { term: "Số vô tỉ", def: "Số viết được dưới dạng số thập phân vô hạn không tuần hoàn.", lesson: "6", page: 29 },
  { term: "Tam giác cân", def: "Tam giác có hai cạnh bằng nhau.", lesson: "16", page: 80 },
  { term: "Tam giác đều", def: "Tam giác có ba cạnh bằng nhau.", lesson: "16", page: 81 },
  { term: "Tam giác nhọn", def: "Tam giác có ba góc đều nhọn.", lesson: "12", page: 62 },
  { term: "Tam giác tù", def: "Tam giác có một góc tù.", lesson: "12", page: 62 },
  { term: "Tam giác vuông", def: "Tam giác có một góc vuông.", lesson: "12", page: 62 },
  { term: "Thu thập dữ liệu", def: "Tìm, ghi lại thông tin bằng quan sát, đo đạc, phỏng vấn, bảng hỏi hoặc từ nguồn có sẵn.", lesson: "17", page: 89 },
  { term: "Tia phân giác của một góc", def: "Tia nằm giữa hai cạnh của góc, tạo với hai cạnh ấy hai góc bằng nhau.", lesson: "8", page: 44 },
  { term: "Tiên đề Euclid", def: "Qua một điểm ở ngoài một đường thẳng chỉ có một đường thẳng song song với đường thẳng đó.", lesson: "10", page: 51 },
  { term: "Trục số thực", def: "Trục số trên đó mỗi điểm biểu diễn một số thực và ngược lại.", lesson: "7", page: 34 },
  { term: "Trường hợp cạnh – cạnh – cạnh (c.c.c)", def: "Ba cạnh của tam giác này bằng ba cạnh của tam giác kia thì hai tam giác bằng nhau.", lesson: "13", page: 66 },
  { term: "Trường hợp cạnh – góc – cạnh (c.g.c)", def: "Hai cạnh và góc xen giữa của tam giác này bằng hai cạnh và góc xen giữa của tam giác kia thì hai tam giác bằng nhau.", lesson: "14", page: 71 },
  { term: "Trường hợp góc – cạnh – góc (g.c.g)", def: "Một cạnh và hai góc kề của tam giác này bằng một cạnh và hai góc kề của tam giác kia thì hai tam giác bằng nhau.", lesson: "14", page: 72 }
];
