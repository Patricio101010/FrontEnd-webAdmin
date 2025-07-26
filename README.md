# Finanza-web-app

Aplicación web para la gestión de finanzas personales e inversiones, construida con tecnologías modernas para ofrecer una experiencia fluida y escalable.

---

## 🚀 Tecnologías

**Frontend:**
- React 19 + TypeScript
- Vite
- TailwindCSS (Atomic Design)

**Backend:**
- Python (FastAPI o Flask)
- Zod para validación

**Otras tecnologías:**
- Zustand (Estado global)
- React Hook Form + Zod (Formularios)
- React Router DOM v7 (Enrutamiento)
- Vitest + React Testing Library (Testing)

---

## 🧱 Estructura del Proyecto

### Frontend (`frontend/`)

```plaintext
src/
├── components/              # Componentes organizados por Atomic Design
│   ├── atoms/               # Botones, inputs, íconos
│   ├── molecules/           # Combinaciones simples de átomos (ej. SearchBar)
│   ├── particles/           # Elementos dinámicos/abstractos (ej. Skeleton)
│   ├── organisms/           # Componentes con lógica y estado (ej. Navbar)
│   └── templates/           # Layouts reutilizables (ej. Dashboard, Auth)
├── pages/                   # Vistas y rutas (Home, Login, Transactions)
├── store/                   # Zustand para estado global
├── hooks/                   # Hooks personalizados (useAuth, useFetch)
├── utils/                   # Funciones auxiliares (formatos, fechas)
├── types/                   # Tipos TypeScript
├── api/                     # Cliente HTTP con axios y endpoints
├── App.tsx                  # Configuración de rutas
└── main.tsx                 # Entrada principal de la app
```
### Frontend (`frontend/`)

```plaintext
app/
├── models/                  # Modelos de datos (ORM o clases)
├── routes/                  # Endpoints y rutas HTTP
├── services/                # Lógica de negocio
└── schemas/                 # Validaciones (Pydantic o similar)

tests/                       # Pruebas unitarias e integración
requirements.txt             # Dependencias del proyecto
main.py                      # Punto de entrada de la API
```

🛠️ Instalación
Requisitos previos
Node.js (v18+ recomendada)
Python 3.10+
