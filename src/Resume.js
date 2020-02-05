import React from "react";
import SkillBar from 'react-skills-bars';
import './section.css';
import './skillbars.css';
import SkillBars from './SkillBars.js'

const skills = [
  {type: "VBA", level: 100},
  {type: "SQL", level: 95},
  {type: "Python", level: 95},
  {type: "C", level: 90},
  {type: "C++", level: 90},
  {type: "Java", level: 90},
  {type: "Matlab", level: 80},
  {type: "JavaScript", level: 85},
  {type: "HTML", level: 90},
  {type: "CSS", level: 90}
];

function Resume () {
    return (
      <div className="section">
        <div className="textbox">
          <h2 className="heading">II.</h2>
          <h3 className="subheading">Skills</h3>
          <SkillBars hue="200" saturation="10" skills={skills} />
        </div>
      </div>
    );
  }

export default Resume;