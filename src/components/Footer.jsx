import React from 'react';

import styles from "./styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footer_principal}>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className={styles.footer_text}>
                            Made by <a href='https://github.com/LuisEduardo-M'>Luis Eduardo M.</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;