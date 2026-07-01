/* ===== 文章详情页 ===== */

(function () {
  var container = document.getElementById("article-container");
  if (!container) return;

  // 从 URL 获取文章 id
  var params = new URLSearchParams(window.location.search);
  var id = parseInt(params.get("id"), 10);
  var post = null;

  for (var i = 0; i < blogPosts.length; i++) {
    if (blogPosts[i].id === id) {
      post = blogPosts[i];
      break;
    }
  }

  if (!post) {
    container.innerHTML =
      "<div class=\"no-results\">" +
        "<p>文章不存在或已被删除。</p>" +
        "<a href=\"blog.html\" class=\"back-link\">&larr; 返回博客列表</a>" +
      "</div>";
    return;
  }

  container.innerHTML =
    "<a href=\"blog.html\" class=\"back-link\">&larr; 返回博客列表</a>" +
    "<h1>" + post.title + "</h1>" +
    "<div class=\"article-meta\">" +
      "<span>" + post.date + "</span>" +
      "<span class=\"card-tag\">" + post.category + "</span>" +
    "</div>" +
    "<div class=\"article-body\">" +
      post.content.split("\n").map(function (p) { return p.trim(); }).filter(function (p) { return p; }).map(function (p) { return "<p>" + p + "</p>"; }).join("") +
    "</div>";
})();
