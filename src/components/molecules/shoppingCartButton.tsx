import { IconButton, makeStyles, Zoom } from "@material-ui/core";
import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useShoppingCart } from "use-shopping-cart";

const useStyles = makeStyles(theme => ({
  cart: {
    fontSize: "1.375rem",
    marginLeft: "2rem",
    position: "relative",
  },
  itemsCount: {
    alignItems: "center",
    backgroundColor: theme.palette.error.main,
    borderRadius: "50%",
    color: theme.palette.common.white,
    display: "flex",
    fontFamily: theme.typography.h1.fontFamily,
    fontSize: "0.6rem",
    fontWeight: theme.typography.h1.fontWeight,
    height: "1.125rem",
    justifyContent: "center",
    position: "absolute",
    right: -2,
    top: -2,
    width: "1.125rem",
  },
}));

const ShoppingCartButton: FC = () => {
  const router = useRouter();
  const classes = useStyles();
  const { cartCount } = useShoppingCart();

  const handleClick = useCallback(() => {
    if (router.query.music) return;

    const url = new URL(window?.location.href);
    url.searchParams.append("cart", "open");
    router.push(url, undefined, { scroll: false });
  }, [router]);

  return (
    <IconButton onClick={handleClick} size="small" className={classes.cart} aria-label="Carrito">
      <RiShoppingCart2Line />
      <Zoom in={!!cartCount}>
        <div className={classes.itemsCount}>
          <span>{cartCount}</span>
        </div>
      </Zoom>
    </IconButton>
  );
};

export default ShoppingCartButton;
