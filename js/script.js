function showHint() {
    var hintMessage = document.getElementById("hintMessage");
    hintMessage.style.opacity = "1";
    hintMessage.style.visibility = "visible";
    
    // Sau 5 giây, làm ẩn gợi ý nhập mật khẩu một cách mượt mà
    setTimeout(function() {
        hintMessage.style.opacity = "0";
        hintMessage.style.visibility = "hidden";
    }, 5000);
}



document.addEventListener("DOMContentLoaded", function() {
    const hintLink = document.querySelector(".password-hint");
    hintLink.addEventListener("click", function(event) {
        event.preventDefault();
        showHint();
    });

    // Create cube effect on the background
    const body = document.body;
    body.style.backgroundColor = "#FFC0CB"; // Set pink background color
    body.style.overflow = "hidden"; // Prevent scrolling

    const loginContainer = document.querySelector(".login-container");
    loginContainer.style.position = "relative";
    loginContainer.style.zIndex = "10";

    for (let i = 0; i < 50; i++) {
        const cube = document.createElement("div");
        cube.classList.add("cube");
        body.appendChild(cube);

        cube.style.left = Math.random() * 100 + "vw";
        cube.style.animationDuration = 5 + Math.random() * 10 + "s";
        cube.style.animationDelay = Math.random() * 5 + "s";
        cube.style.width = 10 + Math.random() * 40 + "px";
        cube.style.height = cube.style.width;
        cube.style.opacity = 0.3 + Math.random() * 0.7;
    }
});

// Add CSS styles for cubes
const style = document.createElement("style");
style.innerHTML = `
    .cube {
        position: fixed;
        bottom: -50px;
        background-color: #FFF;
        animation: moveUp 15s linear infinite;
    }

    @keyframes moveUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.6;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
function validateLogin() {
    // Lấy giá trị tên đăng nhập và mật khẩu từ các ô input
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    // Kiểm tra thông tin đăng nhập
    if (username === "phuonganhsiucapdangiu" && password === "2010") {
        // Nếu đúng, chuyển đến link
        window.location.href = "./html/login1.html"; // Thay đường dẫn mong muốn
    } else {
        // Nếu sai, hiển thị cảnh báo
        alert("Xem gợi ý điiii");
    }
}

function toggleHint() {
    const hintMessage = document.getElementById("hintMessage");
    hintMessage.style.display = hintMessage.style.display === "none" ? "block" : "none";
}
