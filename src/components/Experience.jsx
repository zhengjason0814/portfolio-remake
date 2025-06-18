import React from 'react';
import styles from './Experience.module.css';

export default function Expereience() {
    return (
        <div className={styles.experienceBlock} id="experience">
        <h1>Experience</h1>
        <div className={styles.roles}>
            <h2><strong>Technical Experience</strong></h2>
            <div className={styles.rebny}>
                <h3>REBNY</h3>
                <p className={styles.position}><em>Technology Intern | Summer 2024</em></p>
                <ul className={styles.roleDetails}>
                    <li>Proposed, lead, and developed a project plan to 
                        implement a assistant widget company lease website.
                    </li>
                    <li>Developed a full-stack application with OpenAI API 
                        integration with constant 24/7 uptime.</li>
                    <li>Developed first functioning prototype to push to 
                        official deployment that ensured constant service and 
                        simplification of sales.</li>
                </ul>
            </div>
            <div className={styles.nonTechRole}>
                <p>If you want to have a look at my <strong>non-technical</strong> roles, please refer to my <span class="temp-link">LinkedIn!</span></p>
            </div>
        </div>
    </div>
    );
}