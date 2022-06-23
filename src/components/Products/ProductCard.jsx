import React from "react";

import styles from "./../styles/Products.module.css";

const ProductCard = ({ products }) => {
    return (
        <div>
            <h3>{products.title}</h3>
            <p>
                {products.description}
            </p>
            <img className={styles.product_img} src={products.img} alt={products.alt}/>
        </div>
    );
}

export default ProductCard;


