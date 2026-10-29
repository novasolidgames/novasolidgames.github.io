(() => {
  "use strict";
  const copy = {
    ko: {
      skip: "본문 바로가기", navAbout: "게임 소개", navGallery: "스크린샷", navCafe: "공식 카페 ↗",
      heroTitle: "먼지 한 톨에서,<br><em>나만의 은하까지.</em>",
      heroDescription: "톡톡 터치하면 별이 자라납니다. 별의 탄생부터 눈부신 초신성, 블랙홀 너머의 여정까지 만나보세요.",
      seeGameplay: "게임 화면 보기", tagIdle: "방치형 클리커", tagSpace: "별의 탄생과 진화",
      gameplayAlt: "피버 타임 중 밝게 빛나는 별의 실제 게임 화면", phoneCaption: "작은 터치로 시작되는 커다란 우주", scroll: "당신의 우주를 발견하세요",
      journeyTitle: "별의 끝은,<br><em>새로운 시작이 됩니다.</em>",
      journeyDescription: "먼지를 모아 별을 키우고, 그 별이 맞이할 다양한 운명을 발견하세요. 블랙홀이 된 뒤에도 성장은 계속됩니다.",
      stageDust: "먼지에서 시작해", stageDustDescription: "우주먼지를 터치해 나만의 첫 별을 탄생시키세요.",
      stageStar: "별의 일생을 따라", stageStarDescription: "질량과 온도, 크기가 변하며 펼쳐지는 별의 진화를 만나보세요.",
      stageNova: "눈부신 폭발을 넘어", stageNovaDescription: "초신성과 백색왜성, 중성자별까지. 별마다 다른 끝이 기다립니다.",
      stageBeyond: "블랙홀, 그리고 은하", stageBeyondDescription: "곁을 도는 별들을 키우며 블랙홀 너머의 우주를 펼쳐보세요.",
      galleryTitle: "손안에 담긴<br><em>나만의 작은 우주.</em>", galleryDescription: "행성을 모으고, 카드를 선택하고, 별자리를 완성하세요. 당신의 선택으로 달라지는 성장의 여정.",
      galleryPlanet: "행성계 스크린샷 크게 보기", galleryCards: "카드 스크린샷 크게 보기", galleryConstellations: "별자리 스크린샷 크게 보기", galleryBlackhole: "블랙홀 스크린샷 크게 보기",
      planetAlt: "행성과 위성으로 꾸민 나만의 행성계", cardsAlt: "별의 성장 방향을 선택하는 카드 화면", constellationsAlt: "별을 연결해 완성하는 별자리 화면", blackholeAlt: "은하와 별들로 둘러싸인 블랙홀 화면",
      planetCaption: "나만의 행성계", cardsCaption: "선택으로 달라지는 성장", constellationsCaption: "별자리에 담는 힘", blackholeCaption: "끝없이 펼쳐지는 우주", galleryHint: "이미지를 누르면 크게 볼 수 있습니다.",
      ctaTitle: "당신의 우주는<br><em>어디까지 자랄까요?</em>", ctaDescription: "작은 먼지 한 톨과 함께, 다음 별의 이야기를 시작하세요.",
      community: "공식 카페에서 소식 만나보기", terms: "이용약관", privacy: "개인정보처리방침", deleteAccount: "회원탈퇴 안내", maintenance: "점검 안내", company: "회사 홈페이지",
      trademark: "Google Play 및 Google Play 로고는 Google LLC의 상표입니다.", close: "닫기 ✕", previous: "← 이전", next: "다음 →",
      pending: "출시 준비 중 · 다운로드 링크는 출시 후 공개됩니다.", ready: "Google Play에서 나만의 우주를 시작하세요.", badgeAlt: "Google Play에서 다운로드", logoAlt: "우주먼지 키우기",
      pageTitle: "우주먼지 키우기 · Grow Space Dust | NovaSolidGames", description: "먼지 한 톨에서 나만의 은하까지. 별의 탄생과 진화를 경험하는 방치형 클리커, 우주먼지 키우기 공식 홈페이지."
    },
    en: {
      skip: "Skip to content", navAbout: "The journey", navGallery: "Screenshots", navCafe: "Community ↗",
      heroTitle: "From a speck of dust.<br><em>To a galaxy of your own.</em>",
      heroDescription: "Every tap helps your star grow. Discover stellar birth, spectacular supernovae, and a journey that continues beyond the black hole.",
      seeGameplay: "Explore the game", tagIdle: "Idle clicker", tagSpace: "Stellar evolution",
      gameplayAlt: "Actual gameplay showing a glowing star during Fever Time", phoneCaption: "A whole universe begins with a little tap", scroll: "Discover your universe",
      journeyTitle: "A star's ending.<br><em>A new beginning.</em>",
      journeyDescription: "Gather dust, grow a star, and discover the many fates it can meet. Becoming a black hole is just another beginning.",
      stageDust: "Start with a little dust", stageDustDescription: "Tap space dust to bring your very first star to life.",
      stageStar: "Follow a star's life", stageStarDescription: "Watch your star evolve as its mass, temperature, and size change.",
      stageNova: "Beyond the bright finale", stageNovaDescription: "Supernovae, white dwarfs, neutron stars. Different stars meet different fates.",
      stageBeyond: "Black holes & beyond", stageBeyondDescription: "Grow companion stars and discover a universe beyond the black hole.",
      galleryTitle: "Your own little universe.<br><em>Right in your hands.</em>", galleryDescription: "Collect planets, choose cards, and complete constellations. Shape your journey with every choice.",
      galleryPlanet: "Enlarge planetary system screenshot", galleryCards: "Enlarge cards screenshot", galleryConstellations: "Enlarge constellations screenshot", galleryBlackhole: "Enlarge black hole screenshot",
      planetAlt: "A planetary system with planets and moons", cardsAlt: "Cards that change the way your star grows", constellationsAlt: "A constellation made by connecting stars", blackholeAlt: "A black hole surrounded by stars and a galaxy",
      planetCaption: "Your planetary system", cardsCaption: "Your choices, your growth", constellationsCaption: "Power in the constellations", blackholeCaption: "A universe that keeps growing", galleryHint: "Select a screenshot to take a closer look.",
      ctaTitle: "How far will<br><em>your universe grow?</em>", ctaDescription: "Start your next stellar story with a tiny speck of dust.",
      community: "News & community · Naver Café (Korean)", terms: "Terms of Service", privacy: "Privacy Policy", deleteAccount: "Account deletion", maintenance: "Maintenance", company: "About NovaSolidGames",
      trademark: "Google Play and the Google Play logo are trademarks of Google LLC.", close: "Close ✕", previous: "← Previous", next: "Next →",
      pending: "Coming soon · The download link will be available at launch.", ready: "Start growing your universe on Google Play.", badgeAlt: "Get it on Google Play", logoAlt: "Grow Space Dust",
      pageTitle: "Grow Space Dust: Idle Clicker | NovaSolidGames", description: "From a speck of dust to a galaxy of your own. Discover stellar evolution in Grow Space Dust, an idle clicker by NovaSolidGames."
    }
  };
  const galleryImages = [...document.querySelectorAll(".gallery img")];
  const dialog = document.querySelector(".lightbox");
  const lightboxImage = document.querySelector("[data-lightbox-image]");
  let galleryIndex = 0;
  let language = "ko";
  let downloadUrl = "";
  // 임의 프로토콜이나 외부 주소를 다운로드 설정으로 사용하지 않는다.
  try {
    const url = new URL(window.GROW_SPACE_DUST_CONFIG?.googlePlayUrl || "");
    if (url.protocol === "https:" && url.hostname === "play.google.com" && url.pathname === "/store/apps/details" && url.searchParams.get("id")) downloadUrl = url.href;
  } catch { /* 출시 전 빈 주소 */ }
  if (downloadUrl) {
    document.querySelectorAll("[data-download]").forEach(button => {
      const link = document.createElement("a");
      [...button.attributes].forEach(attribute => { if (attribute.name !== "type") link.setAttribute(attribute.name, attribute.value); });
      link.href = downloadUrl;
      link.append(...button.childNodes);
      button.replaceWith(link);
    });
  }
  function updateLightbox() {
    const source = galleryImages[galleryIndex];
    lightboxImage.src = source.src;
    lightboxImage.alt = source.alt;
    document.querySelector("[data-gallery-count]").textContent = `${String(galleryIndex + 1).padStart(2, "0")} / ${String(galleryImages.length).padStart(2, "0")}`;
  }
  function setLanguage(nextLanguage) {
    language = nextLanguage === "en" ? "en" : "ko";
    const text = copy[language];
    document.documentElement.lang = language;
    document.title = text.pageTitle;
    document.querySelector('meta[name="description"]').content = text.description;
    document.querySelectorAll("[data-i18n]").forEach(element => { element.textContent = text[element.dataset.i18n]; });
    // HTML 조각은 이 파일의 고정 번역만 사용한다.
    document.querySelectorAll("[data-i18n-html]").forEach(element => { element.innerHTML = text[element.dataset.i18nHtml]; });
    document.querySelectorAll("[data-i18n-alt]").forEach(element => { element.alt = text[element.dataset.i18nAlt]; });
    document.querySelectorAll("[data-i18n-aria]").forEach(element => { element.setAttribute("aria-label", text[element.dataset.i18nAria]); });
    document.querySelectorAll("[data-language]").forEach(button => { button.setAttribute("aria-pressed", String(button.dataset.language === language)); });
    const logo = document.querySelector("[data-logo]");
    logo.src = `assets/logo-${language}.webp`;
    logo.alt = text.logoAlt;
    document.querySelectorAll("[data-badge]").forEach(image => { image.src = `assets/google-play-${language}.png`; image.alt = text.badgeAlt; });
    galleryImages.forEach(image => { image.src = `assets/screen-${image.dataset.screen}-${language}.webp`; });
    document.querySelectorAll("[data-download-state]").forEach(element => { element.textContent = downloadUrl ? text.ready : text.pending; element.classList.remove("attention"); element.setAttribute("role", "status"); });
    document.querySelectorAll("[data-download]").forEach(element => { element.setAttribute("aria-label", downloadUrl ? text.badgeAlt : text.pending); });
    document.querySelectorAll("[data-policy]").forEach(link => {
      const page = link.dataset.policy;
      const suffix = language === "en" && (page === "terms" || page === "privacy") ? "_en" : "";
      const hash = language === "en" && page === "delete-account" ? "#en" : "";
      link.href = `${page}${suffix}.html${hash}`;
    });
    if (dialog.open) updateLightbox();
    try { localStorage.setItem("gsd-language", language); } catch { /* 저장 불가 시 현재 화면에만 적용 */ }
  }
  document.querySelectorAll("[data-language]").forEach(button => button.addEventListener("click", () => setLanguage(button.dataset.language)));
  if (!downloadUrl) document.querySelectorAll("[data-download]").forEach(button => button.addEventListener("click", () => {
    const status = document.getElementById(button.getAttribute("aria-describedby"));
    status.textContent = "";
    requestAnimationFrame(() => { status.textContent = copy[language].pending; status.classList.add("attention"); });
  }));
  document.querySelectorAll("[data-gallery]").forEach(button => button.addEventListener("click", () => {
    galleryIndex = Number(button.dataset.gallery);
    updateLightbox();
    dialog.showModal();
    document.body.style.overflow = "hidden";
  }));
  const advanceGallery = step => { galleryIndex = (galleryIndex + step + galleryImages.length) % galleryImages.length; updateLightbox(); };
  document.querySelector("[data-close]").addEventListener("click", () => dialog.close());
  document.querySelector("[data-previous]").addEventListener("click", () => advanceGallery(-1));
  document.querySelector("[data-next]").addEventListener("click", () => advanceGallery(1));
  dialog.addEventListener("close", () => { document.body.style.overflow = ""; });
  dialog.addEventListener("click", event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });
  dialog.addEventListener("keydown", event => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); advanceGallery(event.key === "ArrowRight" ? 1 : -1); }
  });
  let initialLanguage = navigator.language.toLowerCase().startsWith("ko") ? "ko" : "en";
  try { initialLanguage = localStorage.getItem("gsd-language") || initialLanguage; } catch { /* 기본 브라우저 언어 사용 */ }
  const requestedLanguage = new URLSearchParams(location.search).get("lang");
  if (requestedLanguage === "ko" || requestedLanguage === "en") initialLanguage = requestedLanguage;
  setLanguage(initialLanguage);
})();
