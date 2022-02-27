import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import Skills from "./skills"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            Portfolio.
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#home")}>Home</button>
            <button onClick={() => scrollTo("#about")}>About Me </button>
            <button onClick={() => scrollTo("#work")}>Experience</button>
            <button onClick={() => scrollTo("#Skills")}>Skills </button>
            <button onClick={() => scrollTo("#promotion")}>Education</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
