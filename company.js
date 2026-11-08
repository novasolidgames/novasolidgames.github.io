(() => {
  'use strict';
  const translations = {"navAbout":{"en":"01 Studio","ko":"01 스튜디오"},"navGames":{"en":"02 Mobile games","ko":"02 모바일게임"},"navExplore":{"en":"Explore","ko":"둘러보기"},"navContact":{"en":"Contact","ko":"문의"},"t4":{"en":"INDEPENDENT MOBILE GAME STUDIO","ko":"새로운 세계를 만드는 모바일 게임 스튜디오"},"t5":{"en":"From imagination.","ko":"상상에서 시작해,"},"t6":{"en":"To worlds","ko":"새로운 세계를"},"t7":{"en":"worth playing.","ko":"만듭니다."},"t8":{"en":"A little curiosity. A world of play. We make mobile games that turn a simple moment into somewhere new.","ko":"작은 호기심에서 시작되는 새로운 세계. NovaSolidGames는 일상의 한순간을 즐거운 경험으로 바꾸는 모바일 게임을 만듭니다."},"t9":{"en":"Scroll to discover","ko":"스크롤하여 둘러보기"},"t10":{"en":"Our studio","ko":"스튜디오"},"t11":{"en":"Small beginnings. Worlds waiting to be discovered.","ko":"작은 시작에서 만나는 새로운 세계."},"t12":{"en":"— Our games","ko":"— 게임"},"t13":{"en":"Our games","ko":"게임"},"t14":{"en":"From growing stars to playing together on one phone.","ko":"별을 키우는 여정부터 함께 즐기는 미니게임까지."},"t15":{"en":"— Made for play","ko":"— 즐거운 순간"},"t16":{"en":"Made for play","ko":"즐거운 순간"},"t17":{"en":"A moment to yourself. A moment shared with friends.","ko":"혼자만의 여유, 친구들과 나누는 즐거움."},"t18":{"en":"Stay in touch","ko":"문의"},"t19":{"en":"Questions, feedback, or just a hello. We are listening.","ko":"질문과 의견을 들려주세요. 여러분의 이야기를 기다립니다."},"t20":{"en":"A doorway to new worlds","ko":"새로운 세계로 향하는 문"},"t21":{"en":"NOVASOLID","ko":"노바솔리드"},"t22":{"en":"— Our studio","ko":"— 스튜디오 소개"},"t23":{"en":"A small beginning. A world of possibilities.","ko":"작은 시작에서 펼쳐지는 새로운 세계."},"t24":{"en":"NovaSolidGames develops mobile games. We make places you can visit from the palm of your hand, whether you have a quiet moment to yourself or friends gathered around one screen.","ko":"NovaSolidGames는 모바일 게임을 개발합니다. 혼자 여유를 즐길 때도, 친구들과 한 화면 앞에 모였을 때도 손안에서 만날 수 있는 즐거운 경험을 만듭니다."},"t25":{"en":"Grow space dust into stars in Grow Space Dust: Idle Clicker. Bring four players together on one phone with MiniRingle. Two different ways to make a little time for play.","ko":"우주먼지에서 별이 되기까지의 여정을 경험하는 우주먼지 키우기, 휴대폰 하나로 네 명이 함께하는 MiniRingle. 서로 다른 두 가지 즐거움을 만나보세요."},"t26":{"en":"Find your next game","ko":"게임 만나보기"},"statGames":{"en":"Games","ko":"게임"},"statPhone":{"en":"Phone to play","ko":"손안의 즐거움"},"statPlayers":{"en":"MiniRingle players","ko":"MiniRingle 플레이어"},"t30":{"en":"Possibilities","ko":"가능성"},"gameDust":{"en":"Grow Space Dust: Idle Clicker","ko":"우주먼지 키우기"},"dustDescription":{"en":"An idle clicker about growing space dust into stars.","ko":"우주먼지에서 별이 되기까지, 방치형 클리커."},"miniDescription":{"en":"Mini-games for 4 players on one phone.","ko":"휴대폰 하나로 4명이 함께하는 미니게임."},"gameDetails":{"en":"Explore the game ↗","ko":"게임 자세히 보기 ↗"},"miniStore":{"en":"Release information ↗","ko":"출시 정보 보기 ↗"},"legalNote":{"en":"Each game's privacy policy and terms are on its game page.","ko":"게임별 개인정보처리방침과 이용약관은 각 게임 페이지에서 볼 수 있습니다."},"sceneGallery":{"en":"THE KAGE WORLD / INTERACTIVE SCENES","ko":"KAGE의 세계 / 인터랙티브 장면"},"t38":{"en":"A moment for yourself. A screen to share.","ko":"혼자 즐기는 여유. 함께 나누는 즐거움."},"t39":{"en":"Explore our games in your own way. Follow the life of a star, or gather friends for mini-games on a single phone.","ko":"나만의 속도로 별의 일생을 따라가거나, 친구들과 휴대폰 하나에 모여 미니게임을 즐겨보세요."},"t40":{"en":"Dust to stars","ko":"먼지에서 별까지"},"t41":{"en":"Grow Space Dust begins with the smallest of things.","ko":"작은 우주먼지에서 별을 키우는 여정을 시작하세요."},"t42":{"en":"A stellar lifetime","ko":"별의 일생"},"t43":{"en":"Experience the changing life of your star.","ko":"성장하고 변화하는 별의 일생을 경험하세요."},"t44":{"en":"One shared screen","ko":"하나의 화면"},"t45":{"en":"MiniRingle brings everyone around one phone.","ko":"MiniRingle은 휴대폰 하나로 함께 즐길 수 있습니다."},"t46":{"en":"Four players","ko":"네 명의 플레이어"},"t47":{"en":"Make room for friends with mini-games for up to four.","ko":"최대 네 명이 함께 미니게임을 즐겨보세요."},"t48":{"en":"Keep exploring","ko":"계속되는 발견"},"t49":{"en":"Visit each game page for details, news, and support.","ko":"각 게임 페이지에서 자세한 소개와 지원 정보를 확인하세요."},"contactEyebrow":{"en":"SAY HELLO","ko":"이야기를 들려주세요"},"contactTitle":{"en":"Let’s talk.","ko":"문의하기."},"t52":{"en":"Have a question about our games, or something you would like to share? We would love to hear from you.","ko":"게임에 대해 궁금한 점이나 전하고 싶은 의견이 있나요? 여러분의 이야기를 기다립니다."},"t53":{"en":"novasolidgames@gmail.com","ko":"novasolidgames@gmail.com"},"t54":{"en":"NovaSolidGames makes mobile games. Small screens. New worlds. A little more room for play.","ko":"NovaSolidGames는 모바일 게임을 만듭니다. 작은 화면에서 만나는 새로운 세계를 경험하세요."},"t55":{"en":"SMALL SCREENS. NEW WORLDS.","ko":"작은 화면, 새로운 세계."},"navPossibilities":{"en":"∞ Possibilities","ko":"∞ 가능성"},"studioEyebrow":{"en":"INDEPENDENT GAME STUDIO","ko":"새로운 세계를 만드는 게임 스튜디오"},"studioIntro":{"en":"A little curiosity. A world of play. NovaSolidGames creates games that open the door to new experiences.","ko":"작은 호기심에서 시작되는 새로운 세계. NovaSolidGames는 새로운 경험으로 이어지는 게임을 만듭니다."},"studioAbout":{"en":"NovaSolidGames is a game studio. We explore ideas across platforms, creating worlds to discover and moments to share.","ko":"NovaSolidGames는 게임을 만드는 스튜디오입니다. 플랫폼에 한계를 두지 않고, 새로운 세계를 발견하고 즐거운 순간을 나누는 게임을 만듭니다."},"studioFooter":{"en":"NovaSolidGames makes games. New worlds, different ways to play, and possibilities beyond a single platform.","ko":"NovaSolidGames는 게임을 만듭니다. 다양한 플랫폼과 플레이 방식으로 새로운 가능성을 찾아갑니다."},"mobileSection":{"en":"— Mobile games","ko":"— 모바일게임"},"mobileChip":{"en":"Mobile games","ko":"모바일게임"},"studioChip":{"en":"Studio","ko":"스튜디오"},"studioChipBody":{"en":"New experiences, beyond a single platform.","ko":"플랫폼에 한계를 두지 않는 새로운 경험."},"mobileChipBody":{"en":"Discover our current mobile titles.","ko":"현재 선보이는 모바일게임을 만나보세요."},"possibilityChipBody":{"en":"More worlds. More ways to play.","ko":"더 다양한 세계와 플레이 방식으로."},"possibilityLabel":{"en":"Possibilities","ko":"가능성"},"possibilityEyebrow":{"en":"BEYOND THE NEXT HORIZON","ko":"다음 지평선 너머로"},"possibilityTitle":{"en":"More worlds await.","ko":"더 넓은 세계를 향해."},"possibilityBody":{"en":"Mobile is one beginning. We are open to new platforms, new ideas, and new ways to play. Our next world can take a different shape.","ko":"모바일은 하나의 시작입니다. 새로운 플랫폼과 아이디어, 다양한 플레이 방식에 가능성을 열어두고 있습니다. 다음에는 또 다른 모습의 세계로 만나겠습니다."},"privacyLink":{"en":"Privacy policy","ko":"개인정보처리방침"},"termsLink":{"en":"Terms of service","ko":"이용약관"}};
  const miniUrl = "";
  const storageKey = 'nsg-kage-language-choice';
  const headingNodes = [...document.querySelectorAll('h1.display, h2.display')];
  // 원본의 단어별 등장 마스크는 언어 변경 후에도 동일한 구조로 복원한다.
  function revealWords(target) {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const phrase = target.textContent.replace(/\s+/g, ' ').trim();
    target.classList.add('word-reveal');
    target.classList.add('rv-in');
    target.dataset.wordReady = 'true';
    target.setAttribute('aria-label', phrase);
    target.replaceChildren();
    phrase.split(' ').forEach((word, i) => {
      if (i) target.append(' ');
      const mask = document.createElement('span');
      mask.className = 'word-mask'; mask.setAttribute('aria-hidden', 'true');
      const inner = document.createElement('span');
      inner.className = 'word'; inner.textContent = word;
      inner.style.setProperty('--word-delay', `${i * 72}ms`);
      mask.append(inner); target.append(mask);
    });
  }
  // 변경 전에 템플릿을 보관하여 원본 런타임이 마스크를 생성해도 번역 키를 잃지 않는다.
  const headingTemplates = headingNodes.map(node => ({node, html:node.innerHTML}));
  function applyLanguage(lang, changed = false) {
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
    headingTemplates.forEach(({node, html}) => {
      if (changed) { node.innerHTML = html; node.removeAttribute('data-word-ready'); }
    });
    document.querySelectorAll('[data-i18n]').forEach(node => {
      const value = translations[node.dataset.i18n]?.[lang];
      if (value) node.textContent = value;
    });
    if (changed) headingNodes.forEach(node => {
      const lines = node.querySelectorAll('.mask-line');
      (lines.length ? [...lines] : [node]).forEach(revealWords);
    });
    document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === lang)));
    document.querySelectorAll('[data-policy-game]').forEach(link=>{
      link.href=`https://novasolidgames.github.io/${link.dataset.policyGame}/${link.dataset.policyKind}${lang==='ko'?'':'_en'}.html`;
    });
    document.querySelectorAll('[data-store-image]').forEach(image => {
      const file = `company-assets/grow-space-dust/assets/google-play-${lang}.png`;
      // 단일 HTML은 이미지 경로가 이미 data URL이므로 양쪽 배지를 CSS로 전환한다.
      if (!image.src.startsWith('data:')) image.src = file;
      image.alt = lang === 'ko' ? 'Google Play에서 다운로드' : 'Get it on Google Play';
    });
    const miniStore = document.getElementById('mini-store');
    if (miniUrl) { miniStore.href=miniUrl; miniStore.textContent=lang==='ko'?'Google Play에서 보기 ↗':'Get it on Google Play ↗'; }
    document.title = lang === 'ko' ? 'NovaSolidGames — 상상에서 시작되는 새로운 세계' : 'NovaSolidGames — Worlds worth discovering';
    if (changed) window.dispatchEvent(new Event('resize'));
  }
  let saved = null;
  try { saved=localStorage.getItem(storageKey); } catch {}
  const query = new URLSearchParams(location.search).get('lang');
  applyLanguage(['en','ko'].includes(query) ? query : (saved==='ko'?'ko':'en'));
  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => {
    const lang=button.dataset.language;
    applyLanguage(lang,true);
    try { localStorage.setItem(storageKey,lang); } catch {}
  }));
})();
