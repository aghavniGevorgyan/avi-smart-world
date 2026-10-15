/* 🌍 LANGUAGE MENU TOGGLE */
function toggleLangMenu() {
  const menu = document.getElementById("langMenu")
  if (menu) menu.classList.toggle("active")
}

/* click outside → close menu */
window.addEventListener("click", function (e) {
  const menu = document.getElementById("langMenu")
  const btn = document.querySelector(".lang-btn")

  if (menu && btn) {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.remove("active")
    }
  }
})

/* 🌍 TRANSLATIONS */
const translations = {
  en: {
    page_title: "Smart Watering System - AVI Smart Tech",
    back_home: "← Back to Home",
    water_title: "IoT Smart Plant Watering System",
    water_desc: "Learn how to build an automated plant watering system using Arduino, a soil moisture sensor, and a mini water pump.",
    sec1_title: "1. Required Components",
    sec2_title: "2. Circuit Connections",
    sec3_title: "3. Arduino Code (Sketch)",
    sec3_desc: "Upload this code to your Arduino board using the Arduino IDE:",
    sec4_title: "4. Conclusion",
    sec4_desc: "By completing this project, you’ve learned the basics of reading analog sensor data and controlling high-power devices safely using a relay module with Arduino!",
    logo: "AVI Tech"
  },

  hy: {
    page_title: "Խելացի ոռոգման համակարգ - AVI Smart Tech",
    back_home: "← Վերադառնալ գլխավոր էջ",
    water_title: "IoT բույսերի ինքնաշխատ ոռոգման համակարգ",
    water_desc: "Սովորեք կառուցել ավտոմատ ոռոգման համակարգ Arduino-ի, հողի խոնավության սենսորի և փոքր ջրի պոմպի միջոցով:",
    sec1_title: "1. Անհրաժեշտ բաղադրիչներ",
    sec2_title: "2. Միացման սխեման",
    sec3_title: "3. Arduino-ի ծրագրային կոդը",
    sec3_desc: "Վերբեռնեք այս կոդը ձեր Arduino սարքին Arduino IDE-ի միջոցով:",
    sec4_title: "4. Եզրակացություն",
    sec4_desc: "Այս նախագիծն ավարտելով՝ դուք սովորեցիք անալոգային սենսորների տվյալների ընթերցման և Arduino-ի միջոցով հզոր սարքերն ապահով կառավարելու հիմունքները:",
    logo: "AVI Tech"
  },

  ru: {
    page_title: "Система умного полива - AVI Smart Tech",
    back_home: "← На главную",
    water_title: "Система автоматического полива растений IoT",
    water_desc: "Узнайте, как создать автоматическую систему полива растений с использованием Arduino, датчика влажности почвы и мини-насоса.",
    sec1_title: "1. Необходимые компоненты",
    sec2_title: "2. Схема подключения",
    sec3_title: "3. Код Arduino",
    sec3_desc: "Загрузите этот код на вашу плату Arduino с помощью Arduino IDE:",
    sec4_title: "4. Заключение",
    sec4_desc: "Завершив этот проект, вы освоили основы чтения данных аналоговых датчиков и безопасного управления мощными устройствами с помощью Arduino!",
    logo: "AVI Tech"
  }
}

/* 🌍 CHANGE LANGUAGE */
function changeLang(lang) {
  localStorage.setItem("lang", lang)

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key]
    }
  })

  const logo = document.getElementById("logoText")
  if (logo && translations[lang]) logo.textContent = translations[lang].logo

  const menu = document.getElementById("langMenu")
  if (menu) menu.classList.remove("active")
}

/* 💾 LOAD SAVED LANGUAGE */
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en"
  changeLang(savedLang)
})