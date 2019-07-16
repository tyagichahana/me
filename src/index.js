import React from "react";
import { render } from "react-dom";
import history from "./utils/history";
import RootRouter from "./pages";

// scroll to top when route change
history.listen((location, action) => {
  if (action === "PUSH") {
    window.scrollTo(0, 0);
  }
});

const App = () => <RootRouter />;

// render to root element
const rootElement = document.getElementById("root");
if (rootElement) {
  render(<App />, rootElement);
}
