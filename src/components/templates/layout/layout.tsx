import { Box, makeStyles } from "@material-ui/core";
import { FC } from "react";

import { StrapiSocialNetwork } from "~types";
import { Footer, StreamingPlatformsModal } from "~components";

export interface LayoutProps {
  socialNetworks: StrapiSocialNetwork[];
}

const useStyles = makeStyles(theme => ({
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
      <main>{children}</main>
      <Footer
        className={classes.stickyFooter}
        socialNetworks={footerSocialNetworks}
      />
    </Box>
  );
};

export default Layout;
