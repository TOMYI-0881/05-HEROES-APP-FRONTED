import { useQuery } from "@tanstack/react-query";
import { getSumaryAction } from "../pages/hero/actions/get-sumary.action";

export const useHeroesSumary = () => {
  return useQuery({
    queryKey: ["totalHeroesSummary"],
    queryFn: getSumaryAction,
    staleTime: 1000 * 60 * 5, //5 minutos
  });
};
