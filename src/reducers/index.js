import { combineReducers } from "redux";
import cartProducts from "./cart";
import categorized from "./categorize";

export default combineReducers({
  cartProducts: cartProducts,
  categorized: categorized
});
