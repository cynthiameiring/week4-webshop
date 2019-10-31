import { setProducts } from "./set-products";

export function getProducts() {
  return function(dispatch) {
    fetch("http://localhost:4000/products")
      .then(res => res.json())
      .then(data => {
        dispatch(setProducts(data));
      });
  };
}
