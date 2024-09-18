import React from "react";

function Whay() {
  return (
    <section className="md:flex md:flex-auto flex flex-wrap md:mx-10 md:-mt-24 justify-between py-9 md:h-20 ">
      <div className=" md:my-3 w-full md:w-auto my-3 mx-3">
        <div className="relative md:hover:-mt-1 overflow-hidden h-full rounded-2xl transition duration-200 group bg-white shadow-xl border border-zinc-100">
          <div className="p-6 flex items-center">
            <div>
              <svg
                className="w-14 h-14 text-white p-2 rounded-full bg-primary "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023"
                />
              </svg>
            </div>
            <div className="ml-4 items-center text-xl">
              <h1>Pelayanan 24 Jam</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="md:my-3 w-full md:w-auto my-3 mx-2 ">
        <div className="relative md:hover:-mt-1 overflow-hidden h-full rounded-2xl transition duration-200 group bg-white shadow-xl border border-zinc-100">
          <div className="p-6 flex items-center">
            <div>
              <svg
                className="w-14 h-14 text-white p-2 rounded-full bg-primary"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-4 items-center text-xl">
              <h1>Mengobrol Dengan Dokter</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="md:my-3 w-full md:w-auto my-3 mx-2">
        <div className="relative md:hover:-mt-1 overflow-hidden h-full rounded-2xl transition duration-200 group bg-white shadow-xl border border-zinc-100">
          <div className=" p-6 flex items-center">
            <div>
              <svg
                className="w-14 h-14 text-white p-2 rounded-full bg-primary"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-4 items-center text-xl">
              <h1>Tenaga Medis Profesional</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whay;
