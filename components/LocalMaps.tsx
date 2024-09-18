import React from "react";
import GoogleMapsEmbed from "./ui/Maps";

function LocalMaps() {
  return (
    <div className="container mx-auto p-4 text-center my-10">
      <h2 className="text-3xl font-semibold text-dark">Lokasi Kami</h2>
      <p className="text-blue-600 text-2xl mt-1 mb-3">───</p>
      <p className="text-gray-800 max-w-2xl mx-auto mb-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit praesent
        aliquet.
      </p>
      <GoogleMapsEmbed />
    </div>
  );
}

export default LocalMaps;
