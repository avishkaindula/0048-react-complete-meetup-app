import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  return (
    <li className={classes.item}>
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
        <button>To Favorites</button>
      </div>
    </li>
  );
}

export default MeetupItem;
