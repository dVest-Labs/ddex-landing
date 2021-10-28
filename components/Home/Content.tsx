import { Box, Button, Grid, makeStyles, Typography, Container, useTheme, useMediaQuery} from "@material-ui/core";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import ddexmain from "../../public/images/ddexmain.png"
// import { Container } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  container: {
    marginTop: theme.spacing(15),
    marginLeft: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(5),
    },
  },
  contentSection: {
    [theme.breakpoints.down("sm")]: {
      // textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: theme.spacing(5),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  btn: {
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1),
  },
  btn1: {
    backgroundColor: "#00bcd4",
    color: "#000",
    fontSize: "14px",
    fontWeight: "bold",
    borderRadius: "5px",
    padding: "15px 20px",
    textTransform: "uppercase",
  },
  headerText: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      // textAlign: "left",
      fontSize: "35px",
    },
  },
  subText: {
    marginBottom: theme.spacing(1),
    fontSize: "18px",
    [theme.breakpoints.down("sm")]: {
      // paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      fontSize: "15px",
    },
  },
  secondGrid: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(2.5),
    },
  },
  subText1: {
    // marginLeft: theme.spacing(3.5),
    marginBottom: theme.spacing(3),
  },
  phoneAsset: {
    width: "20rem",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "2rem",
    [theme.breakpoints.down("md")]: {
      width: "18rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "15rem",
    },
  },

  // section 1
  firstGrid: {
    marginTop: theme.spacing(15),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(5),
    },
  },
  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  section1__img: {
    width: "28rem",
    height: "25rem",
    borderRadius: "2rem",
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
      width: "25rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "auto",
      marginRight: "auto",
      width: "23rem",
    },
  },
  section2__img: {
    width: "62rem",
    height: "30rem",
    borderRadius: "2rem",

    paddingBottom: "3rem",
   
    [theme.breakpoints.down("md")]: {
      // marginLeft: "auto",
      // marginRight: "auto",
      width: "50rem",
      height: "30rem"
    }
  },

  // section 2
}));

const SectionB = () => {
  // const classes = useStyles();

  return (
    <div>
   
      <Content1 />
      <Content2 />
      <ContentX/>
      <Content3 />
    </div>
  );
};

const Content1 = () => {
  const classes = useStyles();

  return (
    <Container>
    <Grid
      container
      direction="row"
      alignItems="center"
      spacing={3}
      className={classes.firstGrid}
    >
      <Grid item md={6} xs={12} className={classes.section}>
        <img
          src="/images/chart.png"
          alt="image 1"
          className={classes.section1__img}
        />
      </Grid>

      <Grid item md={6} xs={12}>
        <Grid
          container
          direction="column"
          justifyContent="flex-end"
          alignItems="flex-start"
          className={classes.contentSection}
        >

        <Grid
        container
        direction="column"
        alignItems="flex-start"
      >
          <Button
            color="primary"
            // alignItems="left"
            variant="outlined"
            className={classes.btn}
          >
            Decentralized & non-custodial
          </Button>
          <Typography variant="h3" className={classes.headerText}>
            No registration required
          </Typography>
          <Typography variant="body2" className={classes.subText}>
          dDEXX is an Automated Market Maker (AMM) based Decentralized Exchange (DEX) that features easy and fast exchange functionality, profitable liquidity pools, and high APR yield farms, where users can earn dDEXX tokens, fees from exchange transactions, and much more
          </Typography>
          <Typography variant="body2" className={classes.subText}>
            hub and exchange platform. Simply connect with your Infinity Wallet
          </Typography>
          <Typography variant="body2" className={classes.subText}>
            or any other compatible wallet and start trading, earning and
          </Typography>
          <Typography variant="body2" className={classes.subText}>
            interacting with the platform securely in seconds.
          </Typography>
        </Grid>
      </Grid>
      </Grid>
    </Grid>
    </Container>
  );
};

const Content2 = () => {
  const classes = useStyles();

  return (
    <Container>
    <Grid
      container
      direction="row"
      alignItems="center"
      spacing={5}
      className={classes.secondGrid}
    >
      <Grid item md={6} xs={12} className={classes.section} >
        <div className={classes.contentSection} >
        
        <Grid container direction="column" alignItems="flex-start">
        <Container>
          <Button
            color="primary"
            // alignItems="left"
            variant="outlined"
            className={classes.btn}
          >
            Trade, Buy & Sell
          </Button>
          <Typography variant="h3" className={classes.headerText}>
            Trade like a pro
          </Typography>


          <TradePoint text="Exchange decentralized directly between the assets you want without needing to manually navigate multiple trading pairs." />
          <TradePoint text="Competitive rates at less than 1% spread between buy and sell thanks to a unique AMM exchange model." />
          <TradePoint text="Smart Order Routing to ensure you get the best price execution across every pair." />

          <button className={classes.btn1}>Start Trading Now</button>
          </Container>
          </Grid>
        </div>
      </Grid>

      <Grid item md={6} xs={12}>
        <img
          src="/images/phoneAsset.png"
          alt="Phone Asset"
          className={classes.phoneAsset}
        />
      </Grid>
    </Grid>
    </Container>
  );
};

const Content3 = () => {
  const classes = useStyles();

  return (
    <Container className="conContainer">
    <Grid
      container
      direction="row"
      alignItems="center"
      spacing={3}
      className={classes.secondGrid}
    >
      <Grid item md={6} xs={12} >
        <img
          src="/images/coinswap.jpg"
          alt="Trade"
          className={classes.section1__img}
       
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <div className={classes.contentSection} >
        <Grid
        container
        direction="column"
        alignItems="flex-start"
      >
          <Button
            color="primary"
            // alignItems="left"
            variant="outlined"
            className={classes.btn}
          >
            Trade, Buy & Sell
          </Button>
          <Typography variant="h3" className={classes.headerText}>
            Trade like a pro
          </Typography>

        

          <TradePoint text="Exchange decentralized directly between the assets you want without needing to manually navigate multiple trading pairs." />
          <TradePoint text="Competitive rates at less than 1% spread between buy and sell thanks to a unique AMM exchange model." />
          <TradePoint text="Smart Order Routing to ensure you get the best price execution across every pair." />
          <button className={classes.btn1}>Start Trading Now</button>
          </Grid>
        </div>
      </Grid>
    </Grid>
    </Container>
  );
};


const ContentX = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(isMatch);
  
  return (
    <div>


 
      <Container className="conContainer">
      {
          isMatch ? null :    <img src="/images/benquote.png" alt="Trade" className={classes.section2__img}  />
        
        
    
     
      }
    
     
    </Container>
    
    </div>
  )
}




interface TradePointPropsType {
  text: string;
}

const TradePoint = ({ text }: TradePointPropsType) => (
  <div style={{ display: "flex", marginBottom: "1rem" }}>
    <CheckBoxIcon color="primary"  />
    <Typography variant="body1" className="subText">{text}</Typography>
  </div>
);

export default SectionB;
