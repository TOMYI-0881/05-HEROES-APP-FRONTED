/**
 * Punto de entrada de la aplicación.
 * Renderiza el componente raíz HeroesApp dentro de StrictMode
 * para habilitar verificaciones en desarrollo (doble renderizado, detección de efectos, etc.).
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HeroesApp } from "./HeroesApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeroesApp />
  </StrictMode>,
);
