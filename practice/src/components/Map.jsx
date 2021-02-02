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

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  return (
    <section className="googleMap">
      <Search panTo={panTo} />
      <GoogleMap defaultZoom={9} defaultCenter={center} onLoad={onMapLoad}>
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
