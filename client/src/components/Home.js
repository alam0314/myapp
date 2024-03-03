import React from 'react'
import "./Home.css"

const Home = () => {
  return (
    <>
    
      <div className=" home_container">
        <div className="home_innerdiv">
          <div className="left_div">
            <h2>Welcome to <span style={{ color: "#F79F1F" }}>Alam's Portfolio</span></h2>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2 }}>I am an excellent team player and enthusiastic programmer.</p><br></br>
            <p style={{ letterSpacing:".5px",lineHeight:2 }}>“Measuring programming progress by lines of code is like measuring aircraft building progress by weight.”</p>
            <h4 style={{color:"#F79F1F"}}>Let's explore more...</h4>
          
          </div>
          <div className="right_div">
            <img src="./images/alamMask.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home