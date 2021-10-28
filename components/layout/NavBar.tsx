import { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
  Button,
  IconButton,
} from "@material-ui/core";
import {
  ExpandMoreOutlined,
  Dashboard,
  SwapHoriz,
  Home,
  AccountBalance,
  Opacity,
  ShowChart,
  InsertChart,
  LocalOffer,
  SportsEsports
} from "@material-ui/icons";
import { Container } from "react-bootstrap";
import PaymentIcon from '@material-ui/icons/Payment';
import PersistentDrawer from "../utils/PersistentDrawer";
import { AnyARecord } from "dns";

const useStyles = makeStyles((theme: Theme) => 
createStyles({
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(1),
    display: "inline",
  },
  btn: {
    marginRight: theme.spacing(4),
  },
  appBar: {
    backgroundColor: "black",
    width: "100%",
    color: "white",
  },
  btn1: {
    backgroundColor: "#00bcd4",
    color: "#fffff",
    fontSize: "15px",
    fontWeight: "bold",
    borderRadius: "10px",
    padding: "10px 14px",
    textTransform: "uppercase",
    '&:hover': {
      backgroundColor: '#4dd0e1',
      borderColor: 'primary',
      boxShadow: 'none',
    },
    [theme.breakpoints.down("sm")]: {
      padding: "7px 10px",
      fontSize: "18px",
      fontWeight: "bold",
    },
  },
  logo: {
    width: "10rem",
    flexGrow: 1,
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      width: "5rem",
    },
  },
  container: {
    width: "100%",
  },
  menuPaper: {
    padding: theme.spacing(3),
  },
  menuTabIcon: {
    marginRight: theme.spacing(2),
    verticalAlign: "middle",
  },
}));



export default function NavBar(props: any) {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(isMatch);

  //Menu Icon
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDefi, setOpenDefi] = useState(null);
  const [openToken, setOpenToken] = useState(null);
  //  const open = Boolean(anchorEl);
  const [isDrawerOpened, setIsDrawerOpened] = useState(false);
  //  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleDrawerStatus = () => {
    setIsDrawerOpened(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpened(false);
  };

  // Handle Click functions
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickDefi = (event: any) => {
    setOpenDefi(event.currentTarget);
  };

  const handleClickToken = (event: any) => {
    setOpenToken(event.currentTarget);
  };

  //Handle Close functions
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseDefi = () => {
    setOpenDefi(null);
  };
  const handleCloseToken = () => {
    setOpenToken(null);
  };

  const classes = useStyles();
  return (
    <div>
      <Container className={classes.container}>
        <AppBar className={classes.appBar} elevation={0} position="fixed">
          <Toolbar>
            {isMatch ? (
              <>
                <PersistentDrawer
                  toggleDrawerStatus={toggleDrawerStatus}
                  closeDrawer={closeDrawer}
                  isDrawerOpened={isDrawerOpened}
                />
                <img
                  src="/images/newlogo.png"
                  alt="ddex"
                  className={classes.logo}
                />
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="flex-end"
                >
                  <Button disableRipple  className={classes.btn1}>launch App</Button>
                </Grid>
              </>
            ) : (
              <>
                <img
                  src="/images/newlogo.png"
                  alt="ddex"
                  className={classes.logo}
                />
                <Grid container alignContent={"center"} alignItems={"center"}>
                  <Grid item md={9}>
                    <Grid
                      container
                      direction="row"
                      spacing={1}
                      justifyContent="flex-start"
                      alignItems="center"
                    >
  

                      <Grid item> 
              

                        <div  className="navClass">
                        <Typography
                          variant="h6"
                          className={classes.title}
                          onClick={handleClickDefi}
                        >
                          Products
                          <ExpandMoreOutlined
                            style={{ verticalAlign: "middle" }}
                            fontSize="small"
                          />
                        </Typography>
                        </div>
                        <Menu
                          id="simple-menu"
                          anchorEl={openDefi}
                          keepMounted
                          open={Boolean(openDefi)}
                          onClose={handleCloseDefi}
                        >
                          <a href="/ddexhome" className="text-link">
                            <MenuItem className={classes.menuPaper}>
                              <ShowChart className={classes.menuTabIcon} color="primary" /> DeFi
                              Index Funds
                            </MenuItem>{" "}
                          </a>
                          <a href="/swap" className="text-link">
                            <MenuItem className={classes.menuPaper}>
                              <InsertChart className={classes.menuTabIcon} color="primary" />{" "}
                              DeFi Stocks
                            </MenuItem>
                          </a>
                        </Menu>
                      </Grid>
                      <Grid item>
                      <div  className="navClass">
                        <Typography
                          variant="h6"
                          className={classes.title}
                          onClick={handleClickToken} 
                          // className="navClass"
                         
                        >
                          Get Tokens{" "}
                          <LocalOffer
                            style={{ verticalAlign: "middle" }}
                            fontSize="small"
                           
                          />
                        </Typography>
                        </div>
                        <Menu
                          id="simple-menu"
                          anchorEl={openToken}
                          keepMounted
                          open={Boolean(openToken)}
                          onClose={handleCloseToken}
                        >
                          <a href="/" className="text-link">
                            <MenuItem className={classes.menuPaper}>
                              {" "}
                              dVEST
                            </MenuItem>{" "}
                          </a>
                   
                        </Menu>
                      </Grid>
                      <Grid item>
                      <div  className="navClass">
                        <Typography variant="h6" className={classes.title}>
                          Endless War{" "}
                          <SportsEsports
                            style={{ verticalAlign: "middle" }}
                            fontSize="medium"
                            className="navClass"
                          />
                        </Typography>
                        </div>
                      </Grid>
                      <Grid item>
                      <div  className="navClass">
                        <Typography variant="h6" className={classes.title}>
                          Docs{" "}
                          <ExpandMoreOutlined
                            style={{ verticalAlign: "middle" }}
                            fontSize="small"
                            className="navClass"
                          />
                        </Typography>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item md={3}>
                    <Grid
                      container
                      direction="row"
                      justifyContent="flex-end"
                      alignItems="flex-end"
                    >
                      <Button
                        color="primary"
                        className={classes.btn1}
                        variant="contained"
                     
                
                     
                      >
                       Launch App
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Container>
    </div>
  );
}
