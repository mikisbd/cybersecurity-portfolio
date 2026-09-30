# 🐳 DockerLabs Writeups

[DockerLabs](https://dockerlabs.es/) es una de mis plataformas favoritas para practicar pentesting sobre contenedores Docker rápidos y ligeros.

---

## 📂 Repositorio de Writeups en Google Drive

> 📁 **[Acceder a mi Carpeta de Writeups de DockerLabs en Google Drive](https://drive.google.com/drive/folders/1Xs1DmpTJFfZaW_74a0crjRRNADA1c1dp?usp=sharing)**
>
> En este enlace de Google Drive encontrarás mis resoluciones, notas técnicas y capturas de pantalla de máquinas completadas en DockerLabs.

---

## 📺 Vídeos & Walkthroughs en YouTube

Puedes ver la resolución paso a paso de máquinas de DockerLabs en mi canal:

* 🎯 **Playlist Oficial de YouTube**: [Rooteando máquinas \| CTFs resueltos paso a paso](https://www.youtube.com/playlist?list=PLraY-RO5XbU7BEaIinCuBAdx_wc6q7y7T)
* 📹 **Vídeo Destacado**: [Resolución completa de la Máquina Zabbixploit (DockerLabs)](https://www.youtube.com/watch?v=qv002Hrikio)

---

## 🤖 Autopwn Scripts para Dockerlabs

He desarrollado scripts de automatización completa (**Autopwn**) para comprometer máquinas de Dockerlabs de principio a fin en un solo comando:

* ⚡ **Autopwn Chamilo (`autopwn.py`)**:
  * Comprueba `/etc/hosts` para el dominio `chamilo.dl`.
  * Extrae credenciales del servicio FTP anónimo.
  * Inicia sesión en el portal LMS Chamilo.
  * Sube una webshell mediante bypass con `.htaccess` (CVE-2023-4226).
  * Ejecuta una reverse shell directamente como `root` mediante render exploit local.
  * Puedes consultar el código en la sección de [Proyectos](../../proyectos/README.md#autopwn-chamilo).

---

## 📋 Máquinas Resueltas

| Máquina | Dificultad | SO | Vector Principal | Writeup / Recurso |
| :--- | :--- | :--- | :--- | :--- |
| **Zabbixploit** | Fácil / Media | Linux | Explotación Zabbix & SUID | [▶️ Ver en YouTube](https://www.youtube.com/watch?v=qv002Hrikio) |
| **Chamilo** | Media | Linux | File Upload Bypass & Render RCE | [🤖 Ver Autopwn](../../proyectos/README.md#autopwn-chamilo) |
| **Colección de Retos** | Varios | Linux | Web, PrivEsc, Docker | [📁 Ver en Google Drive](https://drive.google.com/drive/folders/1Xs1DmpTJFfZaW_74a0crjRRNADA1c1dp?usp=sharing) |
