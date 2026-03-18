import { useEffect, useState } from "react";
import useStyles from "./AllSongs";

type Song = {
  id: string;
  name: string;
  artist: string;
};

const AllSongs: React.FC = () => {
  const classes = useStyles();

  const [songs, setSongs] = useState<Song[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  const [playlists, setPlaylists] = useState<{ id: string, name: string, songIds: string[] }[]>([]);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const fetchSongs = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5001/api/songs");
      const data = await response.json();

      setSongs(data);
    }
    catch (error) {
      console.error(error);
      setError("Something went wrong");
      return;
    }
    finally {
      setIsLoading(false);
    }
  };

  const fetchFavorites = async () => {
    try {
      const res = await fetch("http://localhost:5001/api/favorites");
      const data = await res.json();
      setFavorites(data);
    }
    catch (err) {
      console.error(err);
    }
  };

  const fetchPlaylists = async () => {
    try {
      const res = await fetch("http://localhost:5001/api/playlists");
      const data = await res.json();
      setPlaylists(data);
    }
    catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSongs();
    fetchFavorites();
    fetchPlaylists();
  }, []);

  const addToPlaylist = async (playlistId: string, songId: string) => {
    try {
      await fetch(`http://localhost:5001/api/playlists/${playlistId}/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ playlistId, songId }),
      });

      setOpenMenuId(null);

    }
    catch (err) {
      console.error(err);
    }
  };

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
                  <div style={{position: "relative"}}>
                    <span onClick={() => setOpenMenuId(openMenuId === song.id ? null : song.id)}>✚</span>
                    {
                      openMenuId===song.id && (
                        <div className={classes.dropDown}>
                          {playlists.map(p=>(
                            <div
                              key={p.id}
                              className={classes.dropDownItem}
                              onClick={()=>addToPlaylist(p.id,song.id)}
                            >
                              {p.name}
                            </div>
                          ))}
                        </div>
                      
                    )}
                  </div>
                  <span
                    onClick={() => toggleFavorite(song.id)}
                    className={`${classes.heart} ${isFav ? classes.activeHeart : ""
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

export default AllSongs;