# Portafolio Profesional — Single Page Application (SPA)

**Evaluación Nº4 — Desarrollo Web / Ingeniería Civil en Informática**  
**Institución:** Universidad Católica de Temuco (UCT)

##  Descripción del Proyecto

Este proyecto consiste en la migración y evolución de un portafolio estático (Evaluación Nº2) hacia una **Single Page Application (SPA)** moderna construida con **React** y **Vite**. El objetivo principal es ofrecer una navegación fluida sin recargas de página, modularizar la interfaz en componentes reutilizables e integrar datos dinámicos en tiempo real mediante el consumo de una API REST externa.

###  Evidencia Visual (Estado Inicial E2)
La captura de referencia del portafolio estático original se encuentra almacenada en:  
`docs/captura-e2.png`

---

##  Arquitectura y Características Principales

* **Enrutamiento Declarativo (SPA):** Implementado con `react-router-dom` (`BrowserRouter`, `Routes`, `Route`, `NavLink`), permitiendo transiciones instantáneas entre vistas (`/`, `/proyectos`, `/contacto`) y gestión controlada de rutas inexistentes mediante una vista **404 Not Found** (`path="*"`).
* **Consumo de API Externa:** Integración con la **GitHub REST API** mediante un *Custom Hook* (`useFetchApi`) con manejo explícito de estados de carga (`loading`), error (`error`) y renderizado condicional.
* **Arquitectura Modular:** Separación clara de responsabilidades entre vistas (`src/pages/`), componentes reutilizables (`src/components/`), lógica de peticiones (`src/hooks/`) y datos locales (`src/data/`).
* **Accesibilidad y Diseño Responsivo:** Uso de etiquetas semánticas HTML5, atributos ARIA (`aria-labelledby`, `aria-live`, `role="status"`, `role="alert"`) y metodología BEM en CSS.

---

##  Contrato de la API Consumida

* **Servicio:** GitHub REST API v3
* **Endpoint:** `GET https://api.github.com/users/{usuario}/repos?sort=updated&per_page=4`
* **Autenticación:** Pública (sin token requerido para consultas básicas de repositorios públicos).
* **Campos utilizados en la UI:**
  * `id`: Identificador único para la *key* de renderizado en React.
  * `name`: Nombre del repositorio.
  * `description`: Descripción del proyecto (con *fallback* controlado si es `null`).
  * `language`: Lenguaje principal utilizado.
  * `stargazers_count`: Cantidad de estrellas del repositorio.
  * `html_url`: Enlace directo al código fuente en GitHub.

---

##  Instalación y Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/elbno/evaluacion_4-nombre_apellido.git
   cd evaluacion_4-nombre_apellido
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Compilar para producción:**
   ```bash
   npm run build
   ```

---

##  Estructura del Proyecto

```text
├── docs/
│   └── captura-e2.png          # Evidencia visual de la Evaluación Nº2
├── src/
│   ├── components/             # Componentes reutilizables (Navbar, Hero)
│   ├── data/                   # Datos estáticos migrados (portafolioData.js)
│   ├── hooks/                  # Custom hooks (useFetchApi.js)
│   ├── pages/                  # Vistas de la SPA (ProjectsPage, ContactPage, NotFoundPage)
│   ├── App.jsx                 # Configuración principal de rutas y layout
│   ├── main.jsx                # Punto de entrada de React
│   └── index.css               # Estilos globales bajo convención BEM
├── INVENTARIO.md               # Trazabilidad de componentes migrados desde E2
├── uso_ia.md                   # Bitácora ética y técnica del uso de IA
└── README.md                   # Documentación principal del proyecto
```

## Nota: 
- Este README.md fue creado con IA, utilizando el modelo GEMINI(fast, Web)