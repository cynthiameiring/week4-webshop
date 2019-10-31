import React from "react";
import ProductList from "./ProductList";
import { connect } from "react-redux";
import { getProducts } from "../actions/products";
import { addProductToCart } from "../actions/add-to-cart";
import { catagorize } from "../actions/catagorize";

class ProductListContainer extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div>
        <div>
          <button
            className="catagory-button"
            onClick={() => this.props.catagorize(2)}
          >
            Clothes
          </button>
          <button
            className="catagory-button"
            onClick={() => this.props.catagorize(1)}
          >
            Shoes
          </button>
          <button
            className="catagory-button"
            onClick={() => this.props.catagorize(3)}
          >
            Accessories
          </button>
        </div>
        <ProductList
          products={this.props.products}
          addProductToCart={this.props.addProductToCart}
        />{" "}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  if (reduxState.categorized.length !== 0) {
    return {
      products: reduxState.categorized
    };
  }
  return {
    products: reduxState.products
  };
};

export default connect(
  mapStateToProps,
  { getProducts, addProductToCart, catagorize }
)(ProductListContainer);
