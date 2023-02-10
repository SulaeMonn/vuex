export const addProToCart = ({ commit, dispatch }, { product, quantity }) => {
  commit("ADD_TO_CART", { product, quantity });
  dispatch(
    "addNotification",
    {
      type: "success",
      message: "Product added to cart",
    },
    { root: true }
  );
};

export const getCartItems = ({ commit }) => {
  commit("SET_CART", JSON.parse(localStorage.getItem("carts")));
};

export const removeProductFromCart = ({ commit, dispatch }, product) => {
  commit("REMOVE_PRODUCT_FROM_CART", product);
  dispatch(
    "addNotification",
    {
      type: "success",
      message: "Product removed from cart",
    },
    { root: true }
  );
};

export const clearCartItems = ({ commit, dispatch }) => {
  commit("CLEAR_CART_ITEMS");
  dispatch(
    "addNotification",
    {
      type: "success",
      message: " All Product removed from cart",
    },
    { root: true }
  );
};
