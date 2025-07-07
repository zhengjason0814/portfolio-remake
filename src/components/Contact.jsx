import styles from './Contact.module.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion';


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
      <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, amount: 0.3 }}
      >
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
      </motion.div>
    );

}