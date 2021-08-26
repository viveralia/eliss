import { Link, makeStyles } from "@material-ui/core";
import { FC } from "react";

import catalog from "~constants/brandsCatalog";
import { StrapiSocialNetwork } from "~types";

export interface SocialNetworkProps {
  network: Pick<StrapiSocialNetwork, "name" | "link">;
}

const useStyles = makeStyles(theme => ({
  link: {
    "&:hover, &:active": {
      color: theme.palette.text.primary,
      opacity: 1,
    },
    color: theme.palette.text.secondary,
    fontFamily: theme.typography.h1.fontFamily,
    fontSize: "1.725rem",
    opacity: 0.875,
    textTransform: theme.typography.h1.textTransform,
    transition: "all 0.2s ease",
  },
  listItem: {
    "&:last-child": {
      marginRight: 0,
    },
    display: "inline-block",
    marginRight: "1.25rem",
  },
}));

const SocialNetwork: FC<SocialNetworkProps> = ({ network }) => {
  const classes = useStyles();
  const { Icon, name } = catalog[network.name];

  return (
    <li className={classes.listItem}>
      <Link
        href={network.link}
        target="_blank"
        rel="noopener noreferrer"
        title={`Ir al ${name} de Eliss`}
        className={classes.link}
      >
        <Icon />
      </Link>
    </li>
  );
};

export default SocialNetwork;
