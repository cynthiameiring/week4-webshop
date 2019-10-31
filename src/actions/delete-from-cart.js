export function deleteProductFromCart(product) {
  return {
    type: "DELETE_PRODUCT_FROM_CART",
    payload: product
  };
}
