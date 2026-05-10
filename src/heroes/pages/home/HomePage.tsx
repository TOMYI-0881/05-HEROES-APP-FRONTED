/**
 * Página principal (Home) con dashboard, pestañas y paginación.
 * Ruta: / (index)
 *
 * Secciones:
 * 1. CustomJumbotron → encabezado con título animado
 * 2. CustomBreadcrumbs → navegación (Home / super Heroes)
 * 3. HeroStats → 4 tarjetas de resumen (total, favoritos, más fuerte, más inteligente)
 * 4. Tabs → All Characters, Favorites, Heroes, Villains
 * 5. HeroGrid → grilla de tarjetas filtrada por pestaña
 * 6. CustomPagination → paginación (oculta en pestaña Favorites)
 *
 * Los parámetros de URL (section, page, limit, category) se gestionan
 * con useHeroesSearchParams. Los datos vienen de usePaginationHero.
 * Favorites no usa paginación porque los datos están en el contexto local.
 */
import { Heart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomJumbotron from "@/components/custom/CustomJumbotron";
import { HeroStats } from "../hero/components/HeroStats";
import { HeroGrid } from "../hero/components/HeroGrid";
import CustomPagination from "@/components/custom/CustomPagination";
import CustomBreadcrumbs from "@/components/custom/CustomBreadcrumbs";
import { useHeroesSumary } from "@/heroes/hooks/useHeroesSumary";
import { usePaginationHero } from "@/heroes/hooks/usePaginationHero";
import { useHeroesSearchParams } from "@/heroes/hooks/useHeroesSearchParams";
import { use } from "react";
import { FavoriteHeroContexx } from "@/heroes/context/FavoriteHeroContext";

export const HomePage = () => {
  const { favoriteCount, favorites } = use(FavoriteHeroContexx);
  // const { data: heroesResponse } = useQuery({
  //   queryKey: ["heroes", { page: page, limit: limit }],
  //   queryFn: () => getHeroesByPage(+page, +limit),
  //   staleTime: 1000 * 60 * 5, //5 minutos
  // });

  //el useEffect es remplazado por el useQuery en todo lo que se relaciona con la llamada de una api
  // useEffect(() => {
  //   getHeroesByPage()
  //     .then((heroes) => {
  //       console.log({ heroes });
  //     })
  //     .catch(() => console.log("nalgas, error al llamar a la api"));
  // });

  //obtener valores de la URL
  const { page, limit, category, selectTab, handleSearchParams } =
    useHeroesSearchParams();

  //Llamamos api filtrada por los parametros
  const { data: heroesResponse } = usePaginationHero({
    page: page,
    limit: limit,
    category: category,
  });
  console.log({ heroesResponse });

  // const queryClient = useQueryClient();

  // const heroesSummary = queryClient.getQueryData<SumaryInformationResponse>([
  //   "totalHeroesSummary",
  // ]);

  //llamamos API para mostrar datos de los TABS
  const { data: heroesSummary } = useHeroesSumary();

  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Universo de los SuperHeroes"
        description="Descrubre, explora y administra super heroes y villanos"
      />

      <CustomBreadcrumbs
        currentPage="super Heroes"
        // breadCrumbs={[
        //   { label: "heroes", to: "/" },
        //   { label: "heroes", to: "/" },
        //   { label: "heroes", to: "/" },
        //   { label: "heroes", to: "/" },
        // ]}
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Tabs */}
      <Tabs value={selectTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger
            value="all"
            onClick={() => handleSearchParams("all", "all")}
          >
            All Characters ({heroesSummary?.totalHeroes})
          </TabsTrigger>
          <TabsTrigger
            value="favorites"
            className="flex items-center gap-2"
            onClick={() => handleSearchParams("favorites", "all")}
          >
            <Heart className="h-4 w-4" />
            Favorites ({favoriteCount})
          </TabsTrigger>
          <TabsTrigger
            value="heroes"
            onClick={() => handleSearchParams("heroes", "hero")}
          >
            Heroes ({heroesSummary?.heroCount})
          </TabsTrigger>
          <TabsTrigger
            value="villains"
            onClick={() => handleSearchParams("villains", "villain")}
          >
            Villains ({heroesSummary?.villainCount})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          {/* Hero Cards */}
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>
        <TabsContent value="favorites">
          {/* Hero Cards */}
          <HeroGrid heroes={favorites} />
        </TabsContent>
        <TabsContent value="heroes">
          {/* Hero Cards */}
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>
        <TabsContent value="villains">
          {/* Hero Cards */}
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>
      </Tabs>

      {/* Results info */}
      {/* <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <p className="text-gray-600">Showing 6 of 16 characters</p>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Filter className="h-3 w-3" />
              Filtered
            </Badge>
          </div>
        </div>
        */}

      {/* Pagination */}
      {selectTab !== "favorites" && (
        <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
      )}
    </>
  );
};
