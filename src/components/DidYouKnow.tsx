import Image from 'next/image'
import React from 'react'
import { Cairo, Roboto_Slab } from 'next/font/google'

const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })
const DidYouKnow = () => {
  // Define the yellow border color
  const borderColor = 'border-[#FFF4CA]'
  

  return (
    <section
      className={`flex flex-col items-center justify-around min-w-full min-h-[712px] max-w-screen  md:pb-5 md:justify-center  ${cairo.className} bg-[#F5F5F5D9] bg-blend-overlay bg-[url('/US_capital.png')] bg-cover bg-no-repeat bg-center`}
      
      
    >
      {/* Yellow faded line at the back */}
      <div className={`absolute top-0 w-full h-1/3 `} />

      {/* Text Container */}
      <section className="z-10 text-center p-10 md:mb-2">
        <h1 className={`pb-2 text-2xl font-bold md:text-5xl md:pb-5 text-[#264D70] ${cairo.className}`}>
        WHY DO PUCS MATTER?
        </h1>
        <h2 className={`text-lg md:text-3xl font-semibold ${cairo.className}`}>
          Public utilities commissions (PUCs), who regulate utilities in every
          state, are a <br /> critical yet often overlooked piece of the clean
          energy transition.
        </h2>
        <h3
          className={`font-bold pt-4 text-xl md:text-3xl md:pt-10 ${cairo.className} md:text-3xl`}
        >
          They have the power to determine:
        </h3>
      </section>

      {/* Card Section */}
      <section
        className={`z-10 flex flex-col justify-around items-center w-full px-10 space-y-10 pb-20 md:px-20 md:justify-center md:space-x-32 ${cairo.className} md:flex-row md:space-y-0 text-2xl`}
      >
        <section className="flex flex-col items-center">
          <Image
            src="/energybill.svg"
            alt="energy bill icon"
            height={83}
            width={70}
          />
          <p className={`text-center mt-2`}>Our energy bills</p>
        </section>
        <section className="flex flex-col items-center">
          <Image src="/energyinvestment.svg" alt="clean energy investment icon" height={84} width={77} />
          <p className="text-center mt-2">
            Clean energy investment
          </p>
        </section>
        <section className="flex flex-col items-center">
          <Image
            src="/projectlocation.svg"
            alt="project location icon"
            height={79}
            width={56}
          />
          <p className="text-center mt-2">New project locations </p>
        </section>
      </section>
    </section>
  )
}

export default DidYouKnow
