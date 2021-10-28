import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title} | ddexx v2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
