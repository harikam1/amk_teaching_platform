import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">

      <h1 className="page-title">Contact Us</h1>

      <p className="page-subtitle">
        If you have any questions or need learning support, feel free to reach
        out to us.
      </p>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Teacher</h3>
          <p>Adusumilli Meena Kumari</p>

          <h3>Email</h3>
          <p>a6@gmail.com</p>

          <h3>Phone</h3>
          <p>+91 9110532995</p>

        </div>

        <form className="contact-form">

          <input type="text" placeholder="Your Name" required />

          <input type="email" placeholder="Your Email" required />

          <textarea placeholder="Your Message" rows="5"></textarea>

          <button type="submit">Send Message</button>

        </form>

      </div>

    </div>
  );
};

export default Contact;