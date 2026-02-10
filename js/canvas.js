/**
 * ARCHIVO: js/canvas.js
 */

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Resolución interna fija (Alta definición para el renderizado ASCII)
const internalRes = 1080;
canvas.width = internalRes;
canvas.height = internalRes;

const sectionImages = {
    'header': 'img/scultura-Photoroom.png',
    'About': 'img/corazon.png', 
    'works': 'img/mano.png',
    'Contact': 'img/labios.png'
};

let currentImageUrl = '';
let isChangingImage = false;

// --- 1. LÓGICA DE PROCESAMIENTO ASCII (Tu look favorito) ---
const getGlyph = (v) => {
    const charPool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789¡¿(){}[]#$&%*+/=';
    const ramp = 'M#@%B8&W=*+-:. '.split('');
    if (v < 30) return ' ';
    if (v < 150) {
        const index = Math.floor(((255 - v) / 255) * ramp.length);
        return ramp[Math.min(index, ramp.length - 1)];
    }
    return charPool[Math.floor(Math.random() * charPool.length)];
};

const draw = async (url) => {
    if (isChangingImage) return;
    isChangingImage = true;
    canvas.style.opacity = '0';

    try {
        const image = await new Promise((res, rej) => {
            const img = new Image();
            img.crossOrigin = 'Anonymous';
            img.onload = () => res(img);
            img.onerror = rej;
            img.src = url;
        });

        setTimeout(() => {
            const cell = 6;
            const cols = internalRes / cell;
            const rows = internalRes / cell;
            
            const typeCanvas = document.createElement('canvas');
            typeCanvas.width = cols;
            typeCanvas.height = rows;
            const typeContext = typeCanvas.getContext('2d');
            typeContext.drawImage(image, 0, 0, cols, rows);
            const data = typeContext.getImageData(0, 0, cols, rows).data;

            context.clearRect(0, 0, internalRes, internalRes);
            context.fillStyle = '#100B16';
            context.fillRect(0, 0, internalRes, internalRes);
            context.fillStyle = '#C3E2FF';
            context.font = `${cell * 1.5}px monospace`;
            context.textAlign = 'center';

            for (let i = 0; i < cols * rows; i++) {
                const brightness = (data[i * 4] + data[i * 4 + 1] + data[i * 4 + 2]) / 3;
                const col = i % cols;
                const row = Math.floor(i / cols);
                context.fillText(getGlyph(brightness), col * cell + cell/2, row * cell + cell/2);
            }

            canvas.style.opacity = '1';
            isChangingImage = false;
        }, 300);
    } catch (e) { console.error(e); isChangingImage = false; }
};

// --- 2. LÓGICA DE MOVIMIENTO HÍBRIDA ---
const updatePosition = () => {
    const sections = Object.keys(sectionImages);
    let activeId = 'header';
    let minDistance = Infinity;
    const screenCenter = window.innerHeight / 2;

    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            const rect = el.getBoundingClientRect();
            const distance = Math.abs(screenCenter - (rect.top + rect.height / 2));
            if (distance < minDistance) {
                minDistance = distance;
                activeId = id;
            }
        }
    });

    let targetX, targetY, targetScale;

    if (activeId === 'header') {
        // --- COMPORTAMIENTO LIBRE PARA EL HEADER ---
        const isMobile = window.innerWidth < 768;
        const size = isMobile ? 400 : 600; // Tamaño fijo que tú elijas
        
        targetScale = size / internalRes;
        targetX = (window.innerWidth / 2) - (size / 2);
        targetY = (window.innerHeight / 2) - (size / 2) + 100; // Ajuste visual hacia abajo
    } else {
        // --- COMPORTAMIENTO ADAPTADO A IMGCONTEINER ---
        const section = document.getElementById(activeId);
        const container = section.querySelector('.imgConteiner');
        
        if (container) {
            const rect = container.getBoundingClientRect();
            
            // Ajuste inteligente para Desktop (mantiene proporción)
            const scaleX = rect.width / internalRes;
            const scaleY = rect.height / internalRes;
            targetScale = Math.min(scaleX, scaleY);

            // Centrado dentro del contenedor
            const offsetX = (rect.width - (internalRes * targetScale)) / 2;
            const offsetY = (rect.height - (internalRes * targetScale)) / 2;

            targetX = rect.left + offsetX;
            targetY = rect.top + offsetY;
        }
    }

    // Aplicar transformación fluida
    canvas.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) scale(${targetScale})`;

    // Cambio de imagen
    const newUrl = sectionImages[activeId];
    if (newUrl && newUrl !== currentImageUrl) {
        currentImageUrl = newUrl;
        draw(newUrl);
    }
};

// --- 3. EVENTOS ---
window.addEventListener('scroll', () => {
    window.requestAnimationFrame(updatePosition);
});

window.addEventListener('resize', updatePosition);

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    if (header && !header.id) header.id = 'header';
    updatePosition();
});