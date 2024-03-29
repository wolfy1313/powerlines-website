import React from 'react'
import Image from 'next/image'

function OurWorkHeader() {
  return (
    <section className=' min-w-full max-w-screen'>
      <section className=" flex bg-no-repeat bg-[url('/OurWorkHeaderBackground.png')] h-64  bg-contain bg-right md:bg-inherit">
        <h1 className={`flex items-center font-bold align-middle p-16 text-2xl sm:text-4xl md:text-5xl font-main`}>OUR WORK</h1>
      </section>
    </section>
  )
}

export default OurWorkHeader