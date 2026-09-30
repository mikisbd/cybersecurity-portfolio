# 🎯 HackMyVM Writeups

[HackMyVM](https://hackmyvm.eu/) es una excelente plataforma comunitaria con máquinas virtuales creadas por autores independientes para entrenar técnicas de pentesting en entornos locales.

---

## 📂 Repositorio de Writeups en Google Drive

> 📁 **[Acceder a mi Carpeta de Writeups de HackMyVM en Google Drive](https://drive.google.com/drive/folders/1La5aaH-siBZLE7b0k3STqg_VX179OhQx?usp=sharing)**
>
> Documentación detallada de mis resoluciones de máquinas de HackMyVM, guías paso a paso y apuntes de explotación.

---

## 📋 Lista de Máquinas Destacadas

| Máquina | Dificultad | SO | Vectores Clave | Writeup / Ficha |
| :--- | :--- | :--- | :--- | :--- |
| **BITB** | Fácil / Media | Linux | Browser In The Browser / Web Enum / SUID | [📖 Leer Writeup](bitb.md) |
| **Pulse** | Media | Linux | Creada por mí para la comunidad | [🖥️ Ver Ficha de Máquina](../../maquinas-creadas/README.md#1--pulse) |
| **Colección HackMyVM** | Varias | Linux | Múltiples vectores de ataque | [📁 Ver en Google Drive](https://drive.google.com/drive/folders/1La5aaH-siBZLE7b0k3STqg_VX179OhQx?usp=sharing) |

---

### 📝 Estructura de los Writeups
Cada writeup incluye:
1. **Fase 1: Reconocimiento**: Escaneo de puertos y servicios con `nmap`.
2. **Fase 2: Enumeración**: Detección de directorios, servicios web o vectores débiles.
3. **Fase 3: Explotación (Acceso Inicial)**: Ejecución de comandos / shell inversa.
4. **Fase 4: Escalada de Privilegios**: Elevación a usuario root.
5. **Conclusiones**: Aprendizajes y remediación.
