import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import useServices from "../../../hooks/useServices";
import Banner from "../Banner/Banner";
import Experts from "../Experts/Experts";
import Service from "../Service/Service";

const Home = () => {
  const [services, setServices] = useServices([]);
  return (
    <>
      <Banner></Banner>
      <div className="container">
        <h1 className="services-title">Our Services</h1>
        <div className="services-container">
          {services.slice(0, 4).map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
      <div className="see-all-services-btn">
        <Link to="/services">
          <button>See all Services</button>
        </Link>
      </div>
      <Experts />
    </>
  );
};

export default Home;
