import { useEffect, useMemo } from "react";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@material-ui/core";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Head from "next/head";

import { Navbar } from "~components";
import defaultSeo from "~constants/defaultSeo";
import { StreamingModalContextProvider } from "~context";
import { darkTheme, lightTheme } from "~styles";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(() => {
    return isDark ? darkTheme : lightTheme;
  }, [isDark]);

  // Removes the server-side injected CSS.
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <DefaultSeo {...defaultSeo} />
      <Head>
        <meta name="theme-color" content="#212121" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Eliss" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black"
        />
        <link href="icons/icon-512x512.png" rel="apple-touch-icon" />
        <link href="/manifest.json" rel="manifest" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StreamingModalContextProvider>
          <Navbar />
          <Component {...pageProps} />
        </StreamingModalContextProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
