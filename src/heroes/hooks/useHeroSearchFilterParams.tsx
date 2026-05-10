/**
 * Hook para buscar héroes con filtros avanzados.
 * Acepta un objeto Options con todos los filtros disponibles:
 * name, team, category, universe, status, strength.
 * TanStack Query cachea la respuesta con staleTime de 5 minutos.
 * La queryKey incluye todos los filtros para que el caché sea único.
 */
import { useQuery } from "@tanstack/react-query";
import { searchHeroAction, type Options } from "../pages/hero/actions/search-heroes.action";

export const useHeroSearchFilterParams = ({ name, category, status, strength, team, universe }: Options) => {
  return useQuery({
    queryKey: ["Hero-data-filter", { name, strength, team, category, universe, status }],
    queryFn: () => searchHeroAction({ name, strength, team, category, universe, status }),
    staleTime: 1000 * 60 * 5,
  });
};
