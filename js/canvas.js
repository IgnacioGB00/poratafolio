/**
 * ARCHIVO: js/canvas.js
 * Sistema de arte ASCII dinámico con transiciones de imagen
 * y posicionamiento responsivo.
 */

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Resolución interna fija para el procesamiento de la imagen
const width = 1080;
const height = 1080;
canvas.width = width;
canvas.height = height;

// Configuración de imágenes por ID de sección
const sectionImages = {
    'header': 'img/scultura-Photoroom.png',
    'About': 'img/corazon.png', 
    'works': 'img/mano.png',
    'Contact': 'img/labios.png'
};

let currentImageUrl = '';
let isChangingImage = false;

// --- 1. LÓGICA DE PROCESAMIENTO DE IMAGEN (ASCII) ---

const randomPick = (array) => array[Math.floor(Math.random() * array.length)];

const loadImage = (url) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Error cargando: ${url}`));
        img.src = url;
    });
};

const getGlyph = (v) => {
    const charPool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789¡¿(){}[]#$&%*+/=';
    const ramp = 'M#@%B8&W=*+-:. '.split('');
    const invertedV = 255 - v;
    if (v < 30) return ' ';
    if (v < 150) {
        const step = 255 / ramp.length;
        let index = Math.floor(invertedV / step);
        return ramp[Math.min(index, ramp.length - 1)];
    }
    return randomPick(charPool.split(''));
};

const draw = async (url) => {
    if (isChangingImage) return;
    isChangingImage = true;

    // Efecto de desvanecimiento suave antes de cambiar
    canvas.style.opacity = '0';

    try {
        const image = await loadImage(url);
        
        // Timeout para esperar que la opacidad baje antes de redibujar
        setTimeout(() => {
            const cell = 6;
            const cols = Math.floor(width / cell);
            const rows = Math.floor(height / cell);
            
            const typeCanvas = document.createElement('canvas');
            const typeContext = typeCanvas.getContext('2d');
            typeCanvas.width = cols;
            typeCanvas.height = rows;
            typeContext.drawImage(image, 0, 0, cols, rows);
            const typeData = typeContext.getImageData(0, 0, cols, rows).data;

            context.clearRect(0, 0, width, height);
            context.fillStyle = '#100B16';
            context.fillRect(0, 0, width, height);
            context.fillStyle = '#C3E2FF';
            context.font = `${cell * 1.5}px monospace`;
            context.textAlign = 'center';
            context.textBaseline = 'middle';

            for (let i = 0; i < cols * rows; i++) {
                const col = i % cols;
                const row = Math.floor(i / cols);
                const r = typeData[i * 4];
                const g = typeData[i * 4 + 1];
                const b = typeData[i * 4 + 2];
                const brightness = (r + g + b) / 3;
                
                context.fillText(getGlyph(brightness), col * cell + cell/2, row * cell + cell/2);
            }

            // Volver a mostrar con la nueva imagen
            canvas.style.opacity = '1';
            isChangingImage = false;
        }, 300);

    } catch (err) { 
        console.error(err);
        isChangingImage = false;
        canvas.style.opacity = '1';
    }
};

// --- 2. LÓGICA DE MOVIMIENTO Y RESPONSIVE ---

const updatePosition = () => {
    const sections = ['header', 'About', 'works', 'Contact'];
    let activeId = 'header';
    let minDistance = Infinity;

    const screenCenter = window.innerHeight / 2;

    // Buscamos la sección más cercana al centro visual (mejor para la última sección)
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            const rect = el.getBoundingClientRect();
            const sectionCenter = rect.top + rect.height / 2;
            const distance = Math.abs(screenCenter - sectionCenter);

            if (distance < minDistance) {
                minDistance = distance;
                activeId = id;
            }
        }
    });

    if (activeId === 'header') {
        // --- COMPORTAMIENTO HEADER ---
        const isMobile = window.innerWidth < 768;
        const size = isMobile ? '400px' : '600px';

        canvas.style.width = size;
        canvas.style.height = size;
        canvas.style.left = '50%';
        canvas.style.top = `${window.innerHeight / 2 + 100}px`;
        canvas.style.transform = 'translate(-50%, -50%)';
    } else {
        // --- COMPORTAMIENTO SECCIONES ---
        const section = document.getElementById(activeId);
        const container = section.querySelector('.imgConteiner');
        
        if (container) {
            const rect = container.getBoundingClientRect();
            // Centrado automático en el contenedor de la sección
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
            canvas.style.left = `${rect.left}px`;
            canvas.style.top = `${rect.top}px`;
            canvas.style.transform = 'translate(0, 0)';
        }
    }

    // Cambiar imagen solo si detectamos una sección nueva
    const newUrl = sectionImages[activeId];
    if (newUrl && newUrl !== currentImageUrl) {
        currentImageUrl = newUrl;
        draw(newUrl);
    }
};

// --- 3. INICIALIZACIÓN Y EVENTOS ---

window.addEventListener('scroll', updatePosition);
window.addEventListener('resize', updatePosition);

document.addEventListener('DOMContentLoaded', () => {
    // Asegurar que el header tenga el ID correcto para el script
    const header = document.querySelector('header');
    if (header && !header.id) header.id = 'header';

    // Ejecución inicial
    updatePosition();
    
    // Carga inicial de la imagen (sin delay de transición al abrir)
    currentImageUrl = sectionImages['header'];
    draw(currentImageUrl);
});