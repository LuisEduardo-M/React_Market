import React from "react";
import Nav from "./Nav";
import SearchBar from "./SearchBar";

import styles from './styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.header_principal}>
            <div className="container">
                <div className="row">
                    <div className="col">

                        <ul>
                            <li><a href="/">Login</a></li>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Products</a></li>
                            <li><a href="/">Cart</a></li>
                        </ul>

                        <Nav />
                        <SearchBar />

                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
