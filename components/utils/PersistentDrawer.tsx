import {
  Drawer,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
 
} from "@material-ui/core";

import {
 AccountCircle,
Menu,
ExpandMoreOutlined,
Dashboard,
SwapHoriz,
Home,
AccountBalance,
Opacity,
ShowChart,
InsertChart,
LocalOffer,
SportsEsports } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  listDesign: {
    marginTop: theme.spacing(5),
  },
  listDesign1: {
    marginTop: theme.spacing(2),
  },
  container:{
    backgroundColor: "black",
    color: "white",
    // paddingBottom: "100%",
    width: 250,
    height: 800
  },
  btn:{
    color: "primary"  
  },
  divider:{
    backgroundColor: "primary",
    color: "primary"
  },
  drawerWidth:{
    width: "90%"
  }
  }));


const PersistentDrawer = (props: any) => {
  
  const classes = useStyles();
  return (
    <div  className="drawer">
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={props.toggleDrawerStatus}
      >
        {!props.isDrawerOpened ? (
          <Menu fontSize="large" style={{ verticalAlign: "bottom" }} />
        ) : null}
      </IconButton>
      <Divider />
      <Drawer
        className={classes.drawerWidth}
        variant="temporary"
        open={props.isDrawerOpened}
        onClose={props.closeDrawer}
      >
       <div className={classes.container}>
        <List >
          <ListItem button key="About Us" className={classes.listDesign}>
            <ListItemIcon className={classes.btn}>
              <Home color="primary" />{" "}
            </ListItemIcon >
            <ListItemText primary="Home" />
          </ListItem>
          <Divider className={classes.divider} />

          
          <ListItem button key="About Us" className={classes.listDesign1}>
            <ListItemIcon className={classes.btn}>
              <SwapHoriz color="primary" />{" "}
            </ListItemIcon >
            <ListItemText primary="Swap"  color="primary"/>
          </ListItem>

          <Divider className={classes.divider} />

          <ListItem button key="About Us" className={classes.listDesign1}>
          <ListItemIcon className={classes.btn}>
            <AccountBalance color="primary" />{" "}
          </ListItemIcon >
          <ListItemText primary="Farms" />
        </ListItem>


          <Divider className={classes.divider} />

        <ListItem button key="About Us" className={classes.listDesign1}>
          <ListItemIcon className={classes.btn}>
            <Opacity color="primary" />{" "}
          </ListItemIcon >
          <ListItemText primary="Contact Us" />
        </ListItem>

        </List>
        </div>
      </Drawer>
    </div>
  );
};

export default PersistentDrawer;
