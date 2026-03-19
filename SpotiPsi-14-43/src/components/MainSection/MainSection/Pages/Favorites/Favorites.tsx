import useStyles from "../AllSongs/AllSongs";
import SongRow from "../GlobalComponents/SongRow";
import { useSongsData } from "../../../../CustomHooks/useSongsData";
import { usePlayHandler } from "../../../../CustomHooks/usePlayHandler";

const Favorites: React.FC = () => {
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

  const favoriteSongs = songs.filter((song) =>
    favorites.includes(song.id)
  );

  return (
    <div className={classes.songsContainer}>
      <h1 className={classes.title}>המועדפים שלי</h1>

      <div className={classes.songsList}>
        {favoriteSongs.map((song, index) => (
          <SongRow
            key={song.id}
            song={song}
            index={index}
            isFav={true}
            onPlay={(i) => playFromList(favoriteSongs, i)}
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

export default Favorites;