import { combineReducers } from "redux";
import products from "./products";
import cartProducts from "./cart";

export default combineReducers({
  products: products,
  cartProducts: cartProducts
});
