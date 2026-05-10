/**
 * Hook para gestionar los parámetros de búsqueda de la URL en la HomePage.
 * Parámetros que maneja:
 *  - section → pestaña activa (all, favorites, heroes, villains)
 *  - page → número de página para la paginación
 *  - limit → cantidad de items por página (default 6)
 *  - category → filtro por categoría (hero, villain, all)
 *
 * handleSearchParams(section, category) cambia la pestaña y resetea
 * la página a 1. selectTab valida que el tab sea válido, si no,
 * devuelve "favorites" como fallback.
 */
import { useMemo } from "react";
import { useSearchParams } from "react-router";

export const useHeroesSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTabParams = searchParams.get("section") ?? "all";
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "6";
  const category = searchParams.get("category") ?? "all";

  const handleSearchParams = (section: string, category: string = "all") => {
    setSearchParams((prev) => {
      prev.set("section", section);
      prev.set("category", category);
      prev.set("page", "1");
      return prev;
    });
  };

  const selectTab = useMemo(() => {
    const validTabs = ["all", "favorites", "heroes", "villains"];
    return validTabs.includes(activeTabParams) ? activeTabParams : "favorites";
  }, [activeTabParams]);

  //manjear parametros desconocidos dentro de la url
  return { page, limit, category, selectTab, handleSearchParams };
};
