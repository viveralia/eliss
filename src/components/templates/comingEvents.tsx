import { Button, makeStyles, Typography } from "@material-ui/core";
import NextLink from "next/link";
import { FC } from "react";

import { Event, Section } from "~components";
import { StrapiEvent } from "~types";

export interface ComingEventsProps {
  events: Pick<StrapiEvent, "id" | "name" | "link" | "place" | "starts" | "ends">[];
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
  empty: {
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
    },
  },
  grid: {
    display: "grid",
    gap: "1.5rem",
    gridTemplateColumns: "1fr",
  },
}));

const ComingEvents: FC<ComingEventsProps> = ({ events }) => {
  const classes = useStyles();

  return (
    <Section title="Próximos eventos">
      {events.length > 0 ? (
        <>
          <div className={classes.grid}>
            {events.map(event => (
              <Event key={event.id} event={event} />
            ))}
          </div>
          <NextLink href="/eventos" passHref>
            <Button
              component="a"
              variant="contained"
              color="primary"
              disableElevation
              fullWidth
              size="large"
              className={classes.button}
            >
              Ver todo
            </Button>
          </NextLink>
        </>
      ) : (
        <Typography className={classes.empty} color="textSecondary">
          No hay eventos disponibles
        </Typography>
      )}
    </Section>
  );
};

export default ComingEvents;
