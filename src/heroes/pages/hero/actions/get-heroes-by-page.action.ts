/**
 * Obtiene una página de héroes con paginación y filtro por categoría.
 * El backend recibe limit y offset (calculado como (page-1) * limit).
 * Si page o limit son NaN, se asignan valores por defecto (1 y 6).
 * Las imágenes se completan con la URL base del servidor.
 */
import type { HeroesResponse } from "@/heroes/types/get-heroes.response";
import { HeroApi } from "../api/hero.api";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroesByPageAction = async (page: number, limit: number, category: string): Promise<HeroesResponse> => {
  if (isNaN(page)) page = 1;
  if (isNaN(limit)) limit = 6;

  const { data } = await HeroApi.get<HeroesResponse>("/", {
    params: { limit, offset: (page - 1) * limit, category },
  });

  const heroes = data.heroes.map((heroe) => ({
    ...heroe, image: `${BASE_URL}/images/${heroe.image}`,
  }));

  return { ...data, heroes };
};
