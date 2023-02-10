export const ADD_TO_CART = (state, { product, quantity }) => {
  let productInCart = state.cart.find((item) => {
    return item.product.id === product.id;
  });
  if (productInCart) {
    productInCart.quantity += quantity;
    return;
  }
  state.cart.push({
    product,
    quantity,
  });
  localStorage.setItem("carts", JSON.stringify(state.cart));
};

export const SET_CART = (state, cartItems) => {
  if (cartItems) {
    state.cart = cartItems;
  }
};

export const REMOVE_PRODUCT_FROM_CART = (state, product) => {
  state.cart = state.cart.filter((item) => {
    return item.product.id != product.id;
  });
  localStorage.setItem("carts", JSON.stringify(state.cart));
};

export const CLEAR_CART_ITEMS = (state) => {
  state.cart = [];
  localStorage.clear();
};
