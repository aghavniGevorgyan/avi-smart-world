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
    page_title: "Smart Home System - AVI Smart Tech",
    back_home: "← Back to Home",
    home_title: "IoT Smart Home Automation System",
    home_desc: "Learn how to build a basic smart home system using Arduino, a temperature sensor, and automated lighting control.",
    sec1_title: "1. Required Components",
    sec2_title: "2. Circuit Connections",
    sec3_title: "3. Arduino Code (Sketch)",
    sec3_desc: "Upload this code to your Arduino board using the Arduino IDE:",
    sec4_title: "4. Conclusion",
    sec4_desc: "By building this smart home setup, you learned how to read environmental data from sensors and automate home devices based on real-time conditions!",
    comp_1: "Arduino Uno (or any compatible board)",
    comp_2: "DHT11 Temperature & Humidity Sensor",
    comp_3: "Relay Module",
    comp_4: "LEDs & Resistors",
    comp_5: "Jumper Wires & Breadboard",
    logo: "AVI Tech"
  },

  hy: {
    page_title: "Խելացի տուն - AVI Smart Tech",
    back_home: "← Վերադառնալ գլխավոր էջ",
    home_title: "IoT խելացի տան ավտոմատացման համակարգ",
    home_desc: "Սովորեք կառուցել հիմնական խելացի տան համակարգ Arduino-ի, ջերմաստիճանի սենսորի և ավտոմատ կառավարման միջոցով:",
    sec1_title: "1. Անհրաժեշտ բաղադրիչներ",
    sec2_title: "2. Միացման սխեման",
    sec3_title: "3. Arduino-ի ծրագրային կոդը",
    sec3_desc: "Վերբեռնեք այս կոդը ձեր Arduino սարքին Arduino IDE-ի միջոցով:",
    sec4_title: "4. Եզրակացություն",
    sec4_desc: "Այս նախագծի միջոցով դուք սովորեցիք, թե ինչպես կարդալ սենսորների տվյալները և ավտոմատացնել տնային սարքերը իրական ժամանակում:",
    comp_1: "Arduino Uno (կամ համատեղելի այլ սարք)",
    comp_2: "DHT11 ջերմաստիճանի և խոնավության սենսոր",
    comp_3: "Ռելեի մոդուլ (Relay)",
    comp_4: "Լուսադիոդներ և դիմադրություններ",
    comp_5: "Միացնող լարեր և հացաբուլկային տախտակ (Breadboard)",
    logo: "AVI Tech"
  },

  ru: {
    page_title: "Система умного дома - AVI Smart Tech",
    back_home: "← На главную",
    home_title: "Система автоматизации умного дома IoT",
    home_desc: "Узнайте, как создать базовую систему умного дома с использованием Arduino, датчика температуры и автоматического управления освещением.",
    sec1_title: "1. Необходимые компоненты",
    sec2_title: "2. Схема подключения",
    sec3_title: "3. Код Arduino",
    sec3_desc: "Загрузите этот код на вашу плату Arduino с помощью Arduino IDE:",
    sec4_title: "4. Заключение",
    sec4_desc: "Создав эту систему умного дома, вы научились считывать данные датчиков окружающей среды и автоматизировать домашние устройства на основе реальных условий!",
    comp_1: "Arduino Uno (или совместимая плата)",
    comp_2: "Датчик температуры и влажности DHT11",
    comp_3: "Релейный модуль",
    comp_4: "Светодиоды и резисторы",
    comp_5: "Соединительные провода и макетная плата",
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