import "./Experience.css";
export default function ExperiencePage() {
  return (
    <>
      <div className="experienceContainer" id="experiences">
        <div className="experienceElement">
          <div className="experienceUpperText">
            <span>Experiences</span>
            <p className="experienceIntro">
              A collection of my work experience and the roles i have taken in
              various organizations
            </p>
          </div>
          <div className="experienceMain">
            <div className="experienceBox1">
              <div className="expe1">
                <div className="expeHead">
                  <img src="./softapper.jpeg" alt="" />
                  <div>
                    <p className="expeRole">Frontend Developer Intern</p>
                    <p className="expeComName">Softapper Tech Solutions</p>
                    <p className="expeDate">1 May 2024 - 30 May 2024</p>
                  </div>
                </div>
                <div className="expeDiscription">
                  <p>
                    I developed the two fontend project using the basic frontend
                    core HTML , CSS and JavaScript during this online
                    internship. The first project is "To-Do List" Application
                    where you can Add , Edit , Mark as done and Delete your
                    task easily and the second project is "Basic Calculator"
                    where you can easily perform basic mathematical operations
                    like Addition , Substraction , Multiplication , Division and
                    Modulus.
                  </p>
                </div>
                <div className="expeSkills">
                  <p>Skills:</p>
                  <div>
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="experienceBox2"></div>
          </div>
        </div>
      </div>
    </>
  );
}
