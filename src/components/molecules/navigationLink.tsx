import { Link, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

const useStyles = makeStyles(theme => ({
  active: {
    color: theme.palette.text.primary,
    opacity: 1,
  },
  button: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    outline: "none",
    padding: 0,
  },
  link: {
    "&:hover, &:active": {
      color: theme.palette.text.primary,
      opacity: 1,
    },
    color: theme.palette.text.secondary,
    fontFamily: theme.typography.h1.fontFamily,
    fontSize: "0.875rem",
    fontWeight: theme.typography.h1.fontWeight,
    opacity: 0.875,
    textTransform: theme.typography.h1.textTransform,
    transition: "all 0.2s ease",
  },
  listItem: {
    "&:last-child": {
      marginRight: "1rem",
      [theme.breakpoints.up("md")]: {
        marginRight: 0,
      },
    },
    display: "inline-block",
    marginLeft: "1rem",
    marginRight: "1.25rem",
    paddingBottom: "0.5rem",
    paddingTop: "0.5rem",
    [theme.breakpoints.up("md")]: {
      marginLeft: 0,
      paddingBottom: 0,
      paddingTop: 0,
    },
  },
}));

export interface NavigationLinkProps {
  navItem: {
    name: string;
    path: string;
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
    name: string;
    onClick: () => void;
  };
}

export const NavigationButton: FC<NavigationButtonProps> = ({ navItem }) => {
  const classes = useStyles();

  return (
    <li className={classes.listItem}>
      <button className={clsx(classes.button, classes.link)} onClick={navItem.onClick}>
        {navItem.name}
      </button>
    </li>
  );
};
