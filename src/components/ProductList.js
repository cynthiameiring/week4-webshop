import React from "react";
import "./ProductList.css";
import { Link } from "react-router-dom";

export default function ProductList(props) {
  return (
    <div className="product-container">
      {props.products.map(product => (
        <div className="product" key={product.id}>
          <p>{product.name}</p>
          <img className="product-image" src={product.imageUrl} alt=""></img>
          <p>Price: €{" "}{product.price}</p>
          <button onClick={() => props.addProductToCart(product)}>
            Add to cart
          </button>
          <button>
            {" "}
            <Link to={`/products/${product.id}`}>More details</Link>
          </button>
        </div>
      ))}
    </div>
  );
}
