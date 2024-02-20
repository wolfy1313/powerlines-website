import React from 'react'
import Image from 'next/image'

function OurWorkHeader() {
  return (
    <section className='min-w-screen max-w-screen'>
      <section className=" flex bg-no-repeat bg-[url('/OurWorkHeaderBackground.png')] h-64 bg-center">
        <h1 className={`flex items-center font-bold align-middle p-16 text-2xl md:text-5xl font-main`}>OUR WORK</h1>
      </section>
    </section>
  )
}

export default OurWorkHeader