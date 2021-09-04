import { IconButton, makeStyles } from "@material-ui/core";
import { FC } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

interface CartDrawerHeaderProps {
  onClose(): void;
}

const useStyles = makeStyles(theme => ({
  close: {
    left: 0,
    marginTop: "0.5rem",
    position: "absolute",
    top: 0,
    [theme.breakpoints.up("md")]: {
      left: "0.5rem",
    },
  },
}));

const CartDrawerHeader: FC<CartDrawerHeaderProps> = ({ onClose }) => {
  const classes = useStyles();

  return (
    <header>
      <IconButton onClick={onClose} aria-label="Regresar" size="medium" className={classes.close}>
        <IoIosArrowRoundBack />
      </IconButton>
    </header>
  );
};

export default CartDrawerHeader;
