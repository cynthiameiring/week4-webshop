import React from "react";
import "./ProductList.css";
import { Link } from "react-router-dom";

export default function ProductList(props) {
  return (
    <div className="product-container">
      {props.products.map(product => (
        <div className="product" key={product.id}>
          <h3>{product.name}</h3>
          <img className="product-image" src={product.imageUrl} alt=""></img>
          <p>Price: € {product.price}</p>
          <button className="product-button" onClick={() => props.addProductToCart(product)}>
            Add to cart
          </button>
          <button className="product-button">
            {" "}
            <Link to={`/products/${product.id}`}>More details</Link>
          </button>
        </div>
      ))}
    </div>
  );
}
