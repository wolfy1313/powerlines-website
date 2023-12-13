import React from 'react'
import { Josefin_Sans, Playfair_Display } from 'next/font/google'
import Image from 'next/image'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

function OurWorkLatestWork() {
  return (
    <section className='flex flex-col'>
      <section className='pt-16 pb-10'>
        <h1 className={`${josefinSans.className} text-darker-yellow text-center text-2xl md:text-3xl font-bold`}>
          OUR LATEST WORK
        </h1>
      </section>
      <section className={`${josefinSans.className} grid grid-cols-2 place-content-between  mx-10 border-t-2 border-b-2 font-semibold`}>
        <div className=' pt-5'>Lorem Ipsum dolor sit amet, consectetur adipiscing elit</div>
        <button className='grid place-content-end pr-8'>
          <Image
            height={60}
            width={60}
            src="/public/arrowdown.svg"
            alt='down arrow'
          />
        </button>
      </section>
      <section className={`${josefinSans.className} grid grid-cols-2 place-content-between  mx-10 border-t-2 border-b-2 font-semibold`}>
        <div className=' pt-5'>Lorem Ipsum dolor sit amet, consectetur adipiscing elit</div>
        <button className='grid place-content-end pr-8'>
          <Image
            height={60}
            width={60}
            src="/public/arrowdown.svg"
            alt='down arrow'
          />
        </button>
      </section>
      <section className={`${josefinSans.className} grid grid-cols-2 place-content-between  mx-10 border-t-2 border-b-2 font-semibold`}>
        <div className=' pt-5'>Lorem Ipsum dolor sit amet, consectetur adipiscing elit</div>
        <button className='grid place-content-end pr-8'>
          <Image
            height={60}
            width={60}
            src="/public/arrowdown.svg"
            alt='down arrow'
          />
        </button>
      </section>
    </section>
  )
}

export default OurWorkLatestWork