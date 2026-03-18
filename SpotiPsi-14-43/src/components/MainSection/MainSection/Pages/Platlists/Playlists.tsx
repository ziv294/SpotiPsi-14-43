import { useState } from "react";
import useStyles from "./PlaylistsStyles";

type Playlist = {
  id: string;
  name: string;
  songIds: string[];
};

const Playlists: React.FC = () => {
  const classes = useStyles();

  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState("");

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

      const serverPlaylist = await res.json();
      const nextId =
        playlists.length > 0
          ? String(Math.max(...playlists.map(p => Number(p.id))) + 1)
          : "1";

      const newPlaylist: Playlist = {
        ...serverPlaylist,
        id: nextId,
        songIds: serverPlaylist.songIds || []
      };

      setPlaylists(prev => [...prev, newPlaylist]);

      setNewName("");
      setShowModal(false);

    } catch (err) {
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
        {playlists.map((p) => (
          <div key={p.id} className={classes.row}>
            {p.name}
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