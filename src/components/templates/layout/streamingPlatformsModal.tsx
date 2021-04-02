import {
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useRouter } from "next/router";
import { FC, useCallback, useContext, useEffect } from "react";

import { StreamingModalContext } from "../../../context";
import { StrapiSocialNetwork } from "../../../types";
import { StreamingPlatform } from "../../molecules";

interface StreamingPlatformsModalProps {
  streamingPlatforms: StrapiSocialNetwork[];
}

const useStyles = makeStyles(theme => ({
  dialogPaper: {
    maxWidth: 450,
    paddingBottom: "1rem",
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  title: {
    fontSize: "0.8125rem",
    textTransform: "uppercase",
    lineHeight: 1.5,
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
    },
  },
}));

const StreamingPlatformsModal: FC<StreamingPlatformsModalProps> = ({
  streamingPlatforms,
}) => {
  const classes = useStyles();
  const { state, dispatch } = useContext(StreamingModalContext);
  const router = useRouter();

  useEffect(() => {
    if (router.query.music) {
      dispatch({ type: "SHOW_STREAMING_PLATFORMS" });
    } else {
      dispatch({ type: "HIDE_STREAMING_PLATFORMS" });
    }
  }, [router]);

  const handleClose = useCallback(() => {
    const url = new URL(window?.location.href);
    url.searchParams.delete("music");
    router.push(url, undefined, { scroll: false });
  }, [router]);

  return (
    <Dialog
      open={state.isOpen}
      onClose={handleClose}
      PaperProps={{ className: classes.dialogPaper }}
    >
      <DialogTitle>
        <Typography
          variant="h3"
          color="textSecondary"
          className={classes.title}
          align="center"
        >
          Selecciona tu plataforma de streaming
        </Typography>
      </DialogTitle>
      <DialogContent>
        {streamingPlatforms.length > 0 ? (
          <ul className={classes.list}>
            {streamingPlatforms.map(platform => (
              <StreamingPlatform key={platform.id} platform={platform} />
            ))}
          </ul>
        ) : (
          <Typography align="center" color="textSecondary">
            No hay plataformas disponibles 😞
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default StreamingPlatformsModal;
