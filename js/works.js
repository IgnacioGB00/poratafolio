const works = {
    "temple": {
        // --- INFORMACIÓN ORIGINAL ---
        nameProject: "Temple of Tranquility",
        explanation: "Temple of Tranquility is a web project inspired by LEGO and Japanese architecture. It showcases a fictional modular LEGO temple, combining 3D visuals, clean UI design, and a calm aesthetic.",
        rol: "<b>Rol:</b> Web Designer and Front-End Developer",
        stack: "<b>Stack:</b> HTML, CSS, JS",
        hero: {
            mobile: "../img/cellPhoneMockup.jpg",
            desktop: "../img/cellPhoneMockupDesktop.jpg"
        },
        mockupTwo: "../img/desktopMockupLego.jpg",
        mockupThree: "../img/tabledMockupDesktop.jpg",

        // Overview
        textOverview: "Temple of Tranquility is a UX/UI-focused web project inspired by LEGO and traditional Japanese architecture. The main goal was to design a calm, immersive digital experience that highlights a fictional modular LEGO set. The interface prioritizes clarity, visual hierarchy, and smooth navigation, allowing users to explore the concept, modular structure, and individual parts in an intuitive way. The design process emphasized consistency, responsive layouts, and performance optimization, ensuring a seamless experience across desktop, tablet, and mobile devices.",
        overviewImg: {
            mobile: "../img/OverviewCell.jpg",
            desktop: "../img/OverviewDesktop.jpg"
        },

        roleText: 'Temple of Tranquility is a UX/UI and Front-End web project inspired by LEGO and traditional Japanese architecture. My role involved designing the user experience and interface, as well as developing the front-end to bring the concept to life. The goal was to create a calm, immersive digital experience that presents a fictional modular LEGO set in a clear and engaging way. I focused on information architecture, visual hierarchy, and responsive design to ensure intuitive navigation across desktop, tablet, and mobile devices. On the front-end side, I implemented clean layouts, optimized performance, and translated the UI designs into functional, accessible components. The project reflects my ability to combine user-centered design principles with front-end development to deliver visually cohesive and usable digital experiences. ',

        // Process
        textResearch: "The research phase focused on analyzing LEGO product pages, modular design systems, and websites inspired by Japanese aesthetics. The goal was to understand how visual storytelling, layout structure, and interaction patterns can enhance exploration and engagement. I also studied principles of calm UI design, including spacing, color harmony, and typography, to support a peaceful and immersive user experience.",
        imgResearch: {
            mobile: "../img/researchCell.jpg",
            desktop: "../img/researchDesktop.jpg"
        },
        imgElementsOne: { mobile: "../img/ColorsButtonsCell.jpg", desktop: "../img/ColorsButtons.jpg" },
        imgElementsTwo: { mobile: "../img/spacingCell.jpg", desktop: "../img/spacing.jpg" },
        imgElementsThree: { mobile: "../img/TypographyCell.jpg", desktop: "../img/Typography.jpg" },
        imgWireframesOne: { mobile: "../img/wireframerDesktopCell.jpg", desktop: "../img/WireframesDesktop.jpg" },
        imgWireframesTwo: { mobile: "../img/wireframerDesktopCell.jpg", desktop: "../img/wireframerDesktop.jpg" },

        // Development
        stackDevelopment: "<b>Stack:</b> HTML, CSS, JS",
        textDevelopment: "The development phase focused on building a responsive and performant front-end using HTML, CSS, and JavaScript. The UI designs were translated into clean, semantic markup and modular styles to ensure consistency and scalability. JavaScript was used to add interactivity and enhance user engagement."
    },
    
    "techPlus": {
        // --- CAMBIA ESTOS DATOS POR LOS DE TU NUEVO PROYECTO ---
        nameProject: "TechPlus",
        explanation: "Descripción corta del proyecto TechPlus aquí...",
        rol: "<b>Rol:</b> Tu rol aquí",
        stack: "<b>Stack:</b> Las tecnologías aquí",
        hero: { mobile: "../img/TechPlusLabtop.jpg", desktop: "../img/TechPlusLabtopCell.jpg" },
        mockupTwo: "../img/TechPlusTablet.jpg",
        mockupThree: "../img/TechPluswireframeCellDesktop.jpg",
        titleOverview: "Overview",
        textOverview: "Texto largo sobre el proyecto TechPlus...",
        overviewImg: { mobile: "../img/tp-ov-m.jpg", desktop: "../img/tp-ov-d.jpg" },

          /* roleText: 'Temple of Tranquility.. ', */

        textResearch: "Investigación de TechPlus...",
        imgResearch: { mobile: "../img/tp-res-m.jpg", desktop: "../img/tp-res-d.jpg" },
        imgElementsOne: { mobile: "../img/tp-ui1-m.jpg", desktop: "../img/tp-ui1-d.jpg" },
        imgElementsTwo: { mobile: "../img/tp-ui2-m.jpg", desktop: "../img/tp-ui2-d.jpg" },
        imgElementsThree: { mobile: "../img/tp-ui3-m.jpg", desktop: "../img/tp-ui3-d.jpg" },
        imgWireframesOne: { mobile: "../img/tp-w1-m.jpg", desktop: "../img/tp-w1-d.jpg" },
        imgWireframesTwo: { mobile: "../img/tp-w2-m.jpg", desktop: "../img/tp-w2-d.jpg" },
        stackDevelopment: "<b>Stack:</b> React, Node, etc",
        textDevelopment: "Cómo desarrollaste TechPlus..."
    }
};

// Lógica de actualización
function updatePicture(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const sourceMobile = container.querySelector('source[media*="max-width"]');
    const sourceDesktop = container.querySelector('source[media*="min-width"]');
    const img = container.querySelector('img');

    if (sourceMobile) sourceMobile.srcset = data.mobile;
    if (sourceDesktop) sourceDesktop.srcset = data.desktop;
    if (img) img.src = data.desktop;
}

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    // Si existe el ID en la URL y existe en nuestro objeto
    if (id && works[id]) {
        const p = works[id];

        // 1. Textos
        document.getElementById('nameProject').textContent = p.nameProject;
        document.getElementById('explanation').textContent = p.explanation;
        document.getElementById('rol').innerHTML = p.rol;
        document.getElementById('stack').innerHTML = p.stack;
        document.getElementById('titleOverview').textContent = p.titleOverview;
        document.getElementById('textOverview').textContent = p.textOverview;
        document.getElementById('textResearch').textContent = p.textResearch;
        document.getElementById('StackDeveloment').innerHTML = p.stackDevelopment;
        document.getElementById('textDeveloment').textContent = p.textDevelopment;
        document.getElementById('  roleText').textContent = p.roleText;

        // 2. Imágenes simples
        document.getElementById('mockupTwo').src = p.mockupTwo;
        document.getElementById('mockupThree').src = p.mockupThree;

        // 3. Pictures (Asegúrate de que las etiquetas <picture> tengan estos IDs)
        updatePicture('headWork', p.hero); // El picture que está dentro de header
        updatePicture('Overview', p.overviewImg); // El picture dentro de la sección Overview
        updatePicture('ImgResearch', p.imgResearch);
        updatePicture('imgElementsOne', p.imgElementsOne);
        updatePicture('imgElementsTwo', p.imgElementsTwo);
        updatePicture('imgElementsThree', p.imgElementsThree);
        updatePicture('imgWireframesOne', p.imgWireframesOne);
        updatePicture('imgWireframesTwo', p.imgWireframesTwo);
    }
    console.log("ID recibido:", id);
console.log("Proyecto:", works[id]);
});
