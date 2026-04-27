import { createContext, useState, type PropsWithChildren } from "react";
import type { Hero } from "../types/heroes.interface";

interface FavoriteHeroContex {
  //State
  favorites: Hero[];
  favorteCount: number;

  //Methods
  isFavorite: (hero: Hero) => boolean;
  toggleFavorite: (hero: Hero) => void;
}

//creamos contexto
export const FavoriteHeroContex = createContext({} as FavoriteHeroContex);

export const FavoriteHeroContextProvider = ({
  children,
}: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Hero[]>([]);

  //validar el estadode favoritos y crear acciones
  const toggleFavorite = (hero: Hero) => {
    const heroExist = favorites.find((h) => h.id === hero.id);

    //si existe, lo quitamos
    if (heroExist) {
      const newFavorites = favorites.filter((h) => h.id !== hero.id);
      setFavorites(newFavorites);
    }

    //si no existe, lo agregamos
    setFavorites([...favorites, hero]);
  };

  //saber si un heroe esta en favoritos
  const isFavorite = (hero: Hero) => {
    return favorites.some((h) => h.id === hero.id);
  };

  return (
    <FavoriteHeroContex
      value={{
        favorites: favorites,
        favorteCount: favorites.length,
        isFavorite: isFavorite,
        toggleFavorite: toggleFavorite,
      }}
    >
      {children}
    </FavoriteHeroContex>
  );
};
