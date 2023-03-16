import React from "react";
import "./token.css";

const Token = (props) => {
  return (
    <section className="token">
      <div className='token-content'>
        <div className="token-img">
          <img src={props.img} alt={props.alt} />
        </div>
        <div className='token-text'>
          <h2 className='token-heading'>{props.heading}</h2>
          <p className="token-para">{props.text}</p>
        </div>
      </div>
    </section>
  );
};

export default Token;
