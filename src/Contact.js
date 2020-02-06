import React from "react";
import './section.css';

function Contact () {
    return (
      <div className="section">
        <div className="textbox">
          <h2 className="heading">III.</h2>

          <div className="connect">
            <h3 className="subheading">For any inquiries</h3>
            <a href="mailto:mrayd92@gmail.com">mrayd92@gmail.com</a>
          </div>
          
          <div className="connect">
            <h3 className="subheading">To connect online</h3>
            <a href="https://www.linkedin.com/in/michael-dufauchard/" target="_blank">linkedin.com/michael-dufauchard</a>
          </div>

          <div className="connect">
            <h3 className="subheading">For examples of my code</h3>
            <a href="https://github.com/michaeldufauchard" target="_blank">github.com/michaeldufauchard</a>
          </div>

        </div>
      </div>
    );
  }

export default Contact;