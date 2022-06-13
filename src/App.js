import React from "react";

import Header from "./components/Header";

import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsGrid from "./components/Products/ProductsGrid";

function App() {
  return (
    <>
      <Header />
      <ProductsGrid />
    </>
  );
}

export default App;
