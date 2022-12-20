import classes from "./Card.module.css";

function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}
// This should now be the first custom component which we
// can wrap around jsx components.

export default Card;
