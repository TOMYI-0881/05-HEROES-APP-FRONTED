import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import type { Hero } from "../types/heroes.interface";

interface FavoriteHeroContex {
  //State
  favorites: Hero[];
  favoriteCount: number;

  //Methods
  isFavorite: (hero: Hero) => boolean;
  toggleFavorite: (hero: Hero) => void;
}

const getFavoritesFromLocalStorage = (): Hero[] => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

//creamos contexto
export const FavoriteHeroContexx = createContext({} as FavoriteHeroContex);

export const FavoriteHeroContextProvider = ({
  children,
}: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Hero[]>(
    getFavoritesFromLocalStorage(),
  );

  //validar el estadode favoritos y crear acciones
  const toggleFavorite = (hero: Hero) => {
    const heroExist = favorites.find((h) => h.id === hero.id);

    //si existe, lo quitamos
    if (heroExist) {
      const newFavorites = favorites.filter((h) => h.id !== hero.id);
      setFavorites(newFavorites);
      return;
    }

    //si no existe, lo agregamos
    setFavorites([...favorites, hero]);
  };

  //saber si un heroe esta en favoritos
  const isFavorite = (hero: Hero) => {
    return favorites.some((h) => h.id === hero.id);
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoriteHeroContexx
      value={{
        favorites: favorites,
        favoriteCount: favorites.length,

        //methods
        isFavorite: isFavorite,
        toggleFavorite: toggleFavorite,
      }}
    >
      {children}
    </FavoriteHeroContexx>
  );
};
