# 🔧 Proyectos & Herramientas

Herramientas open-source, scripts de automatización (Autopwn) y utilidades desarrolladas para auditorías de seguridad y resolución ágil de CTFs.

---

## 🛠️ Herramientas & Scripts Destacados

### 1. [nmip1](https://github.com/mikisbd/nmip1) — Fast Nmap Automator
* **Lenguaje**: Bash
* **Descripción**: Script de automatización para escaneo estructurado y rápido con `nmap`, optimizado para CTFs y reconocimiento de puertos/servicios.
* **Características**:
  * Escaneo rápido de puertos abiertos en una sola línea.
  * Extracción automática y pase a escaneo exhaustivo de versiones y scripts por defecto (`-sV -sC`).
  * Exportación limpia en formato grepable y texto normal.
* **Repositorio**: [github.com/mikisbd/nmip1](https://github.com/mikisbd/nmip1)

---

### 2. Autopwn Chamilo (`autopwn.py`)
* **Lenguaje**: Python 3
* **Objetivo**: Máquina Chamilo de DockerLabs
* **Descripción**: Exploit chain completamente automatizado que compromete el sistema y entrega una shell de root en segundos.
* **Flujo del Autopwn**:
  1. Comprobación del dominio en `/etc/hosts` (`chamilo.dl`).
  2. Conexión FTP anónima para descargar credenciales de alumno.
  3. Autenticación automática y extracción de cookies de sesión `ch_sid`.
  4. Generación y subida de webshell aleatoria con bypass `.htaccess` (CVE-2023-4226).
  5. Ejecución remota de comandos (RCE) hacia endpoint interno de renderizado (`127.0.0.1:6200`).
  6. Envío de reverse shell con privilegios de `root` y captura automática en netcat.

---

### 3. suforce.sh — Local Su Brute Force
* **Lenguaje**: Bash
* **Descripción**: Utilidad ligera de post-explotación para realizar fuerza bruta controlada contra usuarios locales mediante el binario `/bin/su` utilizando un diccionario de contraseñas.

---

### 4. Colección de Máquinas Vulnerables Creadas
* **Plataformas**: DockerLabs, HackMyVM, TheHackersLabs
* **Desarrollo**: Diseño completo de escenarios vulnerables (Flasky, Autoescuela, Profetas, CuentaAtrás, acmecorp, Pulse y Automatismos Rodriguez).
* **Detalle completo**: [Ver sección Máquinas Creadas](../maquinas-creadas/README.md)
