import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, img, name, fee } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/services/${id}`);
  };
  return (
    <div className="service-container">
      <div className="service-details">
        <img src={img} alt="" />
        <div className="service__details-title">
          <h2>{name}</h2>
          <h4>${fee}</h4>
        </div>
        <div className="enroll-btn">
          <button onClick={() => navigateToServiceDetail(id)}>Enroll </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
