// Hàm cuộn lên đầu trang
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Tùy chọn để cuộn mượt mà
    });
}

// Hiển thị hoặc ẩn nút khi cuộn trang
window.onscroll = function() {
    var button = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
};
// JavaScript để tự động thêm số thứ tự vào cột STT
document.addEventListener('DOMContentLoaded', function () {
    const table = document.getElementById('myTable');
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    
    for (let i = 0; i < rows.length; i++) {
        rows[i].getElementsByTagName('td')[0].innerText = i + 1;
    }
});