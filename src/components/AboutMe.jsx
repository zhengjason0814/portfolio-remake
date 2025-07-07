import styles from './AboutMe.module.css';
import waffle from '../assets/waffle.jpg';
import {motion} from 'framer-motion';

export default function AboutMe() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className={styles.aboutContainer} id="about">
                <div className={styles.textContainer}>
                    <h1 style={{fontSize:"50px", color:"#B0B0B0"}}>About Me</h1>
                    <p className={styles.aboutText}>
                        Based in NY 🗽, I'm a student working towards a B.S. in Information Systems at Stony Brook University. I've developed skillsets with programming languages, web development, and database management technologies.
                        <br /><br />
                        In a past internship, I have also had the opportunity to not only be a part of but lead a new project that utilized API's to develop new technologies to streamline user inquiries about their lease sales website.
                        <br /><br />
                        If there are any questions you may have about me, please feel free to reach out!
                    </p>
                </div>
            <img className={styles.waffle} src={waffle}/>
            </div>
        </motion.div>
    );
}