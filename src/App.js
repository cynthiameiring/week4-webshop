import React from "react";
import ProductListContainer from "./components/ProductListContainer";
import { Route } from "react-router-dom";
import CartPage from "./components/CartPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={ProductListContainer} />
      <Route path="/cart" component={CartPage} />
    </div>
  );
}

export default App;
