import React from "react";
import GoogleMapReact from "google-map-react";
import { Marker } from "../atoms/Marker";

export function ServiceProvidersCard() {
  const lat = 43.655;
  const lng = -79.3832;
  return (
    <div className=" mt-8 flex- flex-col">
      <p className="text-xl font-bold">Service providers and Support</p>
      <div className="mt-4 mb-4 w-full h-64">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBp2t0NW5w03snnIggKU4KQsaXZyWG94BY" }}
          defaultCenter={{ lat, lng }}
          defaultZoom={11}
          yesIWantToUseGoogleMapApiInternals
        >
          <Marker lat={43.6551} lng={-79.4122} />
          <Marker lat={43.67067} lng={-79.33911} />
          <Marker lat={43.6374} lng={-79.53903} />
          <Marker lat={43.71855} lng={-79.45015} />
        </GoogleMapReact>
      </div>
    </div>
  );
}
