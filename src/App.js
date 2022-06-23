import React from "react";

import Header from "./components/Header";
import ProductsGrid from "./components/Products/ProductsGrid";
import Footer from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import Department from "./components/Department";

function App() {
  return (
    <>
      <Header />
      <ProductsGrid />
      <Department />
      <Footer />
    </>
  );
}

export default App;
