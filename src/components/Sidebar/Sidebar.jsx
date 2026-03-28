// import { useNavigate } from "react-router-dom";
// import logo from "../../assets/amklo.png";
// import "./Sidebar.css";

// const servicesData = [
//   { id: "sld", title: "SLD" },
//   { id: "adhd", title: "ADHD" },
//   { id: "autism", title: "Autism" },
//   { id: "slow-learners", title: "Slow Learners" },
//   { id: "academic-backwardness", title: "Academic Backwardness" },
//   { id: "emotional-support", title: "Emotional Support" },
//   { id: "cbt", title: "CBT" },
//   { id: "career-counselling", title: "Career Counselling" },
//   { id: "parent-school", title: "Parent Coordination" },
// ];

// const Sidebar = ({ isSidebarOpen, closeSidebar }) => {

//   const navigate = useNavigate();

//   const handleClick = () => {
//     if (window.innerWidth < 768) {
//       closeSidebar();
//     }
//   };

//   // ✅ MAIN FUNCTION (NAVIGATE + SCROLL)
//   const goToSection = (id) => {
//     navigate("/"); // go to home page first

//     setTimeout(() => {
//       const el = document.getElementById(id);
//       if (el) {
//         el.scrollIntoView({ behavior: "smooth" });
//       }
//     }, 100);

//     handleClick();
//   };

//   return (
//     <div className={`sidebar ${isSidebarOpen ? "show" : ""}`}>

//       {/* CLOSE BUTTON */}
//       <span className="close-btn" onClick={closeSidebar}>✖</span>

//       {/* LOGO */}
//       <div className="sidebar-header" onClick={() => goToSection("home")}>
//         <img src={logo} alt="logo" className="logo-img" />
//         <div className="sparkle"></div>
//       </div>

//       <nav>

//         {/* HOME */}
//         <div className="nav-item" onClick={() => goToSection("home")}>
//           Home
//         </div>

//         {/* ABOUT */}
//         <div className="nav-item" onClick={() => goToSection("about")}>
//           About
//         </div>

//         {/* SERVICES */}
//         <div className="sidebar-section">

//           <div className="nav-item" onClick={() => goToSection("services")}>
//             Services
//           </div>

//           {/* {servicesData.map((service) => (
//             <div
//               key={service.id}
//               className="nav-sub-item"
//               onClick={() => goToSection("services")}
//             >
//               {service.title}
//             </div>
//           ))} */}
//           {servicesData.map((service) => (
//   <div
//     key={service.id}
//     className="nav-sub-item"
//     onClick={() => {
//       navigate(`/services/${service.id}`);
//       handleClick();
//     }}
//   >
//     {service.title}
//   </div>
// ))}

//         </div>

//         {/* CONTACT */}
//         <div className="nav-item" onClick={() => goToSection("contact")}>
//           Contact
//         </div>

//       </nav>
//     </div>
//   );
// };

// export default Sidebar;