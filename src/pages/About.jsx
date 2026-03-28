import { useState } from "react";
import "./About.css";

// images
import profileImg from "../assets/aboutme.jpeg";
import envImg from "../assets/ourlearning.jpeg";
import envImg1 from "../assets/ourlearning1.jpeg";

// certificates
import cert1 from "../assets/cert1.jpeg";
import cert2 from "../assets/cert2.jpeg";
import cert3 from "../assets/cert3.jpeg";
import cert4 from "../assets/cert4.jpeg";

const About = () => {

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <h1>About Our Learning Platform</h1>
        <p>
          A supportive learning space designed to help students overcome
          difficulties in studies and build confidence.
        </p>
      </section>

      {/* ABOUT ME */}
      <div className="about-block about-me-flex">

        <div className="about-me-img">
          <img src={profileImg} alt="Meenakumari" />
        </div>

        <div className="about-me-text">
          <h2>About Me</h2>

          <p>
            I am <strong>Meenakumari Adusumilli</strong>, a dedicated Special Educator
            with over 14+ years of experience in supporting children with diverse
            learning needs.
          </p>

          <p>
            I specialize in identifying individual learning challenges and designing
            personalized strategies that make learning easier, engaging, and effective
            for every child.
          </p>

          <p>
            My approach focuses on building strong foundational skills, improving
            concentration, and boosting confidence through structured and interactive
            sessions.
          </p>
        </div>

      </div>

      <div className="about-divider"></div>

      {/* LEARNING ENVIRONMENT */}
      <div className="about-block learning-env-clean">

        <h2>Our Learning Environment</h2>

        <div className="env-row">
          <div className="env-full">
            <img src={envImg} alt="Learning Environment" />
          </div>

          <div className="env-small">
            <img src={envImg1} alt="Learning Side" />
          </div>
        </div>

        <p className="learning-text">
          A safe, supportive, and engaging learning space that encourages children 
          to build confidence, develop independence, and achieve their full potential.
        </p>

      </div>

      <div className="about-divider"></div>

      {/* ✅ CERTIFICATIONS (NO CONTAINER NOW) */}
      <div className="about-block cert-clean">

        <h2>Certifications</h2>

        <p className="cert-text">
          I hold professional certifications in special education and remedial therapy.
        </p>

        <div className="cert-grid">
          {[cert1, cert2, cert3, cert4].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Certificate ${index + 1}`}
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </div>

      </div>

      {/* MODAL */}
      {selectedImg && (
        <div className="modal" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="Full Certificate" className="modal-img" />
        </div>
      )}

    </div>
  );
};

export default About;