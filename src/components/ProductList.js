import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

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
          <button>
            {" "}
            <Link to={`/products/${product.id}`}>More details</Link>
          </button>
        </div>
      ))}
    </div>
  );
}
