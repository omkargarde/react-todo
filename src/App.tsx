import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetups";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage></AllMeetupsPage>}></Route>

        <Route
          path="/New-meetup"
          element={<NewMeetupsPage></NewMeetupsPage>}
        ></Route>

        <Route
          path="/favorites"
          element={<FavoritesPage></FavoritesPage>}
        ></Route>
      </Routes>
    </Layout>
  );
}
