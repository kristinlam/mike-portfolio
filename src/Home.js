import React from "react";
import './section.css';
import profilepic from './mike_profile.png'

function Home () {
    return (
      <div className="section">
        <div className="textbox">
          <h2 className="heading">I.</h2>
          <p>I'm Michael DuFauchard, a VBA Developer based in New York City. Knowledge-hungry and data-focused, I create modern solutions. Currently, I work at Canon USA as the lead developer of the rebate claims database.</p>
        </div>

        <div className="img-container">
          <img src={profilepic} className="profilepic"/>
        </div>
      </div>
    );
  }

export default Home;