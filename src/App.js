import React from "react";
import "./App.css";
import ProductListContainer from "./components/ProductListContainer";
import ProductDetailPageContainer from "./components/ProductDetailPageContainer";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <p>Our amazing webshop</p>
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
