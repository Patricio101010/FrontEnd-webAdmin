# Finanza-web-app

Aplicación web para la gestión de finanzas personales e inversiones, construida con tecnologías modernas para ofrecer una experiencia fluida y escalable.

---

## Tecnologías

- **Frontend:**  
  React 19 + TypeScript + Vite + TailwindCSS (Atomic Design)  
- **Backend:**  
  Python (FastAPI o Flask) + Zod para validación  
- **Estado global:**  
  Zustand  
- **Formularios:**  
  React Hook Form + Zod  
- **Enrutamiento:**  
  React Router DOM v7  
- **Testing:**  
  Vitest + React Testing Library  

---

## Estructura del Proyecto

### Frontend (`frontend/`)
src/
├── components/ # Componentes organizados por Atomic Design
│ ├── atoms/ # Componentes básicos (botones, inputs, íconos)
│ ├── molecules/ # Combinaciones simples de átomos (ej. SearchBar)
│ ├── particles/ # Elementos dinámicos o abstractos (ej. Skeleton)
│ ├── organisms/ # Componentes complejos con estado (ej. Navbar)
│ └── templates/ # Layouts reutilizables (ej. Dashboard, Auth)
├── pages/ # Vistas y rutas (ej. Home, Login, Transactions)
├── store/ # Estado global con Zustand
├── hooks/ # Hooks personalizados (ej. useAuth, useFetch)
├── utils/ # Funciones auxiliares (formatos, fechas)
├── types/ # Definición de tipos TypeScript
├── api/ # Cliente HTTP con axios y servicios
├── App.tsx # Router principal
└── main.tsx # Punto de entrada React

### Backend (`backend/`)
pp/
├── models/ # Modelos de datos (ORM o clases)
├── routes/ # Endpoints y rutas HTTP
├── services/ # Lógica de negocio y operaciones
└── schemas/ # Validaciones y serialización (p.ej. Pydantic)

tests/ # Pruebas unitarias e integración
requirements.txt # Dependencias del proyecto
main.py # Entrada principal de la aplicación

---

## Instalación

### Requisitos previos

- Node.js (v18+ recomendada)
- Python 3.10+
- Pip
- PostgreSQL (opcional para backend)

---

### Frontend

cd frontend
npm install
npm run dev
Abre http://localhost:5173 en tu navegador.

### Frontend

cd backend
python -m venv venv
source venv/bin/activate     # Linux / macOS
venv\Scripts\activate        # Windows
pip install -r requirements.txt
uvicorn main:app --reload

