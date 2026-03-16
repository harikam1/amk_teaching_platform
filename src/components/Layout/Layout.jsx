import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import Footer from "../Footer/Footer";
import "./Layout.css";

const Layout = ({ children }) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="layout">

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
      />

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div className="overlay" onClick={closeSidebar}></div>
      )}

      <div className="main-section">

        <Topbar toggleSidebar={toggleSidebar} />

        <div className="page-content">
          {children}
        </div>

        <Footer />

      </div>

    </div>
  );
};

export default Layout;