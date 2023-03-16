import React from "react"
import Service from "../../components/service/Service"
import featuresIcon from "../../assets/images/features-icon-1.png";
import featuresIcon_2 from "../../assets/images/features-icon-2.png";
import featuresIcon_3 from "../../assets/images/features-icon-3.png";

import "./services.css"

const Services = () => {
  return (
    <div className="services">
        <Service
          className="service"
          img={featuresIcon}
          alt="rocket"
          h2="Powerful Engine"
          p="Unreal Engine 5 paves the way for new or experienced developpers to create large scale games, which before only multi-million dollar companies could do."
        />
        <Service
          className=" service app-border"
          img={featuresIcon_2}
          alt="decentralized gaming"
          h2="Decentralized Gaming"
          p="Combining blockchain technology and gaming to become an innovative leader within a world full of possibilities."
        />
        <Service 
          className="service"
          img={featuresIcon_3}
          alt="community work"
          h2="Community Work"
          p="A unique voting idea that allows gamers to decide how games will play out, which course the project takes and many other polls that will take place while the project grows."
        />

    </div>
  )
}

export default Services