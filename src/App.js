import React from "react";
import { Route } from "react-router-dom";
import ProductListContainer from "./components/ProductListContainer";
import CartPage from "./components/CartPage";
import ProductDetailPageContainer from "./components/ProductDetailPageContainer";
import ExtraHeader from "./components/ExtraHeader";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Header} />
      <Route path="/cart" component={CartPage} />
      <Route exact path="/" component={ExtraHeader} />
      <Route exact path="/" component={ProductListContainer} />

      <Route
        exact
        path="/products/:id"
        component={ProductDetailPageContainer}
      />
    </div>
  );
}

export default App;
