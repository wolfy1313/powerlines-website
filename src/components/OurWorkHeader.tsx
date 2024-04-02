import React from 'react'
import Image from 'next/image'

function OurWorkHeader() {
  return (
    <section className='min-w-full max-w-screen h-32 sm:h-80'>
      <section className=" flex bg-no-repeat bg-[url('/OurWorkHeaderBackground.png')] h-24 sm:h-28 md:h-60 xl:h-80 bg-contain sm:bg-cover md:bg-contain bg-left-bottom">
        <h1 className={`items-center font-bold align-middle p-4 sm:p-6 md:p-7 xl:p-10 pt-10 sm:pt-12 md:pt-28 lg:pt-32 xl:pt-40  text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-main`}>OUR WORK</h1>
      </section>
    </section>
  )
}

export default OurWorkHeader