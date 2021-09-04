import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { FC } from "react";
import { CgLock } from "react-icons/cg";
import { useShoppingCart } from "use-shopping-cart";

import paymentMethods from "~constants/paymentMethods";

const useStyles = makeStyles(theme => ({
  lock: {
    marginRight: "0.5rem",
  },
  paymentMethod: {
    "&:last-of-type": {
      marginRight: 0,
    },
    fontSize: "1.25rem",
    marginRight: "0.75rem",
    opacity: 0.75,
    [theme.breakpoints.up("md")]: {
      fontSize: "1.75rem",
    },
  },
  shippingText: {
    marginBottom: "0.5rem",
  },
}));

const CartDrawerFooter: FC = () => {
  const classes = useStyles();
  const { cartCount, redirectToCheckout, totalPrice } = useShoppingCart();
  const isEmpty = cartCount === 0;

  return (
    <footer>
      {!isEmpty && (
        <>
          <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
            <Typography>Total:</Typography>
            <Typography>{totalPrice}</Typography>
          </Box>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            align="center"
            className={classes.shippingText}
          >
            El envío será calculado en el checkout
          </Typography>
          <Button
            disabled={isEmpty}
            fullWidth
            disableElevation
            size="large"
            color="primary"
            variant="contained"
            onClick={redirectToCheckout}
          >
            Checkout ({cartCount})
          </Button>
        </>
      )}
      <Box mt={3} display="flex" alignItems="center" justifyContent="center">
        <CgLock className={classes.lock} />
        <Typography variant="subtitle2">Pago seguro a través de Stripe</Typography>
      </Box>
      <Typography align="center" color="textSecondary">
        {paymentMethods.map(({ Icon, label }) => (
          <Icon key={label} aria-label={label} className={classes.paymentMethod} />
        ))}
      </Typography>
    </footer>
  );
};

export default CartDrawerFooter;
