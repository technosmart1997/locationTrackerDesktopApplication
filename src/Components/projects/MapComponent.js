import React from "react";
import { compose, withProps } from "recompose";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs,
  Polyline,
  InfoWindow
} from "react-google-maps";

const MapComponent = compose(
  withProps({
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: (
      <div style={{ height: `800px`, width: `95%`, margin: `auto` }} />
    ),
    mapElement: <div style={{ height: `100%` }} />
  }),
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={16} center={props.finalLocation}>
    <Marker position={props.finalLocation}>
      <InfoWindow>
        <span>ARRIVAL DATE/TIME : {props.finishTime} </span>
      </InfoWindow>
    </Marker>
    <Marker position={props.initialLocation}>
      <InfoWindow>
        <span>EXIT DATE/TIME : {props.startTime} </span>
      </InfoWindow>
    </Marker>
    <Polyline
      path={JSON.parse(props.locations)}
      options={{
        strokeColor: "red",
        strokeOpacity: 3,
        strokeWeight: 5,
        icons: [
          {
            offset: "0",
            repeat: "10px"
          }
        ]
      }}
    />
  </GoogleMap>
));

export default MapComponent;
