import Image from 'next/image'
import React from 'react'
import { Cairo, Roboto_Slab } from 'next/font/google'

const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })
const DidYouKnow = () => {
  // Define the yellow border color
  const borderColor = 'border-[#FFF4CA]'
  const customGradientStyle = {
    background:
      'linear-gradient(45deg, transparent 25%, #FFF4CA 50%, transparent 75%)'
  }

  return (
    <section
      className={`flex flex-col items-center justify-around min-w-full min-h-[526px] max-w-screen border-[16px] md:pb-5 md:justify-center ${borderColor} bg-white ${cairo.className}`}
      style={customGradientStyle}
    >
      {/* Yellow faded line at the back */}
      <div className={`absolute top-0 w-full h-1/3 `} />

      {/* Text Container */}
      <section className="z-10 text-center p-10 md:mb-16">
        <h1 className="pb-2 text-2xl font-bold md:text-3xl md:pb-5">
        WHY DO PUCS MATTER?
        </h1>
        <h2 className="text-xl font-bold leading-loose md:text-2xl">
          Public utilities commissions (PUCs), who regulate utilities in every
          state, are a <br /> critical yet often overlooked piece of the clean
          energy transition.
        </h2>
        <h3
          className={`pt-4 text-xl md:pt-10 ${robotoSlab.className} md:text-xl`}
        >
          They have the power to determine:
        </h3>
      </section>

      {/* Card Section */}
      <section
        className={`z-10 flex flex-col justify-around w-full px-10 space-y-10 pb-20 md:px-20 md:justify-center md:space-x-32 ${robotoSlab.className} md:flex-row md:space-y-0`}
      >
        <section className="flex flex-col items-center">
          <Image
            src="/energybill.svg"
            alt="energy bill"
            height={60}
            width={60}
          />
          <p className="text-center mt-2">Our energy bills</p>
        </section>
        <section className="flex flex-col items-center">
          <Image src="/flower.svg" alt="flower" height={60} width={60} />
          <p className="text-center mt-2">
            How much our utilities invest
            <br /> in clean energy
          </p>
        </section>
        <section className="flex flex-col items-center">
          <Image
            src="/projectfolder.svg"
            alt="project folder"
            height={60}
            width={60}
          />
          <p className="text-center mt-2">Where new projects are built</p>
        </section>
      </section>
    </section>
  )
}

export default DidYouKnow
