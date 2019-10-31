export default (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART": {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
};
