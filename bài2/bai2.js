function changeColor() {
    // Tìm bảng thông qua ID "priceTable"
    const table = document.getElementById("priceTable");
    
    // Đổi màu toàn bộ văn bản bên trong bảng sang màu đỏ
    table.style.color = "red";
    
    // Thông báo cho người dùng
    console.log("Đã đổi màu bảng sang đỏ!");
}