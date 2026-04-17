import { HeroApi } from "../api/hero.api";

export const getHeroesByPage = async () => {
  const { data } = await HeroApi.get("/");
  console.log({ data });
  return data;
};
