/**
 * Obtiene un héroe individual por su slug (idSlug).
 * La imagen se completa con la URL base del servidor
 * para que sea accesible desde el frontend (ruta /images/).
 */
import { HeroApi } from "../api/hero.api";
import type { Hero } from "@/heroes/types/heroes.interface";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroAction = async (idSlug: string): Promise<Hero> => {
  const { data } = await HeroApi.get<Hero>(`/${idSlug}`);
  return { ...data, image: `${BASE_URL}/images/${data.image}` };
};
