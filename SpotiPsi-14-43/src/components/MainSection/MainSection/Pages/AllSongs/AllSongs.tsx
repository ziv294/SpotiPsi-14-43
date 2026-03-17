import { useEffect, useState } from "react";
import useStyles from "./AllSongs";

type Song = {
  id: string;
  title: string;
  artist: string;
};

const MainSection: React.FC = () => {
  const classes = useStyles();
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/songs")
      .then((res) => res.json())
      .then((data) => setSongs(data))
      .catch((err) => console.error("Error fetching songs:", err));
  }, []);

  return (
    <div className={classes.songsContainer}>
      <h1 className={classes.title}>כל השירים</h1>

      <div className={classes.songsList}>
        {songs.map((song) => (
          <div key={song.id} className={classes.songItem}>
            <span>{song.title}</span>
            <span>{song.artist}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSection;