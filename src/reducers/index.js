import { combineReducers } from "redux";
import products from "./products";
import cartProducts from "./cart";
import catagorized from "./catagorize";

export default combineReducers({
  products: products,
  cartProducts: cartProducts,
  categorized: catagorized
});
