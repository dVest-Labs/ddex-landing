import Layout from "../components/layout";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  image: {
    backgroundImage: "url(/images/blue.jpg)",
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "100vh",
    },
    color: "white",
  },
}));

const Pools = () => {
  const classes = useStyles();

  return (
    <Layout title="Pools">
      <div className={classes.image}></div>
    </Layout>
  );
};

export default Pools;
