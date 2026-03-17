import {makeStyles} from "@mui/styles";

const useStyles=makeStyles({
  container:{
    width: "100%",
    display: "flex",
    flexDirection:"row",
    justifyContent: "start",
    alignItems: "right",
    marginBottom: "2rem",
    color: "rgb(190, 188, 190)",
    backgroundColor:"rgb(19, 18, 18)"
  },
  content:{
    width:"80%",
    display: "flex",
    flexDirection:"column",
    justifyContent: "start",
    alignItems: "right"
  }
});

export default useStyles;