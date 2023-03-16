import React from "react";
import "./roadmap.css";

const Roadmap = () => {
  return (
    <div className="roadmap">
      <div className="roadmap-content">
        <h2 className="roadmap-heading">Roadmap</h2>
      </div>

      <div className="roadmap-section">
        <div className="roadmap-div" />
        <h3 className="roadmap-text first-quarter">Q1 2023 </h3>
        <div className="container" />
        <ul className="roadmap-list first-list">
          <li>Launch of website</li>
          <li>Team building (in progress)</li>
          <li>Token development</li>
          <li>Wallet development</li>
          <li>Stealth launch or small fundraising</li>
          <li>Token audit</li>
          <li>Active social media channels (in progress)</li>
          <li>Active social media channels (in progress)</li>
          <li>Release GDD for first game</li>
          <li>Alpha phase for first game (in progress)</li>
          <li>Improvements for the first Game</li>
          <li>Further marketing for publicity</li>
          <li>Manual prizepools</li>
        </ul>
      </div>
      <div className="roadmap-section">
        <h3 className="roadmap-text second-quarter">Q2 2023 </h3>
        <div className="wrapper" />
        <ul className="roadmap-list second-list">
          <li>Giveaway for reaching milestone (tbd)</li>
          <li>Initial wallet framework for game platform</li>
          <li>Wallet connect functionality improvements</li>
          <li>NFT for ingame use</li>
          <li>SPA program (subscription plan advantages) presentation</li>
          <li>Start second game design</li>
          <li>Feedback Round for first game design</li>
          <li>Poll round for second game</li>
          <li>Tools for automated prize pool</li>
          <li>Start of contest</li>
        </ul>
      </div>
      <div className="roadmap-section">
        <h3 className="roadmap-text third-quarter">Q3 2023 </h3>
        <div className="div" />
        <ul className="roadmap-list third-list">
          <li>Revisions of the released games</li>
          <li>Team expansion and recruitment</li>
          <li>Rollout of SPA program (subscription plan advantages)</li>
        </ul>
      </div>
    </div>
  );
};

export default Roadmap;
