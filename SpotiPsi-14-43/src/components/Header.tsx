import useStyles from "../componentsStyles/HeaderStyles";

const Header: React.FC = () => {
  const classes = useStyles();

  return (
  <div className={classes.header}>
    <h2 className={classes.headerText}>SpotiPSI♪</h2>
  </div>
  )
}

export default Header