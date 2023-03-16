import React from "react";
import "./networking.css";
import twitterLogo from "../../assets/icons/twitter.svg";
import telegramLogo from "../../assets/icons/telegram.svg";
import gitHubLogo from "../../assets/icons/github.svg";

const Networking = (props) => {
  return (
    <div className="social-network">
      <div className="net-container">
        <div className="social-image">
          <img src={props.img} alt={props.alt} />
        </div>
        <div className="networking" />
        <div className="networking-wrapper">
          <h3>{props.heading}</h3>
          <p>{props.text}</p>
          <div>
            <img src={twitterLogo} alt="Twitter-icon" />
            <img src={gitHubLogo} alt="Github-icon" />
            <img src={telegramLogo} alt="Telegram-icon" />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Networking;
