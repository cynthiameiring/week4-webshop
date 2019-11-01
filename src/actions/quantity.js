export function increaseQuantity(product) {
    return {
      type: "INCREASE_QUANTITY",
      payload: product
    };
  }

  export function decreaseQuantity(product) {
    return {
      type: "DECREASE_QUANTITY",
      payload: product
    };
  }
  