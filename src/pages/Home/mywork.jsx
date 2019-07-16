import React, { useState } from "react";
import "./index.scss";
import WrapComponents from "@/components/wrapper";

const ALL_PROJECTS = [
  {
    id: 0,
    title: "Singapore Tourism Board",
    description: `To save concierge’s workload in providing personalised recommendations to guests/visitors, Tuple developed a mobile app for tourists with an end user dashboard integrated to hotel’s backend. We saved manpower by 2.2 man-hours a day. We also helped the marketing department to understand their customers need, their interests and choices. By this, we were able to improve guest review ratings on Online Travel Agent sites.`,
    coverImage: require("../../assets/stb.jpeg"),
    technology: "HTML, CSS, JavaScript, ReactJS, ReCharts",
    active: false
  },
  {
    id: 1,
    title: "Ubiquity",
    description: `A marketing tool just like Moengage to run all type of campaigns like Email, SMS, Push Notification, Inapp. It also contains a dashboard  where you can see the stats and analytics of the campaigns.`,
    coverImage: require("../../assets/ubiquity.png"),
    technology: "HTML, CSS, JavaScript, ReactJS, HighCharts",
    active: false
  },
  {
    id: 2,
    title: "Pinddy",
    description: `It’s a online marketplace where customers can get best quality fruits,vegetables and groceries at optimum prices delivered right
at their doorsteps. vision of this project is to make every farmer, be it from the smallest village or the largest city an “Entrepreneur”.
Keeping the transparency of the platform intact, the consumer gets to pick the farm, thus the farmer, and review the product later, based on which a certain subsidiary
amount is transferred to the respective farmer on a monthly basis.`,
    coverImage: require("../../assets/pinddy.jpeg"),
    technology: "HTML, CSS, JavaScript, ReactJS",
    active: false
  }
];

const MyWork = () => {
  const [projects, setProjects] = useState(ALL_PROJECTS);

  function handleImageClick(idx) {
    const allProjects = projects.slice(0);
    allProjects[idx].active = !allProjects[idx].active;
    setProjects(allProjects);
  }

  return (
    <WrapComponents>
      <div className="content">
        <div className="content-center">
          <div className="topLeft">{"<body>"}</div>
          <div className="center">
            <div className="htmlTag">{"<myWork>"}</div>
            <div className="work">
              {projects.map((project, idx) => (
                <div key={idx}>
                  <div className="project-list">
                    <div
                      className={`cover-img ${project.active ? "active" : ""}`}
                      onClick={() => handleImageClick(idx)}
                    >
                      <img src={project.coverImage} alt="" />
                    </div>
                    <h3 className="heading">{project.title}</h3>
                    <p className="project-content">
                      {project.description}

                      <div className="text-bold text-secondary">
                        Technologies used: {project.technology}.
                      </div>
                    </p>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
            <div className="htmlTag">{"</myWork>"}</div>
          </div>
          <div className="bottomLeft">{"</body>"}</div>
        </div>
        {/* <div className="right">
          <div className="skill_container">
            <div className="react" />
            <div className="html" />
            <div className="css" />
            <div className="js" />
            <div className="sc" />
            <div className="sc2" />
          </div>
        </div> */}
      </div>
    </WrapComponents>
  );
};
export default MyWork;
