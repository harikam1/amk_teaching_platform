import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";

function App() {
  return (
    <HashRouter>
      <Routes>

        {/* Layout Wrapper */}
        <Route path="/" element={<Layout />}>

          {/* Home */}
          <Route index element={<Home />} />

          {/* Services */}
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<ServiceDetails />} />

          {/* Other Pages */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          {/* Optional: 404 Page */}
          <Route path="*" element={<h2 style={{textAlign:"center"}}>Page Not Found</h2>} />

        </Route>

      </Routes>
    </HashRouter>
  );
}

export default App;