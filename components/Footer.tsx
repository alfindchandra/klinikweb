import React from "react";

function Footer() {
  return (
    <footer className="bg-primary text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-white">Jajone</span>{" "}
          </h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            labore aliquid expedita fuga! Cupiditate ullam non soluta repellat,
            magnam ut distinctio? Atque, debitis. Minus debitis cumque excepturi
            corrupti cum nam!
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <div className="h-1 w-8  bg-cyan-500 mb-4"></div>
          <ul className="space-y-2">
            {["Home", "Tentang", "Dokter", "Pelayanan", "Lokasi"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
          <div className="h-1 w-8 bg-cyan-500 mb-4"></div>
          <ul className="space-y-2">
            <li className="flex items-center">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                @klinik
              </a>
            </li>
            <li className="flex items-center">
              <span className="text-gray-400">0813 3217 6161</span>
            </li>
            <li className="flex items-center">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                @klinik
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                @klinik
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
