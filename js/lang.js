(function () {
  var storageKey = 'site-lang';

  function setLang(lang) {
    var next = lang === 'zh' ? 'zh' : 'en';
    document.documentElement.setAttribute('lang', next === 'zh' ? 'zh-CN' : 'en');
    document.documentElement.setAttribute('data-site-lang', next);

    var buttons = document.querySelectorAll('[data-lang-toggle]');
    buttons.forEach(function (button) {
      var active = button.getAttribute('data-lang-toggle') === next;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    try {
      localStorage.setItem(storageKey, next);
    } catch (error) {
    }
  }

  function getLang() {
    try {
      var saved = localStorage.getItem(storageKey);
      if (saved === 'en' || saved === 'zh') {
        return saved;
      }
    } catch (error) {
    }
    return 'en';
  }

  document.addEventListener('DOMContentLoaded', function () {
    setLang(getLang());

    var toggles = document.querySelectorAll('[data-lang-toggle]');
    toggles.forEach(function (toggle) {
      toggle.addEventListener('click', function () {
        setLang(toggle.getAttribute('data-lang-toggle'));
      });
    });

    var navToggle = document.querySelector('.site-nav__toggle');
    var navLinks = document.querySelector('.site-nav__links');
    if (navToggle && navLinks) {
      navToggle.addEventListener('click', function () {
        var isOpen = navLinks.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }
  });
})();
