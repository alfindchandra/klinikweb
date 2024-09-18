import React from "react";

function About() {
  return (
    <section className="md:mt-20" id="about">
      <div className="flex flex-col md:flex-row items-center justify-center bg-gray-50 py-10">
        <div className="max-w-md text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Selamat datang di Pusat Kesehatan Anda
          </h1>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Accusantium aperiam earum ipsam eius, inventore nemo
            labore eaque porro consequuntur ex aspernatur. Explicabo, excepturi
            accusantium! Placeat voluptates esse ut optio facilis!
          </p>
        </div>

        <div className="mt-8 md:mt-0 md:ml-10">
          <img src="/doc1.png" alt="Doctor" className="w-full md:w-96" />
        </div>
      </div>
    </section>
  );
}

export default About;
