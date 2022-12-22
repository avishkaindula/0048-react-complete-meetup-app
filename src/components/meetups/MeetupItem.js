import { useContext } from "react";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
  // This will return true if the item is marked as a favorite

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
      // This means if a item is already a favorite,
      // hitting the favorites button will remove it from the
      // favorites list.
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
      // This will add the meetup item to the favorite list when the favorites button
      // is clicked. This if else block will make sure that a meetup will be added to
      // the favorites page only if that meetup isn't added to the favorites page already.
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
          {/* => adding props paramter to the MeetupItem() function. */}
          {/* => the props used in that function will be provided when we */}
          {/* *  import <MeetupItem /> to MeetupList() function of MeetupList.js */}
          {/* *  file. We will define the data needed fro key, id, image, title, address */}
          {/* *  and description props in there. */}
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
