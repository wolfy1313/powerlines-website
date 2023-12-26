import React from 'react'
import { Josefin_Sans, Playfair_Display } from 'next/font/google'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

function OurWorkSolutionHeader() {
  return (
    <div>
      <section className='flex flex-row mb-10 '>
        <section className=''>
          <h2 className='text-darker-yellow tracking-wide leading-8 font-bold text-xl md:text-2xl pb-6 pt-8'>OUR SOLUTION</h2>
        </section>
      </section>
    </div>
  )
}

export default OurWorkSolutionHeader