// lang-switcher.js
// Attach language switcher listeners on DOMContentLoaded

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('.lang-flag');
    if (btn && btn.offsetParent !== null) {
      e.preventDefault();
      const lang = btn.dataset.lang;
      try {
        localStorage.setItem('siteLang', lang);
        localStorage.setItem('siteLangSetByUser', 'true');
      } catch (err) {}
      let currentPath = window.location.pathname;
      let restOfPath = currentPath.replace(/^\/(?:en|es)(?=\/|$)/, '');
      if (restOfPath === '' || restOfPath === '/') restOfPath = '/';
      let newPath = `/${lang}${restOfPath}`.replace(/\/{2,}/g, '/');
      if (!currentPath.startsWith(`/${lang}`) || currentPath !== newPath) {
        window.location.href = newPath;
      }
    }
  }, true);
});
