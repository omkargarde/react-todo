/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addFavorite: (favoriteMeetup: any) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  removeFavorite: (meetupId: any) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  itemIsFavorite: (meetupId: any) => {},
});

export function FavoritesContextProvider(props: any) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoritesHandler(favoriteMeetup: any) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoritesHandler(meetupId: any) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => {
        return meetup.id !== meetupId;
      });
    });
  }

  function itemIsFavoriteHandler(meetupId: any) {
    return userFavorites.some((meetup) => {
      return meetup.id === meetupId;
    });
  }
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoritesHandler,
    removeFavorite: removeFavoritesHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
