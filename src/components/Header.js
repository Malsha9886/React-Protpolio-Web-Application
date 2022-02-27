import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

import aboutImage from "../images/prof.png"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
       
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Hi, I'm {data.name}{" "}
              {/* <span role="img" aria-label="Emoji">
                👋
              </span> */}
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "UI/UX Designer"}
              </h1> 
          <Fade>
            <div className="image-wrapper">
              <img src={aboutImage} alt="about"></img>
            </div>
          </Fade>
        </div>  
        </Fade>
         
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade bottom>
            <a
              href={`mailto:${
                data.contactEmail ? data.contactEmail : "hello@chetanverma.com"
              }`}
              className="primary-btn"
            >
              Let's Talk - 
            </a>
          </Fade>
        </div>   
      </div>
    </div>
  )
}

export default Header
