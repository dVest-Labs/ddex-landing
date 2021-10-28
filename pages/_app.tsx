import * as React from "react";
import { useEffect } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { Page } from "../types/page";
import "../styles/global.css";
import "../styles/styles.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";
import CssBaseline from "@material-ui/core/CssBaseline";

type Props = AppProps & {
  Component: Page;
};

function MyApp({ Component, pageProps }: Props) {
  return (
    <>
      <Head>
        <title>DDEXX v2</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
