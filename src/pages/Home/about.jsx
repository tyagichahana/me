import React, { Component } from "react";
import "./index.scss";
// import { Link } from "react-router-dom";

// import Sidebar from "@/components/sidebar";
import WrapComponents from "@/components/wrapper";

class Home extends Component {
  render() {
    return (
      <WrapComponents>
        <div className="content">
          <div className="left">
            <div className="topLeft">{"<body>"}</div>
            <div className="center">
              <span className="htmlTag">{"<about>"}</span>
              <span className="htmlTag">{"<h1>"}</span>
              <span className="text">Hi,</span>
              <span className="htmlTag">{"</h1>"}</span>
              <span className="text">
                <span className="htmlTag">{"<p>"}</span>
                <div className="text-18">
                  I am Front End Developer with 2+ years of experience in
                  Reactjs, HTML, CSS, JavaScript, Redux and middlewares.
                </div>
                <span className="htmlTag">{"</p>"}</span>
              </span>
              <span className="htmlTag">{"</about>"}</span>
              <span className="htmlTag">{"<Experience>"}</span>
              <div className="project-list">
                <h3 className="heading">
                  <a
                    href="https://www.tokopedia.com/"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    Tokopedia (currently working)
                  </a>
                </h3>
                <h5>Software Developer(Frontend)</h5>
                <div className="project-content">
                  I am working on Campaign Management project which is internet
                  marketing tool to run all type of campaigns(Email, SMS, Push
                  notification, Email). I have developed this project from
                  scratch.{" "}
                  <div className="text-bold text-secondary">
                    Technologies used: HTML, CSS, JavaScript, ReactJS, Redux,
                    Redux-Saga, HighCharts, Firebase(FCM).
                  </div>
                </div>
              </div>
              <div className="project-list">
                <h3 className="heading">
                  <a
                    href="https://paytm.com/"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    Paytm Payments Bank
                  </a>
                </h3>
                <h5>Software Developer (Frontend)</h5>
                <div className="project-content">
                  I have worked on Banking Operational Panel which is used for
                  the operations of Paytm Payments Bank.{" "}
                  <div className="text-bold text-secondary">
                    Technologies used: HTML, CSS, JavaScript, ReactJS, Redux,
                    Redux-Saga, Enzyme(Unit Testing).
                  </div>
                </div>
              </div>
              <div className="project-list">
                <h3 className="heading">
                  <a
                    href="http://www.agileapt.com/"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    AgileApt Solutions
                  </a>
                </h3>
                <h5>Software Developer (Frontend)</h5>
                <div className="project-content">
                  I have worked on several projects.{" "}
                  <div className="text-bold text-secondary">
                    Technologies used: HTML, CSS, JavaScript, ReactJS.
                  </div>
                </div>
              </div>
              <div className="project-list">
                <h3 className="heading">
                  <a
                    href="https://www.soprasteria.com/en"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    Sopra Steria Information technology{" "}
                  </a>
                </h3>
                <h5>Intern</h5>
                <div className="project-content">
                  I have worked on Library Management project. This project is
                  used in the Libraries to save the records of all issued or
                  returned books.{" "}
                  <div className="text-bold text-secondary">
                    Technologies used: HTML, CSS, JavaScript.
                  </div>
                </div>
              </div>
              <span className="htmlTag">{"</Experience>"}</span>
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
export default Home;
