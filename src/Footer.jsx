import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="footerContainer">
        <div className="footerElement">
          <div className="footerHead">
            <span>Rohit Shukla</span>
            <ul>
              <li>
                <a href="#about" className="footPageNav">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="footPageNav">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experiences" className="footPageNav">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#projects" className="footPageNav">
                  Projects
                </a>
              </li>
              <li>
                <a href="#education" className="footPageNav">
                  Education
                </a>
              </li>
            </ul>
          </div>
          <div className="footerNavs">
            <a
              href="https://www.facebook.com/rohitshukla.bhagat"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://x.com/Bhagatentertain" target="_blank">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a
              href="https://www.instagram.com/bhagat_photographer/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://github.com/rohitshukla-bhagat" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/rohitshuklabhagat/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <p>&copy; 2025 Rohit Shukla. All right reserved.</p>
        </div>
      </div>
    </>
  );
}
