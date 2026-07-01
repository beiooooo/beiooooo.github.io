/* ===== 留言板：localStorage 持久化 ===== */

(function () {
  var nameInput = document.getElementById("msg-name");
  var contentInput = document.getElementById("msg-content");
  var submitBtn = document.getElementById("msg-submit");
  var listEl = document.getElementById("message-list");

  if (!submitBtn) return;

  var STORAGE_KEY = "guestbook_messages";

  // 读取存储
  function loadMessages() {
    var data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  // 保存存储
  function saveMessages(messages) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }

  // 渲染留言
  function renderMessages() {
    var messages = loadMessages();
    if (messages.length === 0) {
      listEl.innerHTML = "<div class=\"empty-hint\">还没有留言，来写第一条吧！</div>";
      return;
    }
    var html = "";
    messages.forEach(function (msg) {
      html +=
        "<div class=\"message-card\">" +
          "<div class=\"msg-name\">" + escapeHtml(msg.name || "匿名") + "</div>" +
          "<div class=\"msg-content\">" + escapeHtml(msg.content) + "</div>" +
          "<div class=\"msg-time\">" + msg.time + "</div>" +
        "</div>";
    });
    listEl.innerHTML = html;
  }

  // 简单转义防止 XSS
  function escapeHtml(str) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // 格式化时间
  function nowString() {
    var d = new Date();
    var pad = function (n) { return n < 10 ? "0" + n : "" + n; };
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()) + " " +
           pad(d.getHours()) + ":" + pad(d.getMinutes());
  }

  // 提交留言
  submitBtn.addEventListener("click", function () {
    var name = nameInput.value.trim();
    var content = contentInput.value.trim();

    if (!name) {
      alert("请输入昵称");
      nameInput.focus();
      return;
    }
    if (!content) {
      alert("请输入留言内容");
      contentInput.focus();
      return;
    }

    var messages = loadMessages();
    messages.push({
      name: name,
      content: content,
      time: nowString()
    });
    saveMessages(messages);

    // 清空输入
    nameInput.value = "";
    contentInput.value = "";
    renderMessages();
  });

  // 初始渲染
  renderMessages();
})();
