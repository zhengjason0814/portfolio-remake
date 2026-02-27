import styles from "./AboutMe.module.css";
import temp from "../../assets/temp.webp";
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
          Hi there! I’m Jason Zheng, a student based in New York, about to obtain my undergraduate
          degree at Stony Brook University with the goal of becoming a software developer.
          <br />
          <br />
          Passionate about engineering awe-inspiring technology, I’m learning how to turn innovative
          ideas into real-world applications. I strive to be able tobring any idea, silly or
          serious, into reality, bringing simple thoughts to life.
          <br />
          <br />
          In the past, I interned at{" "}
          <span style={{ color: "white" }}>Real Estate Board of New York</span>, where I built an{" "}
          <span style={{ color: "white" }}>AI agent</span> to streamline customer inquiries, and I'm
          currently growing at my fellowship with{" "}
          <span style={{ color: "white" }}>Stony Brook University's MARCOM Department</span> as a
          <span style={{ color: "white" }}> front-end web developer</span>, helping launch new
          accessible and user-friendly websites for more than
          <span style={{ color: "white" }}> ~40,000</span> of students and staff.
          <br />
          <br />
          I’ve also competed in university hackathons, one project landing a winning placement!
          These projects included a pirate gambling application and a live AI fitness feedback
          coach.
          <br />
          <br />
          In my free time, I'm usually with friends playing online games or in the city. I hope to
          hear from you!
        </p>
      </div>
    </motion.div>
  );
}
