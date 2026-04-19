# Panel Administrativo — React + Vite

Panel administrativo web construido con **React 18**, **Vite** y **Bootstrap 5**, desarrollado como ejercicio práctico del curso de Ingeniería de Sistemas.

---

## Vista general

El panel incluye una barra lateral fija (sidebar) con navegación entre secciones, barra superior con acciones rápidas, y vistas con tablas de datos para Clientes, Proveedores y Usuarios.

---

## Tecnologías utilizadas

| Herramienta | Versión | Uso |
|---|---|---|
| React | 18.3 | Framework UI |
| Vite | 5.4 | Bundler / Dev server |
| react-router-dom | 6.26 | Navegación SPA |
| Bootstrap | 5.3 | Estilos y componentes |
| Bootstrap Icons | 1.11 | Iconografía |

---

## Estructura del proyecto

```
admin-panel/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx              ← Punto de entrada, importa Bootstrap
    ├── App.jsx               ← BrowserRouter + Routes
    ├── index.css             ← Estilos globales del panel
    ├── components/
    │   └── Navbar.jsx        ← Sidebar + TopBar con NavLink
    └── pages/
        ├── Clientes.jsx      ← Vista de clientes
        ├── Proveedor.jsx     ← Vista de proveedores
        ├── Usuarios.jsx      ← Vista de usuarios
        └── Logout.jsx        ← Vista de cierre de sesión
```


## Instalación y ejecución

### Requisitos previos
- Node.js **v18+** instalado
- npm **v9+**

### Pasos

```bash
# 1. Clona el repositorio
git clone https://github.com/TU_USUARIO/admin-panel.git

# 2. Entra a la carpeta
cd admin-panel

# 3. Instala las dependencias
npm install

# 4. Ejecuta el servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Comandos disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Genera build de producción en `/dist` |
| `npm run preview` | Previsualiza el build de producción |

---

## Rutas del sistema

| Ruta | Componente | Descripción |
|---|---|---|
| `/` | — | Redirige automáticamente a `/clientes` |
| `/clientes` | `Clientes.jsx` | Listado de clientes con búsqueda |
| `/proveedor` | `Proveedor.jsx` | Listado de proveedores con categorías |
| `/usuarios` | `Usuarios.jsx` | Gestión de usuarios y roles |
| `/logout` | `Logout.jsx` | Confirmación de cierre de sesión |

---

## Características

-  Navegación tipo SPA sin recarga (usando `<NavLink>`)
-  Sidebar responsivo con indicador de sección activa
-  Tablas con búsqueda en tiempo real
-  Tarjetas de estadísticas por sección
-  Badges de estado (Activo / Inactivo / Pendiente)
-  Diseño profesional con Bootstrap + CSS personalizado
-  Íconos integrados con Bootstrap Icons

---

## Autor

Desarrollado por: **Anderson Nicolas Díaz Camacho - 2214105**  
Docente: Carlos Adolfo Beltrán Castro  
Escuela de Ingeniería de Sistemas e Informática — I Semestre 2025
