"use client";
import React, { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-xl drop-shadow-md shadow-gray-500/50 w-full sticky top-0 z-50 transition duration-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo dan nama */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-gray-800">
              <img
                src="/instagram.svg"
                alt="Logo"
                className="inline-block h-8 w-8 mr-2"
              />
              Rs.ujicoba
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <nav className="flex space-x-14 text-lg">
              <a
                href="#"
                className="text-dark hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-dark hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition duration-300"
              >
                Tentang
              </a>
              <a
                href="#dokter"
                className="text-dark hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition duration-300"
              >
                Dokter
              </a>
              <a
                href="#berita"
                className="text-dark hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition duration-300"
              >
                Pelayanan
              </a>
              <a
                href="#lokasi"
                className="text-dark hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition duration-300"
              >
                Lokasi
              </a>
            </nav>
          </div>

          <div>
            <a
              href=""
              className=" px-7 py-2 bg-primary rounded-md hover:bg-white border-solid border-2 hover:text-dark border-primary text-white"
            >
              Hubungi
            </a>
          </div>

          {/* Mobile Menu A */}
          <div className="md:hidden">
            <a
              onClick={() => setIsOpen(!isOpen)}
              type="a"
              className="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block text-gray-800 hover:text-gray-600">
              Home
            </a>
            <a
              href="#about"
              className="block text-gray-800 hover:text-gray-600"
            >
              Tentang
            </a>
            <a
              href="#dokter"
              className="block text-gray-800 hover:text-gray-600"
            >
              Dokter
            </a>
            <a
              href="#berita"
              className="block text-gray-800 hover:text-gray-600"
            >
              Pelayanan
            </a>
            <a
              href="#lokasi"
              className="block text-gray-800 hover:text-gray-600"
            >
              Lokasi
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Nav;
