/**
 * Interfaz principal del modelo Hero.
 * Representa un superhéroe o villano obtenido del backend.
 * El campo image se completa con la URL base en las actions.
 * slug se usa para la ruta dinámica /heroe/:idSlug.
 */
export interface Hero {
  id: string;
  name: string;
  slug: string;
  alias: string;
  powers: string[];
  description: string;
  strength: number;
  intelligence: number;
  speed: number;
  durability: number;
  team: string;
  image: string;
  firstAppearance: string;
  status: string;
  category: string;
  universe: string;
}
