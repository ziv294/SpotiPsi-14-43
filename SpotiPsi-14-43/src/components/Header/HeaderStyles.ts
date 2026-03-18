import {makeStyles} from "@mui/styles";

const useStyles=makeStyles({
  header:{
    width: "100%",
    display: "flex",
    justifyContent: "start",
    alignItems: "right",
    marginBottom: "5px",
    color: "rgb(173, 73, 212)",
    backgroundColor:"rgb(53, 52, 52)",
  },
  headerText:{
    marginRight: "1rem"
  }
});

export default useStyles;