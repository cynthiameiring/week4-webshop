import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function CartInfo(props) {
  return (
    <div className="cart-info">
      <h2>Your Cart</h2>
      <p>Items in Cart: {props.cartProducts.map(item => item.quantity)
          .reduce((total, quantity) => {
            return (total + quantity)
          }, 0)}</p>
      <p>
        Total:{" "}€{" "}
        {props.cartProducts
          .map(item => item.price*item.quantity)
          .reduce((total, price) => {
            return (parseFloat(total) + parseFloat(price)).toFixed(2);
          }, 0)}
        
      </p>
      <button className='go-to-cart'>
        <Link to={"/cart"}>Go to 🛒</Link>
      </button>
    </div>
  );
}

const mapStateToProps = reduxState => {
  return {
    cartProducts: reduxState.cartProducts
  };
};

export default connect(mapStateToProps)(CartInfo);
