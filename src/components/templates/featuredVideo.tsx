import { Box, Button, makeStyles } from "@material-ui/core";
import { FC } from "react";

import { Section } from "~components";

export interface FeaturedVideoProps {
  videoSrc: string;
  channelHref: string;
}

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    margin: "1.75rem auto 0 auto",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "20rem",
    },
  },
  videoWrapper: {
    position: "relative",
    paddingBottom: "56.25%" /* 16:9 */,
    height: 0,
    "& > iframe": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
  },
}));

const FeaturedVideo: FC<FeaturedVideoProps> = ({ videoSrc, channelHref }) => {
  const classes = useStyles();

  return (
    <Section title="Videos musicales">
      <Box maxWidth={800} margin="auto">
        <div className={classes.videoWrapper}>
          <iframe
            loading="lazy"
            width="560"
            height="315"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            src={videoSrc}
            frameBorder="0"
          />
        </div>
      </Box>
      <Button
        component="a"
        href={channelHref}
        rel="noopener noreferrer"
        variant="contained"
        color="primary"
        disableElevation
        fullWidth
        size="large"
        className={classes.button}
      >
        Más videos
      </Button>
    </Section>
  );
};

export default FeaturedVideo;
