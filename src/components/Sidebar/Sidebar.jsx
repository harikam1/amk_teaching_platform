import { NavLink } from "react-router-dom";
import logo from "../../assets/amkback.png";
import "./Sidebar.css";

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
    return (
        <div className={`sidebar ${isSidebarOpen ? "show" : ""}`}>
            <span className="close-btn" onClick={closeSidebar}>✖</span>
            
                <NavLink to="/" className="nav-itewm" onClick={closeSidebar}>
            <div className="sidebar-header">
                <img src={logo} alt="logo" className="logo-img" />
                <div class="sparkle"></div>
                
            </div>
</NavLink>
            <nav>

                <NavLink to="/" className="nav-item" onClick={closeSidebar}>
                    Home
                </NavLink>

                <NavLink to="/services" className="nav-item" onClick={closeSidebar}>
                    Services
                </NavLink>

                <NavLink to="/about" className="nav-item" onClick={closeSidebar}>
                    About
                </NavLink>

                <NavLink to="/contact" className="nav-item" onClick={closeSidebar}>
                    Contact
                </NavLink>

            </nav>

        </div>
    );
};

export default Sidebar;