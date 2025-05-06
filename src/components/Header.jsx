import React from 'react';
import styles from './Header.module.css';

export default function Header() {
    return (
            <header className={styles.linkContainer}>
                <a href="#about">About Me</a>
                <a href="#work">Work Experience</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </header>
    );
}
