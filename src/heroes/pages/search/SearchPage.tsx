import CustomJumbotron from "@/components/custom/CustomJumbotron";
import SearchControler from "./ui/SearchControler";
import { HeroStats } from "../hero/components/HeroStats";
import { HeroGrid } from "../hero/components/HeroGrid";
import { useHeroSearchFilterParams } from "@/heroes/hooks/useHeroSearchFilterParams";
import { Navigate, useSearchParams } from "react-router";
import { HeroesLayouts } from "@/heroes/layouts/HeroesLayouts";

export const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name") ?? undefined;

  const { data: hereosFilter = [] } = useHeroSearchFilterParams(name);

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

      {hereosFilter.length === 0 ? (
        <span>no hay datos que mostrar</span>
      ) : (
        <HeroGrid heroes={hereosFilter} />
      )}
    </>
  );
};

export default SearchPage;
