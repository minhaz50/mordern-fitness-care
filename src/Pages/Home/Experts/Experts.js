import React from "react";
import "./Experts.css";

import expert1 from "../../../images/Experts/Expert1.jpg";
import expert2 from "../../../images/Experts/Expert2.jpg";
import expert3 from "../../../images/Experts/Expert3.jpg";
import expert4 from "../../../images/Experts/Expert4.jpg";

const experts = [
  { id: 101, name: "WilliamSon", address: "Dhaka", image: expert1 },
  { id: 102, name: "Jack Brain", address: "Khulna", image: expert2 },
  { id: 103, name: "Nehal Pattu", address: "Dhaka", image: expert3 },
  { id: 104, name: "Sana Burg", address: "Mymensingh", image: expert4 },
];

const Experts = () => {
  return (
    // <div className="container">
    //   <div className="row">
    //     <h2 className="experts-title">Our Experts</h2>
    //     <div className="experts__container">
    //       {experts.map((expert) => (
    //         <Expert key={expert.id} expert={expert}></Expert>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <section id="expert">
      <h2>Our Experts</h2>
      <div className="container expert__container">
        {experts.map(({ id, image, name, address }) => {
          return (
            <article key={id} className="expert__item">
              <div className="expert__item-image">
                <img src={image} alt="img" />
              </div>
              <h3>{name}</h3>
              <h5>{address}</h5>
              {/* <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={brief} className="btn">
                  Project Brief
                </a>
              </div>
              <div className="portfolio__item-cta">
                <a href={demo} className="btn btn-primary">
                  Live Demo
                </a>
              </div> */}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Experts;
