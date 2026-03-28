import Carousel from "../components/Carousel/Carousel";
import About from "./About";
import Contact from "./Contact";
import "./Home.css";
import Services from "./Services";

const Home = () => {
  return (
    <>
      {/* SCROLL TEXT */}
      <div className="home-container">
        <div className="scroll-container">
          <p className="scroll-text">
            Welcome to AMK Personalized educational and therapeutic support for children with learning difficulties, ADHD, Autism Spectrum, academic challenges and Counselling sections.
          </p>
        </div>
      </div>

      {/* HERO (FULL WIDTH - NO CONTAINER) */}
      <div className="home-hero-section">
        <h1>AMK Special Education</h1>
        <p>Empowering every child to reach their full potential</p>
        <p>
          We provide specialized education and therapy services for children with learning
          difficulties, developmental delays, and emotional challenges. With 14+ years of
          experience, we focus on personalized care, structured learning, and holistic development.
        </p>
      </div>

      {/* CAROUSEL (FULL WIDTH) */}
      <div className="carousel-wrapper">
        <Carousel />
      </div>

      {/* MISSION (FULL WIDTH) */}
      <div className="home-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower children with confidence, independence, and
          essential learning skills through personalized and supportive education.
          We strive to create a positive environment where every child can overcome
          challenges, discover their strengths, and achieve their full potential.
        </p>
      </div>

      {/* WHY CHOOSE AMK (FULL WIDTH) */}
      <div className="home-why-amk">
        <h2>Why Choose AMK</h2>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">🏅</div>
            <h3>14+ Years Experience</h3>
            <p>Over a decade of dedicated service in special education</p>
          </div>

          <div className="why-card">
            <div className="why-icon">📋</div>
            <h3>Individualized Plans</h3>
            <p>Personalized learning strategies for every child</p>
          </div>

          <div className="why-card">
            <div className="why-icon">👩‍🏫</div>
            <h3>One-on-One Sessions</h3>
            <p>Focused attention for better learning outcomes</p>
          </div>

          <div className="why-card">
            <div className="why-icon">🌐</div>
            <h3>Online & Offline</h3>
            <p>Flexible sessions to suit your schedule</p>
          </div>

          <div className="why-card">
            <div className="why-icon">🏫</div>
            <h3>School Coordination</h3>
            <p>Seamless collaboration with teachers and schools</p>
          </div>

          <div className="why-card">
            <div className="why-icon">💛</div>
            <h3>Holistic Approach</h3>
            <p>Focus on emotional, academic, and social growth</p>
          </div>
        </div>
      </div>

      {/* BELOW CONTENT (INSIDE CONTAINER AGAIN) */}
      <div className="home-container">
        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default Home;