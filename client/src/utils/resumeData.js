import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const resumeData = {
    name: "Gabriel Flores Hernandez",
    title: "Full stack developer",

    birthday: "27 Febrero 1992",
    email: "hdez_2702@hotmail.com",
    city: "Nuevo Leon, México",
    address: "Paraje San Jose, García, Nuevo León, México",
    phone: "+52 812 402 6151",
    age: "32 años",
    last_degree_studies: "Ingeniería",
    current_employment_situation: "Disponible",
    about: "Soy Desarrollador Fullstack con formación en Ingeniería en Sistemas Computacionales y experiencia laboral como Desarrollador de Software. Poseo habilidades destacadas en el desarrollo de Aplicaciones móviles. Me caracterizo por mi capacidad de análisis, sentido de responsabilidad y trabajo en equipo. Busco oportunidades para aplicar y expandir mis conocimientos técnicos y contribuir eficazmente al éxito de proyectos innovadores.",
    sumaryAboutMe: [
        {
            descriptionsAboutMe: "Soy un desarrollador de software con la experiencia en la creación de soluciones tecnológicas efectivas y eficientes. He trabajado en diversas consultoras y en el sector fintech, donde he demostrado mi capacidad para cumplir y adaptarme a entornos dinámicos. Mi enfoque se centra en la innovación y la mejora continua, utilizando las mejores prácticas y tecnologías emergentes para entregar productos de alta calidad. Mis habilidades incluyen:",
            skillsAboutMe: [
                "Desarrollo de aplicaciones web y móviles.",
                "Experiencia en lenguajes de programación como Java, Python, Dart, JavaScript. y framework  como Flutter, React, Flask.",
                "Conocimiento en bases de datos realcionales y no relacionales(SQL Server, MySQL, Firebase.)",
                "Habilidad para trabajar en equipo y alcanzar objetivos comunes."
            ],
            endAboutMe: "Estoy comprometido en aprender, aportar mis conocimentos, buscar constantemente maneras de optimizar procesos y mejorar la experiencia del usuario."
        }
    ],
    socials: {
        facebook: {
            link: "https://www.facebook.com/",
            text: "facebook",
            icon: <FacebookIcon />
        },
        linkedIn: {
            link: "https://www.linkedin.com/in/gabriel-flores-hernandez-26524b159",
            text: "linkedIn",
            icon: <LinkedInIcon />
        },
        GitHub: {
            link: "https://github.com/GFLORESH27/",
            text: "GitHub",
            icon: <GitHubIcon />
        }
    },

    experiences: [
        {
            title: "Desarrollador FullStack",
            Company:"Millicom (Tigo Money)",
            date: "Nov 2021 - Ago 2024",
            descriptions: "Desarrollo de aplicación multiplataforma (Android, iOS, Web), con funcionalidad de Envió de dinero, Lectura y Pago con QR, Pago de facturas. Desarrollado con el Lenguaje Dart, Framework Flutter y para la parte backend, desarrollado con Python.",
            points: [
                "Desarrollo de interfaces de usuario (UI).",
                "Integración de aplicacion Flutter con API's y servicios de RESTful.",
                "Manejo de estados con BlocProvider y Cubit.",
                "Integración de servicios de terceros como Firebase(Crashlitycs, Deeplinks), Segment, Facetect.",
                "Creación de lambdas en Python.",
                "Refactorización de API's con python (Mejoramiento de estructura, diseño e implementación) con el patron de diseño Factory Methodo.",
                "Utilización de la herramienta de Postman para el debug de API's.",
                "Manejo de servicios de AWS como lambdas en Python, Cloudwatch, S3, Cognito, DynamoDB, Secret Menager, API Gateway.",
                "Github para el control de versiones de código.",
                "Colaboración en conjunto con el equipo de UX haciendo uso de la herramienta Figma.",
                "Participación en revisiones de código y aplicación de metodologías ágiles para mejorar continuamente el proceso de desarrollo.",
                "Colaboración con equipos multidisciplinarios para garantizar la alineación de objetivos y la calidad en las entregas."
            ],
            habilidades_tecnicas:[
                "Lenguaje de programación: [Dart, Python]",
                "Frameworks: [Flutter]",
                "Base de datos: [Amazon DynamoDB]",
                "Plataforma de gestión del trabajo: [Jira service]",
                "Otras herramientas: [ Git / Intellij / VSC/  API REST / Firebase / AWS / Postman / Figma / Zeplin ]"
            ]
        },
        {
            title: "Desarrollador Java",
            Company:"Alphacredit",
            date: "Jul 2019 - Sep 2021",
            subtitulo: "Aplicación Móvil para la Gestión de Prospectos y Precalificación de Créditos",
            descriptions: "Desarrollo de nuevas funcionalidades para la aplicación ya existente. Una aplicación móvil diseñada para facilitar la captura de datos de prospectos y la precalificación de solicitudes de crédito. La aplicación permite a los usuarios-promotores ingresar información relevante de forma rápida y sencilla, optimizando el proceso de análisis de crédito.",
            points: [
                "Creación y actualización de Cloud Functions utilizando IntelliJ y Google Cloud Platform, mejorando la capacidad de la aplicación para gestionar procesos en la nube.",
                "Implementación y mantenimiento de Firebase como backend, facilitando la autenticación y la gestión de datos en tiempo real.",
                "Diseño y gestión de flujos de procesos dentro de la herramienta Camunda, optimizando los flujos de trabajo y la eficiencia operativa.",
                "Gestión de incidencias y soporte utilizando Jira Service Management.",
                "Implementación de Auth0 para la autenticación segura de usuarios, garantizando la protección de datos sensibles.",
                "Utilización de AWS para gestionar recursos como CodeCommit y DynamoDB, integrando soluciones en la nube para mejorar la escalabilidad y el rendimiento.",
                "Soporte continuo a la aplicación de Android, asegurando su funcionalidad y actualizaciones regulares.",
                "Control de versiones y gestión del código fuente a través de Git, garantizando un flujo de trabajo eficiente y colaborativo."

            ],
            habilidades_tecnicas:[
                "Lenguaje de programación: [Java, Python]",
                "Entorno: [Android Studio]",
                "Base de datos: [Firestore / SQL Server / Amazon DynamoDB]",
                "Plataforma de gestión del trabajo: [scrumDo / Jira service management]",
                "Otras herramientas: [ Git /Bitbucket / Auth0 / Intellij / API REST / Debounce / Firebase / Camunda / Auth0 / AWS ]"
            ]
        },
        {
            title: "Soporte Técnico",
            Company:"T-Systems",
            date: "Ene 2019 - Jun 2019",
            descriptions: "Soporte técnico presencial y remoto, levantamiento de inventarios, mantenimiento preventivo y correctivo, configuración de equipo de trabajo, administración de activos (inventario), configuración de correos, configuración de perfiles de usuarios, documentación de los casos reportados, respaldo de información, garantías de equipo en HP."
        },
        {
            title: "Auditoria de Venta Tienda",
            Company:"TAE-Monterrey, Monterrey",
            date: "May 2017 - Ene 2019",
            descriptions: "Análisis de ventas en BD SQL Server, auditar y verificar e integrar las ventas en la plataforma Oracle(ReSA). Recuperación y validación de ventas integradas y no integradas. Revisión de datos en tablas Backup. Procesos de validación para determinar la solución e integración de ventas, en la plataforma Oracle Retail."
        },
        {
            title: "Soporte Técnico Vía Remoto para Tiendas 7-Eleven y Gasolineras Petro-7",
            Company:"Macro Servicios del Noreste",
            date: "Sep 2015 - Mar 2017",
            descriptions: "Consulta en BD SQL Server, Apoyó con Liquidaciones (Proceso y cierre), Restauración de BD SQL Server, Depuración de la BD SQL Server."
        }
    ],

    education: [
        {
            title: "Ingeniería en Sistemas Computacionales",
            date: "2010 - 2014",
            school: "Instituto Tecnológico de Huejutla",
            place: "Huejutla de Reyes, Hidalgo, México",
            final_project: {
                description: "Desarrollo de aplicación de escritorio, denominado Sistema de Incidencias Generales de Padres de Familia.",
                function: "Registrar incidencias y poder generar estadísticas de conteo individual(filtrar por el tipo de inciencias) y global. La incidencias se pueden reflejár en gráficas de acuerdo con el tiempo que el usuario requiera.",
                programmingLanguage: "Visual Studio 2012",
                dataBase: "Mysql"
            }
        }
    ],
    skills: [
        {
            name: "Full Stack Developer",
            percentage:80
        },
        {
            name: "Node js",
            percentage:75
        },
        {
            name: "React js",
            percentage:90
        },
        {
            name: "Vue js",
            percentage:50
        },
        {
            name: "Express js",
            percentage:85
        },
        {
            name: "Vue js",
            percentage:80
        },
        {
            name: "Nuxt js",
            percentage:78
        },
        {
            name: "Angular js",
        },
        {
            name: "Vanila js",
            percentage:88
        },
        {
            name: "Node js",
            percentage:60
        },
        {
            name: "Javascript",
            percentage:80
        },
        {
            name: "Typescript",
            percentage:90
        },
        {
            name: "Python",
            percentage:80
        },
        {
            name: "Django",
            percentage:80
        },
        {
            name: "UI/UX Design",
            percentage:90
        },
    ],
    projects:[
        {
            description: "Proyectos en los que colaboré y compartí mis conocimientos como desarrollador de software",
        }
    ]
};

export default resumeData