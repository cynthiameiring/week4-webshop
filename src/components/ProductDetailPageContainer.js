import React from "react";
import { connect } from "react-redux";
import ProductDetailPage from "./ProductDetailPage";

class ProductDetailPageContainer extends React.Component {
  render() {
    const productId = this.props.match.params.id;
    console.log("test1", productId);
    console.log("What is products?", this.props.products);
    // console.log("test2", this.props.products[4].id);

    const product = this.props.products.find(
      element => element.id === Number(productId)
    );

    //const product = this.props.products[productId - 1];

    console.log("test3", product);

    return (
      <ProductDetailPage
        productName={product.name}
        productImage={product.imageUrl}
        productPrice={product.price}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(ProductDetailPageContainer);
