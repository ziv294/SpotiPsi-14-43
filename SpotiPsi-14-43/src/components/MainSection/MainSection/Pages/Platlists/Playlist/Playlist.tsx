import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useStyles from "../../AllSongs/AllSongs";
import { useNavigate } from "react-router-dom";
import useAudioPlayer from "../../../../../CustomHooks/useAudioPlayer";

type Song = {
    id: string;
    name: string;
    artist: string;
    album: string;
};

type Playlist = {
    id: string;
    name: string;
    songIds: string[];
};

const PlaylistPage: React.FC = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const { playlistId } = useParams();

    const [songs, setSongs] = useState<Song[]>([]);
    const [playlist, setPlaylist] = useState<Playlist | null>(null);

    const [favorites, setFavorites] = useState<string[]>([]);
    const [playlists, setPlaylists] = useState<Playlist[]>([]);
    const [openMenuId, setOpenMenuId] = useState<string | null>(null);

    const {fetchSongs}=useAudioPlayer();

    const fetchAllSongs = async () => {
        try {
            const res = await fetch("http://localhost:5001/api/songs");
            const data = await res.json();
            setSongs(data);
        } catch (err) {
            console.error(err);
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

    const handlePlay=(index:number)=>{
        const recordedSongs=[
            ...playlistSongs.slice(index),
            ...playlistSongs.slice(0,index)
        ];
        fetchSongs(recordedSongs);
    }

    useEffect(() => {
        fetchAllSongs();
        fetchFavorites();
        fetchPlaylists();
        fetchPlaylist();
    }, [playlistId]);

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
        }
        catch (err) {
            console.error(err);
        }
    };

    const playlistSongs = songs.filter(song =>
        playlist?.songIds.includes(song.id)
    );

    return (
        <div className={classes.songsContainer}>
            <div className={classes.header}>
                <h1 className={classes.title}>
                    פלייליסט {playlist?.name}
                </h1>
                <h1
                    className={classes.backBtn}
                    onClick={() => navigate(`/playlists`)}>⇦
                </h1>
            </div>

            <div className={classes.songsList}>
                {playlistSongs.map(song => {
                    const isFav = favorites.includes(song.id);

                    return (
                        <div key={song.id} 
                            className={classes.songRow}
                            onClick={() => handlePlay(playlistSongs.findIndex(s => s.id === song.id))}
                        >
                            <div className={classes.left}>
                                <div className={classes.play}>▶</div>
                                {song.name} - {song.artist}
                            </div>

                            <div className={classes.right}>
                                <div style={{ position: "relative" }}>
                                    <span
                                        onClick={() =>
                                            setOpenMenuId(openMenuId === song.id ? null : song.id)
                                        }
                                    >
                                        ✚
                                    </span>

                                    {openMenuId === song.id && (
                                        <div className={classes.dropDown}>
                                            {playlists.map(p => (
                                                <div
                                                    key={p.id}
                                                    className={classes.dropDownItem}
                                                    onClick={() => addToPlaylist(p.id, song.id)}
                                                >
                                                    {p.name}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <span
                                    onClick={() => toggleFavorite(song.id)}
                                    className={`${classes.heart} ${isFav ? classes.activeHeart : ""}`}
                                >
                                    ❤︎
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PlaylistPage;