import React from "react";
import Token from "../../components/token/Token";
import banefits from "../../assets/images/banefits-1.png";
import banefits_2 from "../../assets/images/banefits-2.png";
import banefits_3 from "../../assets/images/banefits-3.png";
import banefits_4 from "../../assets/images/banefits-4.png";

import "./token.css"

const token = () => {
  return (
    <div className="token__section">
        <div className="token__feature">
          <h2>Token features</h2>
          <p>Get to Know Our Ecosystem’s Key Features & Benefits</p>
        </div>
        <div className="token_display">
          <Token
            img={banefits}
            alt="ligth bulb"
            heading="voting"
            text="Decide the future of the project together with the community. Vote on different aspects."
          />
          <Token
            img={banefits_2}
            alt="ligth bulb"
            heading="Rewards"
            text="Our games reward the players in our native token. Win competitions, achieve goals and"
          />
          <Token
            img={banefits_3}
            alt="ligth bulb"
            heading="Marketing"
            text="Connect with our team for improvements, marketing and contests applications."
          />
          <Token
            img={banefits_4}
            alt="ligth bulb"
            heading="Safe & Transparent"
            text="Our project has a audited smart contract interacting with our games."
          />
        </div>
    </div>
  )
}

export default token