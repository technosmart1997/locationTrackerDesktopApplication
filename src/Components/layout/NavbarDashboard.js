import React from "react";
import SignedInLink from "./SignedInLink";

const NavbarDashboard = () => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            Location Tracker
          </a>
        </div>

        <div>
          <SignedInLink />
        </div>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
