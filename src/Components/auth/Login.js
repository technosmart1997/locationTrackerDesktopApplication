import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Navbar from "../layout/Navbar";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empId: "",
      password: "",
      loggedIn: false,
      message: "",
      showBox: false
    };
  }

  ifLoggedIn = () => {
    return this.state.loggedIn;
  };

  submitHandler = event => {
    event.preventDefault();
    let user = {};
    user.empId = this.state.empId;
    user.password = this.state.password;

    if (this.state.empId === "" || this.state.password === "") {
      this.setState({
        showBox: true,
        message: "Please Fill ALl the Credentials"
      });
    }

    axios
      .post("https://fierce-scrubland-42898.herokuapp.com/empLogin", user)
      .then(response => {
        console.log(response);
        if (response.data.status) {
          this.setState({
            loggedIn: true
          });
        }

        if (!response.data.status) {
          this.setState({
            showBox: true,
            message: response.data.message
          });
        }
      });
  };

  mychangeHandler = event => {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  render() {
    if (this.state.loggedIn === true) {
      return <Redirect to={`dashboard/${this.state.empId}`} />;
    }

    return (
      <div>
        <Navbar />
        <div className="container">
          <h1>LOGIN PAGE</h1>

          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6">
              {this.state.showBox && (
                <div class="alert alert-danger">
                  <strong>Sorry!</strong> {this.state.message}
                </div>
              )}
            </div>
            <div className="col-md-3" />
          </div>

          <div className="row">
            <div className="col-md-4" />
            <div className="col-md-4">
              <form onSubmit={this.submitHandler} encType="multipart/form-data">
                <input
                  className="form-control"
                  type="num"
                  name="empId"
                  placeholder="Enter EmpId"
                  onChange={this.mychangeHandler}
                />
                <br />
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  onChange={this.mychangeHandler}
                />
                <br />
                <input
                  className="btn btn-success"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
            <div className="col-md-4" />
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
