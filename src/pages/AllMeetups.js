import { useState } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  fetch(
    "https://react-complete-meetup-app-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setIsLoading(false);
      setLoadedMeetups(data);
    });

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  // This Loading <p> will be shown while the meetups data is been fetched from the
  // firebase database. And once the fetching is finished, .then((data))
  // on above will set setIsLoading(false) and it will stop showing this Loading <p>
  // showing and start showing the jsx elements below.

  return (
    <section>
      <h1>All Meetups</h1>
      <ul>
        {/* {DUMMY_DATA.map((meetup) => {
          return <li key={meetup.id}>{meetup.title}</li>;
          // This will return all title values of the properties of
          // DUMMY_DATA array as Unordered list items.
        })} */}
        {/* <MeetupList meetups={DUMMY_DATA} /> */}
        <MeetupList meetups={loadedMeetups} />
        {/* This meetups is the prop we use in MeetupList.js file */}
      </ul>
    </section>
  );
}

export default AllMeetupsPage;
