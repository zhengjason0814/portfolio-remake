import { useState } from "react";
import styles from "./Projects.module.css";
import waffle from "../../assets/waffle.jpg";
import bootrush from "../../assets/bootrush.png";
import blank from "../../assets/blank.png";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import calculatorImage from "../../assets/calculatorImage.png";
import walmartImage from "../../assets/walmartImage.png";
import customerImage from "../../assets/customerImage.png";
import productStore from "../../assets/productStore.png";
import chatty from "../../assets/chatty.png";

import {
  FaReact,
  FaPython,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaComments,
} from "react-icons/fa";
import { IoStorefrontOutline } from "react-icons/io5";
import { FaShoppingCart, FaCalculator, FaLightbulb, FaSpotify } from "react-icons/fa";
import { GiCrossedPistols } from "react-icons/gi";

import { SiRuby, SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

export default function Projects() {
  const defaultProject = {
    title: "Portfolio Project",
    src: blank,
    techStack: ["javascript", "html", "css"],
    desc: "You're looking at it!",
  };
  const projects = [
    {
      id: 1,
      title: "Chatty",
      icon: <FaComments color="#0035baff" />,
      src: chatty,
      techStack: ["javascript", "react", "nodejs", "express", "mongodb", "tailwind", "html", "css"],
      link: "https://chatty-c3so.onrender.com",
      desc: "A chat application that acts as a platform for users to chat and video call with others in real-time to practice their language skills! Also includes a site color theme toggle, including a multitude of color themes such as light and dark mode to name a few.",
    },
    {
      id: 2,
      title: "Pirate Gambling",
      icon: <GiCrossedPistols color="#705540" />,
      src: bootrush,
      techStack: ["javascript", "html", "css"],
      link: "https://zhengjason0814.github.io/bootyRush/index.html",
      desc: "A silly pirate gambling gaming highlighting the risks of gambling! Won 1st place in the Treasure Trove of Talent track at HopperHacks 2025.",
    },
    {
      id: 3,
      title: "MERN Product Store",
      icon: <FaShoppingCart color="#3a5aa6" />,
      src: productStore,
      link: "https://mern-product-store-wdmm.onrender.com/",
      techStack: ["javascript", "react", "nodejs", "express", "mongodb", "html", "css"],
      desc: "My very first MERN stack application! Add, delete, edit, and see all products within a MongoDB database! It's hosted for free on Render, please give it a minute to load.",
    },
    {
      id: 4,
      title: "Walmart RFID System",
      icon: <IoStorefrontOutline color="#2c3e50" />,
      src: walmartImage,
      techStack: ["java"],
      link: "https://github.com/zhengjason0814/School-Projects",
      desc: "A demo of a department store RFID system that tracks inventory and provides real-time updates on stock levels.",
    },
    {
      id: 5,
      title: "Inquiry Responder",
      icon: <FaLightbulb color="#f1c40f" />,
      src: customerImage,
      techStack: ["java"],
      link: "https://github.com/zhengjason0814/School-Projects",
      desc: "A demo of a customer service inquiry responder that uses a properly inputted text file with issues and solutions to provide accurate and helpful responses to customer inquiries.",
    },
    {
      id: 6,
      title: "Basic Online Calculator",
      icon: <FaCalculator color="#34495e" />,
      src: calculatorImage,
      techStack: ["html", "css", "javascript"],
      link: "https://zhengjason0814.github.io/calculator/",
      desc: "An extremely basic online calculator that can do basic arithmetic operations.",
    },
    {
      id: 7,
      title: "Spotify Clone",
      icon: <FaSpotify color="#1DB954" />,
      src: waffle,
      link: "",
      techStack: ["javascript", "react", "nodejs", "express", "mongodb", "html", "css"],
      desc: "This is a planned project, TBD! Here's a picture of a waffle for now.",
    },
  ];

  const [currProject, setCurrProject] = useState(defaultProject);

  const getIconForTech = (tech) => {
    switch (tech) {
      case "html":
        return <FaHtml5 className={styles.techIcon} color="#E34F26" />;
      case "css":
        return <FaCss3Alt className={styles.techIcon} color="#1572B6" />;
      case "javascript":
        return <FaJs className={styles.techIcon} color="#F7DF1E" />;
      case "react":
        return <FaReact className={styles.techIcon} color="#61DBFB" />;
      case "nodejs":
        return <FaNodeJs className={styles.techIcon} color="#339933" />;
      case "express":
        return <SiExpress className={styles.techIcon} color="#ffffff" />;
      case "mongodb":
        return <SiMongodb className={styles.techIcon} color="#47A248" />;
      case "java":
        return <FaJava className={styles.techIcon} color="#EA2D2E" />;
      case "ruby":
        return <SiRuby className={styles.techIcon} color="#CC342D" />;
      case "python":
        return <FaPython className={styles.techIcon} color="#306998" />;
      case "tailwind":
        return <SiTailwindcss className={styles.techIcon} color="#38BDF8" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.3 }}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className={styles.projectContainer} id="projects">
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.projectSection}>
          <div className={styles.projectList}>
            {projects.map((project) => (
              <div
                className={styles.projectItem}
                key={project.id}
                onClick={() => setCurrProject(project)}
              >
                {project.icon}
                {project.title}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currProject.id}
              className={styles.projectDisplay}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.projectDisplay}>
                <img src={currProject.src} className={styles.projectImage} alt="project" />
                <a
                  className={styles.projectTitle}
                  href={currProject.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {currProject.title}
                  <BsArrowUpRight size={17} className={styles.linkIcon} />
                </a>
                <p className={styles.projectDesc}>{currProject.desc}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={currProject.id + "-tech"}
              className={styles.techStack}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {currProject.techStack.map((tech, index) => (
                <motion.div
                  key={tech + index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {getIconForTech(tech)}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
