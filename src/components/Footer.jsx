import styles from './Footer.module.css';
import { SiJavascript } from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <p className={styles.name}>© Jason Zheng 2025</p>
                <div className={styles.techStack}> 
                    <p>Engineered with: </p>    
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <FaReact size={28} color="#61DAFB"/>
                        <SiJavascript size={28} color="#f7df1e" />
                        <FaHtml5 size={28} color="#e34c26" />
                        <FaCss3Alt size={28} color="#264de4" />
                    </div>
                </div>
            </div>
        </div>
    );
}