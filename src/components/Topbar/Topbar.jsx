import { useState } from "react";
import "./Topbar.css";
import profile from "../../assets/amklog.jpg";

const Topbar = ({ toggleSidebar }) => {

    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="navbar">

            <div className="left">

                <span className="hamburger" onClick={toggleSidebar}>
                    ☰
                </span>

                <input
                    type="text"
                    placeholder="Search courses..."
                    className="search"
                />

            </div>

            <div className="right">
       
                <span className="notification">🔔</span>

                <img
                    src={profile}
                    className="profile"
                    onClick={togglePopup}
                    alt="profile"
                />

                {showPopup && (
                    <div className="profile-popup">

                        <img src={profile} className="popup-img" />

                        <h4>Adusumilli Meena Kumari</h4>
                         
                        <p>Special Educator & Remedial Therapist </p>
                        <p>14+ Years Experience</p>

                        <hr />
                        <p className="menu-item">Logout</p>

                    </div>
                )}

            </div>

        </div>
    );
};

export default Topbar;