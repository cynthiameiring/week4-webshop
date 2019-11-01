import React from "react";
import { Link } from "react-router-dom";
import "./SingleProduct.css";

export default function ProductDetailPage(props) {
  return (
    <div className="single-product">
      <div>
        <img className="details-image" src={props.productImage} alt=""></img>
      </div>
      <div className="description">
        <h2>{props.productName}</h2>
        <p>{props.productDescription}</p>
        <h3>Price: € {props.productPrice}</h3>
        <h3 className='go-back'>
          <Link to="/"> Go back</Link>
        </h3>
      </div>
    </div>
  );
}
