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
  const [favorites, setFavorites] = useState<string[]>([]); 

  useEffect(() => {
    fetch("http://localhost:5001/api/songs")
      .then((res) => res.json())
      .then((data) => setSongs(data))
      .catch((err) => console.error("Error fetching songs:", err));
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((songId) => songId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className={classes.songsContainer}>
      <h1 className={classes.title}>כל השירים</h1>

      <div className={classes.songsList}>
        {songs.map((song) => {
          const isFav = favorites.includes(song.id);

          return (
            <div key={song.id} className={classes.songRow}>

              <div className={classes.left}>
                <div className={classes.play}>▶</div>
                {song.name} - {song.artist}
              </div>

              <div className={classes.right}>
                <span>✚</span>

                <span
                  onClick={() => toggleFavorite(song.id)}
                  className={`${classes.heart} ${
                    isFav ? classes.activeHeart : ""
                  }`}>❤︎</span>

              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainSection;