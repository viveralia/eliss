import { Container, makeStyles, Typography } from "@material-ui/core";
import { FC } from "react";

export interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: "6rem",
    paddingBottom: "2rem",
    paddingTop: "2rem",
    [theme.breakpoints.up("lg")]: {
      marginTop: "4.0625rem",
      paddingBottom: "3.5rem",
      paddingTop: "3.5rem",
    },
  },
  subtitle: {
    color: theme.palette.text.secondary,
    fontSize: "1rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.125rem",
    },
  },
  title: {
    color: theme.palette.text.primary,
    fontSize: "1.5rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2.75rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "3.125rem",
    },
  },
}));

const PageHeader: FC<PageHeaderProps> = ({ title, subtitle }) => {
  const classes = useStyles();

  return (
    <Container component="header" className={classes.container}>
      <Typography variant="h1" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="subtitle1" className={classes.subtitle}>
        {subtitle}
      </Typography>
    </Container>
  );
};

export default PageHeader;
