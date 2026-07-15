import React from "react";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <div>
              <Navigation />
    <div className="container py-5">


      {/* Welcome Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 text-primary fw-bold">
          Scholarship Management System
        </h1>

        <p className="lead mt-3">
          Welcome to the Scholarship Management System. This application helps
          colleges manage student scholarships efficiently by maintaining
          student details, scholarship information, and scholarship
          applications in one place.
        </p>

        
      </div>

      {/* Features */}
      <div className="row g-4">

        <div className="col-md-4">
          <div className="card shadow h-100">
            <div className="card-body text-center">
              <h3 className="text-primary">👨‍🎓 Students</h3>
              <p className="mt-3">
                Store and manage student information including name, department,
                semester, and academic details.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow h-100">
            <div className="card-body text-center">
              <h3 className="text-success">🎓 Scholarships</h3>
              <p className="mt-3">
                View available scholarships, eligibility criteria, amount, and
                application deadlines.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow h-100">
            <div className="card-body text-center">
              <h3 className="text-warning">📄 Applications</h3>
              <p className="mt-3">
                Apply for scholarships online and track application status
                easily.
              </p>
            </div>
          </div>
        </div>

      </div>

      
      <div className="mt-5 p-4 bg-light rounded shadow-sm">
        <h2 className="text-center text-primary">About the System</h2>

        <p className="mt-3 text-center">
          The Scholarship Management System is designed to simplify scholarship
          administration in colleges. It reduces paperwork, improves accuracy,
          and provides a centralized platform for students and administrators to
          manage scholarship-related activities.
        </p>
      </div>

      
      <footer className="text-center mt-5">
        <hr />
        <p className="text-muted">
          © 2026 Scholarship Management System | MERN Stack Project
        </p>
      </footer>

    </div>
    </div>
  );
};

export default Home;