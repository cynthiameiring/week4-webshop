import React from "react";
import { connect } from "react-redux";
//import { Link } from "react-router-dom";
import "./CartPage.css";
import CartPage from "./CartPage";
import { deleteProductFromCart } from "../actions/delete-from-cart";

class CartPageContainer extends React.Component {
  render() {
    return (
      <div>
        <CartPage
          cartProducts={this.props.cartProducts}
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
  { deleteProductFromCart }
)(CartPageContainer);
