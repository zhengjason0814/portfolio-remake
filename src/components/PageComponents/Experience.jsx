import styles from "./Experience.module.css";
import { motion } from "framer-motion";
import "react-circular-progressbar/dist/styles.css";

import SkillCarousel from "../SkillCarousel";

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: 0.3 }}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className={styles.experienceBlock} id="experience">
        <p className={styles.sectionTitle}>Experience & Skills</p>
        <div className={styles.experienceContent}>
          <div className={styles.roles}>
            <p className={styles.technicalTitle}>
              <strong>Technical</strong>
            </p>
            <div className={styles.rebny}>
              <p className={styles.rebnyTitle}>REBNY</p>
              <p className={styles.position}>
                <em>Technology Intern | Summer 2024</em>
              </p>
              <ul className={styles.roleDetails}>
                <li>
                  Proposed, lead, and developed project plans to implement an AI widget on the
                  company lease website.
                </li>
                <li>
                  Developed a full-stack application with OpenAI API integration with constant 24/7
                  uptime.
                </li>
                <li>
                  Developed first functioning prototype to push to official deployment that ensured
                  constant service and simplification of sales.
                </li>
              </ul>
            </div>
            <div className={styles.nonTechRole}>
              <p>
                If you want to see <strong>non-technical</strong> roles, refer to my
                <a
                  className={styles.linkedIn}
                  href="https://www.linkedin.com/in/zhengjason08/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  LinkedIn!
                </a>
              </p>
            </div>
          </div>
          <SkillCarousel className={styles.SkillCarousel} />
        </div>
      </div>
    </motion.div>
  );
}
