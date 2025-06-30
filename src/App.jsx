import "./App.css";
import Header from "./Header";
import AboutPage from "./About";
import SkillsPage from "./Skills";
import ExperiencePage from "./Experience";
import ProjectPage from "./Projects";
import EducationPage from "./Education";
import AchievementPage from "./achievements";
import ContactPage from "./Contact";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div>
      <a
        href="https://wa.me/919721248675"
        target="_blank"
        className="whatsappFloat"
        aria-label="Chat on WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#00d62b" }} />
      </a>
      <ToastContainer position="top-center" theme="dark" />
      <Header />
      <AboutPage />
      <SkillsPage />
      <ExperiencePage />
      <ProjectPage />
      <EducationPage />
      <AchievementPage/>
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
