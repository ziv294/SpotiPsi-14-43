import { useState, useEffect } from "react";
import useStyles from "./PlaylistsStyles";
import { useNavigate } from "react-router-dom";

type Playlist = {
    id: string;
    name: string;
    songIds: string[];
};

const Playlists: React.FC = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const [playlists, setPlaylists] = useState<Playlist[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [newName, setNewName] = useState("");

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
        fetchPlaylists();
    }, []);

    const createPlaylist = async () => {
        if (!newName.trim()) return;
        try {
            const res = await fetch("http://localhost:5001/api/playlists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: newName,
                    songIds: []
                }),
            });

            const newPlaylist = await res.json();
            setPlaylists(prev => [...prev, newPlaylist]);
            setNewName("");
            setShowModal(false);
        }
        catch (err) {
            console.error(err);
        }
    };

    const cancelCreate = () => {
        setShowModal(false);
        setNewName("");
    };
    return (
        <div className={classes.container}>
            <div className={classes.headerRow}>
                <h1 className={classes.title}>הפלייליסטים שלי</h1>

                <div
                    className={classes.addBtn}
                    onClick={() => setShowModal(true)}
                >
                    ✚ צור פלייליסט
                </div>
            </div>

            <div className={classes.list}>
                {playlists.map(p => (
                    <div
                        key={p.id}
                        className={classes.row}
                        onClick={() => navigate(`/playlist/${p.id}`)}
                    >
                        <h4>{p.name}</h4>
                        <div> {`${p.songIds.length} שירים`}</div>
                    </div>

                ))}
            </div>

            {showModal && (
                <div className={classes.modalBackdrop}>
                    <div className={classes.modal}>
                        <h3>יצירת פלייליסט חדש</h3>

                        <input
                            className={classes.input}
                            placeholder="שם הפלייליסט"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                        />

                        <div className={classes.actionsRow}>
                            <div className={classes.cancelBtn} onClick={cancelCreate}>
                                ביטול
                            </div>

                            <div className={classes.createBtn} onClick={createPlaylist}>
                                צור
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Playlists;