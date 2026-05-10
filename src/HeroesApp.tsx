/**
 * Componente raíz de la aplicación.
 * Jerarquía de providers:
 * 1. QueryClientProvider → TanStack Query para caché y fetching de datos
 * 2. FavoriteHeroContextProvider → Contexto de favoritos (localStorage)
 * 3. RouterProvider → React Router v7 (createBrowserRouter)
 * 4. ReactQueryDevtools → DevTools de TanStack Query en desarrollo
 */
import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FavoriteHeroContextProvider } from "./heroes/context/FavoriteHeroContext";

// Cliente global de TanStack Query, accesible desde cualquier lugar
export const queryClient = new QueryClient();

export const HeroesApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoriteHeroContextProvider>
        <div>
          <RouterProvider router={appRouter} />
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </FavoriteHeroContextProvider>
    </QueryClientProvider>
  );
};
