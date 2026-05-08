import { useQuery } from "@tanstack/react-query";
import {
  searchHeroAction,
  type Options,
} from "../pages/hero/actions/search-heroes.action";

export const useHeroSearchFilterParams = ({
  name,
  category,
  status,
  strength,
  team,
  universe,
}: Options) => {
  return useQuery({
    queryKey: [
      "Hero-data-filter",
      { name: name, strength: strength, team, category, universe, status },
    ],
    queryFn: () =>
      searchHeroAction({
        name: name,
        strength: strength,
        team,
        category,
        universe,
        status,
      }),
    staleTime: 1000 * 60 * 5, //5 minutos
  });
};
