import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../../assets/stylesheets/application.tailwind.css";

// yarn build
// bundle exec rails s

function App() {
  return (
    <>
      <NavBar />
      <h1 className="text-center">Recycling App</h1>
      <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);