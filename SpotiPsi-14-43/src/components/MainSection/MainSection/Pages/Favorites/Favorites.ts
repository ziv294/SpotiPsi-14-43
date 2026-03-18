import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    width: "100%",
    maxWidth: "900px",
    display: "flex",
    flexDirection: "column",
    color: "rgb(190, 188, 190)"
  },

  title: {
    marginBottom: "2rem",
    textAlign: "right"
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem"
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #333",
    padding: "0.5rem 0"
  },

  left: {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center"
  },

  right: {
    display: "flex",
    gap: "1rem",
    cursor: "pointer"
  },

  play: {
    color: "rgb(173, 73, 212)"
  },

  heart: {
    color: "rgb(190, 188, 190)",
    cursor: "pointer"
  },

  activeHeart: {
    color: "rgb(173, 73, 212)"
  }
});

export default useStyles;