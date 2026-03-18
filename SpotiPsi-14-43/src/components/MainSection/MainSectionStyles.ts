import {makeStyles} from "@mui/styles";

const useStyles=makeStyles({
  container:{
    direction:"rtl",
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
    direction:"ltr",
    width:"90%",
    display: "flex",
    flexDirection:"column",
    justifyContent: "end",
    alignItems: "left",
  }
});

export default useStyles;