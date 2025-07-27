import styles from "./Hero.module.css";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { FiFileText } from "react-icons/fi";

export default function Hero() {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);
  const [init, setInit] = useState(false);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const particlesOptions = {
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: { value: "transparent" } },

    particles: {
      number: { value: 19, density: { enable: true, area: 900 } },
      shape: { type: "polygon" },
      color: { value: ["#ffde0e", "#e4a053", "#ffffff"] },
      opacity: { value: 0.2, random: false },
      size: { value: 12, random: { enable: true, minimumValue: 6 } },
      rotate: {
        value: { min: 0, max: 360 },
        direction: "random",
        animation: { enable: true, speed: 1 },
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: { default: "out" },
      },
      links: { enable: false },
    },

    interactivity: { events: { onHover: { enable: false } } },
    detectRetina: true,
  };

  useEffect(() => {
    typedInstance.current = new Typed(typedRef.current, {
      strings: ["software engineer.", "Stony Brook student."],
      typeSpeed: 90,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
      cursorChar: "|",
    });

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    return () => {
      typedInstance.current.destroy();
    };
  }, []);

  return (
    <div className={styles.heroContainer}>
      {init && <Particles id="tsparticles" loaded={particlesLoaded} options={particlesOptions} />}
      <div className={styles.main}>
        <p className={styles.greeting}>Hi, I am</p>
        <h1 className={styles.nameContainer}>
          <span className={styles.name}>Jason Zheng</span>
        </h1>
        <h2 className={styles.secondaryText}>
          I am a <span ref={typedRef}></span>
        </h2>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeButton}
        >
          <FiFileText className="reactIcon" color="#121212" />
          <p style={{ color: "#121212" }}>Resume</p>
        </a>
      </div>
    </div>
  );
}
