/**
 * Hook para obtener el resumen estadístico de todos los héroes.
 * Llama al endpoint /summary que devuelve:
 *  - totalHeroes, heroCount, villainCount
 *  - strongestHero y smartestHero (héroe más fuerte e inteligente)
 * Se usa en HeroStats para el dashboard de tarjetas.
 */
import { useQuery } from "@tanstack/react-query";
import { getSumaryAction } from "../pages/hero/actions/get-sumary.action";

export const useHeroesSumary = () => {
  return useQuery({
    queryKey: ["totalHeroesSummary"],
    queryFn: getSumaryAction,
    staleTime: 1000 * 60 * 5,
  });
};
