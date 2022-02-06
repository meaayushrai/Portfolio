import React from "react";
import Typical from "react-typical";
import "./Profile.css";



export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
              <div className="colz-icon">


            <a href="https://www.facebook.com/ayush.rai.71868964">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/ayushrai._._/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="www.linkedin.com/in/ayush-rai-418723151">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="https://twitter.com/meaayushrai">
              <i className="fa fa-twitter-square"></i>
            </a>
              </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Ayush</span>
            </span>
          </div>
          <div className="profile-details-role">
              <span className="primary-text">
                  {" "}
                  <h1>
                      {" "}
                      <Typical 
                      loop={Infinity}
                      steps={[
                          "Enthusiastic Dev ✔",
                          1000,
                          "Full Stack Developer 💻",
                          1000,
                          "MERN Stack Developer 😎",
                          1000,
                          "Love to Code 💜",
                          1000,
                          "Data Analyst 📉",
                          1000,
                      ]}
                      />

                  </h1>
                  <span className='profile-role-tagline'>
                      Knack of building application with front and backend operations.
                  </span>
              </span>
          </div>
          <div className="profile-options">
              <button className="btn primary-btn">
                  {" "}
                  Hire Me{" "}
              </button>
              <a href="PortfolioResume.pdf" download="Ayush Resume.pdf">
                  <button className="btn highlighted-btn">Get Resume </button>
              </a>
          </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background">

            </div>
        </div>
      </div>
    </div>
  );
}
