import React from "react";
import { Route } from "react-router-dom";
import ProductListContainer from "./components/ProductListContainer";
import CartPageContainer from "./components/CartPageContainer";
import ProductDetailPageContainer from "./components/ProductDetailPageContainer";
import ExtraHeader from "./components/ExtraHeader";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/cart" component={CartPageContainer} />
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
