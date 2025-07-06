import styles from './Contact.module.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { MdSend } from 'react-icons/md';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_peyrg4l', 'template_efnid98', form.current, {
        publicKey: '61CQLuYPHeFNcGcTd',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };

    return (
        <div className={styles.contactContainer} id="contact">
            <div className={styles.contactForm}>
                <div className={styles.contactTitle}>Contact Me!</div>
                    <div className={styles.socialContainer}>
                        <div>want to talk? contact me via socials or put your info below!</div>
                        <div className={styles.iconList}>
                            <a className={styles.icon} href="https://linkedin.com/in/zhengjason08/" target="_blank" rel="noreferrer">
                                <FaLinkedin size={30} />
                            </a>
                            <a className={styles.icon} href="https://github.com/zhengjason0814" target="_blank" rel="noreferrer">
                                <FaGithub size={30} />
                            </a>
                        </div>
                    </div>
                    <form className={styles.formContainer} ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder="name" name="user_name" required />
                        <input type="email" placeholder="email" name="user_email" required />
                        <textarea placeholder="message" rows="5" name="message" required></textarea>
                        <button type="submit">Send Message<MdSend size={14} color="#121212" /></button>
                    </form>
            </div>
        </div>
    );

}