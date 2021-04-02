import { Box, Container, Hidden, makeStyles } from "@material-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { transparentize } from "polished";
import { FC, useCallback } from "react";

import navbarLinks from "../../../constants/navbarLinks";
import { NavigationButton, NavigationLink } from "../../molecules";

const useStyles = makeStyles(theme => ({
  brand: {
    height: 30,
    width: "auto",
    marginBottom: -3,
    filter: theme.palette.type === "dark" ? "" : "invert(1)",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      height: 36,
    },
    [theme.breakpoints.up("lg")]: {
      height: 38,
    },
  },
  container: {
    backdropFilter: "blur(8px)",
    backgroundColor: transparentize(0.25, theme.palette.background.default),
    left: 0,
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 2,
  },
  containerInner: {
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    borderTop: `1px solid ${theme.palette.divider}`,
    overflow: "auto",
    whiteSpace: "nowrap",
    [theme.breakpoints.up("md")]: {
      borderTop: "none",
    },
  },
}));

const NavigationLinks: FC = () => {
  const classes = useStyles();
  const router = useRouter();

  const handleMusicClick = useCallback(() => {
    if (router.query.music) return;

    const url = new URL(window?.location.href);
    url.searchParams.append("music", "open");
    router.push(url, undefined, { scroll: false });
  }, [router]);

  return (
    <ul className={classes.list}>
      <NavigationButton
        navItem={{
          name: "Música",
          onClick: handleMusicClick,
        }}
      />
      {navbarLinks.map(item => (
        <NavigationLink key={item.path} navItem={item} />
      ))}
    </ul>
  );
};

const Navbar: FC = () => {
  const classes = useStyles();

  return (
    <Box component="nav" className={classes.container}>
      <Container maxWidth="xl" className={classes.containerInner}>
        <Link href="/">
          <img src="/eliss.svg" alt="Eliss logo" className={classes.brand} />
        </Link>
        <Hidden smDown>
          <NavigationLinks />
        </Hidden>
      </Container>
      <Hidden mdUp>
        <NavigationLinks />
      </Hidden>
    </Box>
  );
};

export default Navbar;
