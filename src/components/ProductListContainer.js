import React from "react";
import ProductList from "./ProductList";
import { connect } from "react-redux";
import { getProducts } from "../actions/products";

class ProductListContainer extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  addProductToCart = product => {
    this.props.dispatch({
      type: "ADD_PRODUCT_TO_CART",
      payload: product
    });
  };

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
    products: reduxState.products // takes the reduxstate from the products.js makes it a prop.
  };
};

export default connect(
  mapStateToProps,
  { getProducts }
)(ProductListContainer);
