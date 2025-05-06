import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.main}>
                <h1>Hi, I'm <span className={styles.name}>Jason</span></h1>
                <h2>An aspiring blah blah blah.</h2>
            </div>
        </div>
    );
}