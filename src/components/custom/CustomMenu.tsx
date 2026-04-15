import { Link, useLocation } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

const CustomMenu = () => {
  const { pathname } = useLocation();
  console.log({ pathname });

  const isActive = (path: string) => {
    return path === pathname;
  };
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-1 ">
        {/* Home */}
        <NavigationMenuItem className="bg-indigo-500  text-amber-50 rounded-md hover:text-black">
          <NavigationMenuLink
            className={cn(isActive("/") && "bg-orange-300 text-black")}
          >
            <Link to="/">inicio</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* Search */}
        <NavigationMenuItem className="bg-indigo-500  text-amber-50 rounded-md hover:text-black">
          <NavigationMenuLink
            className={cn(isActive("/search") && "bg-orange-300 text-black")}
          >
            <Link to="/search">Busqueda de Heroes</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default CustomMenu;
