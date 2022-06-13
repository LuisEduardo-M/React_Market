import React from "react";

const ProductCard = ({ products }) => {
    //console.log(products)

    return (
        <div>
            <h3>{products.title}</h3>
            <p>
                {products.description}
            </p>
        </div>
    );
}

export default ProductCard;


