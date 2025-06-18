import React from 'react';
import styles from './Header.module.css';

export default function Header() {
    const [visible, setVisible] = React.useState(false);

    const handleScroll = () => {
        if (window.scrollY > 700) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
            <header className={`${styles.linkContainer}` + (visible ? ` ${styles.visible}` : '')}>
                <a href="#about">About Me</a>
                <a href="#experience">Work Experience</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </header>
    );
}
