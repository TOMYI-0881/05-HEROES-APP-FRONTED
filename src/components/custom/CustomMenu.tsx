/**
 * Menú de navegación principal con botones RainbowButton.
 * hoverOne/hoverTwo → estado local para cambiar el variant del botón
 *   entre "outline" (por defecto) y "default" (al hacer hover).
 * navigate() → navegación programática a las rutas.
 *
 * Botones:
 *  - "incio" → navega a /heroe (redirige al Home por el catch-all)
 *  - "Busqueda de Heroe" → navega a /search
 */
import { useLocation, useNavigate } from "react-router";
import { NavigationMenu } from "../ui/navigation-menu";
import { RainbowButton } from "../ui/rainbow-button";
import { useState } from "react";

const CustomMenu = () => {
  const [hoverOne, setHoverOne] = useState(false);
  const [hoverTwo, setHoverTwo] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log({ pathname });

  return (
    <NavigationMenu className="flex gap-1 ">
      <RainbowButton
        variant={hoverOne ? "default" : "outline"}
        onMouseEnter={() => setHoverOne(true)}
        onMouseLeave={() => setHoverOne(false)}
        onClick={() => navigate("/heroe")}
      >incio</RainbowButton>
      <RainbowButton
        variant={hoverTwo ? "default" : "outline"}
        onMouseEnter={() => setHoverTwo(true)}
        onMouseLeave={() => setHoverTwo(false)}
        onClick={() => navigate("/search")}
      >Busqueda de Heroe</RainbowButton>
    </NavigationMenu>
  );
};

export default CustomMenu;
