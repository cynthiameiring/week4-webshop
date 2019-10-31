export default (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART": {
      return [...state, action.payload];
    }
    case "DELETE_PRODUCT_FROM_CART": {
      const index = state.indexOf(action.payload);
      const newCart = [...state];
      newCart.splice(index, 1);
      return newCart;
    }
    default: {
      return state;
    }
  }
};
