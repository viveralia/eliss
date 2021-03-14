import { Button, makeStyles, Typography } from "@material-ui/core";
import { FC, useContext } from "react";

import { Song } from "../organisms";
import { StrapiSong } from "../../types";
import { Section } from "../molecules";
import { StreamingModalContext } from "../../context";

export interface TopSongsProps {
  songs: StrapiSong[];
}

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "1rem",
    [theme.breakpoints.up("md")]: {
      gap: "2rem",
      columnGap: "5rem",
      gridTemplateColumns: "1fr 1fr",
    },
  },
  button: {
    display: "block",
    margin: "1.75rem auto 0 auto",
    [theme.breakpoints.up("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "20rem",
    },
  },
  empty: {
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
    },
  },
}));

const TopSongs: FC<TopSongsProps> = ({ songs }) => {
  const classes = useStyles();
  const { dispatch } = useContext(StreamingModalContext);

  const handleClick = () => {
    dispatch({ type: "SHOW_STREAMING_PLATFORMS" });
  };

  return (
    <Section title="Te recomendamos escuchar">
      {songs.length > 0 ? (
        <>
          <div className={classes.grid}>
            {songs.map((song) => (
              <Song key={song.id} spotifyUri={song.spotifyUri} />
            ))}
          </div>
          <Button
            onClick={handleClick}
            variant="contained"
            color="primary"
            disableElevation
            fullWidth
            size="large"
            className={classes.button}
          >
            Más música
          </Button>
        </>
      ) : (
        <Typography className={classes.empty} color="textSecondary">
          No hay música disponible 😞
        </Typography>
      )}
    </Section>
  );
};

export default TopSongs;
