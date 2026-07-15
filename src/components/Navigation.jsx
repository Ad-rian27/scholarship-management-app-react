import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <div className="container">

          <Link className="navbar-brand" to="/">
            Scholarship Portal
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

            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/add-student">
                  Add Student
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/view-students">
                  View Students
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/add-scholarship">
                  Add Scholarship
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/view-scholarships">
                  View Scholarships
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/apply-scholarship">
                  Apply Scholarship
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/add-applications">
                  Add Applications
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/view-applications">
                  View Applications
                </Link>
              </li>

            </ul>

          </div>

        </div>

      </nav>

    </div>
  );
};

export default Navigation;