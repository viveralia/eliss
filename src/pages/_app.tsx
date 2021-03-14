import { useEffect, useMemo } from "react";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@material-ui/core";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import { darkTheme, lightTheme } from "../styles";
import { StreamingModalContextProvider } from "../context";
import defaultSeo from "../constants/defaultSeo";

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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StreamingModalContextProvider>
          <Component {...pageProps} />
        </StreamingModalContextProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
