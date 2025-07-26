import { useState } from "react";
import styles from "./SkillCarousel.module.css";
import {
  FaReact,
  FaPython,
  FaJava,
  FaJs,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { SiRuby, SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import postmanIcon from "../assets/postman.svg";
import replitIcon from "../assets/replit.svg";
import mysql from "../assets/mysql.png";
import SkillSection from "./SkillSection";
import whiteArrow from "../assets/whiteArrow.png";

const languages = [
  { icon: FaJava, value: 65, color: "#e92d2dff" },
  { icon: FaJs, value: 80, color: "#F7DF1E" },
  { icon: FaPython, value: 70, color: "#306998" },
  { icon: FaHtml5, value: 85, color: "#E34F26" },
  { icon: FaCss3Alt, value: 55, color: "#1572B6" },
  { icon: SiRuby, value: 10, color: "#CC342D" },
];

const frameworksLibraries = [
  { icon: SiTailwindcss, value: 20, color: "#38BDF8" },
  { icon: SiExpress, value: 30, color: "#f9f9f9ff" },
  { icon: FaNodeJs, value: 30, color: "#339933" },
  { icon: FaReact, value: 50, color: "#61DBFB" },
];

const technologies = [
  { icon: FaGitAlt, value: 45, color: "#ffffffff" },
  { icon: SiMongodb, value: 30, color: "#47A248" },
  { imgSrc: postmanIcon, value: 30, color: "#FF6C37" },
  { imgSrc: mysql, value: 15, color: "#4479A1" },
  { imgSrc: replitIcon, value: 15, color: "#FF6C37" },
];

const SkillCarousel = () => {
  const [section, setSection] = useState(0);
  const goNext = () => {
    if (section === 2) setSection(0);
    else setSection(section + 1);
  };
  const goPrev = () => {
    if (section === 0) setSection(2);
    else setSection(section - 1);
  };

  return (
    <div className={styles.carouselContainer}>
      <div
        className={styles.carouselContent}
        style={{ transform: `translateX(-${section * 100}%)` }}
      >
        <div className={styles.skillPointer}>
          <p>hover us!</p>
          <img src={whiteArrow} alt="arrow pointing to skills saying hover them" />
        </div>
        <div className={styles.slide}>
          <SkillSection title="Languages" icons={languages} />
        </div>
        <div className={styles.slide}>
          <SkillSection title="Frameworks & Libraries" icons={frameworksLibraries} />
        </div>
        <div className={styles.slide}>
          <SkillSection title="Technologies" icons={technologies} />
        </div>
      </div>

      <FaCircleArrowLeft className={styles.navArrowLeft} onClick={goPrev} color="#797979ff" />
      <FaCircleArrowRight className={styles.navArrowRight} onClick={goNext} color="#797979ff" />
    </div>
  );
};

export default SkillCarousel;
