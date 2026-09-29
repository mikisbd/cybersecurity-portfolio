# 🔬 Knowledge Base: Digital Forensics & Incident Response

Técnicas esenciales de análisis forense digital, análisis de memoria RAM, inspección de capturas de red (PCAP) e ingeniería inversa básica.

---

## 💾 Análisis de Memoria RAM (Volatility 3)

```bash
# Identificar información del volcado de memoria
vol -f memory.raw windows.info

# Listar procesos en ejecución en el momento del volcado
vol -f memory.raw windows.pslist
vol -f memory.raw windows.pstree

# Detectar procesos ocultos o inyectados (hollowed processes)
vol -f memory.raw windows.malfind

# Extraer hashes de contraseñas de la SAM o LSASS
vol -f memory.raw windows.hashdump
vol -f memory.raw windows.lsass.Lsass
```

---

## 📡 Análisis de Tráfico de Red (PCAP)

* **Wireshark**:
  * Filtrar credenciales en texto claro: `http.request.method == "POST"`
  * Filtrar consultas DNS anómalas: `dns.flags.response == 0`
  * Extraer archivos transmitidos: `File -> Export Objects -> HTTP / SMB`
* **Tshark (Línea de comandos)**:
  ```bash
  # Extraer todas las peticiones HTTP GET y POST
  tshark -r captura.pcap -Y "http.request" -T fields -e http.host -e http.request.uri
  ```

---

## 🖼️ Esteganografía & Metadatos

```bash
# Ver metadatos EXIF en imágenes o documentos
exiftool imagen.jpg

# Extraer archivos ocultos incrustados
binwalk -e archivo_sospechoso.bin

# Extraer texto oculto con contraseña en imágenes (Steghide)
steghide extract -sf imagen.jpg
```
