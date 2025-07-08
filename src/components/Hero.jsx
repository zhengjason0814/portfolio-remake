import styles from './Hero.module.css';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';


export default function Hero() {
    const typedRef = useRef(null);
    const typedInstance = useRef(null);

    useEffect(() => {
        typedInstance.current = new Typed(typedRef.current, {
        strings: ['software engineer.', 'Stony Brook student.'],
        typeSpeed: 90,
        backSpeed: 30,
        backDelay: 1000,
        loop: true,
        cursorChar: '|'
    });

    return () => {
      typedInstance.current.destroy();
    };
  }, []);
    return (
        <div className={styles.heroContainer}>
            <div className={styles.main}>
                <p className={styles.greeting}>Hi, I am</p>
                <h1 className={styles.nameContainer}><span className={styles.name}>Jason Zheng</span></h1>
                <h2 className={styles.secondaryText}>I am a <span ref={typedRef}></span></h2>
            </div>
        </div>
    );
}