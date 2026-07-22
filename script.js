/* ==========================================
   RC PORTFOLIO
   Renée-Claude Giguère
========================================== */

/* ===========================
   Sticky Header
=========================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

/* ===========================
   Smooth Active Navigation
=========================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ===========================
   Fade In Animation
=========================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

document.querySelectorAll(

".experience-card, .highlight-card, .recognition-card, .skill-category, .education-card"

).forEach(card => {

    observer.observe(card);

});

/* ===========================
   Current Year
=========================== */

const year = new Date().getFullYear();

const footerYear = document.querySelector(".footer-year");

if (footerYear){

    footerYear.textContent = year;

}

/* ==========================================
   LANGUAGE TOGGLE
========================================== */

const languageButton = document.getElementById("language-toggle");

let currentLanguage = localStorage.getItem("language") || "en";

function updateLanguage(lang){

    currentLanguage = lang;

    localStorage.setItem("language", lang);

    languageButton.textContent = lang === "en" ? "FR" : "EN";

    document.documentElement.lang = lang;

    const elements = document.querySelectorAll("[data-en]");

    elements.forEach(element => {

        element.textContent = element.dataset[lang];

    });

}

updateLanguage(currentLanguage);

languageButton.addEventListener("click", () => {

    if(currentLanguage === "en"){

        updateLanguage("fr");

    }else{

        updateLanguage("en");

    }

});
