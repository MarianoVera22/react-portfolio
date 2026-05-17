// Archivo centralizado de traducciones ES/EN
// Para agregar un texto: agregar la clave en ambos idiomas respetando la estructura

const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Habilidades",
      career: "Trayectoria",
      projects: "Proyectos",
      contact: "Contacto",
    },

    home: {
      subtitle: "Ingeniero Electrónico / Programador",
      description:
        "Ingeniero electrónico apasionado por el desarrollo de software.",
      description2:
        // "A lo largo de mi carrera forme parte de proyectos muy interesantes tanto en grupos de trabajo como de manera individual. En mi trayectoria profesional aprendi a trabajar en equipo desempeñando varios tipos de roles como lider, coordinador y ejecutor. Me motivan los desafios y el aprendizaje continuo. Me considero una persona responsable, autodidacta, honesta y disciplinada."
        " Me formé de manera autodidacta en programación a lo largo de toda mi carrera, manejando varios lenguajes, junto con tecnologías web y sistemas embebidos.",
      description3:  
        "Mi recorrido profesional en la industria me dio algo que pocos developers tienen: experiencia real resolviendo problemas técnicos complejos en entornos exigentes. Trabajé con PLCs, variadores de frecuencia y sistemas automatizados, lo que me dio una comprensión profunda de cómo el software interactúa con el mundo físico.",
      description4:  
        " Me motiva construir software que resuelva problemas reales: un dashboard que transforme datos en decisiones, firmware para un dispositivo o la automatización de un proceso productivo. Disfruto del proceso de aprender, diseñar y crear.",
        downloadCV: "Descargar CV",
    },

    about: {
      title: "Sobre mí",
      subtitle: "Datos personales y profesionales",
      languagesTitle: "Idiomas",
      langSpanish: "Español",
      langSpanishLevel: "Nativo",
      langEnglish: "Inglés",
      langEnglishLevel: "Avanzado",
      langItalian: "Italiano",
      langItalianLevel: "Básico",
      certificatesTitle: "Certificados",
      interestsTitle: "Intereses",
      softSkillsTitle: "Soft skills",
      interests: {
        software: "Software",
        programming: "Programación",
        robotics: "Robótica",
        firmware: "Firmware",
        it: "IT",
        automation: "Automatización",
        hardware: "Hardware",
      },
      softSkills: {
        responsibility: "Responsabilidad",
        teamwork: "Trabajo en equipo",
        communication: "Comunicación",
        leadership: "Liderazgo",
        proactivity: "Proactividad",
      },
    },

    skills: {
      title: "Habilidades",
      subtitle: "Mis habilidades tecnicas",
      webDev: "Desarrollo Web",
      engineering: "Ingeniería",
      automation: "Automatización",
    },

    career: {
      title: "Trayectoria",
      subtitle: "Mi camino profesional",
      education: "Educación",
      experience: "Experiencia",
      present: "presente",

      // Educación
      edu1Title: "Roadmap Python",
      edu1Sub: "Autodidacta",
      edu2Title: "C# .NET Avanzado",
      edu2Sub: "Plataforma Udemy - Hector de Leon",
      edu3Title: "SQL - MariaDB",
      edu3Sub: "Plataforma Udemy - Hector de Leon",
      edu4Title: "Excel Avanzado",
      edu4Sub: "Plataforma Udemy - Global Mentoring",
      edu5Title: "Automatismo industrial PLC TIA Portal",
      edu5Sub:
        "Universidad Tecnológica Nacional - Facultad Regional Resistencia",
      edu6Title: "Ingeniería Electrónica",
      edu6Sub: "Universidad Tecnológica Nacional - Facultad Regional Córdoba",
      edu7Title: "Diseño Web (Mediaquery, Bootstrap y React)",
      edu7Sub: "Plataforma Udemy",
      edu8Title: "Desarrollo Web (HTML, CSS, JS, Angular y Java)",
      edu8Sub: "Argentina Programa",

      // Experiencia
      exp1Title: "Jefe sector mantenimiento eléctrico",
      exp1Sub: "Bagley Grupo Arcor - Córdoba",
      exp2Title: "Analista de mantenimiento Eléctrico - Automatista",
      exp2Sub: "Cartocor Grupo Arcor - Villa del Totoral",
      exp3Title: "Supervisor Eléctrico - Automatista",
      exp3Sub: "Fantini Ladrillos Cerámicos - Colonia Caroya",
      exp4Title: "Practicas Profesionales",
      exp4Sub:
        "Centro de Investigación en Informática para la Ingeniería - Córdoba",
      exp5Title: "Profesor armado y reparación de PC",
      exp5Sub: "Instituto Integral Capacitando - Jesus Maria",
    },

    projects: {
      title: "Proyectos",
      subtitle: "Mis proyectos",
      seeMore: "Ver mas",
      toolsUsed: "Herramientas usadas:",
      btnApp: "App",
      btnRepo: "Repositorio",
      btnDoc: "Documento",

      // Proyecto 1 - Dietética
      p1CardTitle: "Sistema de Gestión Dietetica",
      p1ModalTitle:
        "Sistema completo de gestión de inventario, ventas y reportes",
      p1Desc1:
        "Desarrollado desde cero, diseñado originalmente para una dietética y arquitectado para adaptarse a cualquier rubro comercial mediante un único archivo de configuración.",
      p1Desc2:
        "Funcionalidades: punto de venta con carrito y múltiples medios de pago, gestión de inventario con cálculo automático de margen, control de lotes y vencimientos con alertas configurables, ingreso de mercadería con actualización inteligente de precios, panel de reportes financieros protegido por PIN con KPIs mensuales (ingresos, gasto por proveedor, ganancia neta) y exportación a CSV compatible con Excel.",
      p1Desc3:
        "Stack: React 18, Vite 5, JavaScript moderno, CSS3 con variables nativas para tema dinámico, SVG inline.",

      // Proyecto 2 - R4004
      p2CardTitle: "Upgrade de variadores en impresora flexográfica",
      p2ModalTitle:
        "Migración de variadores Schneider Altivar 71 a ATV960 en impresora de flexibles R4004",
      p2Desc1:
        "La impresora flexográfica R4004 operaba con variadores Schneider Altivar 71 declarados obsoletos por el fabricante, sin stock garantizado de repuestos. Una falla habría dejado la línea fuera de servicio por tiempo indeterminado.",
      p2Desc2:
        "Ejecuté la migración completa a variadores Schneider ATV960: dimensionamiento, cableado e instalación física de los nuevos equipos, y reconfiguración del proyecto PLC en Step 7 — actualización de la topología de red Profinet, ajustes de hardware y reescritura del bloque de comunicación PLC–variador para asegurar el correcto intercambio de datos.",
      p2Desc3:
        "Resultado: línea liberada de obsolescencia, menores costos asociados a futuras reparaciones y los Altivar 71 reutilizados como respaldo en otra máquina de la planta, extendiendo el retorno de la inversión original.",

      // Proyecto 3 - Transbordador
      p3CardTitle: "Automatización de transbordador industrial",
      p3ModalTitle:
        "Robustecimiento de lógica PLC y desarrollo de HMI para transbordador de carros en secadero de ladrillos cerámicos",
      p3Desc1:
        "Línea de producción de ladrillos cerámicos con un transbordador automático que mueve carros industriales entre canales de secado. La lógica original del PLC presentaba puntos ciegos en la gestión de emergencias que, ocasionalmente, derivaban en la caída de un carro a la fosa: rotura del equipo, daños estructurales y aproximadamente +12 horas de parada de línea por evento.",
      p3Desc2:
        "Reescribí la lógica de emergencias en TIA Portal para cubrir los modos de falla detectados haciendo que el transbordador queda en espera hasta validar por sensor que el carro está correctamente posicionado en el canal antes de ejecutar cada descarga.",
      p3Desc3:
        "En paralelo, diseñé una pantalla HMI que muestra al operario el estado de todos los sensores del sistema, la posición del transbordador y las condiciones de emergencia y presencia activas en tiempo real, simplificando el diagnóstico ante cualquier anomalía.",
      p3Desc4:
        "Desde la puesta en marcha de los cambios no se registró ninguna nueva caída de carros, eliminando el modo de falla más costoso de la línea.",

      // Proyecto 4 - HAT
      p4CardTitle: "HAT de Raspberry Pi",
      p4ModalTitle:
        "Hardware HAT de sensor odométrico basado en la fusión de visión y mediciones inerciales.",
      p4Desc1:
        "El proyecto se trato de la primera iteracción en el diseño de un hardware que permita desarrollar un sensor de odometría visual e inercial aplicado a la navegación de robots móviles.",
      p4Desc2:
        "La placa dispone de una cámara y sensores inerciales para ser utilizada como plataforma experimental en el desarrollo de algoritomos de fusión sensorial para la estimación de posición de un robot móvil.",
      p4Desc3:
        "Además del hardware, se desarrollaron varios scripts de prueba para los diferentes tipos de sensores y se creo un contenedor docker configurado para la comunicación con nuestra Raspberry Pi a traves de I2C.",
      p4Desc4:
        "Este proyecto fue realizado como tesis de grado de Ingenieria Electrónica junto al Centro de Investigación en Informática para la Ingeniería.",

      // Proyecto 5 - Presupuesto
      p5CardTitle: "Presupuesto personal",
      p5ModalTitle: "Presupuesto personal desarrollado con Angular",
      p5Desc1:
        "Se trata de una app para presupuesto personal donde podemos añadir ingresos y egresos con sus respectivas descripciones y valores.",
      p5Desc2:
        "Estos quedaran registrados y se calculara el presupuesto actual disponible asi como tambien el porcentaje que representa cada uno de ellos.",

      // Proyecto 6 - Listado
      p6CardTitle: "Listado de tareas",
      p6ModalTitle: "Listado de tareas con React",
      p6Desc1:
        "Esta app nos permite hacer un listado de tareas muy bien estilada y con funcionalidades como agregar, eliminar o tachar tareas.",
      p6Desc2:
        "Este proyecto es parte de un curso de FreeCodeCamp que he realizado.",

      // Proyecto 7 - Visión
      p7CardTitle: "Visión por computadora",
      p7ModalTitle: "Visión por computadora",
      p7Desc1:
        "Se trata de una serie de ejercicios practicos hechos para la materia electiva Visión por computadora en la carrera de Ingeniería Electrónica.",
      p7Desc2:
        "En estos proyectos se busca integrar las librerias de OpenCV en Python para manipular imagenes y videos.",
      p7Desc3:
        "Dentro de estos practicos podemos encontrar practicos sencillos que van subiendo su dificultad para luego formar parte de una agrupación de herramientas de manipulación de imagenes. Tambien, practicos donde a traves de una imagen y relaciones podemos medir objetos desde una imagen con muy buena precisión.",

      // Proyecto 8 - Calculadora
      p8CardTitle: "Calculadora",
      p8ModalTitle: "Calculadora con React",
      p8Desc1:
        "Este proyecto se trata de una calculadora totalmente funcional, estilizado y responsive hecha junto a React.",
      p8Desc2: "Esta app es parte de un curso de FreeCodeCamp que he realizado.",

      // Proyecto 9 - Luces
      p9CardTitle: "Secuencias de luces",
      p9ModalTitle: "Secuencias de luces",
      p9Desc1:
        "Se trata de un programa en C++ creado para funcionar en una Raspberry Pi 3 junto a una placa experimental hecha por el grupo.",
      p9Desc2:
        "Este cuenta con secuencias de luces LED y la posibilidad de subir o bajar la velocidad de cada una de las secuencias.",
      p9Desc3:
        "Se utiliza un protocolo de comunicación en serie para interactuar entre la Raspberry Pi y la placa experimental.",
      p9Desc4:
        "Este proyecto se trata de un trabajo practico final de la asignatura Técnicas Digitales II de la carrera Ingeniería Electrónica.",

        // Proyecto 10 - Capacitacion automatismo
      p10CardTitle: "Programa de Capacitación Técnica",
      p10ModalTitle: "Formación tecnicos de mantenimiento industrial",
      p10Desc1:
        "Creé más de 15 instructivos técnicos estructurados que abarcaron cuatro ejes fundamentales: programación de PLCs (TIA Portal y STEP 7), configuración y diagnóstico de variadores de frecuencia (Scout, Starter, So Move y Easy Engeenering), instalación y gestión de máquinas virtuales (VMWare y Virtual box), e informática aplicada a entornos industriales. Cada guía fue diseñada para ser práctica y autocontenida — redactada de forma que cualquier técnico pudiera seguir los procedimientos de manera autónoma, incluso sin experiencia previa.",
      p10Desc2:
        "La capacitación involucró sesiones prácticas a +10 técnicos de mantenimiento, transformando un equipo con exposición técnica mínima en uno capaz de realizar diagnósticos básicos de PLC, configurar variadores y manejar entornos virtualizados. Todo el material fue documentado formalmente e integrado de manera permanente a la base de conocimiento de la empresa, asegurando un impacto duradero más allá de mi paso por la organización.",
      p10Desc3:
        "Este proyecto refleja lo que más valoro en la ingeniería: no solo resolver problemas, sino empoderar a otros para que también puedan hacerlo.",
    },

    contact: {
      title: "Contacto",
      subtitle: "Contactame por cualquier medio",
      viaChat: "Via chat",
      viaEmail: "Via email",
      contactMe: "Contactame",
      formName: "Nombre",
      formEmail: "Email",
      formMessage: "Mensaje",
      placeholderName: "Inserta tu nombre",
      placeholderEmail: "Inserta tu email",
      placeholderMessage: "Escribe tu mensaje",
      sendBtn: "Enviar mensaje",
      sending: "Enviando...",
      toastSent: "¡Mensaje enviado!",
      toastError: "Error al enviar. Probá de nuevo o contactame por LinkedIn.",
      errorNameRequired: "Ingresá tu nombre",
      errorNameShort: "El nombre es demasiado corto",
      errorEmailRequired: "Ingresá tu email",
      errorEmailInvalid: "El email no es válido",
      errorMessageRequired: "Escribí un mensaje",
      errorMessageShort: "El mensaje es demasiado corto (mínimo 10 caracteres)",
    },

    footer: {
      skills: "Habilidades",
      career: "Trayectoria",
      projects: "Proyectos",
      thanks: "Agradecimientos a Crypticalcoder.",
      visits: "visitas únicas",
      visitsTooltip: "Visitantes únicos acumulados",
    },

    lang: {
      switchTo: "Cambiar idioma",
      es: "Español",
      en: "English",
    },

    chatbot: {
      openLabel: "Abrir chat de ayuda",
      closeLabel: "Cerrar chat",
      headerTitle: "Asistente del portfolio",
      headerSubtitle: "Respuestas rápidas sobre Mariano",
      welcome:
        "¡Hola! Soy un asistente automático. Elegí una pregunta para empezar:",
      backToMenu: "Hacer otra pregunta",
      // Preguntas
      q1: "¿Quién es Mariano?",
      q2: "¿Qué tecnologías maneja?",
      q3: "¿Tiene experiencia en automatización industrial?",
      q4: "¿Cómo puedo contactarlo?",
      q5: "¿Está disponible para nuevos proyectos?",
      q6: "¿Dónde está ubicado?",
      // Respuestas
      a1: "Mariano es ingeniero electrónico con experiencia en automatización industrial, programación de PLCs y desarrollo de software. Tiene formación universitaria en Ingeniería Electrónica (UTN Córdoba) y se ha especializado de manera autodidacta en desarrollo web y programación.",
      a2: "En automatización: Siemens TIA Portal, Step 7, MicroWin, Profinet, lógica Ladder/AWL/SCL. En programación: C/C++, C#, Python, JavaScript, React, Angular, SQL. También maneja herramientas como Git, Docker, AutoCAD, KiCAD y Matlab.",
      a3: "Sí, es su área principal. Trabaja actualmente como Jefe de mantenimiento eléctrico en Bagley (Grupo Arcor) y tiene experiencia previa en Cartocor y Fantini Ladrillos Cerámicos. Realizó proyectos como migración de variadores Schneider y robustecimiento de lógicas PLC en líneas industriales.",
      a4: "Podés contactarlo por LinkedIn (marianoveracausich), WhatsApp (+54 3525 531247), Telegram (@Marianovera22) o por el formulario al final de esta página. También respondes a marianoveracausich@gmail.com.",
      a5: "Sí, está abierto a evaluar nuevas oportunidades y colaboraciones. Lo mejor es escribirle directamente por LinkedIn o usar el formulario de contacto al final de la página.",
      a6: "Reside en Colonia Caroya, provincia de Córdoba, Argentina. Trabaja en Córdoba capital y zona, y también acepta proyectos remotos.",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      career: "Career",
      projects: "Projects",
      contact: "Contact",
    },

    home: {
      subtitle: "Electronic Engineer / Developer",
      description:
        "Electronic engineer passionate about software development.",
      description2:
        "I have been self-teaching programming throughout my entire career, working with multiple languages, along with web technologies and embedded systems.",
      description3:  
        "My professional journey in industry gave me something few developers have: real-world experience solving complex technical problems in demanding environments. I worked with PLCs, variable frequency drives, and automated systems, which gave me a deep understanding of how software interacts with the physical world.",
      description4:  
        " I am driven by building software that solves real problems: a dashboard that turns data into decisions, firmware for a device, or the automation of a production process. I enjoy the process of learning, designing, and creating.",
        downloadCV: "Download CV",
    },

    about: {
      title: "About me",
      subtitle: "Personal and professional info",
      languagesTitle: "Languages",
      langSpanish: "Spanish",
      langSpanishLevel: "Native",
      langEnglish: "English",
      langEnglishLevel: "Advanced",
      langItalian: "Italian",
      langItalianLevel: "Basic",
      certificatesTitle: "Certificates",
      interestsTitle: "Interests",
      softSkillsTitle: "Soft skills",
      interests: {
        software: "Software",
        programming: "Programming",
        robotics: "Robotics",
        firmware: "Firmware",
        it: "IT",
        automation: "Automation",
        hardware: "Hardware",
      },
      softSkills: {
        responsibility: "Responsibility",
        teamwork: "Teamwork",
        communication: "Communication",
        leadership: "Leadership",
        proactivity: "Proactivity",
      },
    },

    skills: {
      title: "Skills",
      subtitle: "My technical skills",
      webDev: "Web Development",
      engineering: "Engineering",
      automation: "Automation",
    },

    career: {
      title: "Career",
      subtitle: "My professional path",
      education: "Education",
      experience: "Experience",
      present: "present",

      // Education
      edu1Title: "Python Roadmap",
      edu1Sub: "Self-taught",
      edu2Title: "Advanced C# .NET",
      edu2Sub: "Udemy Platform - Hector de Leon",
      edu3Title: "SQL - MariaDB",
      edu3Sub: "Udemy Platform - Hector de Leon",
      edu4Title: "Advanced Excel",
      edu4Sub: "Udemy Platform - Global Mentoring",
      edu5Title: "Industrial Automation PLC TIA Portal",
      edu5Sub:
        "National Technological University - Resistencia Regional Faculty",
      edu6Title: "Electronic Engineering",
      edu6Sub:
        "National Technological University - Córdoba Regional Faculty",
      edu7Title: "Web Design (Mediaquery, Bootstrap and React)",
      edu7Sub: "Udemy Platform",
      edu8Title: "Web Development (HTML, CSS, JS, Angular and Java)",
      edu8Sub: "Argentina Programa",

      // Experience
      exp1Title: "Electrical Maintenance Sector Manager",
      exp1Sub: "Bagley Arcor Group - Córdoba",
      exp2Title: "Electrical Maintenance Analyst - Automation Engineer",
      exp2Sub: "Cartocor Arcor Group - Villa del Totoral",
      exp3Title: "Electrical Supervisor - Automation Engineer",
      exp3Sub: "Fantini Ceramic Bricks - Colonia Caroya",
      exp4Title: "Professional Internship",
      exp4Sub: "Research Center in Computing for Engineering - Córdoba",
      exp5Title: "PC Assembly and Repair Teacher",
      exp5Sub: "Instituto Integral Capacitando - Jesus Maria",
    },

    projects: {
      title: "Projects",
      subtitle: "My projects",
      seeMore: "See more",
      toolsUsed: "Tools used:",
      btnApp: "App",
      btnRepo: "Repository",
      btnDoc: "Document",

      // Project 1 - Dietetics
      p1CardTitle: "Dietetics Management System",
      p1ModalTitle:
        "Complete inventory, sales and reporting management system",
      p1Desc1:
        "Built from scratch, originally designed for a dietetics store and architected to adapt to any commercial sector through a single configuration file.",
      p1Desc2:
        "Features: point of sale with cart and multiple payment methods, inventory management with automatic margin calculation, batch and expiration control with configurable alerts, stock entry with smart price updates, PIN-protected financial reports panel with monthly KPIs (revenue, supplier expense, net profit) and Excel-compatible CSV export.",
      p1Desc3:
        "Stack: React 18, Vite 5, modern JavaScript, CSS3 with native variables for dynamic theming, inline SVG.",

      // Project 2 - R4004
      p2CardTitle: "Frequency drive upgrade on flexographic printer",
      p2ModalTitle:
        "Schneider Altivar 71 to ATV960 drive migration on R4004 flexible printer",
      p2Desc1:
        "The R4004 flexographic printer was running on Schneider Altivar 71 drives, declared obsolete by the manufacturer with no guaranteed spare parts supply. A single failure could have taken the line out of service for an indefinite period.",
      p2Desc2:
        "I executed the full migration to Schneider ATV960 drives: sizing, wiring and physical installation of the new units, and reconfiguration of the PLC project in Step 7 — updating the Profinet network topology, adjusting the hardware setup and rewriting the PLC–drive communication block to ensure proper data exchange.",
      p2Desc3:
        "Result: the line was freed from obsolescence, future repair costs were reduced and the replaced Altivar 71 units were repurposed as backup on another machine in the plant, extending the original investment's return.",

      // Project 3 - Transfer car
      p3CardTitle: "Industrial transfer car automation",
      p3ModalTitle:
        "PLC logic hardening and HMI development for transfer car system in a ceramic brick drying line",
      p3Desc1:
        "Ceramic brick production line with an automated transfer car that moves industrial carts between drying channels. The original PLC logic had blind spots in emergency handling that occasionally resulted in a cart falling into the pit, causing equipment damage, structural impact and over 12 hours of line downtime per event.",
      p3Desc2:
        "I rewrote the emergency logic in TIA Portal to cover the detected failure modes, making the transfer car wait until a sensor confirms the cart is properly positioned in the channel before executing each unloading operation.",
      p3Desc3:
        "In parallel, I designed an HMI that displays the state of every sensor in the system, the transfer car position and the active emergency and presence conditions in real time, making troubleshooting much faster for the operator.",
      p3Desc4:
        "Since the changes went live, no further cart drops have occurred, eliminating the most costly failure mode on the line.",

      // Project 4 - HAT
      p4CardTitle: "Raspberry Pi HAT",
      p4ModalTitle:
        "Odometric sensor HAT hardware based on the fusion of vision and inertial measurements.",
      p4Desc1:
        "The project was the first iteration in the design of a hardware that allows developing a visual and inertial odometry sensor applied to the navigation of mobile robots.",
      p4Desc2:
        "The board has a camera and inertial sensors to be used as an experimental platform in the development of sensor fusion algorithms for the position estimation of a mobile robot.",
      p4Desc3:
        "In addition to the hardware, several test scripts were developed for the different types of sensors and a Docker container was created configured for communication with our Raspberry Pi through I2C.",
      p4Desc4:
        "This project was carried out as a thesis for the Electronic Engineering degree together with the Research Center in Computing for Engineering.",

      // Project 5 - Budget
      p5CardTitle: "Personal Budget",
      p5ModalTitle: "Personal budget developed with Angular",
      p5Desc1:
        "This is a personal budget app where we can add income and expenses with their respective descriptions and values.",
      p5Desc2:
        "These will be recorded and the current available budget will be calculated, as well as the percentage that each of them represents.",

      // Project 6 - TODO
      p6CardTitle: "To-do list",
      p6ModalTitle: "To-do list with React",
      p6Desc1:
        "This app allows us to make a very well-styled to-do list with features such as adding, deleting or crossing out tasks.",
      p6Desc2: "This project is part of a FreeCodeCamp course I completed.",

      // Project 7 - Vision
      p7CardTitle: "Computer vision",
      p7ModalTitle: "Computer vision",
      p7Desc1:
        "This is a series of practical exercises made for the elective subject Computer Vision in the Electronic Engineering degree.",
      p7Desc2:
        "In these projects the goal is to integrate the OpenCV libraries in Python to manipulate images and videos.",
      p7Desc3:
        "Within these exercises we can find simple practices that increase in difficulty to later become part of a group of image manipulation tools. Also, exercises where through an image and relationships we can measure objects from an image with very good precision.",

      // Project 8 - Calculator
      p8CardTitle: "Calculator",
      p8ModalTitle: "Calculator with React",
      p8Desc1:
        "This project is a fully functional, styled and responsive calculator made with React.",
      p8Desc2: "This app is part of a FreeCodeCamp course I completed.",

      // Project 9 - Lights
      p9CardTitle: "Light sequences",
      p9ModalTitle: "Light sequences",
      p9Desc1:
        "This is a C++ program created to run on a Raspberry Pi 3 along with an experimental board made by the group.",
      p9Desc2:
        "It features LED light sequences and the ability to increase or decrease the speed of each sequence.",
      p9Desc3:
        "A serial communication protocol is used to interact between the Raspberry Pi and the experimental board.",
      p9Desc4:
        "This project is a final practical work of the Digital Techniques II subject in the Electronic Engineering degree.",

       // Project 10 - Automation and informatic
      p10CardTitle: "Technical Training Program",
      p10ModalTitle: "Industrial Maintenance Team Upskilling",
      p10Desc1:
        "I created over 15 structured instructional guides covering four key areas: PLC programming (TIA Portal and STEP 7), variable frequency drive configuration and diagnostics (Scout, Starter, SoMove, and Easy Engineering), virtual machine setup and management (VMWare and VirtualBox), and IT fundamentals applied to industrial environments. Each guide was designed to be practical and self-contained — written so that any technician could follow the procedures independently, even without prior experience.",
      p10Desc2:
        "The training involved hands-on sessions with 10+ maintenance technicians, transforming a team with minimal technical exposure into one capable of performing basic PLC diagnostics, configuring VFDs, and navigating virtualized environments. All instructional materials were formally documented and permanently integrated into the company's knowledge base, ensuring long-term impact beyond my tenure..",
      p10Desc3:
        "This project reflects what I value most in engineering: not just solving problems, but empowering others to solve them too.", 
    },

    contact: {
      title: "Contact",
      subtitle: "Contact me through any channel",
      viaChat: "Via chat",
      viaEmail: "Via email",
      contactMe: "Contact me",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      placeholderName: "Enter your name",
      placeholderEmail: "Enter your email",
      placeholderMessage: "Write your message",
      sendBtn: "Send message",
      sending: "Sending...",
      toastSent: "Message sent!",
      toastError: "Sending failed. Try again or reach me via LinkedIn.",
      errorNameRequired: "Please enter your name",
      errorNameShort: "Your name is too short",
      errorEmailRequired: "Please enter your email",
      errorEmailInvalid: "Email is not valid",
      errorMessageRequired: "Please write a message",
      errorMessageShort: "Message is too short (minimum 10 characters)",
    },

    footer: {
      skills: "Skills",
      career: "Career",
      projects: "Projects",
      thanks: "Thanks to Crypticalcoder.",
      visits: "unique visits",
      visitsTooltip: "Total unique visitors",
    },

    lang: {
      switchTo: "Switch language",
      es: "Español",
      en: "English",
    },

    chatbot: {
      openLabel: "Open help chat",
      closeLabel: "Close chat",
      headerTitle: "Portfolio assistant",
      headerSubtitle: "Quick answers about Mariano",
      welcome:
        "Hi! I'm an automated assistant. Pick a question to get started:",
      backToMenu: "Ask another question",
      // Questions
      q1: "Who is Mariano?",
      q2: "What technologies does he work with?",
      q3: "Does he have industrial automation experience?",
      q4: "How can I contact him?",
      q5: "Is he available for new projects?",
      q6: "Where is he located?",
      // Answers
      a1: "Mariano is an electronic engineer with experience in industrial automation, PLC programming and software development. He holds a degree in Electronic Engineering from UTN Córdoba and is self-taught in web development.",
      a2: "Automation: Siemens TIA Portal, Step 7, MicroWin, Profinet, Ladder/AWL/SCL logic. Programming: C/C++, C#, Python, JavaScript, React, Angular, SQL. He also works with Git, Docker, AutoCAD, KiCAD and Matlab.",
      a3: "Yes, it's his main field. He currently works as Head of Electrical Maintenance at Bagley (Grupo Arcor) and has previous experience at Cartocor and Fantini Ladrillos Cerámicos. He has led projects such as Schneider drive migrations and PLC logic hardening on industrial production lines.",
      a4: "You can reach him via LinkedIn (marianoveracausich), WhatsApp (+54 3525 531247), Telegram (@Marianovera22) or through the contact form at the bottom of this page. He also replies at marianoveracausich@gmail.com.",
      a5: "Yes, he's open to evaluating new opportunities and collaborations. The best way to reach out is directly through LinkedIn or via the contact form at the bottom of the page.",
      a6: "He's based in Colonia Caroya, Córdoba, Argentina. He works in Córdoba city and surrounding area, and also takes on remote projects.",
    },
  },
};

export default translations;
