import React from "react";
import "./service.css";

const Service = (props) => {
    return (
      <section className={props.className}>
        <div className="service__img">
          <img src={props.img} alt={props.alt} />
        </div>
        <div className="service__content">
          <h2 className="service__heading">{props.h2}</h2>
          <p className="service__text">{props.p}</p>
        </div>
      </section>
    );
  };
  
  export default Service;