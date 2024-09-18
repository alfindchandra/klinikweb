import React from "react";

function Pelayanan() {
  return (
    <div className="bg-primary opacity-90 mt-20" id="berita">
      <section className="text-center py-12 container">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-3xl font-semibold text-white">
            Kami Selalu Siap Membantu Anda dan Keluarga
          </h2>
          <p className="text-blue-600 text-2xl mt-1 mb-3">───</p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit praesent
            aliquet.
          </p>

          {/* Features Container */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12">
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full">
                {/* Ambulance Icon from Flowbite */}
                <svg
                  className="w-10 h-10 text-blue-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mt-4">
                Emergency Help
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
                vulputate.
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-20 border-t-4 border-dotted border-gray-300 mt-12"></div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full">
                {/* Pharmacy Icon from Flowbite */}
                <svg
                  className="w-10 h-10 text-blue-800 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mt-4 text-white">
                Enriched Pharmacy
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
                vulputate.
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-20 border-t-4 border-dotted border-gray-300 mt-12"></div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full">
                {/* Stethoscope Icon from Flowbite */}
                <svg
                  className="w-10 h-10 text-blue-800"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mt-4 text-white">
                Medical Treatment
              </h3>
              <p className="text-gray-400 text-sm mt-2 ">
                Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam
                vulputate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pelayanan;
