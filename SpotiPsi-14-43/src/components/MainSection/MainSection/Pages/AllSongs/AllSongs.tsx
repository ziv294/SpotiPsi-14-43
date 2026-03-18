import { useEffect, useState } from "react";
import useStyles from "./AllSongs";

type Song = {
  id: string;
  name: string;
  artist: string;
};

const MainSection: React.FC = () => {
  const classes = useStyles();

  const [songs, setSongs] = useState<Song[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  const fetchSongs = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5001/api/songs");
      const data = await response.json();

      setSongs(data);
    } catch (error) {
      console.error(error);
      setError("Something went wrong");
      return;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSongs();
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

      {isLoading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {!isLoading && !error && (
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
                    }`}
                  >
                    ❤︎
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MainSection;