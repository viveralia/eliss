import { Container, Drawer, makeStyles } from "@material-ui/core";
import { useRouter } from "next/router";
import { FC, useCallback, useContext, useEffect } from "react";

import { CartDrawerContext } from "~context";

import CartDrawerBody from "./cartDrawerBody";
import CartDrawerFooter from "./cartDrawerFooter";
import CartDrawerHeader from "./cartDrawerHeader";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    overflow: "hidden",
    paddingBottom: "1rem",
    paddingTop: "1rem",
    position: "relative",
  },
  paper: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "24rem",
    },
  },
}));

const CartDrawer: FC = () => {
  const classes = useStyles();
  const router = useRouter();
  const { dispatch, state } = useContext(CartDrawerContext);

  useEffect(() => {
    if (router.query.cart) {
      dispatch({ type: "SHOW_CART_CONTENT" });
    } else {
      dispatch({ type: "HIDE_CART_CONTENT" });
    }
  }, [router, dispatch]);

  const handleClose = useCallback(() => {
    const url = new URL(window?.location.href);
    url.searchParams.delete("cart");
    router.push(url, undefined, { scroll: false });
  }, [router]);

  return (
    <Drawer
      PaperProps={{ className: classes.paper }}
      anchor="right"
      open={state.isOpen}
      onClose={handleClose}
    >
      <Container className={classes.container}>
        <CartDrawerHeader onClose={handleClose} />
        <CartDrawerBody />
        <CartDrawerFooter />
      </Container>
    </Drawer>
  );
};

export default CartDrawer;
