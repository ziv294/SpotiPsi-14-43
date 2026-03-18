import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    direction: "rtl",
    width: "80%",
    flexDirection: "column",
    alignItems: "flex-end",
    color: "rgb(190, 188, 190)",
    padding: "1rem"
  },
  headerRow:{
    display:"flex",
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems:"center"
  },

  title: {
    marginBottom: "2rem"
  },

  addBtn: {
    height:"20%",
    border: "1px solid #a855f7",
    color: "#a855f7",
    padding: "0.5rem 1rem",
    borderRadius: "40px",
    cursor: "pointer",
    width: "fit-content",
    alignContent:"center",
    marginTop: "2.5rem",
    "&:hover": {
      backgroundColor: "#a855f7",
      color: "black"
    }
  },

  list: {
    display: "flex",
    flexDirection: "column",
  },

  row: {
    padding: "1rem",
    borderBottom: "1px solid #333",
    "&:hover": {
      backgroundColor: "#3a3a3a"
    }
  },

  modalBackdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  modal: {
    backgroundColor: "#2a2a2a",
    padding: "2rem",
    width: "15%",
    textAlign: "center"
  },

  input: {
    width: "100%",
    padding: "0.5rem",
    marginTop: "1rem",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid white",
    color: "white"
  },

  createBtn: {
    marginTop: "1rem",
    color: "rgb(190, 188, 190)",
    cursor: "pointer",
    "&:hover": {
            color: "#a855f7"
    }
  },

  dropdown: {
    position: "absolute",
    backgroundColor: "#2a2a2a",
    padding: "1rem",
    borderRadius: "8px",
    top: "40px",
    right: "0",
    zIndex: 10
  },

  dropdownItem: {
    padding: "0.5rem 0",
    cursor: "pointer",
    "&:hover": {
      color: "#a855f7"
    }
  },
    actionsRow: {
        display: "flex",
        flexDirection:"row",
        justifyContent: "end",
        marginTop: "1.5rem"
    },

    cancelBtn: {
        marginLeft:"1rem",
        marginTop: "1rem",
        color: "rgb(190, 188, 190)",
        cursor: "pointer",
        "&:hover": {
            color: "#a855f7"
        }
    }
    
});

export default useStyles;