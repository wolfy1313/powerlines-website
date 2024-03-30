import React from "react";
import { Cairo, Roboto_Slab } from "next/font/google";
import Image from "next/image";
const cairo = Cairo({ subsets: ["latin"] });
const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

const ResourcesComponent = () => {
  return (
    <section className="min-w-screen max-w-screen md:px-20 px-10 my-10">
      <h1
        className={`md:text-[37px] md:font-semi-bold md:leading-[45px] md:tracking-wide text-[21px] font-normal mb-2 text-primary ${cairo.className}`}
      >
        RESOURCES & REPORTS
      </h1>

      <section className="mt-5 flex flex-col md:flex-row">
        <section className="w-full md:w-1/3">
          <Image
            width={200}
            height={200}
            src="/OurMissionImage.png"
            alt="report"
            className="rounded-md w-full h-full object-cover"
          />
        </section>
        <section className="w-full md:w-2/3 md:pl-8 flex flex-col">
          <div className="flex flex-col flex-grow justify-between">
            <div>
              <h3
                className={`md:text-base md:font-semi-bold md:leading-[30px] md:font-normal text-sm font-bold text-primary mt-2 ${cairo.className}`}
              >
                White Paper
              </h3>
              <h2
                className={`md:text-2xl md:font-semi-bold md:leading-[30px] text-base font-bold mb-2 ${cairo.className}`}
              >
                Lorem Ipsum
              </h2>
              <p
                className={`text-[15px] md:text-xl font-light leading-6 flex-grow ${robotoSlab.className}`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <section className="mt-3">
              <h4 className="md:text-base text-sm font-bold">Download</h4>
              <p className="text-primary md:text-xl text-base font-bold underline flex items-center">
                <span className="inline mr-2">
                  <Image
                    width={20}
                    height={20}
                    src="/FileDownload.svg"
                    alt="report"
                    className="text-primary"
                  />
                </span>
                Full White Paper
              </p>
            </section>
          </div>
        </section>
      </section>
      <section className="mt-5 flex flex-col md:flex-row">
        <section className="w-full md:w-1/3">
          <Image
            width={200}
            height={200}
            src="/OurMissionImage.png"
            alt="report"
            className="rounded-md w-full h-full object-cover"
          />
        </section>
        <section className="w-full md:w-2/3 md:pl-8 flex flex-col">
          <div className="flex flex-col flex-grow justify-between">
            <div>
              <h3
                className={`md:text-base md:font-semi-bold md:leading-[30px] md:font-normal text-sm font-bold text-primary mt-2 ${cairo.className}`}
              >
                White Paper
              </h3>
              <h2
                className={`md:text-2xl md:font-semi-bold md:leading-[30px] text-base font-bold mb-2 ${cairo.className}`}
              >
                Lorem Ipsum
              </h2>
              <p
                className={`text-[15px] md:text-xl font-light leading-6 flex-grow ${robotoSlab.className}`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <section className="mt-3">
              <h4 className="md:text-base text-sm font-bold">Download</h4>
              <p className="text-primary md:text-xl text-base font-bold underline flex items-center">
                <span className="inline mr-2">
                  <Image
                    width={20}
                    height={20}
                    src="/FileDownload.svg"
                    alt="report"
                    className="text-primary"
                  />
                </span>
                Full White Paper
              </p>
            </section>
          </div>
        </section>
      </section>
      <section className="mt-5 flex flex-col md:flex-row">
        <section className="w-full md:w-1/3">
          <Image
            width={200}
            height={200}
            src="/OurMissionImage.png"
            alt="report"
            className="rounded-md w-full h-full object-cover"
          />
        </section>
        <section className="w-full md:w-2/3 md:pl-8 flex flex-col">
          <div className="flex flex-col flex-grow justify-between">
            <div>
              <h3
                className={`md:text-base md:font-semi-bold md:leading-[30px] md:font-normal text-sm font-bold text-primary mt-2 ${cairo.className}`}
              >
                White Paper
              </h3>
              <h2
                className={`md:text-2xl md:font-semi-bold md:leading-[30px] text-base font-bold mb-2 ${cairo.className}`}
              >
                Lorem Ipsum
              </h2>
              <p
                className={`text-[15px] md:text-xl font-light leading-6 flex-grow ${robotoSlab.className}`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <section className="mt-3">
              <h4 className="md:text-base text-sm font-bold">Download</h4>
              <p className="text-primary md:text-xl text-base font-bold underline flex items-center">
                <span className="inline mr-2">
                  <Image
                    width={20}
                    height={20}
                    src="/FileDownload.svg"
                    alt="report"
                    className="text-primary"
                  />
                </span>
                Full White Paper
              </p>
            </section>
          </div>
        </section>
      </section>
    </section>
  );
};

export default ResourcesComponent;
