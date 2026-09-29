# 🕵️ Knowledge Base: OSINT (Open Source Intelligence)

Técnicas, herramientas y metodología para la recolección de inteligencia a partir de fuentes públicas y abiertas.

---

## 🔍 Google Dorks Esenciales

```text
# Búsqueda de archivos sensibles o credenciales
site:dominio.com ext:pdf OR ext:docx OR ext:xlsx
site:dominio.com ext:env OR ext:sql OR ext:bak OR ext:log

# Búsqueda de paneles de acceso y portales administrativos
site:dominio.com inurl:login OR inurl:admin OR inurl:portal

# Directorios con listado abierto habilitado
intitle:"index of /" "backup"
intitle:"index of /" ".git"
```

---

## 🛠️ Herramientas de Inteligencia

* **Enumeración de Personas / Usuarios**:
  * `sherlock`: Búsqueda de un mismo nombre de usuario en más de 300 redes sociales y foros.
    ```bash
    sherlock nombre_usuario
    ```
  * `holehe`: Comprueba si un correo electrónico está registrado en decenas de servicios (sin alertar a la víctima).
    ```bash
    holehe correo@ejemplo.com
    ```
* **Infraestructura & Dominios**:
  * [Censys](https://search.censys.io/) & [Shodan](https://www.shodan.io/): Búsqueda de servidores, puertos y certificados expuestos.
  * [crt.sh](https://crt.sh/): Registro de transparencia de certificados SSL para descubrir subdominios históricos y actuales.
  * [Wayback Machine (Archive.org)](https://web.archive.org/): Historial de páginas web antiguas que pudieron exponer contraseñas o rutas eliminadas.
