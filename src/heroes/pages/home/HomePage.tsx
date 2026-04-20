import { Heart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomJumbotron from "@/components/custom/CustomJumbotron";
import { HeroStats } from "../hero/components/HeroStats";
import { HeroGrid } from "../hero/components/HeroGrid";
import CustomPagination from "@/components/custom/CustomPagination";
import CustomBreadcrumbs from "@/components/custom/CustomBreadcrumbs";
import { getHeroesByPage } from "../hero/actions/get-heroes-by-page.action";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTabParams = searchParams.get("section") ?? "all";

  // useEffect(() => {
  //   getHeroesByPage()
  //     .then((heroes) => {
  //       console.log({ heroes });
  //     })
  //     .catch(() => console.log("nalgas, error al llamar a la api"));
  // });

  const { data: heroesResponse } = useQuery({
    queryKey: ["heroes"],
    queryFn: () => getHeroesByPage(),
    staleTime: 1000 * 60 * 5, //5 minutos
  });

  console.log({ heroesResponse });

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
      <Tabs value={activeTabParams} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger
            value="all"
            onClick={() =>
              setSearchParams((prev) => {
                prev.set("section", "all");
                return prev;
              })
            }
          >
            All Characters (16)
          </TabsTrigger>
          <TabsTrigger
            value="favorites"
            className="flex items-center gap-2"
            onClick={() =>
              setSearchParams((prev) => {
                prev.set("section", "favorites");
                return prev;
              })
            }
          >
            <Heart className="h-4 w-4" />
            Favorites (3)
          </TabsTrigger>
          <TabsTrigger
            value="heroes"
            onClick={() =>
              setSearchParams((prev) => {
                prev.set("section", "heroes");
                return prev;
              })
            }
          >
            Heroes (12)
          </TabsTrigger>
          <TabsTrigger
            value="villains"
            onClick={() =>
              setSearchParams((prev) => {
                prev.set("section", "villains");
                return prev;
              })
            }
          >
            Villains (2)
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
          <HeroGrid heroes={[]} />
        </TabsContent>
        <TabsContent value="villains">
          <h1>villanos</h1>
          {/* Hero Cards */}
          <HeroGrid heroes={[]} />
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
      <CustomPagination totalPages={5} />
    </>
  );
};
