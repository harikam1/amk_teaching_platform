import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Our Learning Platform</h1>
        <p>
          A supportive learning space designed to help students overcome
          difficulties in studies and build confidence through simple,
          step-by-step learning.
        </p>
      </section>

    <div className="about-cards-row">
  <section className="about-section about-card">
    <h2>About Me</h2>
    <p>
      I am <strong>Meenakumari Adusumilli</strong>, a Special Educator and
      Remedial Therapist with <strong>14+ years of experience</strong>{" "}
      supporting children with learning difficulties, developmental delays,
      and academic challenges.
    </p>
    <p>
      I believe every child can succeed with the right guidance, patience,
      and structured intervention.
    </p>
  </section>

  <section className="about-section about-card">
    <h2>Why Choose Me?</h2>
    <ul className="about-list tick-list">
      <li>14+ Years Experience</li>
      <li>Individualized IEP Plans</li>
      <li>1:1 Personalized Sessions</li>
      <li>Online & Offline Support</li>
      <li>School Coordination Support</li>
      <li>Holistic Emotional + Academic Approach</li>
    </ul>
  </section>

  <section className="about-section about-card">
    <h2>Professional Profile</h2>
    <p>
      I am a certified Special Educator and Remedial Therapist with
      extensive experience working with children across age groups. I
      specialize in supporting students with:
    </p>

    <ul className="about-list">
      <li>Specific Learning Disabilities (SLD)</li>
      <li>ADHD</li>
      <li>Autism Spectrum</li>
      <li>Slow Learners</li>
      <li>Academic Backwardness</li>
      <li>Emotional & Behavioural Concerns</li>
    </ul>

    <p>
      I also provide Cognitive Behaviour Therapy (CBT) interventions and
      structured career counselling guidance for adolescents.
    </p>
  </section>
</div>
      <section className=" ab">
        <h2>Mission Statement</h2>
        <p>
          My mission is to bridge learning gaps, build emotional resilience,
          and empower children to achieve independence and confidence in
          academics and life.
        </p>
      </section>
    </div>
  );
};

export default About;