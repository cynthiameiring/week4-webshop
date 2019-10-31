import React from "react";
import CartInfo from "./CartInfo";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="intro">
          <h1 className="title">OIKIA</h1>
        </div>
        <CartInfo />
      </div>
    );
  }
}
