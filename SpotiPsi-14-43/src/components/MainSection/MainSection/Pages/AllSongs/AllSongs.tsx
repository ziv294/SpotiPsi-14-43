import useStyles from "./AllSongs";
import SongRow from "../GlobalComponents/SongRow";
import { useSongsData } from "../../../../CustomHooks/useSongsData";
import { usePlayHandler } from "../../../../CustomHooks/usePlayHandler";

const AllSongs: React.FC = () => {
  const classes = useStyles();

  const {
    songs,
    favorites,
    playlists,
    openMenuId,
    setOpenMenuId,
    toggleFavorite,
    addToPlaylist,
  } = useSongsData();

  const { playFromList } = usePlayHandler();

  return (
    <div className={classes.songsContainer}>
      <h1 className={classes.title}>כל השירים</h1>

      <div className={classes.songsList}>
        {songs.map((song, index) => (
          <SongRow
            key={song.id}
            song={song}
            index={index}
            isFav={favorites.includes(song.id)}
            onPlay={(i) => playFromList(songs, i)}
            toggleFavorite={toggleFavorite}
            addToPlaylist={addToPlaylist}
            playlists={playlists}
            openMenuId={openMenuId}
            setOpenMenuId={setOpenMenuId}
            classes={classes}
          />
        ))}
      </div>
    </div>
  );
};

export default AllSongs;