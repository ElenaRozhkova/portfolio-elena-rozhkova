import React from 'react';
import styles from './Preloader.module.css'; // CSS Modules verwenden
import loaderGif from './1487.gif';

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <div className={styles.container}>
                {/*<div className={styles.loader}></div>*/}
                <img src={loaderGif} alt="Ladeanimation" />
            </div>
        </div>
    );
};

export default Preloader;
