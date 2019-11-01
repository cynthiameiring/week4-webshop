import { setProducts } from "./set-products";

export function categorize(number) {
  return function(dispatch) {
    fetch("http://localhost:4000/products")
      .then(res => res.json())
      .then(data => {
        if (number === 0) {
          dispatch(setProducts(data))
        } else
        dispatch(
          setProducts(data.filter(element => element.categoryId === number))
        );
      });
  };
}
