import React from 'react'
import Image from 'next/image'

function OurWorkHeader() {
  return (
    <section className='min-w-full max-w-screen'>
      <section className=" flex bg-no-repeat bg-[url('/OurWorkHeaderBackground.png')] h-64 bg-contain bg-left-bottom xl:bg-left-bottom lg:bg-cover">
        <h1 className={`items-center font-bold align-middle p-16 text-left sm:text-3xl md:text-5xl font-main`}>OUR WORK</h1>
      </section>
    </section>
  )
}

export default OurWorkHeader