import { Typography } from "@material-ui/core";
import { FC } from "react";

interface StripeProduct {
  name: string;
}

interface CardProductCardProps {
  product: StripeProduct;
}

const CartProductCard: FC<CardProductCardProps> = ({ product }) => {
  return (
    <article>
      <Typography component="h3">{product.name}</Typography>
    </article>
  );
};

export default CartProductCard;
