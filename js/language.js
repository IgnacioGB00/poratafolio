const translations = {
    en: {
        "nav-about": "About",
        "nav-works": "Works",
        "nav-contact": "Contact",
        "header-desc": "Passionate about building interactive web applications and pixel-perfect interfaces. My goal is to transform ideas into high-performing websites using the latest front-end technologies and design principles.",
        "header-role": "Web Designer & Developer Front End.",
        "btn-contact": "Contact",
        "title-about": "About",
        "tools": "Tools:",
        "skills": "Skills:",
        "about-desc": "My journey in the tech world started with a curiosity for how things work on the web. Today, I use tools like Figma and VS Code to bring concepts to life. I believe that every project is an opportunity to learn something new and to push the boundaries of what's possible on the front end. I value clean code, accessibility, and meaningful aesthetics.",
        "title-works": "Works",
        "title-contact": "Contact"
    },
    es: {
        "nav-about": "Sobre mí",
        "nav-works": "Proyectos",
        "nav-contact": "Contacto",
        "header-desc": "Apasionado por crear aplicaciones web interactivas e interfaces perfectas. Mi objetivo es transformar ideas en sitios web de alto rendimiento utilizando las últimas tecnologías front-end.",
        "header-role": "Diseñador Web y Desarrollador Front End.",
        "btn-contact": "Contactar",
        "title-about": "Sobre mí",
        "tools": "Herramientas:",
        "skills": "Habilidades:",
        "about-desc": "Mi viaje en el mundo tecnológico comenzó con la curiosidad de cómo funcionan las cosas en la web. Hoy, utilizo herramientas como Figma y VS Code para dar vida a conceptos. Creo que cada proyecto es una oportunidad para aprender algo nuevo. Valoro el código limpio, la accesibilidad y la estética con propósito.",
        "title-works": "Trabajos",
        "title-contact": "Contacto"
    }
};

const languageSelect = document.getElementById('languageSelect');
const textsToChange = document.querySelectorAll('[data-key]');

languageSelect.addEventListener('change', (e) => {
    changeLanguage(e.target.value);
});

const changeLanguage = (lang) => {
    textsToChange.forEach((element) => {
        const key = element.getAttribute('data-key');
        element.textContent = translations[lang][key];
    });
    
    // Opcional: Guardar preferencia
    localStorage.setItem('selectedLang', lang);
};

// Cargar idioma guardado al iniciar
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'en';
    languageSelect.value = savedLang;
    changeLanguage(savedLang);
});

const whatsappBtn = document.getElementById('whatsappBtn');

whatsappBtn.addEventListener('click', () => {
    const url = "https://wa.me/50664033299";
    window.open(url, '_blank');
});