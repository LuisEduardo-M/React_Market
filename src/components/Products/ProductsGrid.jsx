import React from "react";
import ProductCard from "./ProductCard";

import data from "./assets/productsData";

const ProductsGrid = () => {

    return (
        <div className="container">
            <div className="row">

                {data.products.map(product => (
                    <div key={product.id} className="col-md-3 mt-3">
                        <ProductCard products={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsGrid;
