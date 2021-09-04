import { CssBaseline, ThemeProvider, useMediaQuery } from "@material-ui/core";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useMemo } from "react";
import { CartProvider } from "use-shopping-cart";

import { Navbar } from "~components";
import defaultSeo from "~constants/defaultSeo";
import { CartDrawerContextProvider, StreamingModalContextProvider } from "~context";
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
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link href="icons/icon-512x512.png" rel="apple-touch-icon" />
        <link href="/manifest.json" rel="manifest" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CartProvider
          mode="payment"
          cartMode="client-only"
          stripe={process.env.NEXT_PUBLIC_STRIPE_API_KEY!}
          successUrl={process.env.NEXT_PUBLIC_STRIPE_SUCCESS_URL}
          cancelUrl={process.env.NEXT_PUBLIC_STRIPE_CANCEL_URL}
          currency="MXN"
          allowedCountries={["MX"]}
          billingAddressCollection
        >
          <CartDrawerContextProvider>
            <StreamingModalContextProvider>
              <Navbar />
              <Component {...pageProps} />
            </StreamingModalContextProvider>
          </CartDrawerContextProvider>
        </CartProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
