import { Container, Link, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import { FC } from "react";

import { StrapiSocialNetwork } from "../../../types";
import { SocialNetwork } from "../../molecules";

export interface FooterProps {
  socialNetworks: StrapiSocialNetwork[];
  className?: string;
}

const useStyles = makeStyles((theme) => ({
  container: {
    paddingBottom: "3.5rem",
    paddingTop: "3.5rem",
    [theme.breakpoints.up("md")]: {
      paddingBottom: "4.5rem",
      paddingTop: "4.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      paddingBottom: "5rem",
      paddingTop: "5rem",
    },
  },
  copyright: {
    fontSize: "0.875rem",
    marginTop: "1.5rem",
  },
  developedByLink: {
    fontSize: "inherit",
  },
  title: {
    marginBottom: "1.75rem",
    fontSize: "0.8125rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
    },
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    textAlign: "center",
  },
}));

const Footer: FC<FooterProps> = ({ socialNetworks, className }) => {
  const classes = useStyles();

  return (
    <Container
      component="footer"
      className={clsx(classes.container, className)}
    >
      <Typography
        align="center"
        variant="h6"
        color="textSecondary"
        className={classes.title}
      >
        Síguenos en nuestras redes sociales
      </Typography>
      <nav>
        <ul className={classes.list}>
          {socialNetworks.map((network) => (
            <SocialNetwork key={network.id} network={network} />
          ))}
        </ul>
      </nav>
      <Typography
        align="center"
        color="textSecondary"
        className={classes.copyright}
      >
        &copy; Eliss {new Date().getFullYear()}. Desarrollado por{" "}
        <Link
          href="https://espacioenblan.co/?utm_source=eliss&utm_medium=customers"
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          color="inherit"
        >
          espacioenblan.co
        </Link>
      </Typography>
    </Container>
  );
};

export default Footer;
