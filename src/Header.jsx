import { useState } from "react";
import "./Header.css";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
    {showMenu && <div className="menuOverlay" onClick={handleToggle}></div>}
      <div className="headerContainer">
        <header className="grid navbarGrid">
          <div className="icon">
            <h2>
              <span className="redish">&lt;</span>Rohit
              <span className="redish">/</span>Shukla
              <span className="redish">&gt;</span>
            </h2>
          </div>
          <nav className={showMenu ? "menuMobile" : "menuWeb"}>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#experiences">Experiences</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
            </ul>
          </nav>
          <div className="hamMenu">
            <button onClick={handleToggle} className="toggleBtn" >
              <img src="./toggle.png" alt="" className="toggleName"/>
            </button>
          </div>
        </header>
      </div>
    </>
  );
}
