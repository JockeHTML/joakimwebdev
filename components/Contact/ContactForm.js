import React, { useEffect } from "react";
import emailjs from "emailjs-com";
import styles from "./ContactForm.module.css";
import cx from "classnames";
import Aos from "aos";
import "aos/dist/aos.css";

/* Email code setup via EmailJS for a simple and quick email service */

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_206hzpv",
      "template_byl1c47",
      e.target,
      "user_WCegDg1lg7n89Cavfa2QJ"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
};

function ContactForm(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={styles.formWrapper}>
      <div className={styles.content}>
        <div data-aos="fade-up" className={styles.text}>
          <h3>HEY YOU</h3>
          <h1>Lets talk about it!</h1>
          <p>
            You want to get in touch with me? Send me a massage here or get in
            touch with me through Linkedin, hope to hear from you.
          </p>
        </div>
        <form autoComplete="off" onSubmit={sendEmail} className={styles.form}>
          <div className={cx(styles.input, styles.name)}>
            <input
              autoComplete="off"
              placeholder="What’s your name?"
              type="text"
              name="name"
            />
          </div>
          <div className={cx(styles.input, styles.email)}>
            <input
              autoComplete="off"
              placeholder="What’s your email?"
              type="text"
              name="email"
            />
          </div>
          <div className={cx(styles.input, styles.message)}>
            <textarea
              autoComplete="off"
              placeholder="Write your message"
              type="text"
              name="message"
            />
          </div>
          <button type="submit" className={styles.formButton}>
            Send message
            <i className="fas fa-chevron-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
