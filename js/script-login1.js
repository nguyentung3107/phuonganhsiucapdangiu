// Đợi 2 giây sau đó ẩn loading và hiện nội dung với hiệu ứng mờ dần
window.onload = function() {
    setTimeout(function() {
        // Làm mờ dần phần loading
        const loadingContainer = document.querySelector('.loading-container');
        loadingContainer.style.opacity = 0;

        // Sau khi hiệu ứng mờ dần hoàn tất, ẩn phần loading và hiển thị nội dung
        setTimeout(function() {
            loadingContainer.style.display = 'none';

            const content = document.querySelector('.content');
            content.style.display = 'block';

            // Kích hoạt hiệu ứng mờ dần cho nội dung
            setTimeout(function() {
                content.style.opacity = 1;
            }, 50);  // Đảm bảo hiệu ứng transition mượt mà
        }, 1000); // Thời gian hiệu ứng mờ dần của loading (1 giây)
    }, 2000);
};
