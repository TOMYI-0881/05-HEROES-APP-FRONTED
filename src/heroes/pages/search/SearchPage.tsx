/**
 * Página de búsqueda de superhéroes con filtros avanzados.
 * Ruta: /search
 *
 * Lee los parámetros de la URL (name, strength, team, category, universe, status)
 * y los pasa a useHeroSearchFilterParams para hacer la consulta al backend.
 *
 * Contenido dinámico:
 *  - Sin búsqueda: "busca un heroe por su nombre"
 *  - Búsqueda sin resultados: "no hay datos encontrado"
 *  - Con resultados: HeroGrid con los héroes filtrados
 */
import CustomJumbotron from "@/components/custom/CustomJumbotron";
import SearchControler from "./ui/SearchControler";
import { HeroStats } from "../hero/components/HeroStats";
import { HeroGrid } from "../hero/components/HeroGrid";
import { useHeroSearchFilterParams } from "@/heroes/hooks/useHeroSearchFilterParams";
import { useSearchParams } from "react-router";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name") ?? "";
  //valisdamos si hay un termino de busqueda para mostrar un mensaje diferente
  const hasSearch = name?.trim().length > 0;

  const strength = searchParams.get("strength") ?? undefined;
  const team = searchParams.get("team") ?? undefined;
  const category = searchParams.get("category") ?? undefined;
  const universe = searchParams.get("universe") ?? undefined;
  const status = searchParams.get("status") ?? undefined;

  // if (team === "Ninguno") team = undefined;
  // if (category === "Ninguno") category = undefined;
  // if (universe === "Ninguno") universe = undefined;
  // if (status === "Ninguno") status = undefined;

  //llamamos API para mostrar datos filtrados por el termino de busqueda
  const { data: heroesFilter = [] } = useHeroSearchFilterParams({
    name,
    strength,
    team,
    category,
    universe,
    status,
  });

  //contenido dinamico dependiendo del estado de la busqueda
  let contenido = <span>busca un heroe por su nombre</span>;

  //si hay un termino de busqueda pero no hay resultados, mostramos un mensaje diferente
  if (hasSearch && heroesFilter.length === 0) {
    contenido = <span>no hay datos encontrado</span>;
  } else if (heroesFilter.length > 0) {
    contenido = <HeroGrid heroes={heroesFilter} />;
  }

  return (
    <>
      <CustomJumbotron
        title="Busqueda de SuperHeroes"
        description="Descrubre, explora y administra super heroes y villanos"
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Controls */}
      <SearchControler />

      {/* Hero Grid */}
      {contenido}
    </>
  );
};

export default SearchPage;
