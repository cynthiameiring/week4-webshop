import React from "react";
import ProductList from "./ProductList";
import { connect } from "react-redux";
import { addProductToCart } from "../actions/add-to-cart";
import { categorize } from "../actions/categorize";

class ProductListContainer extends React.Component {
  componentDidMount() {
    this.props.categorize(0);
  }

  render() {
    return (
      <div>
        <div>
          <button
            className="category-button"
            onClick={() => this.props.categorize(0, this.props.products)}
          >
            All
          </button>
          <button
            className="category-button"
            onClick={() => this.props.categorize(2, this.props.products)}
          >
            Clothes
          </button>
          <button
            className="category-button"
            onClick={() => this.props.categorize(1, this.props.products)}
          >
            Shoes
          </button>
          <button
            className="category-button"
            onClick={() => this.props.categorize(3, this.props.products)}
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
  return {
    products: reduxState.categorized
  };
};

export default connect(mapStateToProps, { addProductToCart, categorize })(
  ProductListContainer
);
