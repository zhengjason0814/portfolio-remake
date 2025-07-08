import { useState } from "react";
import styles from './Projects.module.css';
import waffle from '../assets/waffle.jpg';
import bootrush from '../assets/bootrush.png';
import test from '../assets/testimage.png';
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";


export default function Projects() {
    const defaultProject = {title:"Press A Project!", src:test, desc:"Here's the description!"}
    const projects = [
        {id:1, title:"BootyRush", src:bootrush, desc:"A silly pirate gambling gaming highlighting the risks of gambling! Won 1st place in the Treasure Trove of Talent track at HopperHacks 2025."}, 
        {id:2, title:"Basic Online Calculator", src:waffle, desc:"test desc 2"},
        {id:3, title:"Walmart RFID System", src:waffle, desc:"test desc 3"},
        {id:4, title:"Adapative Inquiry Responder", src:waffle, desc:"test desc 3"},
        {id:5, title:"Spotify Clone", src:waffle, desc:"test desc 3"},
    ];

    const [currProject,setCurrProject] = useState(defaultProject);
    
    return(
        <motion.div
            initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
        >
            <div className={styles.projectContainer} id="projects">
                <h2 style={{color:"white", fontSize:"40px"}}>Projects</h2>
                <div className={styles.projectSection}>
                    <div className={styles.projectList}>
                        {projects.map(project => (
                            <div className={styles.projectItem} key={project.id} onClick={() => setCurrProject(project)}>
                                {project.title}
                            </div>
                        ))}
                    </div>

                    <div className={styles.projectDisplay}>
                        <img src={currProject.src} className={styles.projectImage} />
                        <a className={styles.projectTitle}
                            >
                            {currProject.title}<BsArrowUpRight size={17} className={styles.linkIcon} />
                        </a>
                        <p className={styles.projectDesc}>{currProject.desc}</p>
                    </div>


                    <div className={styles.techStack}>
                        techStack
                    </div>
                </div>
            </div>
        </motion.div>
    );
}