// export const SET_PRODUCTS = "SET_PRODUCTS"; // incase you change the name/type than your reducer doesn't break

export function setNewProducts(products) {
  return {
    type: "SET_NEW_PRODUCTS",
    payload: products
  };
}
