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

// import { setProducts } from "./set-products";

// function set (number, data, dispatch) {
//   if (number === 0) {
//     console.log('number is 0')    
//     dispatch(setProducts(data))
//   } else {
//     console.log(`number is ${number}`)
//     dispatch(
//       setProducts(data.filter(element => element.categoryId === number))
//     );
//   }
// }

// export function categorize(number, data) {
//   return function(dispatch) {
//     if (data) {
//       console.log('data exists')
//       set(number, data, dispatch)
//     } else {
//       console.log('no data')
//       fetch("http://localhost:4000/products")
//       .then(res => res.json())
//       .then(data => {
//         set(number, data, dispatch)
//       });
//     }
//   };
// }
