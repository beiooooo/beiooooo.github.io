/* ===== 项目展示页 ===== */

(function () {
  var container = document.getElementById("project-grid");
  if (!container) return;

  var html = "";

  // 渲染真实项目
  projectsData.forEach(function (proj) {
    var tagsHtml = proj.tags.map(function (t) { return "<span>" + t + "</span>"; }).join("");

    var coverHtml;
    if (proj.cover && proj.cover !== "images/placeholder.jpg") {
      coverHtml = "<img class=\"card-cover\" src=\"" + proj.cover + "\" alt=\"" + proj.name + "\">";
    } else {
      coverHtml = "<div class=\"card-cover-placeholder\">" + proj.name + "</div>";
    }

    html +=
      "<div class=\"card project-card\">" +
        coverHtml +
        "<div class=\"card-body\">" +
          "<h3 class=\"card-title\">" + proj.name + "</h3>" +
          "<p class=\"card-summary\">" + proj.description + "</p>" +
          "<div class=\"project-tags\">" + tagsHtml + "</div>" +
        "</div>" +
      "</div>";
  });

  // 空缺占位卡片 (仅在实际项目数少于4时显示，适应3列网格)
  var totalProjects = projectsData.length;
  var totalSlots = Math.max(3, (Math.floor((totalProjects + 2) / 3)) * 3);
  for (var i = totalProjects; i < totalSlots; i++) {
    html +=
      "<div class=\"project-card-empty\">" +
        "<div class=\"empty-icon\">+</div>" +
        "<div class=\"empty-text\">筹备中</div>" +
        "<div class=\"empty-sub\">更多项目即将展示</div>" +
      "</div>";
  }

  container.innerHTML = html;
})();
