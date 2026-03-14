// translation.js — compartido entre todos los proyectos
// Funciona leyendo los atributos data-en y data-es de cada elemento

document.addEventListener("DOMContentLoaded", () => {
    const languageSelect = document.getElementById("languageSelect");

    // Lee el idioma guardado o usa inglés por defecto
    const savedLang = localStorage.getItem("lang") || "en";
    languageSelect.value = savedLang;
    applyLanguage(savedLang);

    languageSelect.addEventListener("change", (e) => {
        const lang = e.target.value;
        localStorage.setItem("lang", lang);
        applyLanguage(lang);
    });
});

function applyLanguage(lang) {
    // Selecciona todos los elementos que tengan data-en o data-es
    const elements = document.querySelectorAll("[data-en], [data-es]");

    elements.forEach((el) => {
        const content = el.getAttribute(`data-${lang}`);
        if (content === null) return;

        // Usa innerHTML para elementos que contienen <b> u otras etiquetas
        // Detecta si el contenido tiene HTML
        if (content.includes("<")) {
            el.innerHTML = content;
        } else {
            el.textContent = content;
        }
    });

    // Actualiza el lang del <html> para accesibilidad y SEO
    document.documentElement.lang = lang;
}
