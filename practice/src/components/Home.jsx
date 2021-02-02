import React from "react";
import { googleMapsApiKey } from "../data/constants";
import { withScriptjs, withGoogleMap } from "react-google-maps";
import Map from "./Map";
import "../styles/Home.css";

const Home = () => {
  const WrappedMap = withScriptjs(withGoogleMap(Map));

  return (
    <main className="home">
      <h1 className="home__title">Welcome to Dani Alcalà's Map!</h1>
      <section className="map">
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing,places&key=${googleMapsApiKey}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: "80vh" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </section>
    </main>
  );
};

export default Home;
