import Layout from "../components/layout";
import Hero from "../components/Home/Hero";
import Content from "../components/Home/Content";

const Home = () => {
  return (
    <Layout title="Home">
      <Hero />
      <Content />
    </Layout>
  );
};

export default Home;
