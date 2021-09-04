import { Box, makeStyles } from "@material-ui/core";
import { FC } from "react";

import { CartDrawer, Footer, StreamingPlatformsModal } from "~components";
import { StrapiSocialNetwork } from "~types";
export interface LayoutProps {
  socialNetworks: Pick<StrapiSocialNetwork, "id" | "name" | "link" | "footer" | "streaming">[];
}

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  stickyFooter: {
    marginTop: "auto",
  },
}));

const Layout: FC<LayoutProps> = ({ children, socialNetworks }) => {
  const classes = useStyles();

  const footerSocialNetworks = socialNetworks.filter(network => {
    return network.footer;
  });

  const streamingPlatforms = socialNetworks.filter(network => {
    return network.streaming;
  });

  return (
    <Box className={classes.container}>
      <StreamingPlatformsModal streamingPlatforms={streamingPlatforms} />
      <CartDrawer />
      <main>{children}</main>
      <Footer className={classes.stickyFooter} socialNetworks={footerSocialNetworks} />
    </Box>
  );
};

export default Layout;
