import React from "react";
import ProductList from "./ProductList";
import { connect } from "react-redux";
import { getProducts } from "../actions/products";
import { addProductToCart } from "../actions/add-to-cart";

class ProductListContainer extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div>
        {/* <div>
          <h2>Products Categories</h2>
          <div>
            <button>All Products</button>
            <button>Clothes</button>
            <button>Shoes</button>
            <button>Accessories</button>
          </div>
        </div> */}
        <ProductList
          products={this.props.products}
          addProductToCart={this.props.addProductToCart}
        />{" "}
      </div>
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
  { getProducts, addProductToCart }
)(ProductListContainer);
