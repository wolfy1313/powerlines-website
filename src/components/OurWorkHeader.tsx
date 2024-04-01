import React from 'react'
import Image from 'next/image'

function OurWorkHeader() {
  return (
    <section className='min-w-full max-w-screen h-32 sm:h-80'>
      <section className=" flex bg-no-repeat bg-[url('/OurWorkHeaderBackground.png')] h-24 sm:h-64 bg-contain bg-left-bottom xl:bg-bottom xl:bg-cover ">
        <h1 className={`items-center font-bold align-middle p-4 sm:p-6 pt-10 sm:pt-32 text-center text-2xl sm:text-5xl md:text-6xl xl:text-7xl font-main`}>OUR WORK</h1>
      </section>
    </section>
  )
}

export default OurWorkHeader