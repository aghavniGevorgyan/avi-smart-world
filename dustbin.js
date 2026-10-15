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
    page_title: "Smart Dustbin System - AVI Smart Tech",
    back_home: "← Back to Home",
    dustbin_title: "IoT Smart Dustbin System",
    dustbin_desc: "Learn how to build an automatic smart dustbin that opens its lid using an ultrasonic sensor and a servo motor when someone approaches.",
    sec1_title: "1. Required Components",
    sec2_title: "2. Circuit Connections",
    sec3_title: "3. Arduino Code (Sketch)",
    sec3_desc: "Upload this code to your Arduino board using the Arduino IDE:",
    sec4_title: "4. Conclusion",
    sec4_desc: "By building this smart dustbin, you learned how ultrasonic distance measurement works and how to synchronize it with servo motor motion for everyday automation!",
    comp_1: "Arduino Uno (or any compatible board)",
    comp_2: "Ultrasonic Sensor (HC-SR04)",
    comp_3: "Servo Motor (SG90)",
    comp_4: "Jumper Wires",
    comp_5: "Power Supply / USB Cable",
    logo: "AVI Tech"
  },

  hy: {
    page_title: "Խելացի աղբաման - AVI Smart Tech",
    back_home: "← Վերադառնալ գլխավոր էջ",
    dustbin_title: "IoT խելացի աղբամանի համակարգ",
    dustbin_desc: "Սովորեք կառուցել ավտոմատ խելացի աղբաման, որը բացում է իր կափարիչը հեռավորության սենսորի և սերվո շարժիչի միջոցով, երբ ինչ-որ մեկը մոտենում է:",
    sec1_title: "1. Անհրաժեշտ բաղադրիչներ",
    sec2_title: "2. Միացման սխեման",
    sec3_title: "3. Arduino-ի ծրագրային կոդը",
    sec3_desc: "Վերբեռնեք այս կոդը ձեր Arduino սարքին Arduino IDE-ի միջոցով:",
    sec4_title: "4. Եզրակացություն",
    sec4_desc: "Այս նախագծի միջոցով դուք սովորեցիք, թե ինչպես է աշխատում ուլտրաձայնային հեռավորության չափումը և ինչպես այն համատեղել սերվո շարժիչի հետ:",
    comp_1: "Arduino Uno (կամ համատեղելի այլ սարք)",
    comp_2: "Ուլտրաձայնային սենսոր (HC-SR04)",
    comp_3: "Սերվո շարժիչ (SG90)",
    comp_4: "Միացնող լարեր",
    comp_5: "Սնուցման աղբյուր / USB մալուխ",
    logo: "AVI Tech"
  },

  ru: {
    page_title: "Система умного мусорного ведра - AVI Smart Tech",
    back_home: "← На главную",
    dustbin_title: "Система умного мусорного ведра IoT",
    dustbin_desc: "Узнайте, как создать автоматическое умное мусорное ведро, которое открывает крышку с помощью ультразвукового датчика и серводвигателя.",
    sec1_title: "1. Необходимые компоненты",
    sec2_title: "2. Схема подключения",
    sec3_title: "3. Код Arduino",
    sec3_desc: "Загрузите этот код на вашу плату Arduino с помощью Arduino IDE:",
    sec4_title: "4. Заключение",
    sec4_desc: "Создав этот умный мусорный бак, вы узнали, как работает ультразвуковое измерение расстояния и как синхронизировать его с движением серводвигателя!",
    comp_1: "Arduino Uno (или совместимая плата)",
    comp_2: "Ультразвуковой датчик (HC-SR04)",
    comp_3: "Серводвигатель (SG90)",
    comp_4: "Соединительные провода",
    comp_5: "Источник питания / USB-кабель",
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
  if (logo && translations[lang]) {
    logo.textContent = translations[lang].logo
  }

  const menu = document.getElementById("langMenu")
  if (menu) menu.classList.remove("active")
}

/* 💾 LOAD SAVED LANGUAGE */
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en"
  changeLang(savedLang)
})