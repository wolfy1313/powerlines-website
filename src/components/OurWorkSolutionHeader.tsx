import React from 'react'
import { Cairo, Roboto_Slab } from 'next/font/google'

const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

function OurWorkSolutionHeader() {
  return (
    <div>
      <section className='flex flex-row mb-1 '>
        <section className=''>
          <h2 className='text-darker-yellow tracking-wide leading-8 font-bold text-xl md:text-2xl pb-6 pt-8'>OUR SOLUTION</h2>
        </section>
      </section>
    </div>
  )
}

export default OurWorkSolutionHeader