import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="cols-icon">
              <a href="https://www.facebook.com/nishan.sitaula">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="#">
                <i className="fa fa-whatsapp" />
              </a>
              <a href="https://github.com/nishan132/">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.linkedin.com/in/nishansitaula/">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Nishan  </span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Dev 😎",
                    1000,
                    "Full stack Developer 💻",
                    1000,
                    "Mern stck Dev 📱",
                    1000,
                    "Cross Platform Dev 🔴",
                    1000,
                    "React Js 🌐",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Building applications with front and back end operations.
            </span>
          </div>

          <div className="profile-options">
            {/* <button className="btn primary-btn"> Hire Me </button> */}
            <a href="nishancv.pdf" download="Nishan CV.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
