import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function CartInfo(props) {
  return (
    <div className="cart-info">
      <h2>Your Cart</h2>
      <p>Items in Cart: {props.cartProducts.length}</p>
      <p>
        total:{" "}
        {props.cartProducts
          .map(item => item.price)
          .reduce((total, price) => {
            return total + Number(price);
          }, 0)}{" "}
        €
      </p>
      <button>
        <Link to={"/cart"}>Go to Cart</Link>
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
