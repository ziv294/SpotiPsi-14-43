import { useEffect, useState } from "react";
import useStyles from "../AllSongs/AllSongs.ts"; // ⚠️ אותו style כמו AllSongs

type Song = {
  id: string;
  name: string;
  artist: string;
};

const Favorites: React.FC = () => {
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

  const fetchFavorites = async () => {
    try {
      const res = await fetch("http://localhost:5001/api/favorites");
      const data = await res.json();
      setFavorites(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSongs();
    fetchFavorites();
  }, []);

  // 🔥 אותו toggle כמו AllSongs
  const toggleFavorite = async (id: string) => {
    try {
      const isFavorite = favorites.includes(id);

      const url = isFavorite
        ? "http://localhost:5001/api/favorites/remove"
        : "http://localhost:5001/api/favorites/add";

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ songId: id }),
      });

      const updatedFavorites = await res.json();
      setFavorites(updatedFavorites);
    } catch (err) {
      console.error(err);
    }
  };

  // 🔥 ההבדל היחיד: סינון
  const favoriteSongs = songs.filter((song) =>
    favorites.includes(song.id)
  );

  return (
    <div className={classes.songsContainer}>
      <h1 className={classes.title}>המועדפים שלי</h1>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {!isLoading && !error && (
        <div className={classes.songsList}>
          {favoriteSongs.length === 0 && <p>אין מועדפים עדיין</p>}

          {favoriteSongs.map((song) => {
            const isFav = true; // כי זה כבר מועדפים

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
                    className={`${classes.heart} ${classes.activeHeart}`}
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

export default Favorites;