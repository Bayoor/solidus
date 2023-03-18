import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import solidus from "../../assets/icons/logo.svg";
import twitter from "../../assets/icons/twitter.svg";
import telegram from "../../assets/icons/telegram.svg";
import instagram from "../../assets/icons/instagram.svg";
import youtube from "../../assets/icons/youtube.svg";
import facebook from "../../assets/icons/facebook.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={solidus} alt="solidus logo" />
        </div>
        <p>
          Join our newsletter for free guides,
          <br />
          checklist & templates
        </p>
        <div className="footer-input">
          <input type="email" name="email" id="email" placeholder="Email" />
          <button type="submit">Subscribe</button>
        </div>
      </div>

      <div className="footer-flex">
        <div className="footer-links ">
          <h2 className="links">Useful Links</h2>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>About</p>
          <p>Roadmap</p>
          <p>Games</p>
          <p>Others</p>
        </div>

        <div className="footer-links terms">
          <h2>Papers</h2>
          <p>Whitepaper</p>
          <p>About</p>
          <p>One paper</p>
        </div>

        <div className="footer-links terms margin">
          <h2>Legal</h2>
          <p>Privacy policy</p>
          <p>Terms & Conditons</p>
          <p>Cookie Policy</p>
        </div>

        <div className="footer-social_media footer-links">
          <h2>Social Media</h2>
          <p>
            <img src={twitter} alt="Twitter-icon" />
            Twitter
          </p>
          <p>
            <img src={telegram} alt="Telegram-icon" />
            Telegram
          </p>
          <p>
            <img src={instagram} alt="Instagram-icon" />
            Instagram
          </p>
          <p>
            <img src={youtube} alt="Youtube-icon" />
            YouTube
          </p>
          <p>
            <img src={facebook} alt="Facebook-icon" />
            Facebook
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
