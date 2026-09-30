# 🖥️ Máquinas Creadas

Espacio dedicado a los laboratorios, máquinas virtuales y contenedores vulnerables que he diseñado y publicado para que la comunidad practique pentesting y seguridad ofensiva.

---

## 🛠️ Mis Máquinas Publicadas

### 1. ShadowLeak
* **Plataforma**: DockerLabs / VulnHub
* **Dificultad**: Media
* **Sistema**: Linux
* **Vectores de Explotación**:
  * Entrada: Inclusión local de archivos (LFI) en portal web.
  * Acceso inicial: Envenenamiento de logs de Apache (Log Poisoning) para conseguir RCE.
  * Escalada: Binario Python con permisos sudo vulnerable a Library Hijacking.
* **Descarga**: [Enlace a DockerLabs / GitHub](#)

---

### 2. InfiltrateBox
* **Plataforma**: DockerLabs
* **Dificultad**: Fácil
* **Sistema**: Linux
* **Vectores de Explotación**:
  * Entrada: Servicio FTP con acceso anónimo (`anonymous:anonymous`) con archivo de backup expuesto.
  * Escalada: Abuso de Linux Capabilities configuradas en el binario de Python (`cap_setuid+ep`).
* **Descarga**: [Enlace a DockerLabs](#)

---

### 3. CorpHQ
* **Plataforma**: VulnHub / OVA
* **Dificultad**: Difícil
* **Sistema**: Linux / Active Directory Lab
* **Vectores de Explotación**:
  * Inyección SQL basada en errores para extracción de claves JWT.
  * Tampering de tokens JWT para evasión de control de acceso.
  * Escalada mediante secuestro de tareas programadas (cronjobs) monitoreadas con `pspy`.
* **Descarga**: [Enlace a VulnHub](#)
