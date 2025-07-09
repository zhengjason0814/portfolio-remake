import styles from './Experience.module.css';
import {motion} from 'framer-motion';
import 'react-circular-progressbar/dist/styles.css';
import TechSkill from './TechSkill';
import { FaReact, FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt} from 'react-icons/fa';
import { SiRuby } from 'react-icons/si';

const value = 80;

export default function Expereience() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .5 }}
            viewport={{ once: false, amount: 0.3 }}
        >
            <div className={styles.experienceBlock} id="experience">
                <p style={{fontSize:"40px", fontWeight:"bold", marginBottom:"15px", color:"#ffffff", textShadow:"0 0 3px rgb(255, 255, 255)"}}>Experience & Skills</p>
                <div className={styles.experienceContent}>
                    <div className={styles.roles}>
                        <p style={{fontSize:"30px"}}><strong>Technical</strong></p>
                        <div className={styles.rebny}>
                            <p className={styles.rebnyTitle}>REBNY</p>
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
                            <p>If you want to see <strong>non-technical</strong> roles, refer to my
                                <a className={styles.linkedIn}
                                href="https://www.linkedin.com/in/zhengjason08/"
                                target="_blank"
                                rel="noreferrer"> LinkedIn!</a>
                            </p>
                        </div>
                    </div>
                    <div className={styles.skillsContent}>
                        <p style={{fontSize:"30px"}}><strong>Skills</strong></p>
                        <div className={styles.technologyContainer}>
                            <TechSkill className={styles.techIcon} value={65} icon={FaJava} color="#EA2D2E" />
                            <TechSkill className={styles.techIcon} value={80} icon={FaJs} color="#F7DF1E" />
                            <TechSkill className={styles.techIcon} value={70} icon={FaPython} color="#306998" />
                            <TechSkill className={styles.techIcon} value={80} icon={FaHtml5} color="#E34F26" />
                            <TechSkill className={styles.techIcon} value={60} icon={FaCss3Alt} color="#264DE4" />
                            <TechSkill className={styles.techIcon} value={60} icon={FaReact} color="#61DBFB" />
                            <TechSkill className={styles.techIcon} value={10} icon={SiRuby} color="#CC342D" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
