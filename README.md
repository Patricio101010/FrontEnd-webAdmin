# Finanza-web-app
Aplicación web para la gestión de finanzas personales e inversiones, construida con tecnologías modernas para ofrecer una experiencia fluida y escalable.

---

## 🚀 Tecnologías

**Frontend:**
- React 19 + TypeScript
- Vite
- TailwindCSS (Atomic Design)



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

## Comenzando

Primero, ejecuta el servidor de desarrollo:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abre http://localhost:3000 en tu navegador para ver el resultado.

Puedes comenzar a editar la página modificando app/page.tsx. La página se actualizará automáticamente a medida que edites el archivo.

Este proyecto utiliza next/font para optimizar y cargar automáticamente Geist, una nueva familia tipográfica de Vercel.

Para aprender más sobre Next.js, revisa los siguientes recursos:

Documentación de Next.js - aprende sobre las características y la API de Next.js.

Aprende Next.js - un tutorial interactivo de Next.js.

También puedes revisar el repositorio de Next.js en GitHub – ¡tu feedback y contribuciones son bienvenidos!
