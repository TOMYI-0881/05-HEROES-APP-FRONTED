/**
 * Configuración del enrutador principal con createBrowserRouter.
 *
 * Estructura de rutas:
 *  /              → Layout público con Header y navegación
 *  /              (index) → HomePage con dashboard, tabs y paginación
 *  /heroe/:idSlug → HeroPage (detalle completo del personaje)
 *  /search        → SearchPage (búsqueda con filtros avanzados, lazy)
 *  /*             → Catch-all: redirige a Home
 *  /admin         → Layout admin con sección de administración (lazy)
 *
 * SearchPage y AdminPage se cargan con lazy() para分割 de código (code splitting).
 */
import HeroPage from "@/heroes/pages/hero/HeroPage";
import { HeroesLayouts } from "@/heroes/layouts/HeroesLayouts";
import { createBrowserRouter, Navigate } from "react-router";
import { AdminLayout } from "@/admin/layouts/AdminLayout";
import { lazy } from "react";
import { HomePage } from "@/heroes/pages/home/HomePage";

const SearchPage = lazy(() => import("@/heroes/pages/search/SearchPage"));
const AdminPage = lazy(() => import("@/admin/pages/AdminPage"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HeroesLayouts />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "heroe/:idSlug", element: <HeroPage /> },
      { path: "search", element: <SearchPage /> },
      { path: "*", element: <Navigate to={"/"} /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminPage /> },
    ],
  },
]);
