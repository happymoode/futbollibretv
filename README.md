# ⚽ FutbolLibreTV

Portal web de información relacionada con el fútbol, desarrollado con HTML, CSS y JavaScript.

## 📌 Descripción

**FutbolLibreTV** es un proyecto web centrado en el fútbol, diseñado para ofrecer una experiencia sencilla, rápida y adaptada a dispositivos móviles.

El proyecto utiliza tecnologías web estándar y puede implementarse fácilmente en servicios de alojamiento estático como GitHub Pages, Cloudflare Pages, Netlify u otras plataformas compatibles.

## ✨ Características

* ⚽ Información relacionada con el fútbol
* 📅 Sección de eventos y partidos
* 📺 Página de canales
* 📱 Diseño responsive
* 💻 Compatible con ordenadores, tablets y teléfonos móviles
* 🚀 Código ligero y rápido
* 🔎 Estructura HTML optimizada para buscadores
* 🤖 Archivo `robots.txt`
* 🗺️ Sitemap XML
* 📄 Aviso legal
* 🔐 Política de privacidad
* 📧 Página de contacto
* ⚡ Sin necesidad de un servidor backend

## 📁 Estructura del proyecto

```text
futbollibretv/
│
├── index.html
├── canal.html
├── eventos.html
├── contacto.html
├── aviso-legal.html
├── politica-privacidad.html
│
├── config.js
├── eventos.js
│
├── robots.txt
├── sitemap.xml
├── CNAME
├── _headers
├── _redirects
│
└── README.md
```

## 🛠️ Tecnologías utilizadas

El proyecto está desarrollado utilizando tecnologías web estándar:

* **HTML5** — Estructura de las páginas
* **CSS3** — Diseño y estilos
* **JavaScript** — Funciones e interactividad
* **XML** — Sitemap
* **TXT** — Directivas para robots de búsqueda
* **Git** — Control de versiones
* **GitHub** — Repositorio y alojamiento del código

## 🚀 Instalación

### Clonar el repositorio

```bash
git clone https://github.com/happymoode/futbollibretv.git
```

Entrar en la carpeta:

```bash
cd futbollibretv
```

### Ejecutar localmente

Al tratarse de un proyecto estático, puedes abrir directamente:

```text
index.html
```

en tu navegador.

También puedes utilizar un servidor local.

Por ejemplo, con Python:

```bash
python -m http.server 8000
```

Después visita:

```text
http://localhost:8000
```

## 🌐 Despliegue

El proyecto puede desplegarse en diferentes plataformas de alojamiento estático.

### GitHub Pages

Para utilizar GitHub Pages:

1. Sube el proyecto al repositorio.
2. Abre **Settings** en GitHub.
3. Accede a **Pages**.
4. Selecciona la rama que deseas utilizar.
5. Selecciona la carpeta correspondiente.
6. Guarda la configuración.
7. Espera a que finalice el proceso de despliegue.

Si utilizas un dominio personalizado, configura correctamente el archivo `CNAME` y los registros DNS correspondientes.

## ⚙️ Configuración

El proyecto contiene el archivo:

```text
config.js
```

Este archivo puede utilizarse para almacenar configuraciones necesarias para las funciones JavaScript del sitio.

**Importante:** nunca publiques contraseñas, claves API, tokens privados ni credenciales en un repositorio público.

## 📄 Páginas principales

| Archivo                    | Descripción                     |
| -------------------------- | ------------------------------- |
| `index.html`               | Página principal                |
| `canal.html`               | Página relacionada con canales  |
| `eventos.html`             | Eventos y partidos              |
| `contacto.html`            | Página de contacto              |
| `aviso-legal.html`         | Información legal               |
| `politica-privacidad.html` | Política de privacidad          |
| `eventos.js`               | Funciones JavaScript de eventos |
| `config.js`                | Configuración del proyecto      |
| `robots.txt`               | Instrucciones para robots       |
| `sitemap.xml`              | Mapa del sitio                  |

## 🔎 SEO

El proyecto incluye elementos básicos para facilitar la indexación de las páginas por parte de los motores de búsqueda.

Entre las buenas prácticas recomendadas se encuentran:

* Títulos `<title>` descriptivos
* Meta descripciones
* Encabezados `H1`, `H2` y `H3`
* URLs claras
* Enlaces internos
* Sitemap XML
* Archivo `robots.txt`
* Etiquetas canonical cuando sean necesarias
* Atributos `alt` descriptivos para imágenes
* Diseño adaptado a dispositivos móviles
* Buen rendimiento y tiempos de carga reducidos

## 📱 Diseño responsive

El sitio está diseñado para funcionar correctamente en diferentes dispositivos:

* 📱 Teléfonos móviles
* 📲 Tablets
* 💻 Portátiles
* 🖥️ Ordenadores de escritorio

Se recomienda probar cada cambio en diferentes tamaños de pantalla antes de publicarlo.

## 🔐 Seguridad

No debes incluir información confidencial en este repositorio público.

No publiques archivos como:

```text
.env
.env.local
API keys
passwords
access tokens
private credentials
secret configuration files
```

Si una clave o credencial se publica accidentalmente, debe revocarse o cambiarse inmediatamente.

## ⚖️ Información legal

Este repositorio está destinado al desarrollo de un proyecto web relacionado con el fútbol.

Los responsables de cualquier implementación basada en este código deben asegurarse de cumplir con las leyes y normativas aplicables, así como con las políticas de los proveedores de alojamiento y servicios de terceros.

Los nombres, marcas, logotipos, imágenes, vídeos y demás materiales de terceros pertenecen a sus respectivos propietarios.

Los usuarios son responsables de disponer de los derechos o autorizaciones necesarios para cualquier contenido que publiquen.

## 🤝 Contribuciones

Las contribuciones y mejoras son bienvenidas.

### Proceso para contribuir

1. Haz un fork del repositorio.
2. Crea una nueva rama:

```bash
git checkout -b feature/nueva-funcion
```

3. Realiza los cambios.
4. Comprueba el funcionamiento del sitio.
5. Guarda los cambios:

```bash
git add .
git commit -m "Mejora del sitio web"
```

6. Sube la rama:

```bash
git push origin feature/nueva-funcion
```

7. Crea un Pull Request.

## 🧪 Pruebas

Antes de realizar un despliegue, comprueba:

* La página principal funciona correctamente.
* Los enlaces de navegación funcionan.
* El diseño móvil es correcto.
* El diseño de escritorio es correcto.
* No existen errores JavaScript en la consola.
* `robots.txt` funciona correctamente.
* `sitemap.xml` contiene las URLs correctas.
* El dominio personalizado está configurado correctamente.
* Las páginas importantes responden correctamente.
* No existen credenciales privadas en el repositorio.

## 🔄 Actualizar el proyecto

Después de realizar cambios:

```bash
git add .
git commit -m "Actualizar sitio web"
git push origin main
```

Si GitHub Pages está configurado para realizar despliegues automáticos, los cambios se publicarán después del proceso de compilación y despliegue.

## 📜 Licencia

Salvo que se indique lo contrario, este proyecto se proporciona con fines de desarrollo y educativos.

Las marcas comerciales, nombres, logotipos, contenidos y materiales de terceros pertenecen a sus respectivos propietarios.

Si deseas distribuir o utilizar comercialmente este proyecto, se recomienda añadir una licencia de código abierto apropiada al repositorio.

## 📞 Contacto

Para preguntas, sugerencias o información relacionada con el proyecto, puedes utilizar el método de contacto disponible en el sitio web o abrir un Issue en este repositorio.

---

## ⚽ FutbolLibreTV

Proyecto web ligero relacionado con el fútbol, desarrollado con tecnologías web estándar.

**HTML • CSS • JavaScript • GitHub Pages**

---
