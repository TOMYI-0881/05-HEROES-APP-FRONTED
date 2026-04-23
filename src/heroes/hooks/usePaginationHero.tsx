import { useQuery } from "@tanstack/react-query";
import { getHeroesByPageAction } from "../pages/hero/actions/get-heroes-by-page.action";

interface Props {
  page: string;
  limit: string;
  category: string;
}

export const usePaginationHero = ({ page, limit, category }: Props) => {
  return useQuery({
    queryKey: ["heroes", { page: page, limit: limit, category: category }],
    queryFn: () => getHeroesByPageAction(+page, +limit, category),
    staleTime: 1000 * 60 * 5, //5 minutos
  });
};
