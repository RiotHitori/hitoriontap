/* ================= CHƯƠNG II. SỐ THỰC ================= */

lesson({
  id: "5",
  num: 5,
  label: "Bài 5",
  title: "Làm quen với số thập phân vô hạn tuần hoàn",
  pages: "26–28",
  intro: m`Chia 1 cho 3 trên máy tính, bạn được \(0{,}33333\ldots\) mãi không hết. Bài này giải thích loại số “chia mãi không dứt” đó và cách làm tròn chúng.`,
  goals: ["Phân biệt số thập phân hữu hạn và vô hạn tuần hoàn", "Tìm chu kì, viết gọn", "Làm tròn số theo hàng hoặc theo độ chính xác"],
  theory: [
    {
      h: "1. Hữu hạn và vô hạn tuần hoàn",
      body: m`<ul>
        <li>\(\dfrac{3}{4} = 0{,}75\) — phép chia dừng lại: <b>số thập phân hữu hạn</b>.</li>
        <li>\(\dfrac{5}{18} = 0{,}2777\ldots\) — chữ số 7 lặp lại mãi: <b>số thập phân vô hạn tuần hoàn</b>.</li>
      </ul>
      <p>Phần lặp lại gọi là <b>chu kì</b>, viết trong ngoặc tròn: \(0{,}2777\ldots = 0{,}2(7)\); \(\;-1{,}545454\ldots = -1{,}(54)\).</p>`,
      key: m`<p>Mọi số hữu tỉ đều viết được dưới dạng số thập phân <b>hữu hạn</b> hoặc <b>vô hạn tuần hoàn</b>.</p>`,
      tip: m`Rút gọn phân số (mẫu dương) rồi nhìn mẫu: nếu mẫu chỉ có thừa số nguyên tố 2 và 5 (như 4, 8, 20, 25…) thì ra số hữu hạn; có thừa số khác (3, 7, 11…) thì ra số vô hạn tuần hoàn.`
    },
    {
      h: "2. Làm tròn số",
      body: m`<p>Quy tắc: nhìn <b>chữ số đầu tiên bị bỏ đi</b>.</p>
      <ul>
        <li>Nếu nó \(\ge 5\): cộng thêm 1 vào chữ số cuối được giữ lại.</li>
        <li>Nếu nó \(< 5\): giữ nguyên chữ số cuối.</li>
      </ul>
      <p>Ví dụ: làm tròn \(46{,}333\ldots\) đến hàng đơn vị được \(46\) (vì chữ số bỏ đi là \(3 < 5\)); làm tròn \(-1{,}27(534)\) đến hàng phần trăm được \(-1{,}28\).</p>
      <p>Kí hiệu \(\approx\) đọc là “xấp xỉ”: \(46{,}333\ldots \approx 46\).</p>`
    },
    {
      h: "3. Làm tròn theo độ chính xác",
      body: m`<p>Khi làm tròn đến một hàng nào đó, kết quả có <b>độ chính xác bằng một nửa đơn vị hàng làm tròn</b>. Ngược lại, đề cho độ chính xác thì ta tra bảng để biết làm tròn đến hàng nào:</p>
      <div class="tbl-wrap"><table class="tbl"><tr><th>Độ chính xác</th><td>50</td><td>5</td><td>0,5</td><td>0,05</td><td>0,005</td></tr>
      <tr><th>Làm tròn đến hàng</th><td>trăm</td><td>chục</td><td>đơn vị</td><td>phần mười</td><td>phần trăm</td></tr></table></div>`,
      key: m`<p>Độ chính xác \(0{,}05\) \(\to\) làm tròn đến hàng phần mười. Độ chính xác \(0{,}005\) \(\to\) hàng phần trăm.</p>`
    }
  ],
  mistakes: [
    m`Viết sai chu kì: \(0{,}58333\ldots = 0{,}58(3)\), không phải \(0{,}(583)\). Chỉ đưa vào ngoặc phần thật sự lặp lại.`,
    m`Làm tròn dây chuyền: làm tròn \(2{,}345\) đến hàng phần mười phải nhìn chữ số 4 → được \(2{,}3\), không làm tròn 5 thành 2,35 rồi thành 2,4.`
  ],
  examples: [
    { q: m`Viết \(\dfrac{7}{12}\) dưới dạng số thập phân và chỉ ra chu kì.`, steps: [m`Đặt phép chia \(7 : 12 = 0{,}58333\ldots\)`, m`Chữ số 3 lặp lại mãi, các chữ số 5 và 8 không lặp.`, m`Chu kì là 3, viết gọn \(0{,}58(3)\).`], ans: m`\(\dfrac7{12} = 0{,}58(3)\), chu kì 3` },
    { q: m`Làm tròn số \(3{,}14159\) với độ chính xác \(0{,}005\).`, steps: [m`Độ chính xác \(0{,}005\) \(\to\) làm tròn đến hàng phần trăm.`, m`Giữ lại \(3{,}14\); chữ số đầu tiên bị bỏ là \(1 < 5\), giữ nguyên.`], ans: m`\(3{,}14159 \approx 3{,}14\)` }
  ],
  exercises: [
    { q: m`Số \(\dfrac38\) viết được dưới dạng số thập phân nào?`, type: "choice", choices: ["Hữu hạn", "Vô hạn tuần hoàn"], answer: 0, hint: "Mẫu 8 = 2·2·2.", steps: [m`\(3 : 8 = 0{,}375\), phép chia dừng lại.`, m`Mẫu \(8 = 2^3\) chỉ có thừa số 2 nên là số thập phân hữu hạn.`] },
    { q: m`\(\dfrac23\) viết gọn dưới dạng số thập phân là:`, type: "choice", choices: [m`\(0{,}6\)`, m`\(0{,}(6)\)`, m`\(0{,}(66)6\)`, m`\(0{,}67\)`], answer: 1, hint: "Chia 2 cho 3.", steps: [m`\(2 : 3 = 0{,}666\ldots\)`, m`Chữ số 6 lặp lại nên viết \(0{,}(6)\).`, m`\(0{,}67\) chỉ là giá trị làm tròn, không bằng đúng \(\dfrac23\).`] },
    { q: m`Chu kì của số \(1{,}0363636\ldots\) là:`, type: "choice", choices: ["0", "36", "63", "036"], answer: 1, hint: "Tìm nhóm chữ số lặp lại liên tục đến vô tận.", steps: [m`Sau chữ số 0, nhóm “36” lặp lại mãi.`, m`Viết gọn \(1{,}0(36)\), chu kì là 36.`] },
    { q: m`Số nào dưới đây viết được dưới dạng số thập phân vô hạn tuần hoàn?`, type: "choice", choices: [m`\(\dfrac{7}{20}\)`, m`\(\dfrac{3}{25}\)`, m`\(\dfrac{5}{6}\)`, m`\(\dfrac{9}{16}\)`], answer: 2, hint: "Phân tích mẫu ra thừa số nguyên tố.", steps: [m`\(20 = 2^2\cdot5\), \(25 = 5^2\), \(16 = 2^4\): chỉ có 2 và 5 nên là hữu hạn.`, m`\(6 = 2\cdot3\) có thừa số 3, nên \(\dfrac56 = 0{,}8(3)\) là vô hạn tuần hoàn.`] },
    { q: m`Làm tròn \(12{,}3456\) đến hàng phần trăm.`, type: "num", answer: 12.35, hint: "Hàng phần trăm là chữ số thứ hai sau dấu phẩy. Nhìn chữ số ngay sau nó.", steps: [m`Chữ số hàng phần trăm là 4; chữ số bỏ đi đầu tiên là 5.`, m`Vì \(5 \ge 5\) nên tăng 4 lên 5: \(12{,}35\).`], ans: "12,35" },
    { q: m`Làm tròn số \(a = 46{,}333\ldots\) với độ chính xác \(0{,}5\).`, type: "num", answer: 46, hint: "Độ chính xác 0,5 → làm tròn đến hàng đơn vị.", steps: [m`Độ chính xác 0,5 ứng với hàng đơn vị.`, m`Chữ số bỏ đi đầu tiên là 3 < 5 nên \(a \approx 46\).`], ans: "46" },
    { lv: 2, q: m`Dân số một tỉnh là 1 234 567 người. Làm tròn số này với độ chính xác 500.`, type: "num", answer: 1235000, hint: "Độ chính xác 500 = nửa của 1000 → làm tròn đến hàng nghìn.", steps: [m`Độ chính xác 500 \(\to\) làm tròn đến hàng nghìn.`, m`Chữ số hàng nghìn là 4, chữ số bỏ đi đầu tiên (hàng trăm) là 5 nên tăng lên: \(1\,235\,000\).`], ans: "1 235 000" },
    { lv: 2, q: m`Làm tròn \(-1{,}(27)\) đến hàng phần mười.`, type: "num", answer: -1.3, hint: m`\(-1{,}(27) = -1{,}2727\ldots\). Làm tròn phần số rồi giữ dấu âm.`, steps: [m`\(-1{,}(27) = -1{,}2727\ldots\)`, m`Phần số \(1{,}2727\ldots\) làm tròn đến hàng phần mười: chữ số bỏ đi là 7 ≥ 5 nên được \(1{,}3\).`, m`Giữ dấu âm: \(-1{,}3\).`], ans: "−1,3" }
  ],
  summary: m`Số hữu tỉ = thập phân hữu hạn hoặc vô hạn tuần hoàn. Làm tròn: nhìn chữ số đầu bị bỏ, ≥ 5 thì tăng 1.`
});

lesson({
  id: "6",
  num: 6,
  label: "Bài 6",
  title: "Số vô tỉ. Căn bậc hai số học",
  pages: "29–32",
  intro: m`Có một hình vuông diện tích 2 dm². Cạnh của nó dài bao nhiêu? Không có phân số nào bình phương lên bằng 2 cả — đó là lúc ta cần một loại số mới: số vô tỉ.`,
  goals: ["Nhận biết số vô tỉ", "Tính căn bậc hai số học của số chính phương", "Dùng máy tính để tính gần đúng căn bậc hai"],
  theory: [
    {
      h: "1. Số vô tỉ",
      body: m`<p>Số \(\sqrt2 = 1{,}41421356\ldots\) có vô số chữ số sau dấu phẩy và <b>không lặp lại theo chu kì nào</b>.</p>`,
      key: m`<p><b>Số vô tỉ</b> là số viết được dưới dạng số thập phân vô hạn <b>không tuần hoàn</b>. Tập hợp số vô tỉ kí hiệu là \(\mathbb{I}\).</p>`,
      tip: m`Số \(\pi = 3{,}14159265\ldots\) (tỉ số giữa chu vi và đường kính hình tròn) cũng là số vô tỉ.`
    },
    {
      h: "2. Căn bậc hai số học",
      body: m`<p>Căn bậc hai số học của số \(a \ge 0\) là số \(x \ge 0\) sao cho \(x^2 = a\). Kí hiệu \(\sqrt a\).</p>
      <p>\(\sqrt{100} = 10\) vì \(10 \ge 0\) và \(10^2 = 100\). &nbsp; \(\sqrt{0} = 0\). &nbsp; \(\sqrt{\dfrac49} = \dfrac23\).</p>
      <p>Số âm <b>không có</b> căn bậc hai số học (vì bình phương số nào cũng không âm).</p>`,
      key: m`<p>Với \(a \ge 0\): \(\sqrt{a} \ge 0\), \(\;(\sqrt a)^2 = a\), \(\;\sqrt{a^2} = a\).</p>`
    },
    {
      h: "3. Bảng số chính phương nên thuộc",
      body: m`<div class="tbl-wrap"><table class="tbl">
        <tr><th>\(a\)</th><td>1</td><td>4</td><td>9</td><td>16</td><td>25</td><td>36</td><td>49</td><td>64</td><td>81</td><td>100</td><td>121</td><td>144</td></tr>
        <tr><th>\(\sqrt a\)</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td></tr>
      </table></div>
      <p>Căn của số không chính phương như \(\sqrt2, \sqrt3, \sqrt5, \sqrt7\) là số vô tỉ — dùng máy tính cầm tay (phím \(\sqrt{\;}\)) để tính gần đúng: \(\sqrt5 \approx 2{,}236\).</p>`
    }
  ],
  mistakes: [
    m`\(\sqrt9 = 3\), không phải \(\pm3\). Căn bậc hai <b>số học</b> luôn không âm.`,
    m`\(\sqrt{9 + 16} \ne \sqrt9 + \sqrt{16}\). Đúng là \(\sqrt{25} = 5\), còn \(3 + 4 = 7\).`,
    m`\(\sqrt{0{,}9} \ne 0{,}3\) vì \(0{,}3^2 = 0{,}09\). Ta có \(\sqrt{0{,}09} = 0{,}3\).`
  ],
  examples: [
    { q: m`Tính \(\sqrt{191^2}\) và \(\sqrt{0{,}36}\).`, steps: [m`\(191 > 0\) nên \(\sqrt{191^2} = 191\).`, m`\(0{,}6 \ge 0\) và \(0{,}6^2 = 0{,}36\) nên \(\sqrt{0{,}36} = 0{,}6\).`], ans: m`\(191\) và \(0{,}6\)` },
    { q: m`Sàn thi đấu cử tạ hình vuông có diện tích 144 m². Tính chu vi sàn.`, steps: [m`Cạnh hình vuông \(= \sqrt{144} = 12\) (m).`, m`Chu vi \(= 4 \cdot 12 = 48\) (m).`], ans: "48 m" }
  ],
  exercises: [
    { q: m`Tính \(\sqrt{81}\).`, type: "num", answer: 9, hint: "Số nào (không âm) nhân với chính nó bằng 81?", steps: [m`\(9 \ge 0\) và \(9^2 = 81\).`, m`Vậy \(\sqrt{81} = 9\).`], ans: "9" },
    { q: m`Tính \(\sqrt{\dfrac{4}{25}}\).`, type: "num", answer: "2/5", hint: "Lấy căn của tử và của mẫu.", steps: [m`\(\left(\dfrac25\right)^2 = \dfrac4{25}\) và \(\dfrac25 \ge 0\).`, m`Nên \(\sqrt{\dfrac4{25}} = \dfrac25\).`], ans: m`\(\dfrac25\)` },
    { q: m`Tính \(\sqrt{0{,}36}\).`, type: "num", answer: 0.6, hint: "Số nào bình phương bằng 0,36?", steps: [m`\(0{,}6^2 = 0{,}36\).`, m`\(\sqrt{0{,}36} = 0{,}6\).`], ans: "0,6" },
    { q: m`Tính \(\sqrt{13^2}\).`, type: "num", answer: 13, hint: m`\(\sqrt{a^2} = a\) với \(a \ge 0\).`, steps: [m`\(13 \ge 0\) nên \(\sqrt{13^2} = 13\).`], ans: "13" },
    { q: m`Số nào dưới đây là số vô tỉ?`, type: "choice", choices: [m`\(\sqrt{16}\)`, m`\(0{,}(3)\)`, m`\(\sqrt5\)`, m`\(-\dfrac73\)`], answer: 2, hint: "Số vô tỉ: thập phân vô hạn không tuần hoàn.", why: { 0: m`\(\sqrt{16} = 4\) là số nguyên, là số hữu tỉ.`, 1: m`\(0{,}(3)\) là số thập phân vô hạn <b>tuần hoàn</b>, nên là số hữu tỉ (\(=\dfrac13\)).`, 3: "Đây là phân số, là số hữu tỉ." }, steps: [m`\(\sqrt{16} = 4\); \(0{,}(3) = \dfrac13\); \(-\dfrac73\) đều là số hữu tỉ.`, m`5 không phải số chính phương nên \(\sqrt5 = 2{,}2360679\ldots\) là số vô tỉ.`] },
    { q: m`\(\sqrt{9 + 16}\) bằng bao nhiêu?`, type: "num", answer: 5, hint: "Cộng trong căn trước.", steps: [m`\(9 + 16 = 25\).`, m`\(\sqrt{25} = 5\).`, m`Lưu ý: không được tách thành \(\sqrt9 + \sqrt{16} = 7\).`], ans: "5" },
    { q: m`Dùng máy tính, \(\sqrt7 = 2{,}6457513\ldots\). Làm tròn \(\sqrt7\) đến hàng phần trăm.`, type: "num", answer: 2.65, hint: "Nhìn chữ số hàng phần nghìn.", steps: [m`Giữ đến hàng phần trăm: \(2{,}64\); chữ số bỏ đi đầu tiên là 5.`, m`\(5 \ge 5\) nên tăng lên: \(\sqrt7 \approx 2{,}65\).`], ans: "2,65" },
    { lv: 2, q: m`Một mảnh vườn hình vuông có diện tích 144 m². Người ta rào xung quanh vườn. Hỏi hàng rào dài bao nhiêu mét?`, type: "num", answer: 48, unit: "m", hint: "Tìm cạnh bằng căn bậc hai của diện tích, rồi tính chu vi.", steps: [m`Cạnh vườn \(= \sqrt{144} = 12\) (m).`, m`Chiều dài hàng rào = chu vi \(= 4\cdot12 = 48\) (m).`], ans: "48 m" }
  ],
  summary: m`Số vô tỉ: thập phân vô hạn không tuần hoàn (như \(\sqrt2\), \(\pi\)). \(\sqrt a\) là số không âm có bình phương bằng \(a\).`
});

lesson({
  id: "7",
  num: 7,
  label: "Bài 7",
  title: "Tập hợp các số thực",
  pages: "33–36",
  intro: m`Gộp số hữu tỉ và số vô tỉ lại, ta được <b>số thực</b> — tất cả những con số bạn gặp trong đời sống. Bài này còn giới thiệu “giá trị tuyệt đối”: khoảng cách từ một số đến số 0.`,
  goals: ["Hiểu số thực, trục số thực", "So sánh hai số thực", "Tính giá trị tuyệt đối"],
  theory: [
    {
      h: "1. Số thực",
      body: m`<p>Số hữu tỉ và số vô tỉ được gọi chung là <b>số thực</b>. Tập hợp số thực kí hiệu là \(\mathbb{R}\).</p>
      <p>\(\mathbb N \subset \mathbb Z \subset \mathbb Q \subset \mathbb R\) &nbsp;và&nbsp; \(\mathbb I \subset \mathbb R\).</p>
      <p>Mỗi số thực được biểu diễn bởi một điểm trên trục số và ngược lại — nên trục số còn gọi là <b>trục số thực</b>.</p>`,
      key: m`<p>Mỗi số thực \(a\) có một số đối là \(-a\). Các phép tính và tính chất với số thực giống hệt như với số hữu tỉ.</p>`
    },
    {
      h: "2. So sánh hai số thực",
      body: m`<p>Viết hai số dưới dạng số thập phân rồi so sánh như bình thường.</p>
      <p>\(\sqrt2 = 1{,}414\ldots > 1{,}41\) nên \(-\sqrt2 < -1{,}41\).</p>`,
      tip: m`Với \(a, b \ge 0\): \(a < b\) thì \(\sqrt a < \sqrt b\). Ví dụ \(\sqrt{15} < \sqrt{16} = 4\).`
    },
    {
      h: "3. Giá trị tuyệt đối",
      body: m`<p>Giá trị tuyệt đối của số \(a\), kí hiệu \(|a|\), là <b>khoảng cách</b> từ điểm \(a\) đến điểm 0 trên trục số. Khoảng cách thì không bao giờ âm.</p>
      <p>\(|3| = 3\); \(\;|-3| = 3\); \(\;|0| = 0\); \(\;|-\sqrt2| = \sqrt2\).</p>`,
      fig: F.numberLine({ min: -4, max: 4, points: [{ v: -3, label: "−3" }, { v: 3, label: "3" }] }),
      key: m`<p>\(|a| = a\) nếu \(a \ge 0\); \(\;|a| = -a\) nếu \(a < 0\). Luôn có \(|a| \ge 0\) và \(|-a| = |a|\).</p>`
    }
  ],
  mistakes: [
    m`Nghĩ \(|-a|\) luôn bằng \(a\). Nếu \(a = -5\) thì \(|-a| = |5| = 5 = -a\). Giá trị tuyệt đối luôn không âm.`,
    m`Tìm \(|x| = 5\) mà chỉ ghi \(x = 5\). Còn nghiệm \(x = -5\) nữa!`
  ],
  examples: [
    { q: m`So sánh \(\sqrt{10}\) và \(3{,}2\).`, steps: [m`Dùng máy tính: \(\sqrt{10} = 3{,}1622\ldots\)`, m`\(3{,}16\ldots < 3{,}2\).`, m`Cách khác: \(3{,}2^2 = 10{,}24 > 10\) nên \(3{,}2 > \sqrt{10}\).`], ans: m`\(\sqrt{10} < 3{,}2\)` },
    { q: m`Tìm \(x\), biết \(|x| = 2\).`, steps: [m`Những số cách 0 đúng 2 đơn vị trên trục số.`, m`Có hai số: \(2\) (bên phải 0) và \(-2\) (bên trái 0).`], ans: m`\(x = 2\) hoặc \(x = -2\)` }
  ],
  exercises: [
    { q: m`Tính \(\left|-\dfrac79\right|\).`, type: "num", answer: "7/9", hint: "Bỏ dấu âm.", steps: [m`\(-\dfrac79 < 0\) nên \(\left|-\dfrac79\right| = \dfrac79\).`], ans: m`\(\dfrac79\)` },
    { q: m`Tính \(|-2{,}5| + |1{,}5|\).`, type: "num", answer: 4, hint: "Tính từng giá trị tuyệt đối rồi cộng.", steps: [m`\(|-2{,}5| = 2{,}5\); \(|1{,}5| = 1{,}5\).`, m`\(2{,}5 + 1{,}5 = 4\).`], ans: "4" },
    { q: "Khẳng định nào đúng?", type: "choice", choices: [m`\(\sqrt2 \in \mathbb Q\)`, m`\(\pi \in \mathbb I\)`, m`\(-5 \notin \mathbb R\)`, m`\(\dfrac13 \in \mathbb I\)`], answer: 1, hint: m`\(\mathbb Q\): hữu tỉ, \(\mathbb I\): vô tỉ, \(\mathbb R\): thực.`, steps: [m`\(\sqrt2\) là số vô tỉ nên \(\sqrt2 \notin \mathbb Q\).`, m`\(-5\) là số thực nên \(-5 \in \mathbb R\).`, m`\(\dfrac13\) là số hữu tỉ, không phải vô tỉ.`, m`\(\pi\) là số vô tỉ: \(\pi \in \mathbb I\) — đúng.`] },
    { q: m`So sánh \(\sqrt{15}\) và \(4\).`, type: "choice", choices: [m`\(\sqrt{15} > 4\)`, m`\(\sqrt{15} = 4\)`, m`\(\sqrt{15} < 4\)`], answer: 2, hint: m`\(4 = \sqrt{16}\).`, steps: [m`\(4 = \sqrt{16}\).`, m`Vì \(15 < 16\) nên \(\sqrt{15} < \sqrt{16} = 4\).`] },
    { q: m`Tìm \(x\), biết \(|x| = 5\).`, type: "choice", choices: [m`\(x = 5\)`, m`\(x = -5\)`, m`\(x = 5\) hoặc \(x = -5\)`, "Không có x nào"], answer: 2, hint: "Những số nào cách 0 đúng 5 đơn vị?", steps: [m`Có hai điểm cách 0 đúng 5 đơn vị: \(5\) và \(-5\).`] },
    { q: m`Số đối của \(-\sqrt3\) là:`, type: "choice", choices: [m`\(-\sqrt3\)`, m`\(\sqrt3\)`, m`\(\dfrac{1}{\sqrt3}\)`, m`\(3\)`], answer: 1, hint: "Số đối: đổi dấu.", steps: [m`\(-(-\sqrt3) = \sqrt3\).`] },
    { lv: 2, q: m`Sắp xếp theo thứ tự tăng dần: \(-\sqrt2;\; -1{,}5;\; 0;\; \sqrt3;\; 1{,}7\).`, type: "choice", choices: [m`\(-\sqrt2 < -1{,}5 < 0 < 1{,}7 < \sqrt3\)`, m`\(-1{,}5 < -\sqrt2 < 0 < \sqrt3 < 1{,}7\)`, m`\(-1{,}5 < -\sqrt2 < 0 < 1{,}7 < \sqrt3\)`, m`\(-\sqrt2 < -1{,}5 < 0 < \sqrt3 < 1{,}7\)`], answer: 2, hint: m`\(\sqrt2 \approx 1{,}414\), \(\sqrt3 \approx 1{,}732\).`, steps: [m`\(-\sqrt2 \approx -1{,}414\). Vì \(1{,}5 > 1{,}414\) nên \(-1{,}5 < -\sqrt2\).`, m`\(\sqrt3 \approx 1{,}732 > 1{,}7\).`] },
    { lv: 2, q: m`Tìm \(x\), biết \(|x - 1| = 3\).`, type: "choice", choices: [m`\(x = 4\)`, m`\(x = 4\) hoặc \(x = -2\)`, m`\(x = -4\) hoặc \(x = 2\)`, m`\(x = 2\)`], answer: 1, hint: m`\(x - 1 = 3\) hoặc \(x - 1 = -3\).`, steps: [m`\(|x - 1| = 3\) nên \(x - 1 = 3\) hoặc \(x - 1 = -3\).`, m`Trường hợp 1: \(x = 3 + 1 = 4\).`, m`Trường hợp 2: \(x = -3 + 1 = -2\).`] }
  ],
  summary: m`Số thực = hữu tỉ + vô tỉ. So sánh bằng cách viết ra số thập phân. \(|a|\) là khoảng cách từ \(a\) đến 0, luôn \(\ge 0\).`
});

review({
  chapter: 2,
  pages: "37–39",
  recap: [
    "Số hữu tỉ ↔ thập phân hữu hạn hoặc vô hạn tuần hoàn; số vô tỉ ↔ thập phân vô hạn không tuần hoàn.",
    m`\(\sqrt a\) (với \(a \ge 0\)) là số không âm có bình phương bằng \(a\).`,
    m`\(|a| = a\) nếu \(a \ge 0\); \(|a| = -a\) nếu \(a < 0\).`,
    "Làm tròn theo độ chính xác d: làm tròn đến hàng có đơn vị gấp đôi d."
  ],
  exercises: [
    { q: m`Viết \(\dfrac{5}{11}\) dưới dạng số thập phân.`, type: "choice", choices: [m`\(0{,}45\)`, m`\(0{,}(45)\)`, m`\(0{,}4(5)\)`, m`\(0{,}(454)\)`], answer: 1, hint: "Chia 5 cho 11.", steps: [m`\(5 : 11 = 0{,}454545\ldots\)`, m`Nhóm “45” lặp lại nên viết \(0{,}(45)\).`] },
    { q: m`Tính \(\sqrt{49} - \sqrt{0{,}25}\).`, type: "num", answer: 6.5, hint: m`\(\sqrt{0{,}25} = 0{,}5\).`, steps: [m`\(\sqrt{49} = 7\); \(\sqrt{0{,}25} = 0{,}5\).`, m`\(7 - 0{,}5 = 6{,}5\).`], ans: "6,5" },
    { q: m`Tính \(|-3{,}2| - |0{,}8|\).`, type: "num", answer: 2.4, hint: "Bỏ dấu âm trong giá trị tuyệt đối.", steps: [m`\(3{,}2 - 0{,}8 = 2{,}4\).`], ans: "2,4" },
    { q: m`Làm tròn \(\pi = 3{,}14159\ldots\) với độ chính xác \(0{,}05\).`, type: "num", answer: 3.1, hint: "Độ chính xác 0,05 → hàng phần mười.", steps: [m`Độ chính xác \(0{,}05\) \(\to\) hàng phần mười.`, m`Chữ số bỏ đi đầu tiên là 4 < 5 nên \(\pi \approx 3{,}1\).`], ans: "3,1" },
    { q: m`Có bao nhiêu số vô tỉ trong các số: \(\sqrt4;\; \sqrt6;\; 0{,}1(23);\; \pi;\; -\sqrt{9}\)?`, type: "num", answer: 2, hint: "Rút gọn các căn trước.", steps: [m`\(\sqrt4 = 2\), \(-\sqrt9 = -3\) là số nguyên; \(0{,}1(23)\) là vô hạn tuần hoàn → hữu tỉ.`, m`\(\sqrt6\) và \(\pi\) là số vô tỉ.`, m`Có 2 số vô tỉ.`], ans: "2" },
    { lv: 2, q: m`Tìm \(x \ge 0\), biết \(x^2 = 2{,}25\).`, type: "num", label: "x =", answer: 1.5, hint: m`\(x = \sqrt{2{,}25}\).`, steps: [m`Vì \(x \ge 0\) nên \(x = \sqrt{2{,}25}\).`, m`\(1{,}5^2 = 2{,}25\) nên \(x = 1{,}5\).`], ans: "x = 1,5" },
    { lv: 2, q: m`Một tấm kính hình vuông có diện tích 2 m². Độ dài cạnh tấm kính (làm tròn đến hàng phần trăm) là bao nhiêu mét?`, type: "num", answer: 1.41, unit: "m", hint: m`Cạnh \(= \sqrt2 = 1{,}41421\ldots\)`, steps: [m`Cạnh \(= \sqrt 2 = 1{,}41421\ldots\)`, m`Làm tròn đến hàng phần trăm: chữ số bỏ đi là 4 < 5, được \(1{,}41\) m.`], ans: "≈ 1,41 m" }
  ]
});
