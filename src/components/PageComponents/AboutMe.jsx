import styles from "./AboutMe.module.css";
import temp from "../../assets/temp.png";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.3 }}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className={styles.aboutContainer} id="about">
        <div className={styles.photoContainer}>
          <h1 className={styles.sectionTitle}>About Me</h1>
          <img className={styles.temp} src={temp} alt="person smiling at camera" />
        </div>
        <p className={styles.aboutText}>
          Hi there! I’m Jason Zheng, a student based in New York, currently pursuing my
          undergraduate degree at Stony Brook University with the goal of becoming a software
          developer.
          <br />
          <br />
          Passionate about engineering awe-inspiring technology, I’m learning how to turn innovative
          ideas into real-world applications. I strive to bring any idea — silly or serious — into
          reality, transforming simple thoughts into life-changing experiences.
          <br />
          <br />
          In the past, I interned at{" "}
          <span style={{ color: "white" }}>Real Estate Board of New York</span>, where I built an{" "}
          <span style={{ color: "white" }}>AI assistant</span> to streamline customer inquiries
          about lease purchases. I’ve also competed in university hackathons, where in one, our team
          landed first place in a track for developing a meaningful application about gambling.
          <br />
          <br />
          In my free time, I'm usually with friends playing online games or in the city.
        </p>
      </div>
    </motion.div>
  );
}
