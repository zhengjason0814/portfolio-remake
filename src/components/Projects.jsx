import React from 'react';
import { useState } from "react";
import styles from './Projects.module.css';
import waffle from '../assets/waffle.jpg';
import bootrush from '../assets/bootrush.png';
import test from '../assets/testimage.png';

export default function Projects() {
    const defaultProject = {title:"Press A Project!", src:test, desc:"Here's the description!"}
    const projects = [
        {id:1, title:"BootyRush", src:bootrush, desc:"test desc 1"}, 
        {id:2, title:"Basic Online Calculator", src:waffle, desc:"test desc 2"},
        {id:3, title:"Walmart RFID System", src:waffle, desc:"test desc 3"},
        {id:4, title:"Adapative Inquiry Responder", src:waffle, desc:"test desc 3"},
        {id:5, title:"test3", src:waffle, desc:"test desc 3"},
        {id:6, title:"test3", src:waffle, desc:"test desc 3"},
        {id:7, title:"test3", src:waffle, desc:"test desc 3"},
        {id:8, title:"test3", src:waffle, desc:"test desc 3"},
        {id:9, title:"test3", src:waffle, desc:"test desc 3"},
        {id:10, title:"test3", src:waffle, desc:"test desc 3"},
        {id:11, title:"test3", src:waffle, desc:"test desc 3"},
        {id:12, title:"test3", src:waffle, desc:"test desc 3"},
        {id:13, title:"test3", src:waffle, desc:"test desc 3"},
        {id:14, title:"test3", src:waffle, desc:"test desc 3"}
    ];

    const [currProject,setCurrProject] = useState(defaultProject);

    
    return(
        <div className={styles.projectContainer} id="projects">
            <div className={styles.projectDisplay}>
                <div className={styles.projectInfo}>
                    <h2 className={styles.projectTitle}>{currProject.title}</h2>
                    <img src={currProject.src} className={styles.projectImage} />
                    <p className={styles.projectDesc}>{currProject.desc}</p>
                </div>
            </div>
            <div className={styles.projectList}>
                <ul className={styles.projectNames} style={{color:"white"}}>
                    {projects.map(project => (
                        <li style={{listStyleType:"none",
                            cursor:"pointer",
                            padding:"14px",
                            border:"solid 1px #B0B0B0",
                            borderRadius:"10px",
                            textAlign:"center"}}
                            key={project.id} onClick={() => setCurrProject(project)}>{project.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}