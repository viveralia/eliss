import { createContext, Dispatch, FC, useMemo, useReducer } from "react";

import { cartDrawerReducer, CartDrawerAction, CartDrawerState } from "~reducers";

interface CartDarwerContextValue {
  dispatch: Dispatch<CartDrawerAction>;
  state: CartDrawerState;
}

export const CartDrawerContext = createContext({} as CartDarwerContextValue);

export const CartDrawerContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(cartDrawerReducer, {
    isOpen: false,
  });

  const value = useMemo(() => {
    return { dispatch, state };
  }, [state]);

  return <CartDrawerContext.Provider value={value}>{children}</CartDrawerContext.Provider>;
};
