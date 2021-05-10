import { Box, makeStyles } from "@material-ui/core";
import { FC } from "react";

import { Section } from "~components";

export interface LastVideoProps {
  videoSrc: string;
}

const useStyles = makeStyles(() => ({
  videoWrapper: {
    position: "relative",
    paddingBottom: "56.25%", /* 16:9 */
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

const LastVideo: FC<LastVideoProps> = ({ videoSrc }) => {
  const classes = useStyles();

  return (
    <Section title="Videos musicales">
      <Box maxWidth={800} margin="auto">
        <div className={classes.videoWrapper}>
        <iframe
          width="560" 
          height="315" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen 
          src={videoSrc} 
          frameBorder="0" />
      </div>
      </Box>
    </Section>
  )
}

export default LastVideo;