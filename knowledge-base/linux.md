# 🐧 Knowledge Base: Linux

Guía de comandos esenciales, trucos de terminal, gestión de permisos y vectores comunes de escalada de privilegios en sistemas Linux.

---

## 🔍 Enumeración Rápida del Sistema

```bash
# Información del sistema operativo y kernel
uname -a
cat /etc/os-release

# Identidad del usuario actual y grupos
id
whoami
groups

# Comandos autorizados con sudo
sudo -l

# Binarios con bit SUID activado
find / -perm -4000 -type f 2>/dev/null

# Comprobar Linux Capabilities
getcap -r / 2>/dev/null
```

---

## ⚡ Tratamiento de TTY (Full Interactive Shell)

Cuando obtienes una reverse shell simple en `netcat`, la terminal no tiene soporte para `Ctrl+C`, flechas de dirección ni autocompletado con tabulador. Para convertirla en una TTY completa:

```bash
# 1. En la reverse shell:
python3 -c 'import pty; pty.spawn("/bin/bash")'

# 2. Suspender la shell con: Ctrl + Z

# 3. En tu máquina atacante:
stty raw -echo; fg

# 4. En la reverse shell restaurada:
reset xterm
export TERM=xterm
export SHELL=bash
stty rows 38 columns 140
```

---

## 🛡️ Vectores Habituales de Escalada (PrivEsc)

1. **Sudoers (`sudo -l`)**: Comandos con `NOPASSWD`. Consultar siempre [GTFOBins](https://gtfobins.github.io/).
2. **SUID Binaries**: Binarios propios o estándar mal configurados (`find`, `vim`, `bash`, `env`).
3. **Cronjobs**: Tareas automáticas ejecutadas por root con permisos de escritura para usuarios estándar (`pspy` para visualización en tiempo real).
4. **Path Hijacking**: Scripts que llaman a ejecutables sin ruta absoluta (ej: `service apache2 restart` en lugar de `/usr/sbin/service`).
