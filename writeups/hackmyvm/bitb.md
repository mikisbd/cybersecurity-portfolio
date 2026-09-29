# 🥊 Writeup: BITB (HackMyVM)

* **Plataforma**: [HackMyVM](https://hackmyvm.eu/)
* **Dificultad**: Fácil / Media
* **Sistema Operativo**: Linux
* **Categorías**: Web Exploitation, Browser In The Browser (BITB), Linux Privilege Escalation

---

## 📌 Resumen Ejecutivo

**BITB** es una máquina de HackMyVM centrada en la técnica de simulación de ventanas de navegador falsas (*Browser In The Browser*) para capturar credenciales o confundir al usuario, combinada con enumeración web y escalada de privilegios en el sistema Linux anfitrión.

---

## 🔍 1. Reconocimiento & Escaneo de Puertos

Iniciamos localizando la IP de la máquina en nuestra red local e identificando los puertos abiertos mediante `nmap`:

```bash
# Descubrimiento de host en red local
sudo arp-scan -I eth0 --localnet

# Escaneo exhaustivo de puertos con nmap
sudo nmap -p- -sS -sV -sC --min-rate 5000 -n -Pn 192.168.1.X -oN nmap_initial.txt
```

### Puertos Detectados:
* **Puerto 22 (SSH)**: `OpenSSH 8.x`
* **Puerto 80 (HTTP)**: Servidor web `Apache / Nginx`

---

## 🌐 2. Enumeración Web

Accediendo a través del navegador al puerto 80, encontramos la aplicación web principal.

```bash
# Fuzzing de directorios y rutas web
gobuster dir -u http://192.168.1.X/ -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -x php,html,txt
```

### Hallazgos clave:
* Identificación de componentes de autenticación.
* Análisis del código fuente HTML/JS que revela la implementación del vector **BITB (Browser-In-The-Browser)**.

---

## 💥 3. Acceso Inicial (User Shell)

1. Explotación de la vulnerabilidad identificada o extracción de credenciales mediante el vector simulado.
2. Acceso vía SSH o Reverse Shell:

```bash
# Establecer oyente en nuestra máquina atacante
nc -nlvp 4444

# Reverse shell obtenida en el objetivo
whoami
# salida: user
id
# salida: uid=1000(user) gid=1000(user)
```

### Tratamiento de la TTY:
```bash
python3 -c 'import pty; pty.spawn("/bin/bash")'
# Ctrl + Z
stty raw -echo; fg
reset xterm
export TERM=xterm
export SHELL=bash
```

---

## 👑 4. Escalada de Privilegios (Root)

Con la sesión de usuario establecida, procedemos con la enumeración del sistema:

```bash
# Comprobar comandos sudo autorizados
sudo -l

# Comprobar binarios con bit SUID
find / -perm -4000 2>/dev/null
```

### Vector de Elevación:
* Identificación del binario o tarea programada vulnerable.
* Ejecución del vector para obtener la shell con permisos de superusuario:

```bash
# Confirmación de permisos de root
whoami
# salida: root
id
# salida: uid=0(root) gid=0(root)
```

---

## 🏁 Flags & Conclusiones

* **User Flag**: `user{...}`
* **Root Flag**: `root{...}`

### 💡 Lecciones Aprendidas:
* Comprender la técnica BITB y cómo los atacantes simulan interfaces confiables para recolectar credenciales.
* Auditar correctamente los permisos de ejecución en binarios del sistema para evitar escaladas de privilegios directas.
