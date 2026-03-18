import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    songsContainer: {
      direction:"ltr",
      width: "80%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      padding: "1rem",
      color: "rgb(190, 188, 190)"
    },

    title: {
      marginBottom: "2rem"
    },

    songsList: {
      direction:"ltr",
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
    },
    songRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #333",
    padding: "0.5rem 0"
  },

  left: {
    display: "flex",
    gap: "0.5rem"
  },

  right: {
    display: "flex",
    gap: "1rem",
    cursor: "pointer"
  },
  play:{
    color:"rgb(173, 73, 212)"
  },
  heart: {
    cursor: "pointer",
    color: "rgb(190, 188, 190)",
    transition: "0.2s",
  },

  activeHeart: {
    color: "rgb(173, 73, 212)"
  },
  dropDown: {
    position: "absolute",
    top: "25px",
    right: "0",
    backgroundColor: "#2a2a2a",
    borderRadius: "8px",
    padding: "0.5rem 0",
    minWidth: "160px",
    zIndex: 10,
    boxShadow: "0 4px 10px rgba(0,0,0,0.5)"
  },

  dropDownItem: {
    padding: "0.5rem 1rem",
    cursor: "pointer",
    whiteSpace: "nowrap",
    "&:hover": {
      backgroundColor: "#3a3a3a",
      color: "rgb(173, 73, 212)"
    }
  }
});

export default useStyles;