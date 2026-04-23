import { useLocation, useNavigate } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

const CustomMenu = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log({ pathname });

  const isActive = (path: string) => {
    return path === pathname;
  };
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-1 bg-gray-300 rounded-md p-1">
        {/* Home */}
        <NavigationMenuItem className="bg-indigo-500  text-amber-50 rounded-md hover:text-black">
          <NavigationMenuLink
            onClick={() => navigate("/section=all")}
            className={cn(
              isActive("/") && "bg-orange-300 text-black",
              "cursor-pointer",
            )}
          >
            inicio
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* Search */}
        <NavigationMenuItem className="bg-indigo-500  text-amber-50 rounded-md hover:text-black">
          <NavigationMenuLink
            onClick={() => navigate("/search")}
            className={cn(
              isActive("/search") && "bg-orange-300 text-black",
              "cursor-pointer",
            )}
          >
            Busqueda de Heroes
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default CustomMenu;
