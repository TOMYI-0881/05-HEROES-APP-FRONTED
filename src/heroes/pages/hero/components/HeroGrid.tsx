/**
 * Grilla de tarjetas de héroes responsive.
 * Muestra 1 columna en móvil, 2 en tablet, 3 en desktop.
 * Cada héroe se renderiza mediante HeroGridCard.
 */
import type { Hero } from "@/heroes/types/heroes.interface";
import { HeroGridCard } from "./HeroGridCard";

interface Props {
  heroes: Hero[];
}

export const HeroGrid = ({ heroes }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {heroes.map((i) => (
        <HeroGridCard key={i.id} heroe={i} />
      ))}
    </div>
  );
};
