import React from "react";
import { Link } from "react-router-dom";
import "./SingleProduct.css";

export default function ProductDetailPage(props) {
  return (
    <div className="single-product">
      <div>
        <img src={props.productImage}></img>
      </div>
      <div className="description">
        <h2>{props.productName}</h2>
        <h3>Price: € {props.productPrice}</h3>
        <p>{props.productDescription}</p>
        <Link to="/"> Go back</Link>
      </div>
    </div>
  );
}
