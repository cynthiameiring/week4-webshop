// export const SET_PRODUCTS = "SET_PRODUCTS"; // incase you change the name/type than your reducer doesn't break

export function setProducts(products) {
  return {
    type: "SET_PRODUCTS",
    payload: products
  };
}
