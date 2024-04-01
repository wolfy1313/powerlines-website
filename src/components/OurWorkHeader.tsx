import React from 'react'
import Image from 'next/image'

function OurWorkHeader() {
  return (
    <section className='min-w-full max-w-screen h-32'>
      <section className=" flex bg-no-repeat bg-[url('/OurWorkHeaderBackground.png')] h-24 bg-contain bg-left-bottom xl:bg-left-bottom lg:bg-cover">
        <h1 className={`items-center font-bold align-middle p-4 md:pt-32 pt-10 text-center text-2xl sm:text-4xl md:text-5xl font-main`}>OUR WORK</h1>
      </section>
    </section>
  )
}

export default OurWorkHeader