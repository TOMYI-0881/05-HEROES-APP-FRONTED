import type { SumaryInformationResponse } from "@/heroes/types/sumary-information.response";
import { HeroApi } from "../api/hero.api";

export const getSumaryAction = async () => {
  const { data } = await HeroApi.get<SumaryInformationResponse>("/summary");

  return data;
};
