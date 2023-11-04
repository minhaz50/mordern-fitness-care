import React from "react";
import "./About.css";
import Banner1 from "../../images/Banner/Banner1.png";

const About = () => {
  return (
    <div className="about__container">
      <div className="about__details">
        <h1>ABOUT BRONX</h1>
        <p>
          We’re not here to carry you to fitness, we’re here to motivate you to
          carry yourself to your goals. If you’re not sure what your goals are,
          or don’t know where to start on your fitness journey, come in and
          speak to one of our qualified trainers who can help you develop a
          plan.
        </p>
      </div>
      <div>
        <img src={Banner1} alt="" />
      </div>
    </div>
  );
};

export default About;
