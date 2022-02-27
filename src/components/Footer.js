import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
       
          <Fade bottom cascade className="footer-container1"> 
          <div className="col">
            <h1>Contact</h1>
            <h2>{data.contactSubHeading1}</h2>
            <h1 className="list-unstyled">
            <li>{data.contactSubHeading2}</li>
            <li>{data.contactSubHeading3}</li>
            <li>{data.contactSubHeading4}</li>
            <li>{data.contactSubHeading5}</li>

            <Fade>
          <div className="social-icons">
            {data.social.map((socialLink, index) => (
              <a
                key={index}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={socialLink.img} alt="icons"></img>
              </a>
            ))}
          </div>
          </Fade>
            </h1>
            <a className="email-link" href={`mailto:${
                data.contactEmail ? data.contactEmail : "hello@chetanverma.com"
              }`}>
                {data.contactEmail}
            </a>
            <span><icon>👋</icon></span>

            
          
            
          </div>  
          </Fade>
          <Fade>
            <div class="Sing_Up">
              <h2>What do you think of me?</h2>
              <form>
                <fieldset>
                <label>
                  <p>Your Name</p>
                  <input name="name" />
                </label>
                <label>
                  <p>Your Contact(Email or Contact No)</p>
                  <input name="name" />
                </label>
                <label>
                  <p>Your Idea</p>
                  <textarea name="Comment" />
                </label>
               </fieldset>
               <button type="submit">Ask Me </button>
              </form>
            </div>
            </Fade>         
        </div>
        <span>Made With <icon>❤</icon> by{" "}
         <a href="https://www.chetanverma.com/">Malsha Kodagoda</a>
        </span>
      </div>
    </div>
  )
}

export default Footer
