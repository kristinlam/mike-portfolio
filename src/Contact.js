import React from "react";
import './section.css';

function Contact () {
    return (
      <div className="section">
        <div className="textbox">
          <h2 className="heading">III.</h2>
          <p>Reach out to me at <a href="mailto:mrayd92@gmail.com">mrayd92@gmail.com</a>.</p>
          <ul>
            <li><a href="https://www.linkedin.com/in/michael-dufauchard-1406836a/" target="_blank">LinkedIn</a></li>
            <li><a href="https://github.com/michaeldufauchard" target="_blank">Github</a></li>
          </ul>
        </div>
      </div>
    );
  }

export default Contact;