import {
  Box,
  Container,
  makeStyles,
  Link,
  Typography,
} from "@material-ui/core";
import Img from "next/image";
import NextLink from "next/link";
import { FC } from "react";

import { StrapiCloudinaryImage } from "~types";

export interface HeroProps {
  img: StrapiCloudinaryImage;
  headline: string;
}

const useStyles = makeStyles(theme => ({
  brand: {
    position: "absolute",
    top: "-5.25rem",
    width: 100,
    [theme.breakpoints.up("md")]: {
      top: "-8.5rem",
      width: 150,
    },
  },
  container: {
    position: "relative",
    zIndex: 3,
  },
  colorContainer: {
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.background.paper
        : "#1F1A20",
    marginTop: -5,
    paddingBottom: "3.5rem",
    paddingTop: "3.5rem",
    [theme.breakpoints.up("md")]: {
      paddingBottom: "6rem",
      paddingTop: "6rem",
    },
  },
  colorContainerInner: {
    position: "relative",
  },
  headline: {
    color: theme.palette.common.white,
    fontSize: "1.25rem",
    lineHeight: 1.325,
    marginBottom: "1.5rem",
    opacity: 0.9,
    [theme.breakpoints.up("md")]: {
      fontSize: "1.75rem",
      marginBottom: "2rem",
      maxWidth: 600,
    },
  },
  link: {
    "&:hover": {
      color: theme.palette.common.white,
      opacity: 0.75,
    },
    color: theme.palette.common.white,
    fontSize: "0.825rem",
    fontFamily: theme.typography.h1.fontFamily,
    textTransform: "uppercase",
    transition: "opacity 0.2s ease",
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
    },
  },
  imgContainer: {
    position: "relative",
    height: 220,
    [theme.breakpoints.up("md")]: {
      height: 450,
    },
    [theme.breakpoints.up("lg")]: {
      height: 500,
    },
  },
  // Does not cut off any head
  img: {
    objectPosition: "50% 60%",
    [theme.breakpoints.up("sm")]: {
      objectPosition: "50% 40%",
    },
    [theme.breakpoints.up("md")]: {
      objectPosition: "50% 60%",
    },
    [theme.breakpoints.up("lg")]: {
      objectPosition: "50% 40%",
    },
  },
}));

const Hero: FC<HeroProps> = ({ img, headline }) => {
  const classes = useStyles();

  return (
    <header className={classes.container}>
      <div className={classes.imgContainer}>
        <Img
          src={img.url}
          alt={img.alternativeText}
          layout="fill"
          objectFit="cover"
          className={classes.img}
        />
      </div>
      <Box className={classes.colorContainer}>
        <Container className={classes.colorContainerInner}>
          <img src="/eliss.svg" alt="Eliss logo" className={classes.brand} />
          <Typography component="h1" className={classes.headline}>
            {headline}
          </Typography>
          <NextLink href="/presskit" passHref>
            <Link underline="none" className={classes.link}>
              Conocer más
            </Link>
          </NextLink>
        </Container>
      </Box>
    </header>
  );
};

export default Hero;
