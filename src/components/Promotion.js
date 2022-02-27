import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import stu from "../images/stu.png"


const Promotion = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>{data.promotionHeading}</h1>
            <div className="img1">
              <img src={stu} alt="edu"></img>
            </div>
            <div className="p">
            <p>{data.promotionPara}</p>
            </div>
          </Fade>
          
            <div className="skills-grid">
            {data.skills1.map((skill, index) => (
              <div className="skill" key={index}>
                <h4>{skill.h1}</h4>
                <img src={skill.img} alt="css"></img>
                
                {/* <p>{skill.para}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promotion
