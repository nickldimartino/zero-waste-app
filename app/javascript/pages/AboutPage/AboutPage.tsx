// ---------------------------------- Modules -----------------------------------
// External
import React from "react";
import { FaGithub, FaHouseUser, FaLinkedin, FaMailBulk } from "react-icons/fa";

// ---------------------------------- Component ---------------------------------
export default function AboutPage() {
  return (
    <div className="d-flex flex-column justify-content-between align-items-center text-info p-2 vw-75">
      <div className="fw-bold fs-2 mt-5 text-center">
        Created By: Nick DiMartino
      </div>
      <div className="fs-4 mt-4 w-50 text-center">
        This page was made to teach people about Recycling, the Road to Zero
        Waste, and the ways our waste has an impact on the industries and Earth
        around us
      </div>
      <div className="fs-5 mt-3 w-50 text-center">
        Please visit my other websites to view my software work and resume
      </div>
      <div className="d-flex mt-4">
        <a
          className="fs-3"
          href="https://www.linkedin.com/in/nicholas-dimartino/"
          target="_blank"
        >
          <FaLinkedin className="fs-2 mx-4" />
        </a>
        <a
          className="fs-3"
          href="https://nickldimartino.github.io/portfolio/"
          target="_blank"
        >
          <FaHouseUser className="fs-2 mx-4" />
        </a>
        <a
          className="fs-3"
          href="https://github.com/nickldimartino"
          target="_blank"
        >
          <FaGithub className="fs-2 mx-4" />
        </a>
        <a
          className="fs-3"
          href="mailto:nick.l.dimartino@gmail.com"
          target="_blank"
        >
          <FaMailBulk className="fs-2 mx-4" />
        </a>
      </div>
    </div>
  );
}
