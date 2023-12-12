import React from 'react'
import { Josefin_Sans, Playfair_Display } from 'next/font/google'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

function OurWork() {
  return (
    <section className=''>
      <section className=''>
        <h1 className={`font-bold text-2xl md:text-3xl mt-8 md:mt-16 justify-center items-center text-center ${josefinSans.className}`}>OUR WORK</h1>
      </section>
      <section>
        <section>
          <h2>THE PROBLEM</h2>
          <h2>Public utilities commissions have traditionally slowed the clean energy transition.</h2>
          <h3>PUC’s approving utilities’ fossil fuel investments has become an economic, environmental, and health imperative. Utilities have operated with no competition and weak regulation pushing for affordable energy bills, sustainable generation, and reliable service. </h3>
        </section>
        <section>

        </section>
      </section>
    </section>
  )
}

export default OurWork