import React, { Component } from "react";
// import { View, Text } from 'react-native-maps';
import axios from "axios";
import MapComponent from "../projects/MapComponent";
import NavbarDashboard from "../layout/NavbarDashboard";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        email: "",
        contact: ""
      },
      empId: null,
      showMap: false,
      showError: false,
      isMarkerShown: true,
      markers: [],
      initialLocation: { lat: null, lng: null },
      finalLocation: { lat: null, lng: null },
      startTime: "",
      finishTime: ""
    };
    this.getUserInfo();
    this.getLocations();
  }

  componentDidMount() {
    this.setState({
      empId: this.props.match.params.empId
    });
  }

  getUserInfo = () => {
    axios
      .get(
        "https://fierce-scrubland-42898.herokuapp.com/getEmployeeInfo/" +
          this.props.match.params.empId
      )
      .then(response => {
        if (response.data.status) {
          this.setState({
            user: {
              name: response.data.user.name,
              email: response.data.user.email,
              contact: response.data.user.contact
            }
          });
        }
      });
  };

  getLocations = () => {
    axios
      .get(
        "https://fierce-scrubland-42898.herokuapp.com/getEmployeeLocations/" +
          this.props.match.params.empId
      )
      .then(response => {
        if (response.data.status && response.data.Locations !== null) {
          this.setState({
            showMap: true
          });
          for (var key in response.data.Locations) {
            if (response.data.Locations.hasOwnProperty(key)) {
              let loc = response.data.Locations[key];
              const locations = this.state.markers;
              locations.push(loc);
              this.setState({ markers: locations });
            }
          }
          const locations = this.state.markers;
          let fLoc = locations[locations.length - 1];
          let sLoc = locations[0];
          let startTime = sLoc.timestamp;
          let endTime = fLoc.timestamp;

          this.setState({
            finalLocation: {
              lat: fLoc.lat,
              lng: fLoc.lng
            },
            initialLocation: {
              lat: sLoc.lat,
              lng: sLoc.lng
            },
            startTime: startTime,
            finishTime: endTime
          });
        } else {
          this.setState({
            showMap: false,
            showError: true
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <NavbarDashboard />
        <h3 style={{ textAlign: "left" }}>Employee ID : {this.state.empId}</h3>
        <h3 style={{ textAlign: "left" }}>
          Employee Name : {this.state.user.name}
        </h3>
        <h3 style={{ textAlign: "left" }}>
          Employee Email: {this.state.user.email}
        </h3>
        <h3 style={{ textAlign: "left" }}>
          Employee Contact : {this.state.user.contact}
        </h3>
        <br />
        <h2 style={{ textAlign: "left" }}>EMPLOYEE LOCATIONS</h2>
        {this.state.showMap && (
          <MapComponent
            isMarkerShown={this.state.isMarkerShown}
            onMarkerClick={this.handleMarkerClick}
            locations={JSON.stringify(this.state.markers)}
            finalLocation={this.state.finalLocation}
            initialLocation={this.state.initialLocation}
            startTime={this.state.startTime}
            finishTime={this.state.finishTime}
          />
        )}

        {this.state.showError && (
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6">
              <div className="alert alert-danger alert-dismissible">
                <strong>Sorry!</strong> Locations Not Available for the
                Employee!
              </div>
            </div>
            <div className="col-md-3" />
          </div>
        )}
      </div>
    );
  }
}

export default Dashboard;
