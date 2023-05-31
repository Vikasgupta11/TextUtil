import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                {/* <Link className="nav-link active" aria-current="page" to="/"> */}
                {props.home}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                {/* <Link className="nav-link active" aria-current="page" to="/about"> */}
                {props.about}
              </Link>
            </li>
          </ul>
        </div>

        {/* Start of Blue Mode Switched*/}
        <div className="form-check form-switch mx-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onClick={props.toggleModeBlue}
          />
          {/* Below we have write javascript using double ticks within html className */}
          <label
            htmlFor="flexSwitchCheckDefault"
            className={`form-check-label text-${
              props.Mode === "light" ? "danger" : "light"
            }`}
          >
            Enable {props.blueMode === "danger" ? "light" : "Blue"} Mode
          </label>
        </div>
        {/* End of Blue Mode Switched */}

        {/* Start of Dark Mode */}
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          {/* Below we have write javascript using double ticks within html className */}
          <label
            htmlFor="flexSwitchCheckDefault"
            className={`form-check-label text-${
              props.Mode === "light" ? "dark" : "light"
            }`}
          >
            Enable {props.Mode === "light" ? "dark" : "light"} Mode
          </label>
        </div>
        {/* End of Dark Mode Switced */}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string,
  about: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Enter Title Here",
  home: "Enter Home Here",
  about: "Enter about section here",
};
