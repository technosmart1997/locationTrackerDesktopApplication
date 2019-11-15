import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLink = () => {
  return (
    <ul className="nav navbar-nav navbar-right">
      <li>
        <NavLink to="/">Logout</NavLink>
      </li>
    </ul>
  );
};

export default SignedInLink;
