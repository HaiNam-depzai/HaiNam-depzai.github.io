// Lấy các thành phần từ HTML về để xử lý
const passwordInput = document.getElementById('password');
const thanhDo = document.getElementById('thanh-do');
const thongBao = document.getElementById('thong-bao-mat-khau');
const form = document.getElementById('regForm');

// Tính năng 1: Kiểm tra mật khẩu khi đang gõ (Real-time)
passwordInput.oninput = function() {
    let mk = passwordInput.value;
    
    if (mk.length === 0) {
        thongBao.innerText = "Mức độ: Chưa nhập";
        thanhDo.style.width = "0%";
    } else if (mk.length < 6) {
        thongBao.innerText = "Mức độ: Yếu";
        thanhDo.style.backgroundColor = "red";
        thanhDo.style.width = "30%";
    } else if (/[a-zA-Z]/.test(mk) && /[0-9]/.test(mk)) {
        // Nếu có cả chữ và số thì là Mạnh
        thongBao.innerText = "Mức độ: Mạnh";
        thanhDo.style.backgroundColor = "green";
        thanhDo.style.width = "100%";
    } else {
        thongBao.innerText = "Mức độ: Trung bình";
        thanhDo.style.backgroundColor = "orange";
        thanhDo.style.width = "60%";
    }
};

// Tính năng 2: Kiểm tra khi nhấn nút Đăng Ký
form.onsubmit = function(event) {
    // Ngăn trang web load lại để mình kiểm tra dữ liệu trước
    event.preventDefault();

    let mk = passwordInput.value;
    // Kiểm tra mật khẩu có chữ và số không
    let coChu = /[a-zA-Z]/.test(mk);
    let coSo = /[0-9]/.test(mk);

    if (coChu && coSo) {
        alert("Chúc mừng! Bạn đã đăng ký thành công.");
    } else {
        alert("Lỗi: Mật khẩu phải bao gồm cả chữ cái và số!");
    }
};