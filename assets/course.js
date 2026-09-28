// Nội dung dùng String.raw (m`...`) để viết công thức LaTeX với \( ... \) mà không phải nhân đôi dấu \.
window.m = String.raw;

window.COURSE = {
  chapters: [
    { id: 0, code: "Khởi động", title: "Ôn nhanh nền tảng lớp 6", color: "#6b6f76", lessons: ["0"] },
    { id: 1, code: "Chương I", title: "Số hữu tỉ", color: "#c0513a", lessons: ["1", "2", "3", "4"], review: true },
    { id: 2, code: "Chương II", title: "Số thực", color: "#9a4a86", lessons: ["5", "6", "7"], review: true },
    { id: 3, code: "Chương III", title: "Góc và đường thẳng song song", color: "#2b7489", lessons: ["8", "9", "10", "11"], review: true },
    { id: 4, code: "Chương IV", title: "Tam giác bằng nhau", color: "#3b7a4c", lessons: ["12", "13", "14", "15", "16"], review: true },
    { id: 5, code: "Chương V", title: "Thu thập và biểu diễn dữ liệu", color: "#a87a1f", lessons: ["17", "18", "19"], review: true },
    { id: 6, code: "Thực hành", title: "Hoạt động thực hành trải nghiệm", color: "#5a5f9e", lessons: ["gg", "ds"] }
  ],
  lessons: {},
  reviews: {},
  glossary: []
};

window.lesson = function (o) { COURSE.lessons[o.id] = o; };
window.review = function (o) { COURSE.reviews[o.chapter] = o; };
