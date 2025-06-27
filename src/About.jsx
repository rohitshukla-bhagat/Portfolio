import "./About.css";
import { useState, useEffect } from "react";
export default function AboutPage() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "Web Developer",
    "Backend Developer",
    "Frontend Developer",
  ];

  useEffect(() => {
    let typingSpeed = isDeleting ? 50 : 100;

    const currentWord = words[wordIndex];

    const timer = setTimeout(() => {
      if (isDeleting) {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === currentWord.length) {
        // Pause before starting to delete
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, charIndex]);
  return (
    <>
      <div className="aboutMainCon" id="about">
        <div className="aboutElements">
          <div className="info">
            <div className="name">
              <p className="greet">Namaste, I Am</p>
              <p className="mainName">Rohit Shukla</p>
            </div>
            <div className="typer">
              <h2>
                I'm a <span className="dynamictext">{text}</span>
              </h2>
            </div>
            <p className="aboutText">
              I’m a MERN Stack Developer with expertise in both Frontend and
              Backend technologies. I continuously sharpen my skills by building
              interesting projects like "Lost Items", a lost and found item
              management system, and "Bhagat GameYard", an online gaming
              website. I specialize in Full Stack Development and modern
              technologies to create seamless user experiences and efficient
              solutions.
            </p>
            <div className="navs">
              <a href="/ResumeRohitShukla.pdf" download>
                <button className="resumeBtn">Download Resume</button>
              </a>
              <a href="https://github.com/rohitshukla-bhagat" target="_blank">
                <img
                  src="./github.png"
                  alt="GitHubLogo"
                  className="githubLogo"
                />
              </a>
              <a href="https://www.linkedin.com/in/rohitshuklabhagat/" target="_blank">
                <img
                  src="./linkedin.png"
                  alt="LinkedinLogo"
                  className="linkedinLogo"
                />
              </a>
            </div>
          </div>
          <div className="image">
            <img src="/persional.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
