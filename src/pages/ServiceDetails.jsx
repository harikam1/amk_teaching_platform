import { useParams, Link } from "react-router-dom";
import TiltedCard from "../components/TitledCard/TiltedCard";
import "./ServiceDetails.css";

const servicesData = [
  {
    id: "sld",
    title: "Specific Learning Disabilities (SLD)",
    image:
      "https://res.cloudinary.com/db1sef6kd/image/upload/v1773484865/Learning_Disability_600x600_583f27c6-891e-42e7-b64b-9b255d2546a0_1024x1024_zmoxna.jpg",
    description:
      "We provide specialized support for children with learning difficulties such as dyslexia, dysgraphia, and dyscalculia. Our structured intervention programs focus on improving reading, writing, spelling, and comprehension skills.",
    features: [
      "Individualized learning plans",
      "Multi-sensory teaching techniques",
      "Regular progress tracking",
      "Skill-based remediation sessions",
    ],
  },
  {
    id: "adhd",
    title: "ADHD Support",
    image:
      "https://res.cloudinary.com/db1sef6kd/image/upload/v1773485047/OIP.iLqIzlK6tNK57JxpFix-igHaDt_ccizvx.webp",
    description:
      "Our ADHD support program helps children improve focus, attention span, and self-regulation using structured and engaging methods.",
    features: [
      "Attention-building activities",
      "Behavior management strategies",
      "Parent and teacher guidance",
      "Routine and structure planning",
    ],
  },
  {
    id: "autism",
    title: "Autism Spectrum Support",
    image:
      "https://res.cloudinary.com/db1sef6kd/image/upload/v1773485136/OIP.QDX1R6tA-JfANOfuOHgjgwHaHa_wtsxsh.webp",
    description:
      "We offer personalized programs to support communication, social interaction, and daily living skills for children on the autism spectrum.",
    features: [
      "Speech and communication support",
      "Social skills training",
      "Sensory integration techniques",
      "Individual therapy sessions",
    ],
  },
  {
    id: "slow-learners",
    title: "Slow Learners Support",
    image:
      "https://res.cloudinary.com/db1sef6kd/image/upload/v1773485242/pymkkrudjunlis0ulade.webp",
    description:
      "We help children learn at their own pace through simplified and structured teaching methods that build strong fundamentals.",
    features: [
      "Simplified teaching techniques",
      "Repetition and reinforcement",
      "Concept clarity sessions",
      "Confidence-building support",
    ],
  },
  {
    id: "academic-backwardness",
    title: "Academic Backwardness",
    image:
      "https://res.cloudinary.com/db1sef6kd/image/upload/v1773485314/OIP.oQpVs3vKzVjXfiMD4EY9NQHaDr_esbecb.webp",
    description:
      "We provide targeted support to bridge learning gaps and improve overall academic performance.",
    features: [
      "Gap analysis and assessment",
      "Subject-specific coaching",
      "Study skills development",
      "Continuous performance monitoring",
    ],
  },
  {
    id: "emotional-support",
    title: "Emotional & Behavioural Support",
    image:
      "https://res.cloudinary.com/db1sef6kd/image/upload/v1773485488/OIP.iB2h-IyTldfg2Csf2PbEnQHaEJ_xjxdih.webp",
    description:
      "We support children facing emotional and behavioral challenges that impact learning and confidence.",
    features: [
      "Emotional regulation techniques",
      "Counseling sessions",
      "Behavioral therapy strategies",
      "Parent-child guidance",
    ],
  },
  {
    id: "cbt",
    title: "Cognitive Behaviour Therapy (CBT)",
    image:
      "https://res.cloudinary.com/db1sef6kd/image/upload/v1773485657/0120_CBT_Logo_aqqdef.jpg",
    description:
      "CBT helps children and adolescents manage thoughts, emotions, and behaviors in a structured and effective way.",
    features: [
      "Thought pattern restructuring",
      "Emotional control techniques",
      "Behavior improvement strategies",
      "Confidence building",
    ],
  },
  {
    id: "career-counselling",
    title: "Career Counselling for Adolescents",
    image:
      "https://res.cloudinary.com/db1sef6kd/image/upload/v1773486006/OIP.81OrQlnP2XILC2skm73V-QHaE8_awifh4.webp",
    description:
      "We guide adolescents in choosing the right academic and career paths based on their strengths and interests.",
    features: [
      "Career assessments",
      "Interest identification",
      "Stream selection guidance",
      "Future planning support",
    ],
  },
  {
    id: "parent-school",
    title: "Parent & School Coordination",
    image:
      "https://res.cloudinary.com/db1sef6kd/image/upload/v1773486107/gudfgtxpxqbbmw0jwymm.webp",
    description:
      "We ensure smooth coordination between parents and schools to support the child’s development effectively.",
    features: [
      "Regular communication support",
      "Progress sharing",
      "Strategy alignment",
      "Collaborative planning",
    ],
  },
];

const ServiceDetails = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return <h2 style={{ textAlign: "center" }}>Service not found</h2>;
  }

  return (
    <div className="service-details">

      <div className="card-wrapper">
        <TiltedCard
          imageSrc={service.image}
          altText={service.title}
          captionText={service.title}
          containerWidth="320px"
          containerHeight="320px"
          imageWidth="320px"
          imageHeight="320px"
          rotateAmplitude={12}
          scaleOnHover={1.05}
          showTooltip={false}
        />
      </div>

      <h1>{service.title}</h1>
      <p className="desc">{service.description}</p>

      <h3>Key Features</h3>
      <ul className="features-list">
        {service.features.map((feature, index) => (
          <li key={index}>✔ {feature}</li>
        ))}
      </ul>

      <Link to="/services" className="back-btn">
        ← Back to Services
      </Link>

    </div>
  );
};

export default ServiceDetails;