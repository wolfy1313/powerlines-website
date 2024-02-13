import React from 'react'
import { Cairo, Roboto_Slab } from 'next/font/google'

const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

function OurWorkProblem() {
  return (
    <div>
      <section className='flex flex-row mb-10 '>
        <section className=''>
          <h2 className='text-header-blue font-bold text-xl md:text-[40px] md:pb-6 pt-8 hidden md:block'>THE PROBLEM</h2>
          <h2 className={`font-semibold text-xl md:text-4xl pb-4 tracking-wide leading-8 ${cairo.className}`}>Public utilities commissions have traditionally slowed the clean energy transition.</h2>
          <h3 className={`texl-lg tracking-wider leading-8 ${robotoSlab.className}`}>PUC’s approving utilities’ fossil fuel investments has become an economic, environmental, and health imperative. Utilities have operated with no competition and weak regulation pushing for affordable energy bills, sustainable generation, and reliable service. </h3>
        </section>
      </section>
    </div>
  )
}

export default OurWorkProblem
