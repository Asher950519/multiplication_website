const form = document.getElementById('signupForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // 阻止表單直接送出

  // 顯示「感謝您的報名」文字
  successMessage.style.display='block';

  // 0.5秒後跳轉到成功頁面
  setTimeout(function() {
    window.location.href = '../new/new.html'; // 改成你的成功頁面網址
  }, 500); // 500 毫秒 = 0.5 秒
});