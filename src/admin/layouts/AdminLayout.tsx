/**
 * Layout para la sección de administración (/admin).
 * Envuelve el contenido en un contenedor con fondo ámbar.
 * Outlet renderiza la página hija (AdminPage).
 */
import { Outlet } from "react-router";

export const AdminLayout = () => {
  return (
    <div className="bg-amber-500">
      <section>
        <Outlet />
      </section>
    </div>
  );
};
