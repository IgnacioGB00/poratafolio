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
         titleOverview: "Overview",
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
        explanation: "TechPlus is a modern podcast platform focused on clarity, accessibility, and user experience. The project is designed to help users discover, explore, and engage with audio content through a clean interface, strong visual hierarchy, and responsive layouts that work seamlessly across devices.",
        rol: "<b>Rol:</b> Web Designer and Front-End Developer",
        stack: "<b>Stack:</b> HTML, CSS, JS",
        hero: { mobile: "../img/TechPlusLabtop.jpg", desktop: "../img/TechPlusLabtopCell.jpg" },
        mockupTwo: "../img/TechPlusTablet.jpg",
        mockupThree: "../img/TechPlusbuttonCellPhone.jpg",
        titleOverview: "Overview",
        textOverview: "TechPlus is a UX/UI and front-end web project focused on creating a clean and intuitive platform for discovering and exploring podcast episodes. The project emphasizes clear content structure, visual hierarchy, and responsive design to make audio content easy to browse across all devices. The interface was designed to highlight episodes, topics, and calls-to-action while maintaining a modern and minimal aesthetic. Built using HTML, CSS, and JavaScript, the project reflects a user-centered approach that combines thoughtful UX decisions with efficient front-end development to deliver a smooth and accessible listening experience.",
        overviewImg: { mobile: "../img/tp-ov-m.jpg", desktop: "../img/tp-ov-d.jpg" },

        roleText: 'In this project, I was responsible for both the UX/UI design and front-end development, overseeing the process from initial concept to final implementation. I designed the user experience with a strong focus on usability, accessibility, and content clarity, ensuring that users can easily discover podcast episodes and navigate the platform without friction. On the UI side, I defined the visual direction, layout structure, typography, and visual hierarchy to create a clean and modern interface aligned with the project’s goals. I also translated the designs into a fully functional front-end using HTML, CSS, and JavaScript, maintaining design consistency across all screen sizes.',

        textResearch: "During the research phase, I analyzed popular podcast websites and platforms to understand how they structure content, highlight episodes, and engage listeners. I focused on usability patterns that make browsing episodes intuitive, such as clear navigation, visual hierarchy, and concise calls-to-action. The concept was defined around creating a clean, modern podcast web experience that showcases audio content, episode information, and key topics in a way that’s both easy to explore and visually appealing. The design direction balances simplicity with functionality to ensure users can find and listen to content with minimal friction.",
        imgResearch: { mobile: "../img/tp-res-m.jpg", desktop: "../img/tp-res-d.jpg" },
        imgElementsOne: { mobile: "../img/TechPlusTypographyCell.jpg", desktop: "../img/TechPlusTypography.jpg" },
        imgElementsTwo: { mobile: "../img/techPlusColorsCell.jpg", desktop: "../img/techPlusColors.jpg" },
        imgElementsThree: { mobile: "../img/TechPlusbuttonCell.jpg", desktop: "../img/TechPlusbutton.jpg" },
        
        imgWireframesOne: { mobile: "../img/TechPluswireframeDesktopCell.jpg", desktop: "../img/TechPluswireframeDesktop.jpg" },
        imgWireframesTwo: { mobile: "../img/TechPluswireframeCell.jpg", desktop: "../img/TechPluswireframeCellDesktop.jpg" },
        stackDevelopment: "<b>Stack:</b> HTML, CSS, JS",
        textDevelopment: "For the development of Podcast Seven Pink, I built the front-end using HTML, CSS, and JavaScript to create a responsive and dynamic web experience. I translated the UI designs into clean, semantic HTML and modular CSS, ensuring layout consistency and accessibility. JavaScript was used to enhance interactivity and improve user engagement, while keeping performance smooth and lightweight. The result is a fast, responsive site that works seamlessly across desktop, tablet, and mobile devices, reflecting both solid UX/UI design and efficient front-end implementation."
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
        document.getElementById('roleText').textContent = p.roleText;

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
