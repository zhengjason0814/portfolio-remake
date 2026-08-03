import { useState } from "react";
import styles from "./SkillCarousel.module.css";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
// Brands whose logo is monochrome by design, plus AWS (only ships as a wide
// wordmark) and Render (no full-colour SVG available). These stay as tinted
// glyphs so they read against the dark background.
import {
  SiExpress,
  SiNextdotjs,
  SiPandas,
  SiScikitlearn,
  SiAmazonwebservices,
  SiVercel,
  SiRender,
} from "react-icons/si";
import cIcon from "../assets/icons/c.svg";
import cplusplusIcon from "../assets/icons/cplusplus.svg";
import dockerIcon from "../assets/icons/docker.svg";
import fastapiIcon from "../assets/icons/fastapi.svg";
import firebaseIcon from "../assets/icons/firebase.svg";
import gitIcon from "../assets/icons/git.svg";
import javaIcon from "../assets/icons/java.svg";
import javascriptTypescriptIcon from "../assets/icons/javascript-typescript.svg";
import mongodbIcon from "../assets/icons/mongodb.svg";
import mysqlIcon from "../assets/icons/mysql.svg";
import nginxIcon from "../assets/icons/nginx.svg";
import nodejsIcon from "../assets/icons/nodejs.svg";
import numpyIcon from "../assets/icons/numpy.svg";
import postgresqlIcon from "../assets/icons/postgresql.svg";
import postmanIcon from "../assets/icons/postman.svg";
import pythonIcon from "../assets/icons/python.svg";
import pytorchIcon from "../assets/icons/pytorch.svg";
import reactIcon from "../assets/icons/react.svg";
import redisIcon from "../assets/icons/redis.svg";
import replitIcon from "../assets/icons/replit.svg";
import rubyIcon from "../assets/icons/ruby.svg";
import supabaseIcon from "../assets/icons/supabase.svg";
import tailwindcssIcon from "../assets/icons/tailwindcss.svg";
import tensorflowIcon from "../assets/icons/tensorflow.svg";
import SkillSection from "./SkillSection";
import whiteArrow from "../assets/whiteArrow.png";

// Each `color` is the dominant hex of its own icon, so the progress ring and the
// logo inside it always agree. Ruby, Node, MongoDB and nginx use the official
// brand hex, which sits within their icon's own gradient range. Monochrome
// brands (Express, Next.js, pandas, Vercel) use #F9F9F9.
const languages = [
  { imgSrc: pythonIcon, value: 90, color: "#306998", name: "Python" },
  { imgSrc: javascriptTypescriptIcon, value: 90, color: "#007ACC", name: "JavaScript / TypeScript" },
  { imgSrc: javaIcon, value: 65, color: "#EA2D2E", name: "Java" },
  { imgSrc: cplusplusIcon, value: 30, color: "#00599C", name: "C++" },
  { imgSrc: cIcon, value: 30, color: "#A9BACD", name: "C" },
  { imgSrc: rubyIcon, value: 20, color: "#CC342D", name: "Ruby" },
];

const frameworksLibraries = [
  { imgSrc: reactIcon, value: 60, color: "#61DAFB", name: "React" },
  { imgSrc: tailwindcssIcon, value: 50, color: "#38BDF8", name: "Tailwind CSS" },
  { imgSrc: nodejsIcon, value: 40, color: "#339933", name: "Node.js" },
  { icon: SiExpress, value: 30, color: "#F9F9F9", name: "Express" },
  { imgSrc: fastapiIcon, value: 50, color: "#049688", name: "FastAPI" },
  { icon: SiNextdotjs, value: 50, color: "#F9F9F9", name: "Next.js" },
];

const dataMl = [
  { imgSrc: mongodbIcon, value: 70, color: "#47A248", name: "MongoDB" },
  { imgSrc: postgresqlIcon, value: 50, color: "#336791", name: "PostgreSQL" },
  { imgSrc: supabaseIcon, value: 30, color: "#3ECF8E", name: "Supabase" },
  { imgSrc: mysqlIcon, value: 30, color: "#00618A", name: "MySQL" },
  { imgSrc: redisIcon, value: 40, color: "#D82C20", name: "Redis" },
  { icon: SiPandas, value: 50, color: "#F9F9F9", name: "pandas" },
  { imgSrc: numpyIcon, value: 40, color: "#4DABCF", name: "NumPy" },
  { icon: SiScikitlearn, value: 50, color: "#F7931E", name: "scikit-learn" },
  { imgSrc: pytorchIcon, value: 20, color: "#EE4C2C", name: "PyTorch" },
  { imgSrc: tensorflowIcon, value: 20, color: "#FF6F00", name: "TensorFlow" },
];

const tools = [
  { imgSrc: gitIcon, value: 80, color: "#F34F29", name: "Git" },
  { imgSrc: dockerIcon, value: 50, color: "#00AADA", name: "Docker" },
  { imgSrc: postmanIcon, value: 30, color: "#F37036", name: "Postman" },
  { imgSrc: replitIcon, value: 15, color: "#F26207", name: "Replit" },
];

const cloudDeployment = [
  { icon: SiAmazonwebservices, value: 80, color: "#FF9900", name: "AWS" },
  { icon: SiVercel, value: 70, color: "#F9F9F9", name: "Vercel" },
  { icon: SiRender, value: 60, color: "#46E3B7", name: "Render" },
  { imgSrc: firebaseIcon, value: 20, color: "#FFCA28", name: "Firebase" },
  { imgSrc: nginxIcon, value: 40, color: "#009639", name: "Nginx" },
];

const slides = [
  { title: "Languages", icons: languages },
  { title: "Frameworks & Libraries", icons: frameworksLibraries },
  { title: "Data & ML", icons: dataMl },
  { title: "Tools", icons: tools },
  { title: "Cloud & Deployment", icons: cloudDeployment },
];

const SkillCarousel = () => {
  const [section, setSection] = useState(0);
  const lastSection = slides.length - 1;
  const goNext = () => {
    if (section === lastSection) setSection(0);
    else setSection(section + 1);
  };
  const goPrev = () => {
    if (section === 0) setSection(lastSection);
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
        {slides.map((slide) => (
          <div className={styles.slide} key={slide.title}>
            <SkillSection title={slide.title} icons={slide.icons} />
          </div>
        ))}
      </div>

      <FaCircleArrowLeft className={styles.navArrowLeft} onClick={goPrev} color="#797979ff" />
      <FaCircleArrowRight className={styles.navArrowRight} onClick={goNext} color="#797979ff" />
    </div>
  );
};

export default SkillCarousel;
