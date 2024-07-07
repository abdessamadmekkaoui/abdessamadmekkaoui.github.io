import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactStyles.module.css';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm('service_j5pb40p', 'template_8ybqovp', form.current, 'xUsWHHESePAQlUCRW')
      .then((result) => {
        console.log(result.text);
        setStatus('Message sent successfully!');
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>Name</label>
          <input type="text" name="user_name" id="name" placeholder="Name" required />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>Email</label>
          <input type="email" name="user_email" id="email" placeholder="Email" required />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>Message</label>
          <textarea name="message" id="message" placeholder="Message" required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
      {status && <p className={styles.status}>{status}</p>}
    </section>
  );
}

export default Contact;