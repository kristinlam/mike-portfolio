import React from "react";
import './section.css';
import './skillbars.css';
import SkillBars from './SkillBars.js';
import resume from './resume.pdf';
import {
  Timeline,
  Content,
  ContentYear,
  ContentBody,
  Description
} from 'vertical-timeline-component-react';


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
            <a target="_blank" rel="noopener noreferrer" href={resume} className="btn">View my resume</a>
          </div>
        </div>
        <SkillBars hue="200" saturation="10" skills={skills} />
        <Timeline>
        <Content>
          <ContentYear
            startMonth="1"
            monthType="text"
            startDay="24"
            startYear="2017"
          />
          <ContentBody title="Process/Technology Analyst">
            <Description
              text="I'm an amazing event"
              optional="Canon USA"
            />
          </ContentBody>
        </Content>
        <Content>
          <ContentYear
            startMonth="12"
            monthType="text"
            startDay="24"
            startYear="2018"
          />
          <ContentBody title="Amazing Title">
            <Description
              text="I'm an amazing event"
              optional="I'm an amazing optional text"
            />
          </ContentBody>
        </Content>
        <Content>
          <ContentYear
            startMonth="01"
            monthType="text"
            startDay="24"
            startYear="2018"
            currentYear
          />
          <ContentBody title="Amazing Title">
            <Description
              text="I'm an amazing event"
              optional="I'm an amazing optional text"
            />
          </ContentBody>
        </Content>
        <Content>
          <ContentYear
            startMonth="12"
            monthType="text"
            startDay="24"
            startYear="2020"
            currentYear
          />
          <ContentBody title="Amazing Title">
            <Description
              text="I'm an amazing event"
              optional="I'm an amazing optional text"
            />
          </ContentBody>
        </Content>
      </Timeline>
      </div>
    );
  }

export default Experience;