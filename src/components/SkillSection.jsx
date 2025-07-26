import TechSkill from "../components/TechSkill";
import styles from "./SkillSection.module.css";

const SkillSection = ({ title, icons }) => {
  return (
    <div className={styles.skillSet}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.skillContainer}>
        {icons.map((icon, i) => (
          <TechSkill
            key={i}
            icon={icon.icon}
            value={icon.value}
            color={icon.color}
            imgSrc={icon.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
