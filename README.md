# Finanza-web-app

Aplicación web para la gestión de finanzas personales e inversiones, construida con tecnologías modernas para ofrecer una experiencia fluida y escalable.

---

## 🚀 Tecnologías

🖥️ Interfaz

- React 19 + TypeScript
- Next.js 15 (App Router)
- TailwindCSS 4 (Diseño atómico con tailwind-merge)
- Lucide React (Iconografía moderna)

⚙️ Estado y lógica

- Zustand 5 (Gestión de estado global)
- React Hook Form 7 + Zod 4 (Validación de formularios)
- TanStack React Query 5 (Manejo de datos asíncronos y caché)

🧪 Calidad y desarrollo

- ESLint 9 + eslint-config-next
- TypeScript 5.8
- PostCSS 8 + Tailwind CLI
- Vitest (si aún lo usas para pruebas unitarias)

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
├── app/                     # Vistas y rutas (Home, Login, Transactions)
├── store/                   # Zustand para estado global
├── hooks/                   # Hooks personalizados (useAuth, useFetch)
├── utils/                   # Funciones auxiliares (formatos, fechas)
├── types/                   # Tipos TypeScript
├── api/                     # Cliente HTTP con axios y endpoints
└── fonts/                   # Configuración de next/font (Geist)

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

- [Documentación oficial de Next.js](https://nextjs.org/docs)
- [Aprende Next.js (tutorial interactivo)](https://nextjs.org/learn)
- [Repositorio en GitHub](https://github.com/vercel/next.js)

verificar problema
npx eslint src --ext .ts,.tsx --fix
npx tsc --noEmit
