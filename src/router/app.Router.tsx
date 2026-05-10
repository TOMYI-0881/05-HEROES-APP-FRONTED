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
      {
        index: true,
        element: <HomePage />,
      },
      {
        //para ruta dimamica, usamos :
        path: "heroe/:idSlug",
        element: <HeroPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "*",
        element: <Navigate to={"/"} />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
]);
