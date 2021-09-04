import { Button, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";
import { useShoppingCart } from "use-shopping-cart";

import { CartProductCard } from "~components/organisms";

const useStyles = makeStyles(() => ({
  body: {
    flex: 1,
    marginTop: "3rem",
    overflowY: "auto",
  },
  empty: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  emptyText: {
    marginBottom: "2rem",
  },
}));

const CartDrawerBody: FC = () => {
  const classes = useStyles();
  const { cartCount } = useShoppingCart();
  const isEmpty = cartCount === 0;

  return (
    <div className={clsx(classes.body, isEmpty && classes.empty)}>
      {isEmpty ? (
        <>
          <Typography className={classes.emptyText}>Tu carrito está vacío</Typography>
          <Link passHref href="/merch">
            <Button
              component="a"
              fullWidth
              disableElevation
              size="large"
              color="primary"
              variant="contained"
            >
              Ver merch
            </Button>
          </Link>
        </>
      ) : (
        <>
          <Typography gutterBottom>Carrito</Typography>
          {[{ name: "Dummy" }].map((product, i) => (
            <CartProductCard key={i} product={product} />
          ))}
        </>
      )}
    </div>
  );
};

export default CartDrawerBody;
