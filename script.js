function toggleMenu() {
  const nav = document.getElementById("navLinks");
  if (nav) nav.classList.toggle("active");
}

/* 🌍 LANGUAGE MENU TOGGLE */
function toggleLangMenu() {
  const menu = document.getElementById("langMenu");
  if (menu) menu.classList.toggle("active");
}

/* click outside → close menu */
window.addEventListener("click", function (e) {
  const menu = document.getElementById("langMenu");
  const btn = document.querySelector(".lang-btn");

  if (menu && btn) {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.remove("active");
    }
  }
});

/* 🌍 TRANSLATIONS */
const translations = {
  en: {
    home: "Home",
    projects: "Projects",
    about: "About",
    contact: "Contact",

    hero_title: "Smart Arduino & IoT Systems",
    hero_desc: "Explore modern automation & robotics",

    projects_title: "Projects",
    projects_desc: "Arduino & Smart Tech systems",

    about_title: "About",
    about_desc: "Arduino, IoT, robotics platform",

    contact_title: "Contact Us",
    contact_desc: "Send a message",

    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",

    logo: "AVI Tech"
  },

  hy: {
    home: "Գլխավոր",
    projects: "Պրոեկտներ",
    about: "Մեր մասին",
    contact: "Կապ",

    hero_title: "Խելացի Arduino համակարգեր",
    hero_desc: "Ուսումնասիրիր ավտոմատացում",

    projects_title: "Պրոեկտներ",
    projects_desc: "Arduino և Smart տեխնոլոգիաներ",

    about_title: "Մեր մասին",
    about_desc: "Arduino, IoT, ռոբոտիկա",

    contact_title: "Կապ մեզ հետ",
    contact_desc: "Ուղարկիր հաղորդագրություն",

    name: "Անուն",
    email: "Էլ․ հասցե",
    message: "Հաղորդագրություն",
    send: "Ուղարկել",

    logo: "AVI Tech"
  },

  ru: {
    home: "Главная",
    projects: "Проекты",
    about: "О нас",
    contact: "Контакты",

    hero_title: "Умные Arduino системы",
    hero_desc: "Автоматизация и робототехника",

    projects_title: "Проекты",
    projects_desc: "Arduino и Smart технологии",

    about_title: "О нас",
    about_desc: "Arduino, IoT, робототехника",

    contact_title: "Связаться",
    contact_desc: "Отправьте сообщение",

    name: "Имя",
    email: "Email",
    message: "Сообщение",
    send: "Отправить",

    logo: "AVI Tech"
  }
};

/* 🌍 CHANGE LANGUAGE */
function changeLang(lang) {
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  const logo = document.getElementById("logoText");
  if (logo) logo.textContent = translations[lang].logo;

  const menu = document.getElementById("langMenu");
  if (menu) menu.classList.remove("active");
}

/* 💾 LOAD SAVED LANGUAGE */
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  changeLang(savedLang);
});