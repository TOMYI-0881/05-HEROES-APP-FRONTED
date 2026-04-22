import { useMemo } from "react";
import { useSearchParams } from "react-router";

export const useHeroesSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTabParams = searchParams.get("section") ?? "all";
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "6";

  //tener persitencia en la url
  const handleSearchParams = (section: string) => {
    setSearchParams((prev) => {
      prev.set("section", section);
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
    selectTab,

    handleSearchParams,
  };
};
