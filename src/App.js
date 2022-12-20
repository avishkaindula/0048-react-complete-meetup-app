import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          {/* this paths are the urls like localhost:3000/new-meetup */}
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
      {/* If we don't wrap the routes from switch, when we */}
      {/* enter "/favorites" as url, the content of both "/" and "/favorites" */}
      {/* will be displayed. To prevent that, we need to wrap the */}
      {/* urls inside Switch and add "exact" prop to the "/" path */}
    </Layout>
  );
}

export default App;
