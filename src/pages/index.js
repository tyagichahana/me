import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import _ from "lodash";
import history from "@/utils/history";
import "./index.scss";

// Import all pages
import Home from "./Home/home.jsx";
import Skills from "./Home/skills.jsx";
import About from "./Home/about.jsx";
import MyWork from "./Home/mywork.jsx";
const urlPatterns = [
  {
    path: "/",
    component: Home,
    title: "Home"
  },
  {
    path: "/:id",
    component: Home,
    title: "Home"
  },
  {
    path: "/:id/about",
    component: About,
    title: "About"
  },
  {
    path: "/:id/skills",
    component: Skills,
    title: "skills"
  },
  {
    path: "/:id/my-work",
    component: MyWork,
    title: "MyWork"
  }
];

// Bind pages to urls
const RootRouter = () => (
  <Router history={history}>
    <Switch>
      {_.map(urlPatterns, (url, index) => (
        <Route
          key={index}
          path={url.path}
          exact
          render={route => (
            <>
              <Helmet>
                <title>{url.title || "Home"}</title>
              </Helmet>
              <url.component {...route} />
            </>
          )}
        />
      ))}
      <Route component={() => <h1>404 | page not found</h1>} />
    </Switch>
  </Router>
);

export default RootRouter;
