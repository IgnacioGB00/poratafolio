const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

        const width = 1080;
        const height = 1080;
        canvas.width = width;
        canvas.height = height;

        const url = 'img/scultura-Photoroom.png'; // Asegúrate de que la ruta sea correcta

        // Sustitución de random.pick
        const randomPick = (array) => array[Math.floor(Math.random() * array.length)];

        const loadImage = (url) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.crossOrigin = 'Anonymous'; 
                img.onload = () => resolve(img);
                img.onerror = () => reject(new Error(`No se pudo cargar la imagen: ${url}`));
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
                index = Math.min(index, ramp.length - 1);
                return ramp[index];
            }
            
            return randomPick(charPool.split(''));
        };

        const draw = async () => {
            const cell = 5; 
            const cols = Math.floor(width / cell);
            const rows = Math.floor(height / cell);
            const numCells = cols * rows;

            // Canvas auxiliar para procesar datos de la imagen
            const typeCanvas = document.createElement('canvas');
            const typeContext = typeCanvas.getContext('2d');
            typeCanvas.width = cols;
            typeCanvas.height = rows;

            try {
                const image = await loadImage(url);

                // Dibujar imagen a escala reducida en el canvas oculto
                typeContext.drawImage(image, 0, 0, cols, rows);
                const typeData = typeContext.getImageData(0, 0, cols, rows).data;

                // Dibujar fondo principal
                context.fillStyle = '#100B16';
                context.fillRect(0, 0, width, height);

                context.fillStyle = '#C3E2FF';
                context.font = `${cell * 1.5}px monospace`;
                context.textAlign = 'center';
                context.textBaseline = 'middle';

                for (let i = 0; i < numCells; i++) {
                    const col = i % cols;
                    const row = Math.floor(i / cols);
                    const x = col * cell;
                    const y = row * cell;

                    const r = typeData[i * 4 + 0];
                    const g = typeData[i * 4 + 1];
                    const b = typeData[i * 4 + 2];

                    const brightness = (r + g + b) / 3;
                    const glyph = getGlyph(brightness);

                    context.save();
                    context.translate(x + cell * 0.5, y + cell * 0.5);
                    context.fillText(glyph, 0, 0);
                    context.restore();
                }
            } catch (err) {
                console.error(err);
                context.fillStyle = '#C3E2FF';
                context.fillText("Error cargando imagen. Revisa la consola.", 20, 20);
            }
        };

        draw();  

