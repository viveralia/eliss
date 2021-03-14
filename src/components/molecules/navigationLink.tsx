import { Link, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

const useStyles = makeStyles(theme => ({
  listItem: {
    "&:last-child": {
      marginRight: "1rem",
      [theme.breakpoints.up("md")]: {
        marginRight: 0,
      },
    },
    display: "inline-block",
    marginRight: "1.25rem",
    marginLeft: "1rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    [theme.breakpoints.up("md")]: {
      paddingTop: 0,
      paddingBottom: 0,
      marginLeft: 0,
    },
  },
  link: {
    fontSize: "0.875rem",
    fontWeight: theme.typography.h1.fontWeight,
    transition: "all 0.2s ease",
    fontFamily: theme.typography.h1.fontFamily,
    textTransform: theme.typography.h1.textTransform,
    color: theme.palette.text.secondary,
    opacity: 0.875,
    "&:hover, &:active": {
      color: theme.palette.text.primary,
      opacity: 1,
    },
  },
  active: {
    color: theme.palette.text.primary,
    opacity: 1,
  },
  button: {
    border: "none",
    background: "transparent",
    cursor: "pointer",
    padding: 0,
    outline: "none",
  },
}));

export interface NavigationLinkProps {
  navItem: {
    path: string;
    name: string;
  };
}

export const NavigationLink: FC<NavigationLinkProps> = ({ navItem }) => {
  const classes = useStyles();
  const router = useRouter();

  const isActive = router.asPath === navItem.path;
  const className = clsx(classes.link, isActive && classes.active);

  return (
    <li className={classes.listItem}>
      <NextLink href={navItem.path} passHref>
        <Link underline="none" className={className}>
          {navItem.name}
        </Link>
      </NextLink>
    </li>
  );
};

export interface NavigationButtonProps {
  navItem: {
    onClick: () => void;
    name: string;
  };
}

export const NavigationButton: FC<NavigationButtonProps> = ({ navItem }) => {
  const classes = useStyles();

  return (
    <li className={classes.listItem}>
      <button
        className={clsx(classes.button, classes.link)}
        onClick={navItem.onClick}
      >
        {navItem.name}
      </button>
    </li>
  );
};
