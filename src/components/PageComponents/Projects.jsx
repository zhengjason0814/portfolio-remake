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
import liftSafe from "../../assets/liftSafe.png";
import bread from "../../assets/bread.png";

import { FaComments, FaDumbbell, FaBreadSlice } from "react-icons/fa";
import { IoStorefrontOutline } from "react-icons/io5";
import { FaShoppingCart, FaCalculator, FaLightbulb, FaSpotify } from "react-icons/fa";
import { GiCrossedPistols } from "react-icons/gi";

// Brands with no full-colour SVG, or whose logo is monochrome by design.
import {
  SiExpress,
  SiMediapipe,
  SiGooglegemini,
  SiElevenlabs,
  SiAmazonwebservices,
  SiScikitlearn,
} from "react-icons/si";
import cssIcon from "../../assets/icons/css3.svg";
import dockerIcon from "../../assets/icons/docker.svg";
import fastapiIcon from "../../assets/icons/fastapi.svg";
import htmlIcon from "../../assets/icons/html5.svg";
import javaIcon from "../../assets/icons/java.svg";
import javascriptIcon from "../../assets/icons/javascript.svg";
import mongodbIcon from "../../assets/icons/mongodb.svg";
import nodejsIcon from "../../assets/icons/nodejs.svg";
import opencvIcon from "../../assets/icons/opencv.svg";
import pythonIcon from "../../assets/icons/python.svg";
import reactIcon from "../../assets/icons/react.svg";
import redisIcon from "../../assets/icons/redis.svg";
import rubyIcon from "../../assets/icons/ruby.svg";
import tailwindIcon from "../../assets/icons/tailwindcss.svg";
import typescriptIcon from "../../assets/icons/typescript.svg";

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
      title: "Bread",
      icon: <FaBreadSlice color="#d9a441" />,
      src: bread,
      link: "https://bread-topaz.vercel.app",
      techStack: [
        "react",
        "javascript",
        "nodejs",
        "express",
        "mongodb",
        "python",
        "fastapi",
        "redis",
        "docker",
        "aws",
        "tailwind",
        "scikitlearn",
      ],
      desc: "A personal finance app capable of connecting to real bank accounts through Plaid and automatically sorts transactions into categories! Three machine learning models handle spending forecasts, purchase classification, and flagging charges that look out of the ordinary. Built across four containerized services with Redis caching and receipt uploads to S3.",
    },
    {
      id: 8,
      title: "LiftSafe",
      icon: <FaDumbbell color="#66776c" />,
      src: liftSafe,
      link: "https://devpost.com/software/liftsafe-c957kw",
      techStack: [
        "javascript",
        "typescript",
        "react",
        "opencv",
        "mediapipe",
        "googlegemini",
        "elevenlabs",
        "html",
        "css",
      ],
      desc: "A hackathon project that helps people correct their form for exercises like push-ups and bicep curls! Utilizing Google's mediapipe to enable real-time computer vision, Google Gemini to enable smart form-suggestions, and ElevenLabs API to enable natural-sounding audio feedback.",
    },
    {
      id: 2,
      title: "Chatty",
      icon: <FaComments color="#0035baff" />,
      src: chatty,
      techStack: ["javascript", "react", "nodejs", "express", "mongodb", "tailwind", "html", "css"],
      link: "https://chatty-c3so.onrender.com",
      desc: "A chat application that acts as a platform for users to chat and video call with others in real-time to practice their language skills! Also includes a site color theme toggle, including a multitude of color themes such as light and dark mode to name a few.",
    },
    {
      id: 3,
      title: "Pirate Gambling",
      icon: <GiCrossedPistols color="#705540" />,
      src: bootrush,
      techStack: ["javascript", "html", "css"],
      link: "https://zhengjason0814.github.io/bootyRush/index.html",
      desc: "A silly pirate gambling gaming highlighting the risks of gambling! Won 1st place in the Treasure Trove of Talent track at HopperHacks 2025.",
    },
    {
      id: 4,
      title: "MERN Product Store",
      icon: <FaShoppingCart color="#3a5aa6" />,
      src: productStore,
      link: "https://mern-product-store-wdmm.onrender.com/",
      techStack: ["javascript", "react", "nodejs", "express", "mongodb", "html", "css"],
      desc: "My very first MERN stack application! Add, delete, edit, and see all products within a MongoDB database! It's hosted for free on Render, please give it a minute to load.",
    },
    {
      id: 5,
      title: "Walmart RFID System",
      icon: <IoStorefrontOutline color="#2c3e50" />,
      src: walmartImage,
      techStack: ["java"],
      link: "https://github.com/zhengjason0814/School-Projects",
      desc: "A demo of a department store RFID system that tracks inventory and provides real-time updates on stock levels.",
    },
    {
      id: 6,
      title: "Inquiry Responder",
      icon: <FaLightbulb color="#f1c40f" />,
      src: customerImage,
      techStack: ["java"],
      link: "https://github.com/zhengjason0814/School-Projects",
      desc: "A demo of a customer service inquiry responder that uses a properly inputted text file with issues and solutions to provide accurate and helpful responses to customer inquiries.",
    },
    {
      id: 7,
      title: "Basic Online Calculator",
      icon: <FaCalculator color="#34495e" />,
      src: calculatorImage,
      techStack: ["html", "css", "javascript"],
      link: "https://zhengjason0814.github.io/calculator/",
      desc: "An extremely basic online calculator that can do basic arithmetic operations.",
    },
    {
      id: 9,
      title: "Spotify Clone",
      icon: <FaSpotify color="#1DB954" />,
      src: waffle,
      link: "",
      techStack: ["javascript", "react", "nodejs", "express", "mongodb", "html", "css"],
      desc: "This is a planned project, TBD! Here's a picture of a waffle for now.",
    },
  ];

  const [currProject, setCurrProject] = useState(defaultProject);
  // The tech column clips its own overflow, so the hover label is rendered
  // outside it and positioned against the icon's viewport rect instead.
  const [hoveredTech, setHoveredTech] = useState(null);

  const showTechName = (event, tech) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setHoveredTech({
      name: techNames[tech] ?? tech,
      x: rect.left + rect.width / 2,
      y: rect.top,
    });
  };

  // Full-colour logos, matching the skills carousel. Anything without one falls
  // back to a tinted glyph below.
  const techLogos = {
    html: htmlIcon,
    css: cssIcon,
    javascript: javascriptIcon,
    typescript: typescriptIcon,
    react: reactIcon,
    nodejs: nodejsIcon,
    mongodb: mongodbIcon,
    java: javaIcon,
    ruby: rubyIcon,
    python: pythonIcon,
    tailwind: tailwindIcon,
    opencv: opencvIcon,
    fastapi: fastapiIcon,
    redis: redisIcon,
    docker: dockerIcon,
  };

  const techNames = {
    html: "HTML",
    css: "CSS",
    javascript: "JavaScript",
    typescript: "TypeScript",
    react: "React",
    nodejs: "Node.js",
    express: "Express",
    mongodb: "MongoDB",
    java: "Java",
    ruby: "Ruby",
    python: "Python",
    tailwind: "Tailwind CSS",
    opencv: "OpenCV",
    mediapipe: "MediaPipe",
    googlegemini: "Google Gemini",
    elevenlabs: "ElevenLabs",
    fastapi: "FastAPI",
    redis: "Redis",
    docker: "Docker",
    aws: "AWS",
    scikitlearn: "scikit-learn",
  };

  const getIconForTech = (tech) => {
    const logo = techLogos[tech];
    if (logo) {
      return <img src={logo} alt={techNames[tech]} className={styles.techIcon} />;
    }

    switch (tech) {
      case "express":
        return <SiExpress className={styles.techIcon} color="#F9F9F9" title="Express" />;
      case "mediapipe":
        return <SiMediapipe className={styles.techIcon} color="#0097A7" title="MediaPipe" />;
      case "googlegemini":
        return <SiGooglegemini className={styles.techIcon} color="#8E75B2" title="Google Gemini" />;
      case "elevenlabs":
        return <SiElevenlabs className={styles.techIcon} color="#F9F9F9" title="ElevenLabs" />;
      case "aws":
        return <SiAmazonwebservices className={styles.techIcon} color="#FF9900" title="AWS" />;
      case "scikitlearn":
        return <SiScikitlearn className={styles.techIcon} color="#F7931E" title="scikit-learn" />;
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
                  onMouseEnter={(event) => showTechName(event, tech)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  {getIconForTech(tech)}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {hoveredTech && (
          <span
            className={styles.techTooltip}
            style={{ left: hoveredTech.x, top: hoveredTech.y }}
          >
            {hoveredTech.name}
          </span>
        )}
      </div>
    </motion.div>
  );
}
