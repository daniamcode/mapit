import React from "react";
import { useSelector } from "react-redux";
import Search from "./Search";
import { GoogleMap, Marker } from "react-google-maps";
import { center } from "../data/constants";

const Map = () => {
  const markers = useSelector((state) => state.mapReducer.loadMarker);

  //avoid unnecessary rerenders
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  let dynamicZoom = 9
  let dynamicCenter = center

  if(markers.length) {
    dynamicZoom = 14
    dynamicCenter = markers[markers.length - 1]
  }

  return (
    <section className="googleMap">
      <Search />
      <GoogleMap zoom={dynamicZoom} center={dynamicCenter} onLoad={onMapLoad}>
        {markers.map((marker) => (
          <Marker
            key={marker}
            position={{ lat: marker.lat, lng: marker.lng }}
          />
        ))}
      </GoogleMap>
    </section>
  );
};

export default Map;
