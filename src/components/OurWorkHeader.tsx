import React from 'react'
import Image from 'next/image'

function OurWorkHeader() {
  return (
    <section className='min-w-full max-w-screen h-32 sm:h-80'>
      <section className=" flex bg-no-repeat bg-[url('/OurWorkHeaderBackground.png')] h-24 sm:h-28 md:h-64 xl:h-80 bg-contain bg-left-bottom xl:bg-contain ">
        <h1 className={`items-center font-bold align-middle p-4 sm:p-6 pt-10 sm:pt-12 md:pt-32 xl:pt-40 xl:p-10 text-center text-2xl sm:text-5xl md:text-6xl xl:text-7xl font-main`}>OUR WORK</h1>
      </section>
    </section>
  )
}

export default OurWorkHeader