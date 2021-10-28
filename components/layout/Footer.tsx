import React from "react";
import { Card, Grid, makeStyles, Typography } from "@material-ui/core";
import { Container } from "react-bootstrap";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  container: {
    marginTop: "10rem",
  },
  paper: {
    marginLeft: theme.spacing(7),
    marginRight: theme.spacing(7),
    marginTop: theme.spacing(5),
    padding: theme.spacing(3),
    color: "white",
    backgroundColor: "black",
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
    },
  },
  paper1: {
    marginLeft: theme.spacing(20),
    marginRight: theme.spacing(7),
    marginTop: theme.spacing(5),
    padding: theme.spacing(3),
    color: "white",
    backgroundColor: "black",
    display: "block",
  },
  subText: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  gridContainer: {
    backgroundColor: "black",
  },
  mediaIcons: {
    marginTop: theme.spacing(10),
    color: "white",
  },
  individualIcon: {
    margin: theme.spacing(3),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
      <footer className={classes.gridContainer}>
        <Grid
          container
          direction="row"
          alignItems="center"
          spacing={4}
          justifyContent="flex-start"
        >
          <FooterItem
            title="Products"
            items={["Swapping", "Staking", "Farming"]}
          />
          <FooterItem title="Analytics" items={["Coins", "Tokens", "Wallet"]} />
          <FooterItem
            title="Services"
            items={["Swap", "Advanced Training", "Liqudity Pool"]}
          />
          <FooterItem title="More" items={["Markets", "Overall", "Pools"]} />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          className={classes.mediaIcons}
        >
          <TwitterIcon className={classes.individualIcon} />
          <FacebookIcon className={classes.individualIcon} />
          <InstagramIcon className={classes.individualIcon} />
          <EmailIcon className={classes.individualIcon} />
        </Grid>
      </footer>
  );
};

const FooterItem = ({ title, items }) => {
  const classes = useStyles();

  return (
    <Grid item xs={6} sm={6} md={3}>
      <Card className={classes.paper} elevation={0}>
        <Typography className={classes.subText} variant="h6">
          {title}
        </Typography>

        {items?.map((item) => (
          <Typography className={classes.subText} variant="body1">
            {item}
          </Typography>
        ))}
      </Card>
    </Grid>
  );
};

export default Footer;
