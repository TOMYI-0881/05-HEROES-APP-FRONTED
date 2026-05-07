import type { Hero } from "@/heroes/types/heroes.interface";
import { HeroApi } from "../api/hero.api";

export interface Options {
  name?: string;
  team?: string;
  category?: string;
  universe?: string;
  status?: string;
  strength?: string;
}

const BASE_URL = import.meta.env.VITE_API_URL;

export const searchHeroAction = async (options: Options) => {
  const { name, team, category, universe, status, strength } = options;

  if (!name && !team && !category && !universe && !status && !strength) {
    return [];
  }
  const { data } = await HeroApi.get<Hero[]>("/search", {
    params: {
      name,
      team,
      category,
      universe,
      status,
      strength,
    },
  });
  return data.map((heroe) => ({
    ...heroe,
    image: `${BASE_URL}/images/${heroe.image}`,
  }));
};
