import React from "react";
import { connect } from "react-redux";
import ProductDetailPage from "./ProductDetailPage";

class ProductDetailPageContainer extends React.Component {
  render() {
    const productId = this.props.match.params.id;

    const product = this.props.products.find(
      element => element.id === Number(productId)
    );

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
    products: state.categorized
  };
};

export default connect(mapStateToProps)(ProductDetailPageContainer);
