/**
 * Hook personalizado que obtiene un solo héroe por su slug (idSlug).
 * Envuelve useQuery de TanStack Query con:
 *  - queryKey: ["Hero-data", { idSlug }] → único por slug
 *  - staleTime: 5 minutos → evita re-fetch innecesario
 *  - retry: false → no reintenta si la petición falla (redirige a Home)
 */
import { useQuery } from "@tanstack/react-query";
import { getHeroAction } from "../pages/hero/actions/get-hero.action";

export const useHero = (idSlug: string) => {
  return useQuery({
    queryKey: ["Hero-data", { idSlug: idSlug }],
    queryFn: () => getHeroAction(idSlug),
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
};
