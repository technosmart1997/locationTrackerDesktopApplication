import React from "react";
import Navbar from "../layout/Navbar";

const HomeComponent = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="jumbotron">
          <br />
          <h1>Employee Location Tracker </h1>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
