import React, { Component } from "react";
import "./index.scss";
// import { Link } from "react-router-dom";

// import Sidebar from "@/components/sidebar";
import WrapComponents from "@/components/wrapper";

class Skills extends Component {
  render() {
    return (
      <WrapComponents>
        <div className="content">
          <div className="left bounce">
            <div className="topLeft">{"<body>"}</div>
            <div className="center">
              <span className="htmlTag">{"<skills>"}</span>
              <span className="htmlTag">{"<h1>"}</span>
              <span className="text heading">Skills & Experience</span>
              <span className="htmlTag">{"</h1>"}</span>
              <span className="text">
                <span className="htmlTag">{"<p>"}</span>
                <div className="text-18">
                  The main area of my expertise is Frontend Development (client
                  side of the web).
                </div>
                <div className="text-18">
                  My skills are HTML, CSS, JavaScript , Reactjs, React-emotions,
                  Reducers, Redux-Saga, High-Chart.
                </div>
                <div className="text-18">
                  {" "}
                  Visit my{" "}
                  <a className="highlight" href="/">
                    Linkedln
                  </a>{" "}
                  profile for more informations.
                </div>
                <span className="htmlTag">{"</p>"}</span>
              </span>
              <span className="htmlTag">{"</skills>"}</span>
            </div>
            <div className="bottomLeft">{"</body>"}</div>
          </div>
          <div className="right">
            <div className="skill_container">
              <div className="react" />
              <div className="html" />
              <div className="css" />
              <div className="js" />
              <div className="sc" />
              <div className="sc2" />
            </div>
          </div>
        </div>
      </WrapComponents>
    );
  }
}
export default Skills;
