import React from "react";
import { Link } from "react-router-dom";

export default function NavBar () {
  return (
    <nav className="navbar navbar-expand-lg bg-success">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><Link to="/how-to-recycle">How To</Link></li>
            <li><Link to="/benefits-of-recycling">Benefits</Link></li>
            <li><Link to="/materials">Materials</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/roadmap-of-waste">Roadmap</Link></li>
            <li><Link to="/esg-reporting">ESG Reporting</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
