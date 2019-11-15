import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";

import Login from "./Components/auth/Login";
import HomeComponent from "./Components/layout/HomeComponent";

import Dashboard from "./Components/dashboard/Dashboard";

class App extends React.Component {
  clickMe = () => {
    alert("Clicked");
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact strict component={HomeComponent} />
          <Route path="/login" exact strict component={Login} />
          <Route path="/dashboard/:empId" exact strict component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
