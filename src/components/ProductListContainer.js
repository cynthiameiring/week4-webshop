import React from "react";
import ProductList from "./ProductList";
import { connect } from "react-redux";

class ProductListContainer extends React.Component {
  addProductToCart = (product) => {
    this.props.dispatch({
      type: "ADD_PRODUCT_TO_CART",
      payload: product
    });
  }

  render() {
    return (
      <ProductList
        products={this.props.products}
        addProductToCart={this.addProductToCart}
      />
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    products: reduxState.products, // takes the reduxstate from the products.js makes it a prop.
  };
};

export default connect(mapStateToProps)(ProductListContainer);
