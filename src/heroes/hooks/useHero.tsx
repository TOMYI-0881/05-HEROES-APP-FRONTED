import { useQuery } from "@tanstack/react-query";
import { getHeroAction } from "../pages/hero/actions/get-hero.action";

export const useHero = (idSlug: string) => {
  return useQuery({
    queryKey: ["Hero-data", { idSlug: idSlug }],
    queryFn: () => getHeroAction(idSlug),
    staleTime: 1000 * 60 * 5, //5 minutos
    //retry evita que se vuelvan hacer intentos de llamar a la API
    retry: false,
  });
};
