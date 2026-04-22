import { useQuery } from "@tanstack/react-query";
import { getHeroesByPage } from "../pages/hero/actions/get-heroes-by-page.action";

interface Props {
  page: string;
  limit: string;
}

export const usePaginationHero = ({ page, limit }: Props) => {
  return useQuery({
    queryKey: ["heroes", { page: page, limit: limit }],
    queryFn: () => getHeroesByPage(+page, +limit),
    staleTime: 1000 * 60 * 5, //5 minutos
  });
};
