import useStyles from "./MainSectionStyles";
{/*import Menu from "./MainSection/SideBar/SideBar"*/}
import Content from "./MainSection/Pages/AllSongs/AllSongs.tsx"

const MainSection: React.FC = () => {
  const classes = useStyles();

  return (
  <div className={classes.container}>
    <h1>no!!!!!!</h1>
    <Content />
    {/* <Menu/> */}
    
  </div>
  )
}

export default MainSection