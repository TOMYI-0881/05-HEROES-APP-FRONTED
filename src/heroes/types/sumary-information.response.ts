/**
 * Respuesta del endpoint /summary.
 * totalHeroes → cantidad total de personajes
 * heroCount → cantidad de héroes
 * villainCount → cantidad de villanos
 * strongestHero → el héroe con mayor strength
 * smartestHero → el héroe con mayor intelligence
 */
import type { Hero } from "./heroes.interface";

export interface SumaryInformationResponse {
  totalHeroes: number;
  strongestHero: Hero;
  smartestHero: Hero;
  heroCount: number;
  villainCount: number;
}
