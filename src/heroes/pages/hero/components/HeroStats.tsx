/**
 * Dashboard de estadísticas principal.
 * Muestra 4 tarjetas con datos resumidos:
 * 1. Total de personajes (héroes + villanos)
 * 2. Favoritos (con porcentaje del total)
 * 3. Héroe más fuerte (alias + strength)
 * 4. Héroe más inteligente (alias + intelligence)
 *
 * Los datos vienen de useHeroesSumary() (TanStack Query).
 * El contador de favoritos viene del contexto FavoriteHeroContexx.
 */
import { Badge } from "@/components/ui/badge";
import { Heart, Trophy, Users, Zap } from "lucide-react";
import { HeroStatCard } from "./HeroStatCard";
import { useHeroesSumary } from "@/heroes/hooks/useHeroesSumary";
import { use } from "react";
import { FavoriteHeroContexx } from "@/heroes/context/FavoriteHeroContext";

export const HeroStats = () => {
  const { data: heroesSummary, isLoading } = useHeroesSumary();
  const { favoriteCount } = use(FavoriteHeroContexx);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <HeroStatCard
        title="Total de personajes"
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-2xl font-bold">
          {isLoading ? "cargando" : heroesSummary?.totalHeroes}
        </div>
        <div className="flex gap-1 mt-2">
          <Badge variant="secondary" className="text-xs">
            {heroesSummary?.heroCount} Heroes
          </Badge>
          <Badge variant="destructive" className="text-xs">
            {heroesSummary?.villainCount} Villains
          </Badge>
        </div>
      </HeroStatCard>

      <HeroStatCard
        title="Favoritos"
        icon={<Heart className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-2xl font-bold text-red-600">{favoriteCount}</div>
        <p className="text-xs text-muted-foreground">
          {heroesSummary?.heroCount === undefined
            ? 0
            : ((favoriteCount / heroesSummary?.totalHeroes) * 100).toFixed(2)}
          % of total
        </p>
      </HeroStatCard>

      <HeroStatCard
        title="Fuerte"
        icon={<Zap className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-lg font-bold">
          {heroesSummary?.strongestHero.alias}
        </div>
        <p className="text-xs text-muted-foreground">
          Strength: {heroesSummary?.strongestHero.strength}/10
        </p>
      </HeroStatCard>

      <HeroStatCard
        title="Inteligente"
        icon={<Trophy className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-lg font-bold">
          {heroesSummary?.smartestHero.alias}
        </div>
        <p className="text-xs text-muted-foreground">
          Intelligence: {heroesSummary?.smartestHero.intelligence}/10
        </p>
      </HeroStatCard>
    </div>
  );
};
