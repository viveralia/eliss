import { makeStyles, Typography } from "@material-ui/core";
import { FC } from "react";

const useStyles = makeStyles(theme => ({
  "@keyframes record": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 0,
    },
    "50%": {
      opacity: "100%",
    },
  },
  live: {
    alignItems: "center",
    backgroundColor: theme.palette.error.main,
    borderRadius: 4,
    color: theme.palette.common.white,
    display: "flex",
    fontSize: "0.625rem",
    lineHeight: "initial",
    padding: "0.175rem 0.35rem",
    position: "absolute",
    right: "-2.5rem",
    top: "-0.5rem",
  },
  rec: {
    animation: "$record 1s infinite",
    backgroundColor: theme.palette.common.white,
    borderRadius: "50%",
    display: "inline-block",
    height: 5,
    marginRight: "0.25rem",
    width: 5,
  },
}));

const LiveBadge: FC = () => {
  const classes = useStyles();

  return (
    <Typography variant="h6" component="span" className={classes.live}>
      <span className={classes.rec} />
      Ahora
    </Typography>
  );
};

export default LiveBadge;
