/**
 * Layout principal de la sección pública (/).
 * Renderiza el menú de navegación (CustomMenu) en la parte superior
 * y el contenido de la ruta hija mediante Outlet.
 * Fondo con gradiente suave y contenedor centrado max-w-7xl.
 */
import CustomMenu from "@/components/custom/CustomMenu";
import { Outlet } from "react-router";

export const HeroesLayouts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <CustomMenu />
        <Outlet />
      </div>
    </div>
  );
};
