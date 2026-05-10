/**
 * Respuesta del endpoint de héroes paginados.
 * total → número total de héroes (sin paginar)
 * pages → cantidad total de páginas
 * heroes → array de héroes de la página actual
 */
import type { Hero } from "./heroes.interface";

export interface HeroesResponse {
  total: number;
  pages: number;
  heroes: Hero[];
}
