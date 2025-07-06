import styles from './Hero.module.css';

export default function Hero() {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.main}>
                <p>Hi, I am</p>
                <h1><span className={styles.name}>Jason Zheng</span></h1>
                <h2 className={styles.secondaryText}>I am a blah blah blah</h2>
            </div>
        </div>
    );
}