import React from 'react';
import styles from './AboutMe.module.css';
import waffle from '../assets/waffle.jpg';

export default function AboutMe() {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.textContainer}>
            <h1 style={{fontSize:"50px", color:"#B0B0B0"}}>About Me</h1>
            <p className={styles.aboutText}>
                Based in NY 🗽, I'm a student working towards a B.S. in Information Systems at Stony Brook University. Throughout my academics, I've developed a skillset with programming languages, web development, and database management technologies through projects.
                <br /><br />
                In a past internship, I have also had the opportunity to not only be a part of but lead a new project that utilized OpenAI's API to develop new technologies to streamline user inquiries about their lease sales website.
                <br /><br />
                If there are any questions you may have about me, please feel free to reach out to me at jasonzheng0814@gmail.com!
            </p>
        </div>
        <img className={styles.waffle} src={waffle}/>
        </div>
    );
}