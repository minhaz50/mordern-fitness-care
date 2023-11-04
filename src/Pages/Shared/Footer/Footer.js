import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="container-details">
      <div className="footer-container">
        <div className="footer-details">
          <h2>Working Hours</h2>
          <br />
          <br />
          <p>Monday - Friday 5:00 AM - 12:00 AM</p>
          <p>Sunday - Saturday 8:00 AM - 10:00 PM</p>
        </div>
        <div className="footer-details">
          <h1>ADDRESS</h1>
          <br />
          <p>
            661 Sulphur Springs Ave. <br /> Mymenshigh,Bangladesh
          </p>
        </div>
      </div>
      <div className="footer__copyright">
        <small>&copy; Md Minhaz Uddin {year}.</small>
      </div>
    </footer>
  );
};

export default Footer;
