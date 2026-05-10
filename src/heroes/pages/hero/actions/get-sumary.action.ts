/**
 * Obtiene el resumen estadístico de todos los héroes desde el backend.
 * Endpoint: GET /summary
 * Devuelve: totalHeroes, strongestHero, smartestHero, heroCount, villainCount.
 */
import type { SumaryInformationResponse } from "@/heroes/types/sumary-information.response";
import { HeroApi } from "../api/hero.api";

export const getSumaryAction = async () => {
  const { data } = await HeroApi.get<SumaryInformationResponse>("/summary");
  return data;
};
