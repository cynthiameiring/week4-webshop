import React from "react";
import "./Product.css";

export default function ProductList(props) {
  return (
    <div>
      <h1>Product Explorer</h1>
      {props.products.map(product => (
        <div className="product" key={product.id}>
          <p>{product.name}</p>
          <img src={product.imageUrl} alt=""></img>
          <p>Price: {product.price} euro</p>
          <button> Add to cart</button>
          <button> More details</button>
        </div>
      ))}
    </div>
  );
}
