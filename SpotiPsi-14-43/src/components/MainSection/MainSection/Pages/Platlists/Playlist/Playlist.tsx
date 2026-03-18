import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useStyles from "../../AllSongs/AllSongs";

type Song = {
  id: string;
  name: string;
  artist: string;
};

type Playlist = {
  id: string;
  name: string;
  songIds: string[];
};

const PlaylistPage: React.FC = () => {
  const classes = useStyles();
  const { playlistId } = useParams();

  const [songs, setSongs] = useState<Song[]>([]);
  const [playlist, setPlaylist] = useState<Playlist | null>(null);

  const fetchSongs = async () => {
    try {
      const res = await fetch("http://localhost:5001/api/songs");
      const data = await res.json();
      setSongs(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchPlaylist = async () => {
    try {
      const res = await fetch("http://localhost:5001/api/playlists");
      const data = await res.json();

      const current = data.find((p: Playlist) => p.id === playlistId);
      setPlaylist(current || null);

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSongs();
    fetchPlaylist();
  }, [playlistId]);

  const playlistSongs = songs.filter(song =>
    playlist?.songIds.includes(song.id)
  );

  return (
    <div className={classes.songsContainer}>
        <div className={classes.header}>
            <h1 className={classes.title}>
                {`פלייליסט ${playlist?.name}`}
            </h1>
            <h1 > ⇦</h1>
        </div>
      

      <div className={classes.songsList}>

        {playlistSongs.map(song => (
          <div key={song.id} className={classes.songRow}>
            <div className={classes.left}>
              <div className={classes.play}>▶</div>
              {song.name} - {song.artist}
            </div>

            <div className={classes.right}>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistPage;