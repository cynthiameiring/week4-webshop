import React from "react";
import { Link } from "react-router-dom";
import "./CartPage.css";

export default function CartPage(props) {
  return (
    <div>
      <h1>Your Cart</h1>
      <button className="continue-shopping">
        <Link to={"/"}>Continue Shopping</Link>
      </button>
      <div className="products-container">
        {props.cartProducts.map(item => (
          <div className="product-in-cart">
            <img className="image-in-cart" alt="" src={item.imageUrl} />
            <p>Price: €{item.price}</p>
            <div className="cart-details">
              <button className="change-quantity-button" onClick={() => props.decreaseQuantity(item)}>-</button>
              <p>Quantity: {item.quantity}</p>
              <button className="change-quantity-button" onClick={() => props.increaseQuantity(item)}>+</button>
            </div>
            <p>Total: €{parseFloat(item.price * item.quantity).toFixed(2)}</p>
            <button onClick={() => props.deleteProductFromCart(item)}>
              Delete from cart
            </button>
          </div>
        ))}
      </div>
      <h2>
        Total:{" "}€{" "}
        {props.cartProducts
          .map(item => item.price * item.quantity)
          .reduce((total, price) => {
            return (parseFloat(total) + parseFloat(price)).toFixed(2);
          }, 0)}
        
      </h2>
      <button>Proceed To Checkout</button>
    </div>
  );
}
