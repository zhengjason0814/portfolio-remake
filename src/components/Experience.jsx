import styles from './Experience.module.css';
import {motion} from 'framer-motion';

export default function Expereience() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .5 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className={styles.experienceBlock} id="experience">
                    <p style={{fontSize:"40px", fontWeight:"bold"}}>Experience</p>
                    <div className={styles.roles}>
                        <h2 style={{fontSize:"30px"}}><strong>Technical Experience</strong></h2>
                        <div className={styles.rebny}>
                            <h3>REBNY</h3>
                            <p className={styles.position}><em>Technology Intern | Summer 2024</em></p>
                            <ul className={styles.roleDetails}>
                                <li>Proposed, lead, and developed project plans to 
                                    implement an AI widget on the company lease website.
                                </li>
                                <li>Developed a full-stack application with OpenAI API 
                                    integration with constant 24/7 uptime.</li>
                                <li>Developed first functioning prototype to push to 
                                    official deployment that ensured constant service and 
                                    simplification of sales.</li>
                            </ul>
                        </div>
                        <div className={styles.nonTechRole}>
                            <p>If you want to have a look at my <strong>non-technical</strong> roles, please refer to my
                                <a className={styles.linkedIn}
                                href="https://www.linkedin.com/in/zhengjason08/"
                                target="_blank"
                                rel="noreferrer">LinkedIn!</a>
                            </p>
                        </div>
                    </div>
                </div>
        </motion.div>
    );
}
