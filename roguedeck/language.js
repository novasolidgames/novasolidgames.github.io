const storageKey = 'nsg-kage-language-choice';
const requested = new URLSearchParams(location.search).get('lang');
const supported = value => value === 'en' || value === 'ko';
let saved;

try {
  saved = localStorage.getItem(storageKey);
  if (supported(requested)) localStorage.setItem(storageKey, requested);
} catch {
  // 저장소를 사용할 수 없어도 URL로 언어를 선택할 수 있다.
}

const language = supported(requested) ? requested : supported(saved) ? saved : 'en';
document.documentElement.lang = language;
if (language === 'ko') document.title = '로그덱: 타워 디펜스 | NovaSolidGames';

document.querySelectorAll('[data-language]').forEach(link => {
  if (link.dataset.language === language) link.setAttribute('aria-current', 'true');
  else link.removeAttribute('aria-current');
});

document.querySelectorAll('[data-studio]').forEach(link => {
  link.href = `../?lang=${language}#pathways`;
});
