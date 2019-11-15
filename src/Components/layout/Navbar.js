import React from "react";
import SignedInLink from "./SignedInLink";
import SignedOutLink from "./SignedOutLink";

const Navbar = () => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            Location Tracker
          </a>
        </div>

        <div>
          <SignedOutLink />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
