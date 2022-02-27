import React from "react"
import data from "../yourdata"

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <h1>Skill Highlights</h1>
          <div className="skills-grid">
            {data.skills.map((skill, index) => (
              <div className="skill" key={index}>
                <h4>{skill.h1}</h4>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
