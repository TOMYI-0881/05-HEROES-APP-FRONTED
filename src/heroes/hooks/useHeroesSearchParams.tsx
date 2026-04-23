import { useMemo } from "react";
import { useSearchParams } from "react-router";

export const useHeroesSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTabParams = searchParams.get("section") ?? "all";
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "6";
  const category = searchParams.get("category") ?? "all";

  //tener persitencia en la url
  const handleSearchParams = (section: string, category: string = "all") => {
    setSearchParams((prev) => {
      prev.set("section", section);
      prev.set("category", category);
      prev.set("page", "1");
      return prev;
    });
  };

  //manjear parametros desconocidos dentro de la url
  const selectTab = useMemo(() => {
    const validTabs = ["all", "favorites", "heroes", "villains"];
    return validTabs.includes(activeTabParams) ? activeTabParams : "all";
  }, [activeTabParams]);

  return {
    page,
    limit,
    category,
    selectTab,

    handleSearchParams,
  };
};
