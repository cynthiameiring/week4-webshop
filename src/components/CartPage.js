import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Header from "./Header";

function CartPage(props) {
  return (
    <div className="cart-info">
      <Header />
      <h1>Your Cart</h1>
      <div>
        Items in Cart:{" "}
        {props.cartProducts.map(item => (
          <ul>
            <li>
              <img className="" alt="" src={item.imageUrl} />
              <p>Price: {item.price} €</p>
            </li>
          </ul>
        ))}
      </div>
      <h2>
        Total:{" "}
        {props.cartProducts
          .map(item => item.price)
          .reduce((total, price) => {
            return total + Number(price);
          }, 0)}{" "}
        €
      </h2>
      <button>
        <Link to={"/"}>Continue Shopping</Link>
      </button>
    </div>
  );
}

const mapStateToProps = reduxState => {
  return {
    cartProducts: reduxState.cartProducts
  };
};

export default connect(mapStateToProps)(CartPage);
