import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Certifications from "./pages/Certifications";
import Workshops from "./pages/Workshops";
import Education from "./pages/Education";
import MySkills from "./pages/MySkills";
import PersonalDetails from "./pages/PersonalDetails";
import Internships from "./pages/Internships";
import Hackathons from "./pages/Hackathons";
import Beyondcoding from "./pages/Beyoundcoding";
import Achivements from "./pages/Achivements";

// 🔄 Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <ScrollToTop />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="pt-20">
        <Routes>
          {/* Redirect root */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Main pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/myskills" element={<MySkills />} />
          <Route path="/personaldetails" element={<PersonalDetails />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/beyondcoding" element={<Beyondcoding />} />
          <Route path="/achivements" element={<Achivements />} />

          {/* 404 */}
          <Route
            path="*"
            element={
              <h1 className="text-center text-3xl mt-20">
                404 - Page Not Found
              </h1>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
