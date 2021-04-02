import { Button, makeStyles, Typography } from "@material-ui/core";
import { useRouter } from "next/router";
import { FC, useCallback } from "react";

import { Section, Song } from "~components";
import { StrapiSong } from "~types";

export interface TopSongsProps {
  songs: StrapiSong[];
}

const useStyles = makeStyles(theme => ({
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
  const router = useRouter();

  const handleMusicClick = useCallback(() => {
    if (router.query.music) return;

    const url = new URL(window?.location.href);
    url.searchParams.append("music", "open");
    router.push(url, undefined, { scroll: false });
  }, [router]);

  return (
    <Section title="Te recomendamos escuchar">
      {songs.length > 0 ? (
        <>
          <div className={classes.grid}>
            {songs.map(song => (
              <Song key={song.id} spotifyUri={song.spotifyUri} />
            ))}
          </div>
          <Button
            onClick={handleMusicClick}
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
