import React from "react";
import ProductList from "./ProductList";
import { connect } from "react-redux";

class ProductListContainer extends React.Component {
  //   selectProduct = id => {
  //     // is a callback prop inside redux
  //     this.props.dispatch({
  //       type: "SELECT_Product",
  //       payload: id
  //     });
  //   };

  render() {
    console.log("check", this.props.products);
    return (
      <ProductList
        products={this.props.products}
        // selectProduct={this.selectProduct}
      />
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    products: reduxState.products // takes the reduxstate from the products.js makes it a prop.
  };
};

export default connect(mapStateToProps)(ProductListContainer);
