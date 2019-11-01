import React from "react";
import { Link } from "react-router-dom";
import "./CartPage.css";

export default function CartPage(props) {
  return (
    <div>
      <h1>Your Cart</h1>

      <div className="products-container">
        {props.cartProducts.map(item => (
          <div className="product-in-cart">
            <img className="image-in-cart" alt="" src={item.imageUrl} />
            <p>Price: {item.price} €</p>
            <div>
              <button onClick={() => props.decreaseQuantity(item)}>-</button>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => props.increaseQuantity(item)}>+</button>
            </div>
            <button onClick={() => props.deleteProductFromCart(item)}>
              Delete from cart
            </button>
          </div>
        ))}
      </div>
      <h2>
        Total:{" "}
        {props.cartProducts
          .map(item => item.price)
          .reduce((total, price) => {
            return (parseFloat(total) + parseFloat(price)).toFixed(2);
          }, 0)}{" "}
        €
      </h2>
      <button>
        <Link to={"/"}>Continue Shopping</Link>
      </button>
    </div>
  );
}
