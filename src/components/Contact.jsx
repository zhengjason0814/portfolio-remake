import styles from './Contact.module.css';

export default function Contact() {
    return (
        <div className={styles.contactContainer} id="contact">
            <div className={styles.contactForm}>
                <div className={styles.contactTitle}>Contact Me!</div>
                <div className={styles.socialContainer}>
                    <div>want to talk? contact me via socials or put your info below!</div>
                </div>
                <form className={styles.formContainer}>
                    <input type="text" placeholder="name" required />
                    <input type="email" placeholder="email" required />
                    <textarea placeholder="message" rows="5" required></textarea>
                    <button type="submit">Send Message!</button>
                </form>
            </div>
        </div>
    );

}