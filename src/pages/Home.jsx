import Carousel from "../components/Carousel/Carousel";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="scroll-container">
        <p className="scroll-text">
          Welcome to AMK 🚀 Personalized educational and therapeutic support for children with learning difficulties, ADHD, Autism Spectrum, and academic challenges.
        </p>
      </div>

      <div className="carousel-wrapper">
        <Carousel />
      </div>

      <section className="home-hero-section">
        <h1>Empowering Every Child to Learn with Confidence</h1>
        <p>
          Supporting children through personalized teaching, remedial therapy,
          and structured guidance to help them grow academically, emotionally,
          and socially.
        </p>
      </section>

      

      <section className="home-services-preview">
        <h2>Our Services</h2>
        <div className="home-services-grid">
          <div className="home-service-card">
            <h3>SLD Support</h3>
            <p>
              Structured remedial support for reading, writing, spelling, and
              comprehension difficulties.
            </p>
          </div>

          <div className="home-service-card">
            <h3>ADHD Support</h3>
            <p>
              Focused guidance to improve attention, concentration, and
              classroom learning behavior.
            </p>
          </div>

          <div className="home-service-card">
            <h3>Autism Support</h3>
            <p>
              Personalized intervention to improve communication, behavior,
              social interaction, and learning skills.
            </p>
          </div>
        </div>
      </section>

     

      
    </div>
  );
};

export default Home;