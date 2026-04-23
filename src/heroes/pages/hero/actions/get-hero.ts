import { HeroApi } from "../api/hero.api";
import type { Hero } from "@/heroes/types/heroes.interface";

const BASE_URL = import.meta.env.VITE_API_URL;

const getGero = async (idSlug: string): Promise<Hero> => {
  const { data } = await HeroApi.get<Hero>(`/${idSlug}`);

  return {
    ...data,
    image: `${BASE_URL}/images/${data.image}`,
  };
};
