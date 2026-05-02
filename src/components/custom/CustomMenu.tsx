import { useLocation, useNavigate } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
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
        //manejamos los estados de los colores
        variant={hoverOne ? "default" : "outline"}
        onMouseEnter={() => setHoverOne(true)}
        onMouseLeave={() => setHoverOne(false)}
        onClick={() => navigate("/heroe")}
      >
        incio
      </RainbowButton>
      <RainbowButton
        //manejamos los estados de los colores
        variant={hoverTwo ? "default" : "outline"}
        onMouseEnter={() => setHoverTwo(true)}
        onMouseLeave={() => setHoverTwo(false)}
        onClick={() => navigate("/search")}
      >
        Busqueda de Heroe
      </RainbowButton>
    </NavigationMenu>
  );
};

export default CustomMenu;
