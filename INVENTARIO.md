# Inventario y Trazabilidad de Migración (INVENTARIO.md)

## 1. Mapeo de Componentes (E2 → React)
En esta sección se detalla el origen y la correspondencia de los elementos estructurales y de diseño que fueron rescatados desde la Evaluación N°2 para integrarse en la SPA de React:

* **Sección de Proyectos y Datos Académicos (`ProjectsPage.jsx` y `portfolioData.js`):**
  * *Origen en E2:* Estructura estática original de los proyectos destacados de ingeniería (Sistema Araucanía Hospeda, Visualizador de Límites, Algoritmo de Dijkstra y Simulación de Redes PYME).
  * *Destino en React:* Migrados a una fuente de datos local estructurada (`portfolioData.js`) y combinados de manera asíncrona con el consumo en tiempo real de la REST API de GitHub.
* **Estilos Globales y Arquitectura CSS (`index.css`):**
  * *Origen en E2:* Clases base, variables de color y tipografías modularizadas bajo metodología BEM (Block, Element, Modifier).
  * *Destino en React:* Reutilizados íntegramente como la capa de diseño global de la aplicación SPA, manteniendo la paleta de colores corporativa y de contraste.
* **Estructura de Navegación (`Navbar.jsx` y `App.jsx`):**
  * *Origen en E2:* Enlaces de navegación hipervinculados entre páginas independientes.
  * *Destino en React:* Transformados en componentes modularizados mediante enrutamiento declarativo con `react-router-dom` (`BrowserRouter`, `Routes`, `Route`), permitiendo una navegación fluida sin recargas de página.

---

## 2. Refactorización y Mejoras
Explicación detallada de la transición técnica y las correcciones aplicadas durante el proceso de migración:

* **Modularización hacia React y BEM:**
  * Se desglosó el código monolítico anterior en componentes funcionales reutilizables e independientes (por ejemplo: `Navbar`, `Footer`, vistas por páginas y tarjetas de proyectos).
  * Se mantuvo la consistencia estricta con la metodología BEM para evitar colisiones de selectores CSS y asegurar la mantenibilidad del código frontend.
* **Corrección de Errores Estructurales y de Accesibilidad:**
  * **Estructura semántica:** Se incorporaron etiquetas HTML5 semánticas rigurosas (`<header>`, `<main>`, `<section>`, `<article>`) para mejorar la jerarquía del DOM.
  * **Accesibilidad (WAI-ARIA):** Se implementaron atributos dinámicos de accesibilidad en los estados de carga y manejo de errores de la API (como `role="status"`, `role="alert"` y `aria-live="polite"`), optimizando la experiencia para lectores de pantalla.
  * **Gestión de asincronía:** Se robusteció el manejo de excepciones en las peticiones HTTP mediante un custom hook (`useFetchApi`) para capturar fallos de red de forma limpia sin romper la interfaz de usuario.


  ## Nota: 
  - Para este INVENTARIO.md Se utilizo IA modelo GEMINI(Fast, web) debido a que no recordaba si debia poner el codigo o como era.