import React from "react";
import { Link } from "react-router-dom";

export default function ProductDetailPage(props) {
  //  const productId = this.props.match.params.id;
  return (
    <div>
      <div>
        <p>test if detailpage works</p>
        <p>{props.productName}</p>
        <img src={props.productImage}></img>
      </div>
      <Link to="/"> Go back</Link>
    </div>
  );
}
