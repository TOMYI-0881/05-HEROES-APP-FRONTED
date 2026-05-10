/**
 * Hook para obtener héroes paginados.
 * Props: page (string), limit (string), category (string).
 * Convierte page y limit a número con el operador unario +.
 * La queryKey incluye page, limit y category para cachear
 * combinaciones únicas de paginación + filtro.
 * Se usa en HomePage para las pestañas All, Heroes y Villains.
 */
import { useQuery } from "@tanstack/react-query";
import { getHeroesByPageAction } from "../pages/hero/actions/get-heroes-by-page.action";

interface Props { page: string; limit: string; category: string; }

export const usePaginationHero = ({ page, limit, category }: Props) => {
  return useQuery({
    queryKey: ["heroes", { page, limit, category }],
    queryFn: () => getHeroesByPageAction(+page, +limit, category),
    staleTime: 1000 * 60 * 5,
  });
};
