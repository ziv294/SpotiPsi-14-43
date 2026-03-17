import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  songsContainer: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    padding: "1rem",
    color: "white"
  },

  title: {
    marginBottom: "1rem"
  },

  songsList: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem"
  },

  songItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0.5rem",
    borderBottom: "1px solid #444"
  }
});

export default useStyles;