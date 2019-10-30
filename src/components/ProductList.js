import React from "react";
import "./Product.css";
import Header from "./Header";

export default function ProductList(props) {
  return (
    <div>
      <Header />
      <h2>Our Products</h2>
      {props.products.map(product => (
        <div className="product" key={product.id}>
          <p>{product.name}</p>
          <img src={product.imageUrl} alt=""></img>
          <p>Price: {product.price} €</p>
          <button onClick={() => props.addProductToCart(product)}>
            Add to cart
          </button>
          <button> More details</button>
        </div>
      ))}
    </div>
  );
}
