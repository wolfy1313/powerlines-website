import React from 'react'
import { Josefin_Sans, Playfair_Display } from 'next/font/google'
import Image from 'next/image'
const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

function TheoryOfChange() {
  return (
    <section className="min-w-screen max-w- bg-section-yellow">
    <section className="flex flex-row justify-center">
      <section className="flex-col font-bold tracking-wider text-2xl md:text-3xl mt-8 md:mt-28">
        <h2 className={`flex flex-row ${josefinSans.className}`}>
         THEORY OF CHANGE
        </h2>
      </section>
    </section>
    <section className="flex flex-row flex-1 justify-center min-w-screen my-auto">
      <section
        className={`flex flex-col ${playfairDisplay.className} text-sm my-auto ml-5 mt-10 md:text-xl md:tracking-wider md:min-w-screens md:ml-10 min-w-screen`}
      >
        <h2 className=" max-w-screen  md:min-w-screen">
        We aim to reshape the energy system by accelerating clean energy and equity <br/>through utility regulation by targeting state public utilities commissions. <br/>To tackle this challenge, PowerLines pursues a three-part theory of change.
        </h2>

        {/* Cards */}
        <section className="max-w-sm rounded overflow-hidden shadow-lg">
 
</section>
      </section>
    </section>
  </section>
  )
}

export default TheoryOfChange