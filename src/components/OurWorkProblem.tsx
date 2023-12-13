import React from 'react'
import { Josefin_Sans, Playfair_Display } from 'next/font/google'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

function OurWorkProblem() {
  return (
    <div>
      <section className='flex flex-row mb-10'>
        <section>
          <h2 className='text-darker-yellow font-bold text-xl md:text-2xl pb-6 pt-8'>THE PROBLEM</h2>
          <h2 className={`f font-semibold text-xl md:text-2xl pb-4 tracking-normal ${josefinSans.className}`}>Public utilities commissions have traditionally slowed the clean energy transition.</h2>
          <h3 className={`texl-lg md text:xl tracking-normal ${playfairDisplay.className}`}>PUC’s approving utilities’ fossil fuel investments has become an economic, environmental, and health imperative. Utilities have operated with no competition and weak regulation pushing for affordable energy bills, sustainable generation, and reliable service. </h3>
        </section>
      </section>
    </div>
  )
}

export default OurWorkProblem
