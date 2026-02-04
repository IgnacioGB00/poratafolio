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

let temple = document.getElementById('TempleHover');
let ConteinerImg = document.getElementById('ConteinerImg');
let imgTemple = document.createElement('img');

// Configuramos los estilos fijos una sola vez fuera de los eventos
imgTemple.src = 'img/cellPhoneMockupDesktop.jpg';
imgTemple.style.width = '100%';
imgTemple.style.height = '100%';
imgTemple.style.objectFit = 'cover';
imgTemple.alt = 'Mockup of the project';
imgTemple.classList.add('fade-in-img'); // Le ponemos la clase de la transición

temple.addEventListener('mouseenter', () => {
    ConteinerImg.appendChild(imgTemple);
    
    // Usamos un pequeñísimo delay para que el navegador detecte el cambio y anime
    setTimeout(() => {
        imgTemple.classList.add('visible');
    }, 10); 
});

temple.addEventListener('mouseleave', () => {
    imgTemple.classList.remove('visible');
    
    // Esperamos a que termine la animación (500ms) antes de borrar el elemento
    setTimeout(() => {
        imgTemple.remove();
    }, 500); 
}); 


let TechPlus = document.getElementById('TechPlusHover');
let imgTechPlus = document.createElement('img');

imgTechPlus.src = 'img/OverviewTechPlusImagen.jpg';
imgTechPlus.style.width = '100%';
imgTechPlus.style.height = '100%';
imgTechPlus.style.objectFit = 'cover';
imgTechPlus.alt = 'Mockup of the project';
imgTechPlus.classList.add('fade-in-img');

TechPlus.addEventListener('mouseenter', () => {
    ConteinerImg.appendChild(imgTechPlus);
    
    // Usamos un pequeñísimo delay para que el navegador detecte el cambio y anime
    setTimeout(() => {
        imgTechPlus.classList.add('visible');
    }, 10); 
});

TechPlus.addEventListener('mouseleave', () => {
    imgTechPlus.classList.remove('visible');
    
    // Esperamos a que termine la animación (500ms) antes de borrar el elemento
    setTimeout(() => {
        imgTechPlus.remove();
    }, 500); 
}); 