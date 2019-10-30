import { combineReducers } from "redux";
import products from "./products";
import cartProducts from "./add-product";

export default combineReducers({
  products: products,
  cartProducts: cartProducts
});
