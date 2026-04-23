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

export const HomePage = () => {
  // const { data: heroesResponse } = useQuery({
  //   queryKey: ["heroes", { page: page, limit: limit }],
  //   queryFn: () => getHeroesByPage(+page, +limit),
  //   staleTime: 1000 * 60 * 5, //5 minutos
  // });

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
            Favorites (3)
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
          <h1>personajes favoritos</h1>
          {/* Hero Cards */}
          <HeroGrid heroes={[]} />
        </TabsContent>
        <TabsContent value="heroes">
          <h1>heroes</h1>
          {/* Hero Cards */}
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>
        <TabsContent value="villains">
          <h1>villanos</h1>
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
      <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
    </>
  );
};
