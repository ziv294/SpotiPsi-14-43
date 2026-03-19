import React from "react";

type Props = {
  song: any;
  index: number;
  isFav: boolean;
  onPlay: (index: number) => void;
  toggleFavorite: (id: string) => void;
  addToPlaylist: (playlistId: string, songId: string) => void;
  playlists: any[];
  openMenuId: string | null;
  setOpenMenuId: (id: string | null) => void;
  classes: any;
};

const SongRow: React.FC<Props> = ({
  song,
  index,
  isFav,
  onPlay,
  toggleFavorite,
  addToPlaylist,
  playlists,
  openMenuId,
  setOpenMenuId,
  classes,
}) => {
  return (
    <div className={classes.songRow} onClick={() => onPlay(index)}>
      <div className={classes.left}>
        <div className={classes.play}>▶</div>
        {song.name} - {song.artist}
      </div>

      <div className={classes.right}>
        <div style={{ position: "relative" }}>
          <span
            onClick={(e) => {
              e.stopPropagation();
              setOpenMenuId(openMenuId === song.id ? null : song.id);
            }}
          >
            ✚
          </span>

          {openMenuId === song.id && (
            <div className={classes.dropDown}>
              {playlists.map((p) => (
                <div
                  key={p.id}
                  className={classes.dropDownItem}
                  onClick={(e) => {
                    e.stopPropagation();
                    addToPlaylist(p.id, song.id);
                  }}
                >
                  {p.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <span
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(song.id);
          }}
          className={`${classes.heart} ${
            isFav ? classes.activeHeart : ""
          }`}
        >
          ❤︎
        </span>
      </div>
    </div>
  );
};

export default SongRow;