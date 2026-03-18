import useStyles from "./MainSectionStyles";
import Menu from "./SideBar/SideBar";
import Content from "./MainSection/Pages/AllSongs/AllSongs.tsx";
import type React from "react";
import Favorites from "./MainSection/Pages/Favorites/Favorites.tsx";
import Platlists from "./MainSection/Pages/Platlists/Playlists.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const AllSongsPage: React.FC = () => {
  return <Content />;
};

const PlaylistsPage: React.FC = () => {
  return <Platlists />;
};

const FavoritesPage: React.FC = () => {
  return <Favorites />;
};

const MainSection: React.FC = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.container}>
        <Menu />

        <div className={classes.content}>
          <Routes>
            <Route path="/" element={<AllSongsPage />} />
            <Route path="/playlists" element={<PlaylistsPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default MainSection;