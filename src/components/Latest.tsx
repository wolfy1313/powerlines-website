import { RefObject } from "react";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cairo, Roboto_Slab } from "next/font/google";

const cairo = Cairo({ subsets: ["latin"] });
const robotoSlab = Roboto_Slab({ subsets: ["latin"] });
const Latest = () => {
  const cardRef1 = React.useRef(null);
  const cardRef2 = React.useRef(null);
  const cardRef3 = React.useRef(null);

  const [currentCard, setCurrentCard] = React.useState<string>("card1");

  const scrollToCard = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  const handleScroll = () => {
    const container = document.querySelector(".scroll");
    if (!container) return;

    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth;

    if (scrollPosition < cardWidth / 2) {
      setCurrentCard("card1");
    } else if (scrollPosition < cardWidth + cardWidth / 2) {
      setCurrentCard("card2");
    } else {
      setCurrentCard("card3");
    }
  };

  React.useEffect(() => {
    const container = document.querySelector(".scroll");
    if (!container) return;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <section
      className={`bg-white text-center min-w-screen flex flex-col items-center md:h-full pb-16 ${cairo.className} md:pb-10 `}
    >
      {/* Header */}
      <h1 className="font-bold my-12 text-2xl">LATEST ON POWERLINES</h1>
      <section className="w-96 md:w-screen ">
        {/* Cards Container */}
        <div className="flex justify-around  overflow-x-auto space-x-6 md:px-3 md:space-x-4 md:space-y-0 md:flex-row scroll">
          {/* Cards */}

          {/* Take Action */}
          <div className="md:w-96" ref={cardRef1}>
            <section className="flex-col  shrink-0  justify-start text-start w-96 md:w-full rounded-lg bg-white h-96 border border-gray-200 md:mx-0">
              <div className="relative h-1/2">
                <Image
                  src="/latest-image1.svg"
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-t-lg object-left"
                />
              </div>
              <section className="space-y-4 mt-6 pl-4 pr-5">
                <h2 className="text-[23px] font-semibold leading-[30px]">
                  TAKE ACTION
                </h2>
                <p
                  className={`${robotoSlab.className} flex-grow text-[13px] md:text-base font-light pr-1`}
                >
                  Join us in our cause or learn more about what you can actively
                  do.
                </p>
                <Link
                  href="/about-us"
                  className="flex flex-row justify-start text-orange-dark"
                >
                  <p className="font-bold ">Learn More</p>
                  <Image
                    src="/arrow-right.svg"
                    alt="arrow-button"
                    height={18}
                    width={18}
                    className="pl-1"
                  />
                </Link>
              </section>
            </section>
          </div>

          {/* Campaigns */}
          <div className="md:w-96" ref={cardRef2}>
            <section className="flex-col shrink-0  justify-start text-start w-96 md:w-full rounded-lg bg-white h-96 border border-gray-200 md:mx-0">
              <div className="relative h-1/2">
                <Image
                  src="/US_capital.png"
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-t-lg"
                />
              </div>
              <section className="space-y-4 mt-6 pl-4 pr-2">
                <h2 className="text-[23px] font-semibold leading-[30px]">
                  CAMPAIGNS
                </h2>
                <p
                  className={`${robotoSlab.className} flex-grow text-[13px] md:text-base font-light pr-1`}
                >
                  To bring our vision to life, we can start by reshaping our
                  communities
                </p>
                <Link
                  href="/about-us"
                  className="flex flex-row justify-start text-orange-dark"
                >
                  <p className="font-bold ">Learn More</p>
                  <Image
                    src="/arrow-right.svg"
                    alt="arrow-button"
                    height={18}
                    width={18}
                    className="pl-1"
                  />
                </Link>
              </section>
            </section>
          </div>

          {/* Reports */}
          <div className="md:w-96" ref={cardRef3}>
            <section className="flex-col shrink-0  justify-start text-start w-96 md:w-full rounded-lg bg-white h-96 border border-gray-200 md:mx-0">
              <div className="relative h-1/2">
                <Image
                  src="/latest-image3.svg"
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-t-lg"
                />
              </div>
              <section className="space-y-4 mt-6 pl-4">
                <h2 className="text-[23px] font-semibold leading-[30px]">
                  REPORTS
                </h2>
                <p
                  className={`${robotoSlab.className} flex-grow text-[13px] md:text-base font-light pr-6`}
                >
                  Our meetings with Public Utilities Commissioners to bring
                  change.
                </p>
                <Link
                  href="/about-us"
                  className="flex flex-row justify-start text-orange-dark"
                >
                  <p className="font-bold ">Learn More</p>
                  <Image
                    src="/arrow-right.svg"
                    alt="arrow-button"
                    height={18}
                    width={18}
                    className="pl-1"
                  />
                </Link>
              </section>
            </section>
          </div>
        </div>
      </section>
      <section className="block md:hidden mt-6">
        <button
          onClick={() => scrollToCard(cardRef1)}
          className={`w-3 h-3 rounded-full border-2 ${
            currentCard === "card1"
              ? "border-orange-dark bg-orange-dark"
              : "border-black"
          } mx-2`}
        ></button>
        <button
          onClick={() => scrollToCard(cardRef2)}
          className={`w-3 h-3 rounded-full border-2 ${
            currentCard === "card2"
              ? "border-orange-dark bg-orange-dark"
              : "border-black"
          } mx-2`}
        ></button>
        <button
          onClick={() => scrollToCard(cardRef3)}
          className={`w-3 h-3 rounded-full border-2 ${
            currentCard === "card3"
              ? "border-orange-dark bg-orange-dark"
              : "border-black"
          } mx-2`}
        ></button>
      </section>
    </section>
  );
};

export default Latest;
