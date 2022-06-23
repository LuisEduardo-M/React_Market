import React from "react";

import styles from './styles/Nav.module.css';

const Nav = () => {
    return (

        <nav className={styles.header}>
            <div>
                <h1 className="fw-bold">React Market.</h1>
                <p>The Best Online Market for Eletronics!</p>
            </div>
        </nav>
    );
}

export default Nav;
