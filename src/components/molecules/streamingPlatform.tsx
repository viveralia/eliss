import { Button, makeStyles } from "@material-ui/core";
import { FC } from "react";

import catalog from "~constants/brandsCatalog";
import { StrapiSocialNetwork } from "~types";

export interface StreamingPlatformProps {
  platform: Pick<StrapiSocialNetwork, "id" | "name" | "link">;
}

const useStyles = makeStyles(theme => ({
  listItem: {
    "&:last-child": {
      marginBottom: "0",
    },
    marginBottom: "0.75rem",
  },
  platform: {
    fontSize: "1.125rem",
    marginRight: "0.75rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.25rem",
    },
  },
}));

const StreamingPlatform: FC<StreamingPlatformProps> = ({ platform }) => {
  const classes = useStyles();
  const { Icon, color, name } = catalog[platform.name];

  return (
    <li className={classes.listItem}>
      <Button
        fullWidth
        disableElevation
        color="primary"
        variant="contained"
        component="a"
        rel="noopener noreferrer"
        target="_blank"
        href={platform.link}
      >
        <Icon style={{ color: color || "inherit" }} className={classes.platform} /> Escuchar en{" "}
        {name}
      </Button>
    </li>
  );
};

export default StreamingPlatform;
