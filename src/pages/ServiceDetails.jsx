import { useParams, Link } from "react-router-dom";
import "./ServiceDetails.css";

const servicesData = [
  {
    id: "sld",
    title: "Specific Learning Disabilities (SLD)",
    image: "https://res.cloudinary.com/db1sef6kd/image/upload/v1773484865/Learning_Disability_600x600_583f27c6-891e-42e7-b64b-9b255d2546a0_1024x1024_zmoxna.jpg",
    description:
      "Support for children who face difficulty in reading, writing, spelling, comprehension, and academic performance through structured remedial strategies.",
  },
  {
    id: "adhd",
    title: "ADHD Support",
    image: "https://res.cloudinary.com/db1sef6kd/image/upload/v1773485047/OIP.iLqIzlK6tNK57JxpFix-igHaDt_ccizvx.webp",
    description:
      "Focused guidance to improve attention, concentration, behavior regulation, classroom participation, and learning consistency.",
  },
  {
    id: "autism",
    title: "Autism Spectrum Support",
    image: "https://res.cloudinary.com/db1sef6kd/image/upload/v1773485136/OIP.QDX1R6tA-JfANOfuOHgjgwHaHa_wtsxsh.webp",
    description:
      "Personalized intervention to strengthen communication, behavior, social interaction, learning skills, and daily functioning.",
  },
  {
    id: "slow-learners",
    title: "Slow Learners Support",
    image: "https://res.cloudinary.com/db1sef6kd/image/upload/v1773485242/pymkkrudjunlis0ulade.webp",
    description:
      "Simple, step-by-step teaching methods designed to help students understand concepts at their own pace with patience and repetition.",
  },
  {
    id: "academic-backwardness",
    title: "Academic Backwardness",
    image: "https://res.cloudinary.com/db1sef6kd/image/upload/v1773485314/OIP.oQpVs3vKzVjXfiMD4EY9NQHaDr_esbecb.webp",
    description:
      "Academic support to bridge learning gaps, improve subject understanding, and build confidence in school performance.",
  },
  {
    id: "emotional-support",
    title: "Emotional & Behavioural Support",
    image: "https://res.cloudinary.com/db1sef6kd/image/upload/v1773485488/OIP.iB2h-IyTldfg2Csf2PbEnQHaEJ_xjxdih.webp",
    description:
      "Guidance for children facing emotional, behavioural, and adjustment challenges that affect learning and confidence.",
  },
  {
    id: "cbt",
    title: "Cognitive Behaviour Therapy (CBT)",
    image: "https://res.cloudinary.com/db1sef6kd/image/upload/v1773485657/0120_CBT_Logo_aqqdef.jpg",
    description:
      "Structured support to help children and adolescents manage thoughts, emotions, behavior, and confidence more effectively.",
  },
  {
    id: "career-counselling",
    title: "Career Counselling for Adolescents",
    image: "https://res.cloudinary.com/db1sef6kd/image/upload/v1773486006/OIP.81OrQlnP2XILC2skm73V-QHaE8_awifh4.webp",
    description:
      "Guidance for adolescents to understand strengths, interests, and future academic or career pathways with clarity.",
  },
  {
    id: "parent-school",
    title: "Parent & School Coordination",
    image: "https://res.cloudinary.com/db1sef6kd/image/upload/v1773486107/gudfgtxpxqbbmw0jwymm.webp",
    description:
      "Collaborative support with parents and schools to ensure consistency, better planning, and meaningful child progress.",
  },
];

const ServiceDetails = () => {

  const { id } = useParams();

  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return <h2 style={{textAlign:"center"}}>Service not found</h2>;
  }

  return (
    <div className="service-details">

      <img
        src={service.image}
        alt={service.title}
        className="details-image"
      />

      <h1>{service.title}</h1>

      <p>{service.description}</p>

      <Link to="/services" className="back-btn">
        ← Back to Services
      </Link>

    </div>
  );
};

export default ServiceDetails;