import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useStyles from "../..//AllSongs/AllSongs";
import SongRow from "../../GlobalComponents/SongRow";
import { useSongsData } from "../../../../../CustomHooks/useSongsData";
import { usePlayHandler } from "../../../../../CustomHooks/usePlayHandler";

const PlaylistPage: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { playlistId } = useParams();

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

  const [playlist, setPlaylist] = useState<any>(null);

  useEffect(() => {
    const current = playlists.find(p => p.id === playlistId);
    setPlaylist(current);
  }, [playlistId, playlists]);

  const playlistSongs = playlist
    ? playlist.songIds
        .map((id: string) => songs.find((s) => s.id === id))
        .filter(Boolean)
    : [];

  return (
    <div className={classes.songsContainer}>
      <div className={classes.header}>
        <h1 className={classes.title}>פלייליסט {playlist?.name}</h1>
        <h1 className={classes.backBtn} onClick={() => navigate(`/playlists`)}>
          ⇦
        </h1>
      </div>

      <div className={classes.songsList}>
        {playlistSongs.map((song: any, index: number) => (
          <SongRow
            key={song.id}
            song={song}
            index={index}
            isFav={favorites.includes(song.id)}
            onPlay={(i) => playFromList(playlistSongs, i)}
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

export default PlaylistPage;