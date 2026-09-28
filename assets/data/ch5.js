/* ================= CHƯƠNG V. THU THẬP VÀ BIỂU DIỄN DỮ LIỆU ================= */

const pieTransport = F.pie({
  title: "Phương tiện đến trường của lớp 7A (40 HS)",
  data: [
    { label: "Xe đạp", value: 40 },
    { label: "Đi bộ", value: 25 },
    { label: "Xe buýt", value: 15 },
    { label: "Bố mẹ chở", value: 20 }
  ]
});
const pieMissing = F.pie({
  title: "Môn thể thao yêu thích của lớp 7B",
  data: [
    { label: "Bóng đá", value: 35 },
    { label: "Cầu lông", value: 30 },
    { label: "Bơi", value: 20 },
    { label: "Khác", value: 15, text: "?" }
  ]
});
const lineShop = F.lineChart({
  title: "Doanh thu tiệm bánh mì trong tuần (triệu đồng)",
  xs: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
  ys: [3, 3.5, 2.5, 4, 5, 7, 6],
  yMin: 0, yMax: 8, yStep: 2,
  yLabel: "triệu đồng", xLabel: "Ngày"
});
const lineTemp = F.lineChart({
  title: "Nhiệt độ ở Hà Nội trong một ngày (°C)",
  xs: ["6h", "9h", "12h", "15h", "18h", "21h"],
  ys: [24, 27, 32, 31, 28, 26],
  yMin: 20, yMax: 34, yStep: 2,
  yLabel: "°C", xLabel: "Giờ", color: "#2b7489"
});

lesson({
  id: "17",
  num: 17,
  label: "Bài 17",
  title: "Thu thập và phân loại dữ liệu",
  pages: "88–92",
  intro: m`Trước khi vẽ biểu đồ hay rút ra kết luận, ta cần có dữ liệu — và dữ liệu phải thu thập đúng cách. Bài này nhẹ nhàng, gần với đời sống hằng ngày.`,
  goals: ["Biết các cách thu thập dữ liệu", "Phân loại dữ liệu: là số / không là số", "Nhận biết dữ liệu có đại diện, có hợp lí không"],
  theory: [
    {
      h: "1. Thu thập dữ liệu",
      body: m`<p>Có nhiều cách: <b>quan sát</b>, <b>làm thí nghiệm/đo đạc</b>, <b>phỏng vấn</b>, <b>lập bảng hỏi (phiếu khảo sát)</b>, hoặc lấy từ <b>nguồn có sẵn</b> như sách, báo, trang web của cơ quan thống kê.</p>`
    },
    {
      h: "2. Phân loại dữ liệu",
      body: m`<ul>
        <li><b>Dữ liệu là số</b> (số liệu, còn gọi là dữ liệu định lượng): cân nặng 43; 41; 48 (kg), số anh chị em…</li>
        <li><b>Dữ liệu không là số</b> (dữ liệu định tính): tên tỉnh, màu yêu thích, mức đánh giá…
          <ul><li>Không sắp thứ tự được: Ninh Bình, Hưng Yên, Bắc Ninh.</li><li>Sắp thứ tự được: Kém &lt; Trung bình &lt; Khá &lt; Tốt &lt; Xuất sắc.</li></ul>
        </li>
      </ul>`,
      tip: "Hỏi: “Có đem cộng, trừ, tính trung bình được không?” — được thì là số liệu."
    },
    {
      h: "3. Tính đại diện và tính hợp lí",
      body: m`<p><b>Đại diện</b>: muốn kết luận cho cả trường thì phải hỏi học sinh nhiều lớp, cả nam lẫn nữ — không thể chỉ hỏi đội bóng đá rồi kết luận “cả trường thích bóng đá nhất”.</p>
      <p><b>Hợp lí</b>: kiểm tra dữ liệu có vô lí không, ví dụ tổng tỉ lệ vượt 100%, chiều cao học sinh lớp 7 là 250 cm…</p>`
    }
  ],
  mistakes: [
    "Cho rằng dữ liệu được ghi bằng chữ số luôn là số liệu. Ví dụ số điện thoại, số báo danh chỉ là mã, không đem tính toán được.",
    "Khảo sát một nhóm nhỏ, đặc biệt rồi kết luận cho cả tập thể lớn."
  ],
  examples: [
    { q: m`Bình phỏng vấn các bạn và thu được: (1) cân nặng (kg): 43; 41; 48; 45; 52. (2) Tỉnh quê: Ninh Bình, Hưng Yên, Bắc Ninh. (3) Đánh giá bài giảng: Tốt, Xuất sắc, Khá, Tốt. Mỗi dãy thuộc loại nào?`, steps: ["Dãy (1) là các con số đo được → dãy số liệu.", "Dãy (2) không là số và không sắp thứ tự được.", "Dãy (3) không là số nhưng sắp thứ tự được (Khá < Tốt < Xuất sắc)."], ans: "(1) số liệu; (2) không là số, không có thứ tự; (3) không là số, có thứ tự" }
  ],
  exercises: [
    { q: "Dãy dữ liệu “chiều cao (cm) của 5 bạn: 148; 152; 150; 155; 149” là:", type: "choice", choices: ["Số liệu", "Dữ liệu không là số, sắp thứ tự được", "Dữ liệu không là số, không sắp thứ tự được"], answer: 0, hint: "Có tính trung bình được không?", steps: ["Đây là các số đo, tính toán được → số liệu."] },
    { q: "Dãy dữ liệu “màu sắc yêu thích: xanh, đỏ, vàng, tím” là:", type: "choice", choices: ["Số liệu", "Không là số, sắp thứ tự được", "Không là số, không sắp thứ tự được"], answer: 2, hint: "Màu nào “lớn hơn” màu nào?", steps: ["Màu sắc không phải là số và không có thứ tự tự nhiên."] },
    { q: "Dãy dữ liệu “mức độ hài lòng: rất hài lòng, hài lòng, bình thường, không hài lòng” là:", type: "choice", choices: ["Số liệu", "Không là số, sắp thứ tự được", "Không là số, không sắp thứ tự được"], answer: 1, hint: "Có xếp từ thấp đến cao được không?", steps: ["Không phải số nhưng xếp được theo mức độ: không hài lòng < bình thường < hài lòng < rất hài lòng."] },
    { q: "Để biết môn thể thao học sinh cả trường yêu thích nhất, bạn Nam chỉ hỏi 30 bạn trong đội bóng đá. Kết quả khảo sát này:", type: "choice", choices: ["Đại diện cho cả trường", "Không đại diện cho cả trường"], answer: 1, hint: "Đội bóng đá thì thích môn gì?", steps: ["Các bạn trong đội bóng đá đương nhiên thiên về bóng đá.", "Nhóm này không đại diện cho mọi học sinh của trường."] },
    { q: "Một bảng khảo sát ghi: 45% thích đọc truyện, 30% thích xem phim, 35% thích chơi thể thao (mỗi bạn chọn đúng một ý). Dữ liệu này:", type: "choice", choices: ["Hợp lí", "Không hợp lí"], answer: 1, hint: "Cộng các tỉ lệ lại.", steps: ["45% + 30% + 35% = 110% > 100%.", "Mỗi bạn chọn đúng một ý thì tổng phải là 100%, nên dữ liệu không hợp lí."] },
    { q: "Muốn biết nhiệt độ lúc 7 giờ sáng mỗi ngày trong tháng ở nhà mình, cách thu thập phù hợp nhất là:", type: "choice", choices: ["Phỏng vấn hàng xóm", "Đo bằng nhiệt kế và ghi lại mỗi ngày", "Lập phiếu hỏi bạn bè", "Đoán theo cảm giác"], answer: 1, hint: "Nhiệt độ là đại lượng đo được.", steps: ["Nhiệt độ cần đo trực tiếp (quan sát/đo đạc) mới chính xác."] }
  ],
  summary: "Dữ liệu: là số (tính toán được) hoặc không là số (có/không có thứ tự). Thu thập phải đại diện và hợp lí."
});

lesson({
  id: "18",
  num: 18,
  label: "Bài 18",
  title: "Biểu đồ hình quạt tròn",
  pages: "93–99",
  intro: m`Biểu đồ hình quạt tròn giống một chiếc bánh pizza được chia phần: nhìn là biết phần nào lớn, phần nào nhỏ so với cả chiếc bánh.`,
  goals: ["Đọc tỉ lệ từ biểu đồ hình quạt tròn", "Tính số lượng từ tỉ lệ và ngược lại", "Nhận xét, rút ra kết luận"],
  theory: [
    {
      h: "1. Đọc biểu đồ hình quạt tròn",
      body: m`<p>Biểu đồ hình quạt tròn dùng để <b>so sánh các phần trong toàn bộ</b> dữ liệu. Cả hình tròn là \(100\%\); mỗi hình quạt là tỉ lệ phần trăm của một phần. Biểu đồ gồm: tiêu đề, hình tròn chia hình quạt, chú giải.</p>`,
      fig: pieTransport,
      key: m`<p>Nửa hình tròn là 50%; một phần tư hình tròn là 25%. Tổng các phần luôn bằng 100%.</p>`
    },
    {
      h: "2. Hai phép tính hay dùng",
      body: m`<ul>
        <li><b>Từ tỉ lệ ra số lượng:</b> số lượng \(=\) tổng \(\times\) tỉ lệ. Ví dụ \(40\%\) của 40 học sinh là \(40\cdot\dfrac{40}{100} = 16\) học sinh.</li>
        <li><b>Từ số lượng ra tỉ lệ:</b> tỉ lệ \(= \dfrac{\text{phần}}{\text{tổng}}\cdot100\%\). Ví dụ 10 trên 25 bạn là \(\dfrac{10}{25}\cdot100\% = 40\%\).</li>
      </ul>`
    },
    {
      h: "3. Biểu diễn dữ liệu vào biểu đồ",
      body: m`<p>Khi có bảng tỉ lệ, ta tô mỗi phần một màu, ghi tỉ lệ lên hình quạt, thêm chú giải và tiêu đề. Nếu có phần còn thiếu tỉ lệ, tính bằng \(100\% -\) tổng các phần đã biết.</p>`
    }
  ],
  mistakes: [
    "Đọc tỉ lệ rồi quên nhân với tổng khi đề hỏi “bao nhiêu học sinh”.",
    "Dùng biểu đồ hình quạt để biểu diễn sự thay đổi theo thời gian — việc đó nên dùng biểu đồ đoạn thẳng."
  ],
  examples: [
    { q: m`Dựa vào biểu đồ “Phương tiện đến trường của lớp 7A (40 HS)”, tính số học sinh đi xe buýt.`, fig: pieTransport, steps: [m`Tỉ lệ đi xe buýt: \(15\%\).`, m`Số học sinh: \(40\cdot\dfrac{15}{100} = 6\).`], ans: "6 học sinh" }
  ],
  exercises: [
    { q: "Theo biểu đồ, phương tiện nào được nhiều bạn lớp 7A dùng nhất?", fig: pieTransport, type: "choice", choices: ["Xe đạp", "Đi bộ", "Xe buýt", "Bố mẹ chở"], answer: 0, hint: "Hình quạt lớn nhất.", steps: ["Xe đạp chiếm 40% — lớn nhất."] },
    { q: "Lớp 7A có 40 học sinh. Có bao nhiêu bạn đi xe đạp?", fig: pieTransport, type: "num", answer: 16, unit: "học sinh", hint: "40% của 40.", steps: [m`\(40\cdot\dfrac{40}{100} = 16\) (học sinh).`], ans: "16 học sinh" },
    { q: "Tỉ lệ học sinh đi bộ hoặc đi xe buýt là bao nhiêu phần trăm?", fig: pieTransport, type: "num", answer: 40, unit: "%", hint: "Cộng hai tỉ lệ.", steps: [m`\(25\% + 15\% = 40\%\).`], ans: "40%" },
    { q: "Biểu đồ dưới đây bị mờ mất tỉ lệ của phần “Khác”. Phần “Khác” chiếm bao nhiêu phần trăm?", fig: pieMissing, type: "num", answer: 15, unit: "%", hint: "Cả hình tròn là 100%.", steps: [m`\(100\% - (35\% + 30\% + 20\%) = 100\% - 85\% = 15\%\).`], ans: "15%" },
    { q: "Lớp 7C có 25 học sinh, trong đó 10 bạn thích bóng đá. Tỉ lệ bạn thích bóng đá là bao nhiêu phần trăm?", type: "num", answer: 40, unit: "%", hint: "10 : 25 × 100%.", steps: [m`\(\dfrac{10}{25}\cdot 100\% = 40\%\).`], ans: "40%" },
    { q: "Biểu đồ hình quạt tròn thích hợp nhất để:", type: "choice", choices: ["Biểu diễn sự thay đổi của một đại lượng theo thời gian", "So sánh các phần trong toàn bộ dữ liệu", "Liệt kê tên các bạn trong lớp"], answer: 1, hint: "Nhớ lại ô Ghi nhớ đầu bài.", steps: ["Biểu đồ hình quạt tròn dùng để so sánh các phần trong tổng thể (100%)."] },
    { lv: 2, q: "Lớp 7A có 40 học sinh. Số bạn được bố mẹ chở nhiều hơn số bạn đi xe buýt bao nhiêu bạn?", fig: pieTransport, type: "num", answer: 2, unit: "học sinh", hint: "Tính số bạn từng loại rồi trừ, hoặc lấy (20% − 15%) × 40.", steps: [m`Bố mẹ chở: \(20\%\cdot40 = 8\); xe buýt: \(15\%\cdot40 = 6\).`, m`\(8 - 6 = 2\) (học sinh).`], ans: "2 học sinh" }
  ],
  summary: "Hình quạt tròn: cả hình = 100%. Số lượng = tổng × tỉ lệ; tỉ lệ = phần : tổng × 100%."
});

lesson({
  id: "19",
  num: 19,
  label: "Bài 19",
  title: "Biểu đồ đoạn thẳng",
  pages: "100–105",
  intro: m`Muốn xem giá xăng, cân nặng em bé hay doanh thu cửa hàng thay đổi thế nào qua thời gian? Biểu đồ đoạn thẳng cho thấy ngay lúc nào tăng, lúc nào giảm.`,
  goals: ["Đọc số liệu trên biểu đồ đoạn thẳng", "Nhận ra xu thế tăng, giảm", "Biết các bước vẽ biểu đồ đoạn thẳng"],
  theory: [
    {
      h: "1. Biểu đồ đoạn thẳng gồm những gì?",
      body: m`<ul>
        <li><b>Trục ngang</b>: biểu diễn thời gian (ngày, tháng, năm…).</li>
        <li><b>Trục đứng</b>: biểu diễn đại lượng đang quan tâm.</li>
        <li>Mỗi <b>điểm</b> là giá trị tại một thời điểm; hai điểm liên tiếp được nối bằng một <b>đoạn thẳng</b>.</li>
        <li><b>Tiêu đề</b> thường ở trên cùng.</li>
      </ul>`,
      fig: lineShop
    },
    {
      h: "2. Đọc và phân tích",
      body: m`<p>Đoạn thẳng đi lên: đại lượng <b>tăng</b>; đi xuống: <b>giảm</b>; nằm ngang: không đổi. Đoạn càng dốc thì thay đổi càng nhiều.</p>`,
      key: m`<p>Biểu đồ đoạn thẳng giúp nhận ra <b>xu thế</b> (tăng hay giảm) của một đại lượng theo thời gian.</p>`
    },
    {
      h: "3. Các bước vẽ",
      body: m`<ol><li>Vẽ trục ngang (thời gian) và trục đứng (đại lượng), chọn đơn vị phù hợp.</li><li>Đánh dấu các điểm theo bảng số liệu.</li><li>Nối các điểm liên tiếp bằng đoạn thẳng.</li><li>Ghi số liệu trên mỗi điểm (nếu cần) và đặt tiêu đề.</li></ol>`
    }
  ],
  mistakes: [
    "Đọc nhầm đơn vị trên trục đứng (ví dụ triệu đồng thành nghìn đồng).",
    "Nói “tăng nhiều nhất” mà chỉ nhìn điểm cao nhất. Tăng nhiều nhất là đoạn dốc lên nhiều nhất."
  ],
  examples: [
    { q: "Dựa vào biểu đồ doanh thu, từ thứ Hai đến Chủ nhật, doanh thu tăng nhiều nhất giữa hai ngày liên tiếp nào?", fig: lineShop, steps: ["Tính mức thay đổi: T2→T3: +0,5; T3→T4: −1; T4→T5: +1,5; T5→T6: +1; T6→T7: +2; T7→CN: −1.", "Mức tăng lớn nhất là +2 (triệu đồng), từ thứ Sáu sang thứ Bảy."], ans: "Từ thứ Sáu sang thứ Bảy (tăng 2 triệu đồng)" }
  ],
  exercises: [
    { q: "Ngày nào tiệm bánh mì có doanh thu cao nhất?", fig: lineShop, type: "choice", choices: ["Thứ Sáu", "Thứ Bảy", "Chủ nhật", "Thứ Năm"], answer: 1, hint: "Tìm điểm cao nhất.", steps: ["Điểm cao nhất ứng với T7, doanh thu 7 triệu đồng."] },
    { q: "Doanh thu ngày thứ Năm là bao nhiêu triệu đồng?", fig: lineShop, type: "num", answer: 4, unit: "triệu đồng", hint: "Tìm điểm ở cột T5.", steps: ["Điểm ở T5 ghi 4, tức 4 triệu đồng."], ans: "4 triệu đồng" },
    { q: "Doanh thu ngày thứ Bảy nhiều hơn thứ Sáu bao nhiêu triệu đồng?", fig: lineShop, type: "num", answer: 2, unit: "triệu đồng", hint: "7 − 5.", steps: [m`\(7 - 5 = 2\) (triệu đồng).`], ans: "2 triệu đồng" },
    { lv: 2, q: "Tổng doanh thu cả tuần của tiệm là bao nhiêu triệu đồng?", fig: lineShop, type: "num", answer: 31, unit: "triệu đồng", hint: "Cộng 7 giá trị.", steps: [m`\(3 + 3{,}5 + 2{,}5 + 4 + 5 + 7 + 6 = 31\) (triệu đồng).`], ans: "31 triệu đồng" },
    { q: "Từ 6 giờ đến 12 giờ, nhiệt độ ở Hà Nội:", fig: lineTemp, type: "choice", choices: ["Tăng dần", "Giảm dần", "Không đổi", "Lúc tăng lúc giảm"], answer: 0, hint: "Nhìn các đoạn thẳng từ 6h đến 12h.", steps: ["Các đoạn thẳng từ 6h → 9h → 12h đều đi lên: 24 → 27 → 32 (°C).", "Vậy nhiệt độ tăng dần."] },
    { q: "Nhiệt độ lúc 12 giờ cao hơn lúc 21 giờ bao nhiêu độ C?", fig: lineTemp, type: "num", answer: 6, unit: "°C", hint: "32 − 26.", steps: [m`\(32 - 26 = 6\) (°C).`], ans: "6 °C" },
    { q: "Muốn biểu diễn cân nặng của một em bé qua 12 tháng đầu đời, nên dùng:", type: "choice", choices: ["Biểu đồ hình quạt tròn", "Biểu đồ đoạn thẳng", "Bảng danh sách tên"], answer: 1, hint: "Đại lượng thay đổi theo thời gian.", steps: ["Cân nặng thay đổi theo thời gian (tháng) → biểu đồ đoạn thẳng."] }
  ],
  summary: "Biểu đồ đoạn thẳng: trục ngang là thời gian, dùng để thấy xu thế tăng/giảm của một đại lượng."
});

review({
  chapter: 5,
  pages: "106–109",
  recap: [
    "Dữ liệu: là số / không là số (có hoặc không có thứ tự). Cần đại diện và hợp lí.",
    "Biểu đồ hình quạt tròn: so sánh các phần trong tổng thể 100%.",
    "Biểu đồ đoạn thẳng: sự thay đổi theo thời gian, xu thế tăng/giảm."
  ],
  exercises: [
    { q: "Dữ liệu “xếp loại học lực: Tốt, Khá, Đạt, Chưa đạt” thuộc loại:", type: "choice", choices: ["Số liệu", "Không là số, sắp thứ tự được", "Không là số, không sắp thứ tự được"], answer: 1, hint: "Có xếp theo mức được không?", steps: ["Không phải số nhưng xếp được: Chưa đạt < Đạt < Khá < Tốt."] },
    { q: "Một thư viện có 400 cuốn sách, trong đó sách giáo khoa chiếm 40%. Có bao nhiêu cuốn sách giáo khoa?", type: "num", answer: 160, unit: "cuốn", hint: "400 × 40%.", steps: [m`\(400\cdot\dfrac{40}{100} = 160\) (cuốn).`], ans: "160 cuốn" },
    { q: "Một biểu đồ hình quạt tròn có ba phần: 45%, 35% và phần còn lại. Phần còn lại chiếm:", type: "num", answer: 20, unit: "%", hint: "100% trừ tổng hai phần kia.", steps: [m`\(100\% - 45\% - 35\% = 20\%\).`], ans: "20%" },
    { q: "Biểu đồ đoạn thẳng về số khách của một quán qua các tháng có các đoạn thẳng liên tục đi xuống. Điều đó cho biết:", type: "choice", choices: ["Số khách tăng dần", "Số khách giảm dần", "Số khách không đổi"], answer: 1, hint: "Đi xuống nghĩa là gì?", steps: ["Đoạn thẳng đi xuống: đại lượng giảm."] },
    { lv: 2, q: m`Năm 2020, dân số Việt Nam khoảng 97,58 triệu người, trong đó thành thị chiếm 36,8%. Số dân thành thị khoảng bao nhiêu triệu người (làm tròn đến hàng phần mười)?`, type: "num", answer: 35.9, unit: "triệu người", hint: "97,58 × 36,8 : 100.", steps: [m`\(97{,}58\cdot\dfrac{36{,}8}{100} = 35{,}90944\ldots\)`, m`Làm tròn đến hàng phần mười: \(\approx 35{,}9\) (triệu người).`], ans: "≈ 35,9 triệu người" }
  ]
});
