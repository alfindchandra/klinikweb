import React from "react";

const GoogleMapsEmbed = () => {
  return (
    <div
      className="w-full h-96 rounded-lg overflow-hidden shadow-lg items-center"
      id="lokasi"
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.614688588881!2d111.8996796638011!3d-7.160466668836043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e778185bd9e23c7%3A0x83d87b3bd75ea443!2sRSUD%20Dr.Sosodoro%20Bojonegoro!5e1!3m2!1sid!2sid!4v1726662072385!5m2!1sid!2sid"
        height="500"
        style={{ border: 0 }}
        loading="lazy"
        className=" rounded-md mb-4 w-full"
      ></iframe>
    </div>
  );
};

export default GoogleMapsEmbed;
