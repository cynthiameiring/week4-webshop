import { setNewProducts } from "./set-new-products";

export function catagorize(number) {
  return function(dispatch) {
    fetch("http://localhost:4000/products")
      .then(res => res.json())
      .then(data => {
        dispatch(
          setNewProducts(data.filter(element => element.categoryId === number))
        );
      });
  };
}
