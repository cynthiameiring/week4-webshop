import React from "react";
import { connect } from "react-redux";
//import { Link } from "react-router-dom";
import "./CartPage.css";
import CartPage from "./CartPage";
import { deleteProductFromCart } from "../actions/delete-from-cart";
import {increaseQuantity} from '../actions/quantity'
import {decreaseQuantity} from '../actions/quantity'


class CartPageContainer extends React.Component {
  render() {
    return (
      <div>
        <CartPage
          cartProducts={this.props.cartProducts}
          increaseQuantity = {this.props.increaseQuantity}
          decreaseQuantity = {this.props.decreaseQuantity}
          deleteProductFromCart={this.props.deleteProductFromCart}
        />
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    cartProducts: reduxState.cartProducts
  };
};

export default connect(
  mapStateToProps,
  { deleteProductFromCart, increaseQuantity, decreaseQuantity }
)(CartPageContainer);
