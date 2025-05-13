// lang-switcher.js
// Attach language switcher listeners on DOMContentLoaded

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('.lang-flag');
    if (btn && btn.offsetParent !== null) {
      e.preventDefault();
      const lang = btn.dataset.lang;
      console.log('[LANG-SWITCHER] Delegated Button clicked:', lang);

      try {
        localStorage.setItem('siteLang', lang);
        localStorage.setItem('siteLangSetByUser', 'true');
        console.log('[LANG-SWITCHER] Language saved to localStorage and setByUser flag set');
      } catch (err) {
        console.error('[LANG-SWITCHER] Error saving to localStorage:', err);
      }

      let currentPath = window.location.pathname;
      let restOfPath = currentPath.replace(/^\/(?:en|es)(?=\/|$)/, '');
      if (restOfPath === '' || restOfPath === '/') restOfPath = '/';

      let newPath = `/${lang}${restOfPath}`;
      newPath = newPath.replace(/\/{2,}/g, '/');

      console.log('[LANG-SWITCHER] currentPath:', currentPath);
      console.log('[LANG-SWITCHER] restOfPath:', restOfPath);
      console.log('[LANG-SWITCHER] newPath:', newPath);

      if (!currentPath.startsWith(`/${lang}`)) {
        window.location.href = newPath;
      } else if (currentPath !== newPath) {
        window.location.href = newPath;
      } else {
        console.log('[LANG-SWITCHER] Already on this path, no navigation needed');
      }
    }
  }, true);
  console.log('[LANG-SWITCHER] Delegated listener attached');
});
