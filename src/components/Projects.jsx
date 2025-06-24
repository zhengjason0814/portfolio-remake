import React from 'react';
import styles from './Projects.module.css';
import waffle from '../assets/waffle.jpg';

export default function Projects() {
    const projects = [
        {id:1, title:"test1", src:waffle, desc:"test desc 1"}, 
        {id:2, title:"test2", src:waffle, desc:"test desc 2"}
    ];

    return(
        <div className={styles.projectContainer} id="projects">
            <div className={styles.projectDisplay}>
                <div className={styles.projectInfo}>
                    <h2 className={styles.projectName}>Lorem Ipsum</h2>
                    <div className={styles.projectImage} >Image Placeholder</div>
                    <p className={styles.projectDesc}>Example description</p>
                </div>
            </div>
            <div className={styles.projectList}>
                <ul className={styles.projectNames} style={{color:"white"}}>
                    {projects.map(project => (
                        <li>{project.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}