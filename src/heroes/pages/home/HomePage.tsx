import { Heart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomJumbotron from "@/components/custom/CustomJumbotron";
import { HeroStats } from "../hero/components/HeroStats";
import { HeroGrid } from "../hero/components/HeroGrid";
import { useState } from "react";
import CustomPagination from "@/components/custom/CustomPagination";
import CustomBreadcrumbs from "@/components/custom/CustomBreadcrumbs";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "favorites" | "heroes" | "villains"
  >("all");
  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Universo de los SuperHeroes"
        description="Descrubre, explora y administra super heroes y villanos"
      />

      <CustomBreadcrumbs />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Tabs */}
      <Tabs value={activeTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
            All Characters (16)
          </TabsTrigger>
          <TabsTrigger
            value="favorites"
            className="flex items-center gap-2"
            onClick={() => setActiveTab("favorites")}
          >
            <Heart className="h-4 w-4" />
            Favorites (3)
          </TabsTrigger>
          <TabsTrigger value="heroes" onClick={() => setActiveTab("heroes")}>
            Heroes (12)
          </TabsTrigger>
          <TabsTrigger
            value="villains"
            onClick={() => setActiveTab("villains")}
          >
            Villains (2)
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <h1>todos los personajes</h1>
          {/* Hero Cards */}
          <HeroGrid />
        </TabsContent>
        <TabsContent value="favorites">
          <h1>personajes favoritos</h1>
          {/* Hero Cards */}
          <HeroGrid />
        </TabsContent>
        <TabsContent value="heroes">
          <h1>heroes</h1>
          {/* Hero Cards */}
          <HeroGrid />
        </TabsContent>
        <TabsContent value="villains">
          <h1>villanos</h1>
          {/* Hero Cards */}
          <HeroGrid />
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
      <CustomPagination totalPages={3} />
    </>
  );
};
