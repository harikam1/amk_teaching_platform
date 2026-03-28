import Topbar from "../Topbar/Topbar";
import Navbar from "../Navbar/Navbar";  // ✅ ADD THIS
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">

      {/* TOPBAR */}
      <Topbar />

      {/* ✅ NAVBAR (IMPORTANT) */}
      <Navbar />

      {/* CONTENT */}
      <div className="page-content">
        <Outlet />
      </div>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default Layout;