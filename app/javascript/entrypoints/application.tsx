import React from "react";
import ReactDOM from "react-dom/client";
import "../../assets/stylesheets/application.tailwind.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../pages/App/App";

// yarn build
// bundle exec rails s

// create the React DOM root element
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// render the root element with React Router for in-app routes
root.render(
  <Router>
    <App />
  </Router>
);