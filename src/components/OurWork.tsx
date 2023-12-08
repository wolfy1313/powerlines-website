import React from 'react'
import { Josefin_Sans, Playfair_Display } from 'next/font/google'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

function OurWork() {
  return (
    <section className='min-w-screen max-w-screen'>
      <section className='flex flex-row justify-center'>
        <h1 className={`${josefinSans.className}`}>OUR WORK</h1>

      </section>

    </section>
  )
}

export default OurWork