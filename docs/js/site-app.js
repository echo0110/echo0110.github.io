(function () {
  var config = window.SITE_CONFIG || {};
  var storageKey = "site-lang";

  function getValue(path) {
    return path.split(".").reduce(function (acc, key) {
      return acc && acc[key] !== undefined ? acc[key] : "";
    }, config);
  }

  function hydrateConfigFields() {
    document.querySelectorAll("[data-config]").forEach(function (node) {
      node.textContent = getValue(node.getAttribute("data-config"));
    });

    document.querySelectorAll("[data-config-email]").forEach(function (node) {
      var email = getValue(node.getAttribute("data-config-email"));
      node.textContent = email;
      if (node.tagName === "A") {
        node.href = "mailto:" + email;
      }
    });

    document.querySelectorAll("[data-product][data-field]").forEach(function (node) {
      var productKey = node.getAttribute("data-product");
      var field = node.getAttribute("data-field");
      node.textContent = getValue("products." + productKey + "." + field);
    });
  }

  function setLang(lang) {
    var next = lang === "zh" ? "zh" : "en";
    document.documentElement.setAttribute("lang", next === "zh" ? "zh-CN" : "en");
    document.documentElement.setAttribute("data-site-lang", next);

    document.querySelectorAll("[data-lang-toggle]").forEach(function (button) {
      var active = button.getAttribute("data-lang-toggle") === next;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    try {
      localStorage.setItem(storageKey, next);
    } catch (error) {
    }
  }

  function getLang() {
    try {
      var saved = localStorage.getItem(storageKey);
      if (saved === "en" || saved === "zh") {
        return saved;
      }
    } catch (error) {
    }
    return "en";
  }

  function bindLangToggle() {
    document.querySelectorAll("[data-lang-toggle]").forEach(function (toggle) {
      toggle.addEventListener("click", function () {
        setLang(toggle.getAttribute("data-lang-toggle"));
      });
    });
  }

  function bindNavToggle() {
    var navToggle = document.querySelector(".site-nav__toggle");
    var navLinks = document.querySelector(".site-nav__links");
    if (navToggle && navLinks) {
      navToggle.addEventListener("click", function () {
        var isOpen = navLinks.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    hydrateConfigFields();
    bindLangToggle();
    bindNavToggle();
    setLang(getLang());
  });
})();
