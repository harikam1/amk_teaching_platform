import { NavLink, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import logo from "../../assets/amkcrop.png";
import profile from "../../assets/prophoto.jpeg";
import "./Navbar.css";

const servicesData = [
  { id: "sld", title: "SLD" },
  { id: "adhd", title: "ADHD" },
  { id: "autism", title: "Autism" },
  { id: "slow-learners", title: "Slow Learners" },
  { id: "academic-backwardness", title: "Academic Backwardness" },
  { id: "emotional-support", title: "Emotional Support" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // ✅ added
  
  const popupRef = useRef(null);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const togglePopup = () => setShowPopup((prev) => !prev);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowPopup(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    // logo now
    <header className="navbar">
      {/* LEFT */}
      <div className="nav-left" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" className="nav-logo" />
        <div className="logo-text">
          {/* <h2>AMK</h2> */}
          <span>
            <strong>A</strong>mbition • <strong>M</strong>otivation • <strong>K</strong>nowledge
          </span>
        </div>
      </div>

{/* ---logo before */}
      {/* <header className="navbar"> */}
      {/* LEFT */}
      {/* <div className="nav-left" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" />
        <div className="logo-text">
          {/* <h2>AMK</h2> */}
          {/* <span>
            <strong>A</strong>mbition • <strong>M</strong>otivation • <strong>K</strong>nowledge
          </span>
        </div> */}
      {/* </div>  */}

      {/* ✅ HAMBURGER */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* CENTER */}
      {/* <nav className={`nav-center ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>

        <div className="dropdown" ref={dropdownRef}>
          <div className="services-header">
            <NavLink to="/services" className="nav-link">
              Services
            </NavLink>

            <div 
              className="arrow-trigger"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span className={`arrow ${showDropdown ? "rotate" : ""}`}>
                ▾
              </span>

              {showDropdown && (
                <div className="dropdown-menu">
                  {servicesData.map((service) => (
                    <NavLink
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="dropdown-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowDropdown(false);
                        setMenuOpen(false); // ✅ close menu on click
                      }}
                    >
                      {service.title}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </nav> */}
      {/* CENTER */}
<nav className={`nav-center ${menuOpen ? "active" : ""}`}>

  <NavLink 
    to="/" 
    className="nav-link"
    onClick={() => setMenuOpen(false)}   // ✅ added
  >
    Home
  </NavLink>

  <NavLink 
    to="/about" 
    className="nav-link"
    onClick={() => setMenuOpen(false)}   // ✅ added
  >
    About
  </NavLink>

  <div className="dropdown" ref={dropdownRef}>
    <div className="services-header">

      <NavLink 
        to="/services" 
        className="nav-link"
        onClick={() => setMenuOpen(false)}   // ✅ added
      >
        Services
      </NavLink>

      <div 
        className="arrow-trigger"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <span className={`arrow ${showDropdown ? "rotate" : ""}`}>
          ▾
        </span>

        {showDropdown && (
          <div className="dropdown-menu">
            {servicesData.map((service) => (
              <NavLink
                key={service.id}
                to={`/services/${service.id}`}
                className="dropdown-item"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDropdown(false);
                  setMenuOpen(false); // already correct ✅
                }}
              >
                {service.title}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>

  <NavLink 
    to="/contact" 
    className="nav-link"
    onClick={() => setMenuOpen(false)}   // ✅ added
  >
    Contact
  </NavLink>

</nav>

      {/* RIGHT */}
      <div className="nav-right" ref={popupRef}>
        <img src={profile} alt="profile" className="profile" onClick={togglePopup} />
        {showPopup && (
          <div className="profile-popup">
            <img src={profile} className="popup-img" alt="profile" />
            <h4>Adusumilli Meena Kumari</h4>
            <p>Special Educator</p>
            <p>14+ Years Experience</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;