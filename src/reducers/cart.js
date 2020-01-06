export default (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART": {
      //check if product already exists in cart
      const product = state.find(el => el.id === action.payload.id);
      if (product) {
        //console.log("i m already in cart");
        return state.map(product => {
          //if already exists, add 1 to quantity
          if (product.id === action.payload.id) {
            product.quantity = product.quantity + 1;
            return product;
          } else return product;
        });
      } else {
        //console.log("i go in cart");
        action.payload.quantity = 1;
        return [...state, action.payload];
      }
    }
    case "DELETE_PRODUCT_FROM_CART": {
      const index = state.indexOf(action.payload);
      const newCart = [...state];
      newCart.splice(index, 1);
      return newCart;
    }
    case "INCREASE_QUANTITY": {
      const newState = [...state];
      action.payload.quantity = action.payload.quantity + 1;
      return newState;
    }
    case "DECREASE_QUANTITY": {
      if (action.payload.quantity > 1) {
        const newState = [...state];
        action.payload.quantity = action.payload.quantity - 1;
        return newState;
      } else return state
    }
    default: {
      return state;
    }
  }
};
