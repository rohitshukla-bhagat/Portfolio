import "./Skills.css";
export default function SkillsPage() {
  return (
    <>
      <div className="skillsContainer" id="skills">
        <div className="skillsElement">
          <div className="skillUperText">
            <span className="skillText">Skills</span>
            <p className="skillIntro">
              A collection of my technical skills and expertise honed through
              various projects and experiences
            </p>
          </div>
          <div className="skillBoxContainer">
            <div className="skillBox">
              <h2 className="skillsHeading">Frontend</h2>
              <div className="skills">
                <ul>
                  <li>
                    <img
                      src="./html.png"
                      alt=""
                      className="skillsLogo"
                      style={{ width: "1.3em" }}
                    />
                    HTML
                  </li>
                  <li>
                    <img
                      src="./css.png"
                      alt=""
                      className="skillsLogo"
                      style={{ width: "1.3em" }}
                    />
                    CSS
                  </li>
                  <li>
                    <img
                      src="./javascript.png"
                      alt=""
                      className="skillsLogo"
                      style={{ width: "1.3em" }}
                    />
                    JavaScript
                  </li>
                  <li>
                    <img src="./React.webp" alt="" className="skillsLogo" />
                    ReactJS
                  </li>
                  <li>
                    <img src="./tailwind.png" alt="" className="skillsLogo" />
                    Tailwind CSS
                  </li>
                  <li>
                    <img src="./bootstrap.png" alt="" className="skillsLogo" />
                    Bootstrap
                  </li>
                  <li>
                    <img src="materialui.png" alt="" className="skillsLogo" />
                    Material UI
                  </li>
                </ul>
              </div>
            </div>
            <div className="skillBox">
              <h2 className="skillsHeading">Backend</h2>
              <div className="skills">
                <ul>
                  <li>
                    <img
                      src="./nodejs.png"
                      alt=""
                      className="skillsLogo"
                      style={{ width: "1.3em" }}
                    />
                    NodeJS
                  </li>
                  <li>
                    <img
                      src="./express.webp"
                      alt=""
                      className="skillsLogo"
                      style={{ width: "1.3em" }}
                    />
                    ExpressJS
                  </li>
                  <li>
                    <img
                      src="./mongodb.png"
                      alt=""
                      className="skillsLogo"
                      style={{ width: "1.3em" }}
                    />
                    MongoDB
                  </li>
                  <li>
                    <img
                      src="./restfulapi.png"
                      alt=""
                      className="skillsLogo"
                      style={{ borderRadius: "50%" }}
                    />
                    Restful APIs
                  </li>
                  <li>
                    <img src="./ejs.png" alt="" className="skillsLogo" />
                    EJS
                  </li>
                </ul>
              </div>
            </div>
            <div className="skillBox">
              <h2 className="skillsHeading">Languages</h2>
              <div className="skills">
                <ul>
                  <li>
                    <img
                      src="./c.png"
                      alt=""
                      className="skillsLogo"
                      style={{ width: "1.3em" }}
                    />
                    C
                  </li>
                  <li>
                    <img
                      src="./python.webp"
                      alt=""
                      className="skillsLogo"
                      style={{ width: "1.3em" }}
                    />
                    Python
                  </li>
                  <li>
                    <img
                      src="./javascript.png"
                      alt=""
                      className="skillsLogo"
                      style={{ width: "1.3em" }}
                    />
                    JavaScript
                  </li>
                </ul>
              </div>
            </div>
            <div className="skillBox">
              <h2 className="skillsHeading">Tools</h2>
              <div className="skills">
                <ul>
                  <li>
                    <img
                      src="./git.png"
                      alt=""
                      className="skillsLogo"
                      style={{ width: "1.3em" }}
                    />
                    Git
                  </li>
                  <li>
                    <img
                      src="./github.png"
                      alt=""
                      className="skillsLogo"
                      style={{ width: "1.3em" }}
                    />
                    GitHub
                  </li>
                  <li>
                    <img
                      src="./vscode.png"
                      alt=""
                      className="skillsLogo"
                      style={{ width: "1.3em" }}
                    />
                    VS Code
                  </li>
                  <li>
                    <img
                      src="./netlify.png"
                      alt=""
                      className="skillsLogo"
                      style={{ width: "1.3em" }}
                    />
                    Netlify
                  </li>
                  <li>
                    <img
                      src="./chatgpt.png"
                      alt=""
                      className="skillsLogo"
                      style={{ width: "1.3em" , color : "white"}}
                    />
                    ChatGPT
                  </li>
                  <li>
                    <img
                      src="./postman.png"
                      alt=""
                      className="skillsLogo"
                      style={{ width: "1.3em" }}
                    />
                    Postman
                  </li>
                  <li>
                    <img
                      src="./render.jpg"
                      alt=""
                      className="skillsLogo"
                      style={{ width: "1.3em", borderRadius: "50%" }}
                    />
                    Render
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
