import React from "react";
import "./social.css";
import Networking from "../../components/networking/Networking";
import Ellipse from "../../assets/images/Ellipse .svg";
import Ellipse_10 from "../../assets/images/Ellipse 10.svg";
import Ellipse_11 from "../../assets/images/Ellipse 10-1.svg";
import Ellipse_12 from "../../assets/images/Ellipse 10-2.svg";
import Ellipse_13 from "../../assets/images/Ellipse 10-3.svg";
import Ellipse_14 from "../../assets/images/Ellipse 10-4.svg";


const Social = () => {
  return (
    <>
      <div className="social_network">
        <h2 className="social_network-heading">Team Members</h2>
        <div className="social_network-wrapper">
          <Networking
          img={Ellipse}
          alt='A portrait of a man'
          heading='Said Aldiev'
          text='Founder & CEO '
           />
          <Networking 
          img={Ellipse_10}
          alt='A portrait of a man'
          heading='Saraya Reguibi'
          text='Co-founder'
          />
          <Networking 
          img={Ellipse_11}
          alt='A portrait of a man'
          heading='UIM'
          text='Project Manager & Marketing '
          />
          <Networking 
          img={Ellipse_12}
          alt='A portrait of a man'
          heading='Aisha'
          text='Head of Community'
          />
          </div>
          <div className="social_network-wrapper-flex">
          <Networking 
          img={Ellipse_13}
          alt='A portrait of a man'
          heading='Hunter Efe '
          text='Web & Platform Designer '
          />
          <Networking 
          img={Ellipse_14}
          alt='A portrait of a man'
          heading='Tarax'
          text='Token Developer'
          />
          </div>
          
        </div>
    </>
  );
};

export default Social;
