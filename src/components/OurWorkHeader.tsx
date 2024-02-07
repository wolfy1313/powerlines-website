import React from 'react'
import Image from 'next/image'
import { Cairo, Roboto_Slab } from 'next/font/google'

const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

function OurWorkHeader() {
  return (
    <section className='min-w-screen max-w-screen'>
      <section >
        <h1 className={`bg-no-repeat bg-[url('/PageHeroBG.svg')] bg-cover font-bold text-center p-16 text-2xl md:text-3xl ${cairo.className}`}>OUR WORK</h1>
      </section>
    </section>
  )
}

export default OurWorkHeader