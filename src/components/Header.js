import React from "react";
import CartInfo from "./CartInfo";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="intro">
          <h1>OIKIA</h1>
          <p>Welcome to our furniture webshop</p>
        </div>
          <CartInfo />
      </div>
    );
  }
}
