import "./Services.css";
import { Link } from "react-router-dom";

const servicesData = [
  {
    id: "sld",
    title: "Specific Learning Disabilities (SLD)",
    image: "https://res.cloudinary.com/db1sef6kd/image/upload/v1773484865/Learning_Disability_600x600_583f27c6-891e-42e7-b64b-9b255d2546a0_1024x1024_zmoxna.jpg",
    description: "Support for children who face difficulty in reading, writing, spelling, comprehension, and academic performance.",
  },
  {
    id: "adhd",
    title: "ADHD Support",
    image: "https://res.cloudinary.com/db1sef6kd/image/upload/v1773485047/OIP.iLqIzlK6tNK57JxpFix-igHaDt_ccizvx.webp",
    description: "Guidance to improve attention, behavior regulation, and classroom participation.",
  },
  {
    id: "autism",
    title: "Autism Spectrum Support",
    image: "https://res.cloudinary.com/db1sef6kd/image/upload/v1773485136/OIP.QDX1R6tA-JfANOfuOHgjgwHaHa_wtsxsh.webp",
    description: "Support for communication, behavior, and social interaction.",
  },
  {
    id: "slow-learners",
    title: "Slow Learners Support",
    image: "https://res.cloudinary.com/db1sef6kd/image/upload/v1773485242/pymkkrudjunlis0ulade.webp",
    description: "We help children learn at their own pace through simplified and structured teaching methods that build strong fundamentals.",
  },
  {
    id: "academic-backwardness",
    title: "Academic Backwardness",
    image: "https://res.cloudinary.com/db1sef6kd/image/upload/v1773485314/OIP.oQpVs3vKzVjXfiMD4EY9NQHaDr_esbecb.webp",
    description: "We provide targeted support to bridge learning gaps and improve overall academic performance.",
  },
  {
    id: "emotional-support",
    title: "Emotional & Behavioural Support",
    image: "https://res.cloudinary.com/db1sef6kd/image/upload/v1773485488/OIP.iB2h-IyTldfg2Csf2PbEnQHaEJ_xjxdih.webp",
    description: "We support children facing emotional and behavioral challenges that impact learning and confidence.",
  },
  {
    id: "cbt",
    title: "Cognitive Behaviour Therapy (CBT)",
    image: "https://res.cloudinary.com/db1sef6kd/image/upload/v1773485657/0120_CBT_Logo_aqqdef.jpg",
    description: "CBT helps children and adolescents manage thoughts, emotions, and behaviors in a structured and effective way.",
  },
  {
    id: "career-counselling",
    title: "Career Counselling for Adolescents",
    image: "https://res.cloudinary.com/db1sef6kd/image/upload/v1773486006/OIP.81OrQlnP2XILC2skm73V-QHaE8_awifh4.webp",
    description: "We guide adolescents in choosing the right academic and career paths based on their strengths and interests.",
  },
  {
    id: "parent-school",
    title: "Parent & School Coordination",
    image: "https://res.cloudinary.com/db1sef6kd/image/upload/v1773486107/gudfgtxpxqbbmw0jwymm.webp",
    description: "We ensure smooth coordination between parents and schools to support the child’s development effectively.",
  },
];

const Services = () => {
  const phoneNumber = "919666636715"; 

  const handleWhatsAppEnquiry = (e, serviceTitle, serviceDesc) => {
    e.preventDefault(); // Prevents the Link (card click) from firing
    
    const message = 
      `*New Service Enquiry* \n` +
      `----------------------------\n` +
      `*Service:* ${serviceTitle}\n` +
      `*Description:* ${serviceDesc}\n` +
      `----------------------------\n` +
      `Hello, I would like to know more about this service for my child. Could you please provide details regarding the process and availability?`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="services-page">
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>
          Personalized educational and therapeutic support for children to grow with confidence.
        </p>
      </section>

      <section className="services-grid">
        {servicesData.map((service) => (
          <Link
            to={`/services/${service.id}`}
            key={service.id}
            className="service-link"
          >
            <div className="service-card">
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
              
              <div className="service-info">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                
                <button 
                  className="enquiry-btn"
                  onClick={(e) => handleWhatsAppEnquiry(e, service.title, service.description)}
                >
                  <svg 
                    viewBox="0 0 448 512" 
                    width="16" 
                    height="16" 
                    fill="currentColor"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l114.1-29.9c32.7 17.4 69.4 26.5 106.8 26.5 122.4 0 222-99.6 222-222.2 0-59.3-23-115.1-62-157.3zm-157 341.6c-33.1 0-65.6-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 54 81.2 54 130.5 0 101.8-82.7 184.6-184.5 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.5-.3-8.5 2.4-11.2 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.5 5.5-9.2 1.9-3.7 1-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                  Enquiry
                </button>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Services;