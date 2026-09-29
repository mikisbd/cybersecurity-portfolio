# 🛡️ Cybersecurity Portfolio & CTFs

> Portfolio profesional de Ciberseguridad, Hacking Ético, Máquinas Creadas, Certificaciones y Writeups interactivos.

Diseñado con estética **Dark Hacker / Cyberpunk**, ligero, ultra-rápido, sin dependencias de compilación y listo para desplegar al instante en **GitHub Pages**.

---

## 🚀 Características Principales

- ⚡ **Despliegue Instantáneo en GitHub Pages**: HTML5 semántico, CSS moderno y JavaScript modular puro.
- 🎨 **Estética Cyberpunk / Red Team**: Fondo oscuro con acentos neón cian/verde, efecto matriz de partículas sutil, terminal interactiva simulada y tipografías para desarrolladores (`JetBrains Mono`).
- 🔍 **Buscador y Filtros en Tiempo Real**: Filtrado dinámico por plataforma (*Hack The Box, TryHackMe, Dockerlabs, VulnHub*) y dificultad (*Fácil, Media, Difícil*).
- 📜 **Visor Modal de Writeups y Fichas**: Ventana emergente con el desglose paso a paso de cada máquina (reconocimiento, acceso inicial, escalada de privilegios y conclusiones).
- 🏷️ **Máquinas Creadas**: Sección destacada para laboratorios y retos que hayas diseñado para la comunidad.
- 🎓 **Certificaciones y Logros**: Insignias visuales, fechas y enlaces de verificación de credenciales (eJPT, OSCP, CPTS, etc.).
- ⚙️ **Gestión Centralizada en `data.js`**: Actualiza tus máquinas, certificaciones, redes y perfil modificando únicamente el archivo `data.js`.

---

## 📂 Estructura del Proyecto

```text
cybersecurity-portfolio/
├── index.html        # Estructura principal y secciones de la web
├── style.css         # Estilos, efectos de brillo neón, terminal y diseño responsivo
├── data.js           # ⚙️ TODOS los datos configurables (edita aquí tu información)
├── app.js            # Motor de renderizado dinámico, filtros en tiempo real y modales
└── README.md         # Documentación del proyecto
```

---

## 🛠️ Cómo Personalizar tu Información

Toda la información del sitio se gestiona en el archivo **`data.js`**. Ábrelo y modifica los siguientes campos:

1. **`personal`**: Tu nombre, título, bio, enlaces a LinkedIn, GitHub, Hack The Box, TryHackMe y tu archivo de CV.
2. **`skillCategories`**: Porcentajes de habilidades y etiquetas de herramientas de pentesting.
3. **`certifications`**: Insignias, estado ("Completada" o "En preparación") y enlaces de credencial.
4. **`createdMachines`**: Añade las máquinas que hayas publicado (en Dockerlabs, VulnHub, etc.) con sus vectores de explotación.
5. **`resolvedCTFs`**: Registra los writeups de máquinas que vayas superando con sus pasos de resolución.
6. **`projects`**: Enlaces a tus repositorios y herramientas propias (como `nmip1`).

---

## 🌐 Cómo Activar GitHub Pages (Gratis)

Para que tu web esté online en `https://mikisbd.github.io/cybersecurity-portfolio/`:

1. Haz **Push** de estos cambios a tu repositorio en GitHub:
   ```bash
   git add .
   git commit -m "feat: complete cybersecurity portfolio with writeups and filters"
   git push origin main
   ```

2. Entra en tu repositorio en GitHub:
   👉 **`https://github.com/mikisbd/cybersecurity-portfolio`**

3. Ve a la pestaña **Settings** (Configuración) > En el menú lateral izquierdo, haz clic en **Pages**.

4. En **Build and deployment**:
   - **Source**: Selecciona `Deploy from a branch`.
   - **Branch**: Selecciona `main` y la carpeta `/ (root)`.
   - Haz clic en **Save** (Guardar).

5. ¡Listo! En un par de minutos tu portfolio estará publicado y accesible para todo el mundo.

---

## 💻 Vista Previa Local

Si deseas probar la web en tu ordenador antes de subirla:

```bash
# Con Python 3
python3 -m http.server 8080

# Luego abre en tu navegador:
http://localhost:8080
```
