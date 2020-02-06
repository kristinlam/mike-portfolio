import React from "react";
import './section.css';
import './skillbars.css';
import SkillBars from './SkillBars.js'
import resume from './resume.pdf'


const skills = [
  {type: "VBA", level: 100},
  {type: "SQL", level: 95},
  {type: "Python", level: 95},
  {type: "C", level: 90},
  {type: "C++", level: 90},
  {type: "Java", level: 90},
  {type: "Matlab", level: 80},
  {type: "JavaScript", level: 70},
  {type: "HTML", level: 80},
  {type: "CSS", level: 60}
];

function Experience () {
    return (
      <div className="section">
        <div className="textbox u-mb-lg">
          <h2 className="heading">II.</h2>
          <p className="u-mb-md">I'm a dynamic and multi-skilled programmer with room for growth.</p>
          <div className="text-center">
            <a target="_blank" href={resume} className="btn">View my resume</a>
          </div>
        </div>
        <SkillBars hue="200" saturation="10" skills={skills} />
      </div>
    );
  }

export default Experience;