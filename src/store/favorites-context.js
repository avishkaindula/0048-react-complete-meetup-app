import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);
  // userFavorites is an array of user favorites

  function addFavoriteHandler(favoriteMeetup) {
    // setUserFavorites(userFavorites.concat(favoriteMeetup));
    // We need to setUserFavorites() to old array plus the
    // new array provided through favoriteMeetup.
    // concat is like push, but returns a new array.
    // There can be scenarios where the state snapshot does not
    // really reflect the latest state because the last state update
    // is not processed yet. So we need to use the following alternative approach
    // if we depend on the last state snapshot.
    setUserFavorites((prevUserFavorites) => {
      // This function will automatically receive the previous state snapshot.
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
      // prevUserFavorites is an array. So we can use filter() on that.
      // this will drop the item from the array which has the value of meetupId.
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
    // If we have a meetup in the userFavorites array which has the meetupId,
    // this will return true.
    // It means this is for checking whether the userFavorites array has
    // any meetup or not.
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
