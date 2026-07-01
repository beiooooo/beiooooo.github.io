/* ===== 导航高亮 + 主题切换 + 打字机效果 ===== */

document.addEventListener("DOMContentLoaded", function () {
  // 高亮当前页面对应的导航项
  var currentPath = window.location.pathname.split("/").pop() || "index.html";
  var navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === currentPath) {
      link.classList.add("active");
    }
  });

  // 主题切换：从 localStorage 恢复
  var savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  var themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    // 设置初始图标
    themeBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";
    themeBtn.addEventListener("click", function () {
      var html = document.documentElement;
      var isDark = html.getAttribute("data-theme") === "dark";
      if (isDark) {
        html.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
        themeBtn.textContent = "🌙";
      } else {
        html.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        themeBtn.textContent = "☀️";
      }
    });
  }

  // 打字机效果 (首页)
  var bioEl = document.getElementById("typed-text");
  if (bioEl) {
    var fullText = bioEl.textContent;
    bioEl.textContent = "";
    var i = 0;
    function typeChar() {
      if (i < fullText.length) {
        bioEl.textContent += fullText.charAt(i);
        i++;
        setTimeout(typeChar, 30);
      }
    }
    setTimeout(typeChar, 500);
  }
});
