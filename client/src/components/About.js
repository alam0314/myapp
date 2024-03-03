import React from 'react'
import "./About.css"


const About = () => {
  return (
    <>
    
      <div className="container_about" style={{ minHeight: "100%" }}>
      <h1 class="heading"> <span>About</span> Me </h1>
        <div className="containermain">
          <div  style={{ width: 500,marginTop:15 }}>
            <h2><b>Alam Ansari</b></h2>
            <p style={{lineHeight: 2}}>Detail-oriented and results-driven Associate Software Engineer with a proven track record in software development,
                  testing, and debugging. Proficient in multiple programming languages and frameworks, including C++, PHP, Laravel
                  and Vue. Experienced in collaborating with cross-functional teams to deliver high-quality software products that meet
                  and exceed customer expectations. Dedicated to continuous learning and innovation in the ever-evolving field of
                  software engineering.
            </p>
             <br/>
            <h2><b>Skills</b></h2>
            <p><b> C++ | PHP | Java | Python</b></p>
            <p><b>Bulma | jQuery | Laravel | Vue.js | Nuxt.js</b></p>
            <p><b>HTML | CSS | JavaScript</b></p>
            <p><b>MySQL | NoSQL</b></p>
            <p><b>MongoDB | Express.js | React.js | Node.js</b></p>
            <br/>
            <h2><b>Work Experience</b></h2>
            <ul>
            <li>
              <p><b>Associate Software Engineer</b></p>
              <p>Accenture | Gurugram, Haryana</p>
              <p>January 2024 – Present</p>
              </li>
              <li>
              <p><b>SDET</b></p>
              <p>Webreinvent Technologies Pvt. Ltd. | Dwarka, New Delhi</p>
              <p>July 2023 – January 2024</p>
              </li>
            </ul>
            <br/>
            <h2><b>Additional Information</b></h2>
            <p><b>Permanent Address:</b> Sitamarhi Bihar(843302) India.</p>
            <p><b>Hobbies:</b> Playing Cricket, Listenting to music, Photography.</p>
            <p><b>Languages Known:</b> English, Hindi, Urdu.</p>
            <br/>
            <h2><b>Educational Details</b></h2>
            <p><b>B.Tech(CSE):</b> From Dr. APJ Abdul Kalam Technical University, Lucknow. <i>YOP:</i> 2023, <i>Total Aggregate Score:</i> 8.3 CGPA</p>
            <p><b>Intermediate(PCM):</b> From S.L.K College, Sitamarhi. <i>YOP:</i> 2019, <i>Score:</i> 74.8%</p>
          </div>
          <div className="right_container">
            <img src="./images/alam.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About