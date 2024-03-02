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
            <p style={{lineHeight: 2}}>I am a software engineer graduate, with a passion for coding and problem-solving. I have better 
understanding of C, CPP, PHP, Python, Data Structures & Algorithms, OOPS and Web 
Development. I am an eager learner, constantly striving to improve my skills and stay ahead of 
the latest trends in software development. I am also a team player and enjoy collaborating on 
projects.</p>
             <br/>
            <h2><b>Skills</b></h2>
            <p><b>C | C++ | PHP | Python</b></p>
            <p><b>Bulma | JQuery | Laravel | Vue.js</b></p>
            <p><b>HTML | CSS | JavaScript</b></p>
            <p><b>MySQL | NoSQL</b></p>
            <p><b>MongoDB | Express.js | React.js | Node.js</b></p>
            <br/>
            <h2><b>Work Experience</b></h2>
            <p><b>Software Developer Intern</b></p>
            <p>Webreinvent Technologies Pvt. Ltd.</p>
            <p>July 2023 – Present</p>
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