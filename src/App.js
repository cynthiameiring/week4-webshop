import React from "react";
import { Route } from "react-router-dom";
import ProductListContainer from "./components/ProductListContainer";
import CartPage from "./components/CartPage";
import ProductDetailPageContainer from "./components/ProductDetailPageContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={ProductListContainer} />
      <Route path="/cart" component={CartPage} />
      <Route exact path="/products/:id" component={ProductDetailPageContainer} />
    </div>
  );
}

export default App;
