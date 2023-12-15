import React from 'react'
import { Josefin_Sans,Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import OurPrinciples from '@/components/OurPrinciples'
const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

function AboutUs() {
  return (
    <section className="min-w-screen max-w-screen">
    <section className="flex flex-row justify-center bg-main-yellow w-1440 h-320">
      <section className='font-bold text-2xl md:text-3xl  w-517px height-36px lineheight-48px my-40'>
        <h2 className={`${josefinSans.className}` }>ABOUT POWERLINES</h2>
      </section>
    </section>
    <section className="flex flex-wrap bg-white p-5 md:p-20  mb-[150px]"> 
{/* 
Text Column  */}
 <section className="w-full md:w-1/2 flex items-center justify-center h-auto ">
 <section>
  <h2 className={`text-xl md:text-3xl font-bold mb-4 text-main-yellow ${josefinSans.className}`}>Our Mission</h2>
<p className={`text-4xl font-semibold leading-9 mb-24 ${josefinSans.className}`}>PowerLines aims to reshape our energy system by accelerating clean energy and equity through utility regulation.</p> <p className={`text-2xl font-normal`}>We seek to create a world in which clean, affordable, and reliable energy systems contribute to safe, healthy, and vibrant communities.</p>

   </section>
  </section>
   {/* Image Column  */}
   <section className="w-full pt-12 pl-0 md:w-1/2 md:pl-12">
    <section className=" max-w-*[630px] max-h-*[496px]">
    <Image width={630} height={496}layout="responsive" src="/flowerBuilding.png" alt="building with flowers" />
    </section>
  </section>
 </section>
 <section>
    <OurPrinciples/>
 </section>
  

  
  

</section>
  )
}

export default AboutUs