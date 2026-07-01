/* ===== 博客列表：渲染 + 标签筛选 ===== */

(function () {
  var container = document.getElementById("blog-list");
  var filterEl = document.getElementById("tag-filter");

  if (!container) return;

  // 提取所有分类标签
  var categories = [];
  blogPosts.forEach(function (post) {
    if (categories.indexOf(post.category) === -1) {
      categories.push(post.category);
    }
  });

  // 渲染标签筛选按钮
  var filterHtml = "<button class=\"active\" data-category=\"all\">全部</button>";
  categories.forEach(function (cat) {
    filterHtml += "<button data-category=\"" + cat + "\">" + cat + "</button>";
  });
  filterEl.innerHTML = filterHtml;

  // 渲染博客卡片
  function renderPosts(category) {
    var filtered = category && category !== "all"
      ? blogPosts.filter(function (p) { return p.category === category; })
      : blogPosts;

    if (filtered.length === 0) {
      container.innerHTML = "<div class=\"no-results\">暂无该分类下的文章</div>";
      return;
    }

    var html = "";
    filtered.forEach(function (post) {
      html +=
        "<a href=\"article.html?id=" + post.id + "\" class=\"card\">" +
          "<div class=\"card-body\">" +
            "<span class=\"card-tag\">" + post.category + "</span>" +
            "<h3 class=\"card-title\">" + post.title + "</h3>" +
            "<div class=\"card-meta\">" + post.date + "</div>" +
            "<p class=\"card-summary\">" + post.summary + "</p>" +
          "</div>" +
        "</a>";
    });
    container.innerHTML = html;
  }

  // 初始渲染（全部）
  renderPosts("all");

  // 标签点击筛选
  filterEl.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      // 切换高亮
      filterEl.querySelectorAll("button").forEach(function (btn) {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      renderPosts(e.target.getAttribute("data-category"));
    }
  });
})();
