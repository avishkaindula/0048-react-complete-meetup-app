import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        // .meetups is a name created by us.
        // It will assign an array of objects into an array of jsx elements.
        // We need to pass the values needed for .meetup through the <MeetupList meetups={DUMMY_DATA}> in
        // AllMeetups.js file
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
