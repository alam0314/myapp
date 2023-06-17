import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="first">
            <h4>Alam Ansari</h4>
            <p>© 2023 Alam Ansari All rights reserved</p>
           
            <p className='links'>
            <a href="https://www.instagram.com/invites/contact/?=1f41lm8qz1gi&qzq1gi&utm_content=1zqq7ui" rel="noreferrer" target="_blank" class="linkStyle"><i class="fab fa-instagram"></i></a>
            <a href="https://github.com/alam0314" target="_blank" rel="noreferrer" class="linkStyle"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/alam0314" target="_blank" rel="noreferrer"  class="linkStyle"><i class="fab fa-linkedin"></i></a>
            </p>
          </div>
          <div className="second">
            <h4>Get In Touch</h4>
            <p>Any suggestion from your side.</p>
            <p>alamansari0314@gmail.com</p>
            <p>+91 8210676833</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer