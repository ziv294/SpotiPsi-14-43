import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
  container: {
    direction: "rtl",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch",
    marginBottom: "2rem",
    color: "rgb(190, 188, 190)",
    backgroundColor: "rgb(19, 18, 18)"
  },

  content: {
    flex:"1",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight:"10rem",
    padding: "1rem"
  }
});

export default useStyles;