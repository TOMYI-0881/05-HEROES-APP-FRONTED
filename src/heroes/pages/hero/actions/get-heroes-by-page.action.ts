import type { HeroesResponse } from "@/heroes/types/get-heroes.response";
import { HeroApi } from "../api/hero.api";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroesByPage = async (
  page: number,
  limit: number = 6,
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
    },
  });

  const heroes = data.heroes.map((heroe) => ({
    ...heroe,
    image: `${BASE_URL}/images/${heroe.image}`,
  }));

  return {
    ...data,
    heroes: heroes,
  };
};
