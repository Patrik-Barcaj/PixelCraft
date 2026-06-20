import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import router elements
import Layout from "./components/Layout"; // Import layout wrapper
import Home from "./pages/Home"; // Import home page
import Services from "./pages/Services"; // Import services page
import Pricing from "./pages/Pricing"; // Import pricing page
import Portfolio from "./pages/Portfolio"; // Import portfolio page
import Contact from "./pages/Contact"; // Import contact page
import About from "./pages/About"; // Import about page
export default function App() { // Define root App component
  return ( // Return JSX
    <BrowserRouter> {/* Setup browser router */}
      <Routes> {/* Define routes container */}
        <Route path="/" element={<Layout />}> {/* Root path with Layout wrapper */}
          <Route index element={<Home />} /> {/* Default child route is Home */}
          <Route path="services" element={<Services />} /> {/* Services child route */}
          <Route path="about" element={<About />} /> {/* About child route */}
          <Route path="pricing" element={<Pricing />} /> {/* Pricing child route */}
          <Route path="portfolio" element={<Portfolio />} /> {/* Portfolio child route */}
          <Route path="contact" element={<Contact />} /> {/* Contact child route */}
        </Route> {/* Close Layout route */}
      </Routes> {/* Close Routes container */}
    </BrowserRouter>
  ); // Close return
} // Close component
