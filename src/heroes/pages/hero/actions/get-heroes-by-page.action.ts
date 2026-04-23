import type { HeroesResponse } from "@/heroes/types/get-heroes.response";
import { HeroApi } from "../api/hero.api";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroesByPageAction = async (
  page: number,
  limit: number,
  category: string,
): Promise<HeroesResponse> => {
  console.log({ page }, { limit });

  if (isNaN(page)) {
    page = 1;
  }

  if (isNaN(limit)) {
    limit = 6;
  }

  const { data } = await HeroApi.get<HeroesResponse>("/", {
    params: {
      limit: limit,
      offset: (page - 1) * limit,
      category: category,
    },
  });

  console.log("llamando a la api valecita");

  const heroes = data.heroes.map((heroe) => ({
    ...heroe,
    image: `${BASE_URL}/images/${heroe.image}`,
  }));

  return {
    ...data,
    heroes: heroes,
  };
};
