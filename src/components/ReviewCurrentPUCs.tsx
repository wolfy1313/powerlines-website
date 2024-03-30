import React from "react";
import { Cairo, Roboto_Slab } from "next/font/google";
import Image from "next/image";
const cairo = Cairo({ subsets: ["latin"] });
const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

function ReviewCurrentPUCs() {
  return (
    <section className="min-w-full max-w-full mx-auto">
      {/* Heading and buttons block container */}
      <section className="flex flex-col bg-white px-20 my-10">
        <div>
          <h1
            className={`md:text-[37px] md:font-semi-bold md:leading-[45px] md:tracking-wide text-[21px] font-normal mb-2 text-primary ${cairo.className}`}
          >
            REVIEW CURRENT PUCs
          </h1>
          <p
            className={`text-base md:text-xl font-light leading-6  ${robotoSlab.className}`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* buttons container */}
        <div className="text-center mx-auto mt-10">
          <p>View:</p>
          <div className="inline-block justify-center items-center bg-gray-200 rounded-full mt-2 space-x-2">
            <button className="px-8 py-2 bg-yellow-500 rounded-full">
              Database
            </button>
            <button className="px-8 py-2">Contributions</button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default ReviewCurrentPUCs;
