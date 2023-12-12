import React from 'react'
import { Josefin_Sans } from 'next/font/google'
import Image from 'next/image'
const josefinSans = Josefin_Sans({ subsets: ['latin'] })


function AboutUs() {
  return (
<section className="min-w-full max-w-full bg-main-yellow">
    <section className="bg-main-yellow w-1440 h-320">
        <h2 className={`font-bold tracking-wider text-5xl text-center md:text-3xl mt-8 md:mt-28 mb-20 ${josefinSans.className}`}>ABOUT POWERLINES</h2>
    </section>
    <section className="flex flex-wrap bg-white p-20 gap-51">
{/* 
Text Column  */}
  <section className="w-1/2 flex items-center justify-center w-full h-auto">
    <section>
    <h2 className={`text-3xl font-bold mb-4 text-main-yellow ${josefinSans.className}`}>Our Mission</h2>
<p className={`text-4xl font-semibold leading-9 mb-24 ${josefinSans.className}`}>PowerLines aims to reshape our energy system by accelerating clean energy and equity through utility regulation.</p>
<p className={`text-2xl font-normal`}>We seek to create a world in which clean, affordable, and reliable energy systems contribute to safe, healthy, and vibrant communities.</p>

    </section>
  </section>
   {/* Image Column  */}
   <section className="w-1/2">
    <Image width={630} height={496}layout="responsive" src="/flowerBuilding.png" alt="building with flowers" />
  </section>
</section>
</section>

  )
}

export default AboutUs