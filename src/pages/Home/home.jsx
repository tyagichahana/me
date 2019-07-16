import React, { Component } from "react";
import "./index.scss";
import { Link } from "react-router-dom";

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
              <span className="htmlTag">{"<intro>"}</span>
              <span className="htmlTag">{"<h1>"}</span>
              <span className="text">Hi,</span>
              <span className="text developer-name">I'm Chahana Tyagi</span>
              <span className="htmlTag">{"</h1>"}</span>
              <span className="text">
                <span className="htmlTag">{"<p>"}</span>
                <div className="text-18">
                  Front End Developer / Reactjs / HTML / CSS / JavaScript
                </div>
                <span className="htmlTag">{"</p>"}</span>
              </span>
              <span className="htmlTag">{"</intro>"}</span>
            </div>
            <div className="bottomLeft">{"</body>"}</div>
          </div>
          <div className="right">
            <div className="avatar" />
            <div>
              <a
                className="title"
                href={require("../../assets/Chahana-Resume.pdf")}
                download
              >
                <img src={require("../../assets/icons8-pdf-50.png")} alt="" />
                <span>Resume</span>
              </a>
            </div>
            <Link to="/about" className="btn">
              Know More
            </Link>
          </div>
        </div>
      </WrapComponents>
    );
  }
}
export default Home;
