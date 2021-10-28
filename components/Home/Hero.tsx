import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { Container } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  headerText: {
    marginBottom: theme.spacing(0),
    // marginTop: theme.spacing(20),
    padding: theme.spacing(15),
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      padding: theme.spacing(5),
      paddingTop: theme.spacing(12),
    },
  },
  headerText1: {
    marginTop: theme.spacing(1),
  },
  subText: {
    marginTop: theme.spacing(0),
    textAlign: "center",
  },
  // btnGroup: {
  //   marginTop: theme.spacing(5),
  //   marginBottom: theme.spacing(40),
  // },
  btn: {
    margin: theme.spacing(2),
    paddingLeft: theme.spacing(9),
    paddingRight: theme.spacing(9),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    '&:hover': {
      backgroundColor: '#4dd0e1',
      borderColor: 'primary',
      boxShadow: 'none'
  }},
  headerGrid: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(1),
    padding: theme.spacing(1),
  },
  image: {
    backgroundImage: "url(/images/landing.jpeg)",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      // height: "80vh",
      height: "100%",
    },
    color: "white",
  },
}));

const SectionA = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.image}>
      {/* <Container className={classes.container}> */}
        <div>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={classes.headerGrid}
          >
            <Typography variant="h3" className={classes.headerText}>
              The leading DeFi protocol & platform to invest, earn and manage your crypto
            </Typography>
            <Typography variant="body1" className={classes.subText}>
              An all-in-one decentralized finance ecosystem built by the people
              for the people for financial freedom
            </Typography>
          </Grid>
        </div>

        <div className="btnGroup">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          
          spacing={0}
        >
          <Grid item md={6} xs={12}  className="zoom">
            <Button color="primary" className={classes.btn} variant="contained" >
            <Typography variant="subtitle1" className="sa"> Enter App</Typography> 
            </Button>
          </Grid>
          <Grid item md={6} xs={12}  className="zoom">
            <Button color="primary" className={classes.btn} variant="outlined">
             <Typography variant="subtitle1" className="zoom"> Analytics</Typography> 
            </Button>
          </Grid>
        </Grid>
        </div>
    </div>
  );
};

export default SectionA;
