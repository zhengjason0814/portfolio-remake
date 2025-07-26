import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./TechSkill.module.css";

export default function TechSkill({ value, icon: Icon, imgSrc, color }) {
  const [progress, setProgress] = useState(0);

  return (
    <div
      className={styles.techCircle}
      onMouseEnter={() => setProgress(value)}
      onMouseLeave={() => setProgress(0)}
    >
      <CircularProgressbar
        value={progress}
        styles={buildStyles({
          pathColor: color,
          textColor: "#ffffff",
          trailColor: "#444",
          pathTransitionDuration: 0.6,
        })}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -45%)",
        }}
      >
        {Icon ? (
          <Icon className={styles.techIcon} color={color} />
        ) : (
          <img src={imgSrc} alt="icon" style={{ width: "3rem", height: "3rem" }} />
        )}
      </div>
    </div>
  );
}
