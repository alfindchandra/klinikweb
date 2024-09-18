import Image from "next/image";
import React from "react";

function hero() {
  return (
    <section
      className="relative bg-cover bg-center h-[500px]"
      id="home"
      style={{ backgroundImage: "url('/dokter.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>{" "}
      <div className="relative flex items-center justify-start h-full ml-5 md:ml-20">
        <div className="-mt-16">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            RS. Uji Coba
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-300">
            Stay Safe, Stay Healthy!
          </p>
          <a
            href="#services"
            className="mt-8 inline-block bg-primary hover:bg-transparent border-transparent border-2 hover:border-primary text-white transition duration-500 font-semibold py-2 px-4 rounded-lg"
          >
            Kunjungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}

export default hero;
