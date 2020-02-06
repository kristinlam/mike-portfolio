import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import Experience from "./Experience";
import Particles from 'react-particles-js';
import { AnimatedSwitch } from 'react-router-transition';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router basename="mike-portfolio">

      <Particles className="particle-bg"
        params={{
          "particles": {
              "number": {
                  "value": 50
              },
              "size": {
                  "value": 3
              },
              "color": {
                "value": "#333"
              },
              "line_linked": {
                "color" : "#333"
              }
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "grab"
                  }
              }
          }
      }} />


    
      <div className="portfolio">
        <ul className="main-nav cl-effect-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}

       <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </AnimatedSwitch>
      </div>
    </Router>
  );
}