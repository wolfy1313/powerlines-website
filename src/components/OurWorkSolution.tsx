import React from 'react'
import { Josefin_Sans, Playfair_Display } from 'next/font/google'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

function OurWorkSolution() {
  return (
    <div>
      <section className='flex flex-row mb-10'>
        <section>
          <h2 className='text-darker-yellow tracking-wide leading-8 font-bold text-xl md:text-2xl pb-6 pt-8 hidden md:block'>OUR SOLUTION</h2>
          <h2 className={`font-semibold text-xl md:text-2xl pb-4 tracking-wide leading-8 ${josefinSans.className}`}>We aim to employ impactful strategies to reshape public utility commissions, enabling them to facilitate, rather than hinder, the clean energy transition.</h2>
          <h3 className={`texl-lg md text:xl tracking-wide leading-8  ${playfairDisplay.className}`}>Through our Theory of Change, we’re transforming PUCs to become enablers, rather than barriers, to a clean energy transition.</h3>
        </section>
      </section>
    </div>
  )
}

export default OurWorkSolution