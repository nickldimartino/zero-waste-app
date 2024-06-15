import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-success">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <Link className="nav-link active text-light fw-bold" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item mx-2 mt-2">
              <Link to="/about" className="text-light fw-bold">About</Link>
            </li>
            <li className="nav-item dropdown mx-2">
              <a className="nav-link dropdown-toggle text-white fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu p-1 border border-success">
                <li><Link className="text-success fw-bold" to="/how-to-recycle">How To</Link></li>
                <li><Link className="text-success fw-bold" to="/benefits-of-recycling">Benefits</Link></li>
                <li><Link className="text-success fw-bold" to="/materials">Materials</Link></li>
                <li><Link className="text-success fw-bold" to="/industries">Industries</Link></li>
                <li><Link className="text-success fw-bold" to="/roadmap-of-waste">Roadmap</Link></li>
                <li><Link className="text-success fw-bold" to="/emissions">Emissions</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
