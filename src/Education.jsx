import "./Experience.css";
export default function EducationPage() {
  return (
    <>
      <div className="educationContainer" id="education">
        <div className="educationElement">
          <div className="educationUpperText">
            <span>Education</span>
            <p className="educationIntro">
              My education has been a journey of learning and development. Here
              are the details if my academic background.
            </p>
          </div>
          <div className="educationMain">
            <div className="educationBox1">
              <div className="edu edu1">
                <div className="eduHead">
                  <img src="./smsLogo.png" alt="" />
                  <div>
                    <p className="eduRole" style={{ fontSize: "1.1em" }}>
                      B.Voc ( Software Development )
                    </p>
                    <p className="eduComName">
                      School Of Management Sciences Lucknow
                    </p>
                    <p className="eduDate">1 Sept 2023 - 1 Jul 2027</p>
                  </div>
                </div>
                <div className="eduDiscription">
                  <p style={{fontWeight : "500" , color : "White"}}>Grade : Current CGPA 8.1</p>
                  <p>
                    I am completing my graduation in Bachelor Of Vocational in Software Development from School Of Management Sciences, Lucknow which is affiliated with University Of Lucknow. I gained a strong foundation in programming, software development, and computer science principles. I have studied subject such as C, Python, Data Structure,Database Management System, Operation System, Software Engineering, DAA, Cyber Security, etc. My experience in SMS college instrumental in shaping my technical abilities and professional growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="educationBox2" style={{height : "auto"}}>
                <div className="edu" style={{height : "auto" , margin :"0.7em 0"}} >
                <div className="eduHead">
                  <img src="./cmsLogo.jpeg" alt="" />
                  <div>
                    <p className="eduRole" style={{ fontSize: "1.1em" }}>
                      Intermediate
                    </p>
                    <p className="eduComName">
                      City Montessori Inter College Balrampuur
                    </p>
                    <p className="eduDate">1 April 2022 - 30 Mar 2023</p>
                  </div>
                </div>
                <div className="eduDiscription" style={{marginTop : "0.2em"}}>
                    <p style={{fontWeight : "500" , color : "White"}}>Grade : 78%</p>
                  <p>
                    I Completed my Intermediate from City Montessori Inter College Balrampur which is under Uttar Pradesh Board. I studied Physics , Chemistry and Biology as a core subject.
                  </p>
                </div>
              </div>
            </div>
            <div className="educationBox3" style={{height : "auto"}}>
                <div className="edu" style={{height : "auto" , margin :"0.7em 0"}}  >
                <div className="eduHead">
                  <img src="./cmsLogo.jpeg" alt="" />
                  <div>
                    <p className="eduRole" style={{ fontSize: "1.1em" }}>
                      High School
                    </p>
                    <p className="eduComName">
                      City Montessori Inter College Balrampuur
                    </p>
                    <p className="eduDate">1 April 2020 - 30 Mar 2021</p>
                  </div>
                </div>
                <div className="eduDiscription" style={{marginTop : "0.2em"}}>
                    <p style={{fontWeight : "500" , color : "White"}}>Grade : 73%</p>
                  <p>
                    I completed my High School education from City Montessori Inter College Balrampur which is under Uttar Pradesh Board. I studied science and arts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
