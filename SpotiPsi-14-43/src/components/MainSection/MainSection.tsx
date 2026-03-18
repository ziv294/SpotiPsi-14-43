import useStyles from "./MainSectionStyles";
import Menu from "./SideBar/SideBar.tsx"
import Content from "./MainSection/Pages/AllSongs/AllSongs.tsx"

const MainSection: React.FC = () => {
  const classes = useStyles();

  return (
  <div className={classes.container}>
    <Menu />
    <div className={classes.content}>
        <Content />
    </div>
    
    
    
  </div>
  )
}

export default MainSection