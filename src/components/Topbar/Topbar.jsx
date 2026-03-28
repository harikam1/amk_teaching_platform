import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">

        <a href="tel:+918885092000" className="topbar-link">
          📞 +91 8885092000
        </a>

        <a href="mailto:amkeducation@gmail.com" className="topbar-link">
          📧 meenakumariadusumilli@gmail.com
        </a>

        <a
          href="https://www.google.com/maps?q=AMK'S+Remedial+Institution+Center,+Kapra,+Secunderabad,+Telangana"
          target="_blank"
          rel="noopener noreferrer"
          className="topbar-link"
        >
          📍 Hyderabad
        </a>

      </div>
    </div>
  );
};

export default Topbar;