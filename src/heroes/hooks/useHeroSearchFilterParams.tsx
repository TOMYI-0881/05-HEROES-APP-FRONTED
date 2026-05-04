import { useQuery } from "@tanstack/react-query";
import { searchHeroAction } from "../pages/hero/actions/search-heroes.action";

export const useHeroSearchFilterParams = (name?: string) => {
  return useQuery({
    queryKey: ["Hero-data-filter", { name: name }],
    queryFn: () => searchHeroAction({ name: name }),
    staleTime: 1000 * 60 * 5, //5 minutos
  });
};
