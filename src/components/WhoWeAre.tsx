import React from 'react'
import { Cairo, Roboto_Slab } from 'next/font/google'
import Image from 'next/image'

const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

const WhoWeAre = React.forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <section
      ref={ref}
      className="flex flex-row  min-w-screen max-w-screen bg-no-repeat bg-white bg-cover text-center mx-0 my-16 md:text-start  md:mx-20 md:justify-between md:py-[150px] "
    >
      <section className="flex flex-col min-w-screen w-full md:w-1/2  ">
        <section className="flex flex-row justify-center md:justify-start">
          <section
            className={`${cairo.className} text-[20px] md:text-[32px] font-bold text-center md:mt-0 text-semi-dark-orange`}
          >
            <h2>WHO WE ARE</h2>
          </section>
        </section>

        <section className="flex flex-row justify-center md:justify-start ">
          <p
            className={`${cairo.className} md:text-[42px] md:font-semibold md:leading-[48px] text-[29px] font-bold leading-[33px] md:text-[42px] mt-2 md:mt-4  `}
          >
            Our focus is bringing
            <br />
            power to the public.
          </p>
        </section>

        <section className="flex flex-row flex-1 md:w-[85%] w-[100%] justify-center md:justify-start">
          <section
            className={`${robotoSlab.className} md:text-xl font-light font-[15px]  md mt-2 md:text-xl  md:min-w-fit  min-w-screen `}
          >
            <p className={`max-w-xl md:min-w-screen`}>
              PowerLines is a non-governmental{" "}
              <br className="block md:hidden" /> organization that is passionate
              about <br className="block md:hidden" /> restructuring the{" "}
              <br className="hidden md:block" />
              energy system. We seek to <br className="block md:hidden" />{" "}
              create a world in which clean, affordable, and{" "}
              <br className="block md:hidden" /> reliable energy{" "}
              <br className="hidden md:block" />
              systems contribute to safe, <br className="block md:hidden" />{" "}
              healthy, and vibrant communities.
            </p>
          </section>
        </section>

        <section
          className={`flex flex-row  ${cairo.className} mx-auto mt-4 md:mt-7 md:m-0 md:ml-0`}
        >
          <button className="bg-gradient-to-l from-[#FFD00F] to-[#F89735] rounded-md w-[12rem] flex items-center justify-between pl-3  pr-1 py-3">
            <p className="font-bold text-xl">ABOUT US</p>

            <Image
              height="10"
              width="10"
              src="/rightArrow.svg"
              alt="people on a peaceful protest"
              className="w-1/6 object-cover "
            />
          </button>
        </section>
      </section>
      <section className="w-1/2 relative hidden md:flex justify-center items-center">
        <section className="w-[100%] h-[100%] rounded-lg  ">
          {/* Ensure parent container has relative positioning */}
          <Image
            src="/who-we-are-img.svg"
            alt="who we are image"
            fill
            className="absolute inset-0 object-cover rounded-md" // Fill the entire parent container
          />
        </section>
      </section>
    </section>
  );
})

WhoWeAre.displayName = 'WhoWeAre'

export default WhoWeAre
