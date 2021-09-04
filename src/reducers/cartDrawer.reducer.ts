type ActionTypes = "SHOW_CART_CONTENT" | "HIDE_CART_CONTENT";

export interface CartDrawerState {
  isOpen: boolean;
}

export interface CartDrawerAction {
  type: ActionTypes;
}

export const cartDrawerReducer = (state: CartDrawerState, action: CartDrawerAction) => {
  switch (action.type) {
    case "SHOW_CART_CONTENT":
      return { ...state, isOpen: true };
    case "HIDE_CART_CONTENT":
      return { ...state, isOpen: false };
    default:
      throw new Error();
  }
};
