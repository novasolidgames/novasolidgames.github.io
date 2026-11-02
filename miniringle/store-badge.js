// Google Play 배지 동작. site-config.js의 googlePlayUrl이 있으면 배지가 스토어로 가는 링크가 되고,
// 비어 있으면 누를 때 같은 자리 아래에 "출시 예정" 안내를 보여 준다.
// 배지: <a data-store-badge href="#"> … </a> + 안내 자리: <p data-store-note hidden> … </p> (같은 [data-store] 안)
(function () {
  var config = window.MINIRINGLE_CONFIG || {};
  var url = typeof config.googlePlayUrl === "string" ? config.googlePlayUrl.trim() : "";
  var live = /^https:\/\/play\.google\.com\//.test(url);
  document.querySelectorAll("[data-store]").forEach(function (box) {
    var badge = box.querySelector("[data-store-badge]");
    var note = box.querySelector("[data-store-note]");
    if (!badge) return;
    if (live) {
      badge.setAttribute("href", url);
      badge.setAttribute("rel", "noopener");
      return;
    }
    badge.setAttribute("aria-disabled", "true");
    badge.addEventListener("click", function (e) {
      e.preventDefault();
      if (note) note.hidden = false;
    });
  });
})();
