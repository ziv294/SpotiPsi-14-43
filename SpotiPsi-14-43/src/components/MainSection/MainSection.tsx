import useStyles from "./MainSectionStyles";
import Menu from "./SideBar/SideBar.tsx"
import Content from "./MainSection/Pages/AllSongs/AllSongs.tsx"
import type React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const AllSongsPage: React.FC = () => {
  return (
    <div>
      <Content />
    </div>
  )
}

const PlaylistsPage: React.FC = () => {
  return (
    <div>
      <Content />
    </div>
  )
}

const FavoritesPage: React.FC = () => {
  return (
    <div>
      <Content />
    </div>
  )
}

const MainSection: React.FC = () => {
  const classes = useStyles();

  return (
  <div className={classes.container}>
    <Menu />
    <div className={classes.content}>
        <Router>
          <Routes>
            <Route path="/" element={<AllSongsPage/>}></Route>
            <Route path="/playlists" element={<PlaylistsPage/>}></Route>
            <Route path="/favorites" element={<FavoritesPage/>}></Route>
          </Routes>
        </Router>
    </div>
    
    
    
  </div>
  )
}

export default MainSection