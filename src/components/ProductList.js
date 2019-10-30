import React from "react";
import "./Product.css";
import Header from "./Header";
import { Link } from "react-router-dom";

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
          <button>
            {" "}
            <Link to={`/products/${product.id}`}>More details</Link>
          </button>
        </div>
      ))}
    </div>
  );
}
