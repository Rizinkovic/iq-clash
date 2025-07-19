document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
});


// Logic to handle language selection and translation
document.addEventListener("DOMContentLoaded", () => {
  const frBtn = document.getElementById("lang-fr");
  const enBtn = document.getElementById("lang-en");
  const currentLang = localStorage.getItem("selectedLanguage") || "en";

  updateSegment(currentLang);
  translatePage(currentLang);

  frBtn.addEventListener("click", () => {
    localStorage.setItem("selectedLanguage", "fr");
    updateSegment("fr");
    translatePage("fr");
    closeBurger();
  });

  enBtn.addEventListener("click", () => {
    localStorage.setItem("selectedLanguage", "en");
    updateSegment("en");
    translatePage("en");
    closeBurger();
  });

  function updateSegment(lang) {
    if (lang === "fr") {
      frBtn.classList.add("active");
      enBtn.classList.remove("active");
    } else {
      enBtn.classList.add("active");
      frBtn.classList.remove("active");
    }
  }

  function closeBurger() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');

    if (document.getElementById("subject-title")) {
      loadQuestion();
    }
  }
});
