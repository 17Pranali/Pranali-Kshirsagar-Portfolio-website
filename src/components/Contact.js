import React, { useRef } from "react";
import "./Contact.css";

import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3y65rc7",   // Replace with your EmailJS service ID
        "template_0g8qdni",  // Replace with your EmailJS template ID
        form.current,
        "mfEUSL1OS8UCE3ftS"    // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
