import React from "react";
import GoogleMapReact from "google-map-react";

export function ServiceProvidersCard() {
  const lat = 43.6532;
  const lng = -79.3832;
  return (
    <div className=" mt-8 flex- flex-col">
      <p className="text-xl font-bold">Service providers and Support</p>
      <div className="mt-4 mb-4 w-full h-64">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBp2t0NW5w03snnIggKU4KQsaXZyWG94BY" }}
          defaultCenter={{ lat, lng }}
          defaultZoom={12}
          yesIWantToUseGoogleMapApiInternals
        ></GoogleMapReact>
      </div>
    </div>
  );
}
