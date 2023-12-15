import React from 'react'
import { Josefin_Sans,Playfair_Display } from 'next/font/google'
const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

function OurTeam() {
  return (
    <section className="min-w-screen max-w-screen bg-section-yellow ">
    <section className="flex flex-row justify-center">
      <section className="flex flex-col items-center justify-center">
        <h2 className={`font-bold tracking-wider text-2xl  text-center md:text-3xl mt-8 md:mt-28 text-main-yellow ${josefinSans.className}`}>
        Our Team
        </h2>
        <p className={`text-[20px] text-center font-normal leading-9 mt-14 mb-24 mr-16 ml-16 ${josefinSans.className}`}>Our passionate and enthusiastic team ready to change the energy system.</p>
      </section>
    </section>
   
    </section>
 
  )
}

export default OurTeam