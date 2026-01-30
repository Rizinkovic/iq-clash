document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Logic ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeBurger);
        });
    }

    function closeBurger() {
        if (hamburger) hamburger.classList.remove('active');
        if (navLinks) navLinks.classList.remove('active');
    }

    // --- Language Selection Logic ---
    const frBtn = document.getElementById("lang-fr");
    const enBtn = document.getElementById("lang-en");
    const currentLang = localStorage.getItem("selectedLanguage") || "en";

    // Initial UI Setup
    updateSegmentUI(currentLang);

    if (frBtn && enBtn) {
        frBtn.addEventListener("click", () => handleLangChange("fr"));
        enBtn.addEventListener("click", () => handleLangChange("en"));
    }

    function handleLangChange(lang) {
        localStorage.setItem("selectedLanguage", lang);
        updateSegmentUI(lang);
        
        // Call translate function from translate.js
        if (typeof translatePage === 'function') {
            translatePage(lang);
        }

        closeBurger();

        if (document.getElementById("subject-title") && typeof loadQuestion === 'function') {
            loadQuestion();
        }
    }

    function updateSegmentUI(lang) {
        if (!frBtn || !enBtn) return;
        if (lang === "fr") {
            frBtn.classList.add("active");
            enBtn.classList.remove("active");
        } else {
            enBtn.classList.add("active");
            frBtn.classList.remove("active");
        }
    }
});