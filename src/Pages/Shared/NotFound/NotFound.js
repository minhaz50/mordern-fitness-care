import React from "react";
import "./NotFound.css";
import Notfound from "../../../images/Notfound.jpg";
const NotFound = () => {
  return (
    <div className="not-found-container">
      <h3 className="not-found-text">Not Found</h3>
      <p className="not-found-text">404</p>
      <img src={Notfound} alt="" />
    </div>
  );
};

export default NotFound;
