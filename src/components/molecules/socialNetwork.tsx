import { Link, makeStyles } from "@material-ui/core";
import { FC } from "react";
import brandsStrategy from "../../constants/brandsStrategy";
import { StrapiSocialNetwork } from "../../types";

export interface SocialNetworkProps {
  network: StrapiSocialNetwork;
}

const useStyles = makeStyles((theme) => ({
  listItem: {
    "&:last-child": {
      marginRight: 0,
    },
    display: "inline-block",
    marginRight: "1.25rem",
  },
  link: {
    transition: "all 0.2s ease",
    fontFamily: theme.typography.h1.fontFamily,
    textTransform: theme.typography.h1.textTransform,
    color: theme.palette.text.secondary,
    opacity: 0.875,
    fontSize: "1.725rem",
    "&:hover, &:active": {
      color: theme.palette.text.primary,
      opacity: 1,
    },
  },
}));

const SocialNetwork: FC<SocialNetworkProps> = ({ network }) => {
  const classes = useStyles();
  const { Icon } = brandsStrategy[network.name];

  return (
    <li className={classes.listItem}>
      <Link
        href={network.link}
        target="_blank"
        rel="noopener noreferrer"
        title={`Ir al ${network.name} de Eliss`}
        className={classes.link}
      >
        <Icon />
      </Link>
    </li>
  );
};

export default SocialNetwork;
