import React from 'react'
import { Josefin_Sans,Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import OurPrinciples from '@/components/OurPrinciples'
const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })
import OurTeam from '@/components/OurTeam'

function AboutUs() {
  return (
    <section className="min-w-full max-w-full mx-auto ">
    <section className="flex justify-center items-center bg-[url('/PageHeroBG.svg')] bg-cover bg-no-repeat bg-center w-full min-w-full h-80">
  <h2 className={`font-bold text-2xl md:text-3xl ${josefinSans.className} my-10`}>
    ABOUT POWERLINES
  </h2>
</section>

    <section className="flex flex-wrap bg-white p-5 md:p-20  mb-[90px] md:mb-[150px] mt-10"> 
    {/* header */}
    <section className="w-full order-1 md:order-1  md:hidden">
    <h2 className={`text-xl md:text-3xl font-bold mb-4 text-darker-yellow ${josefinSans.className}`}>OUR MISSION</h2>
  </section>
{/* 
Text Column  */}
 <section className="w-full md:w-1/2 flex items-center justify-center h-auto order-3 md:order-2 ">
 <section className=" mt-0 md:mt-8">
   <h2 className={`text-xl md:text-3xl font-bold mb-4 text-darker-yellow hidden md:block ${josefinSans.className}`}>OUR MISSION</h2> 
<p className={`text-xl md:text-4xl font-semibold leading-8 mb-8  ${josefinSans.className}`}>PowerLines aims to reshape our energy system by accelerating clean energy and equity through utility regulation.</p> <p className={`text-base md:text-xl font-normal leading-9 ${playfairDisplay.className}`}>We seek to create a world in which clean, affordable, and reliable energy systems contribute to safe, healthy, and vibrant communities.</p>

   </section>
  </section>
   {/* Image Column  */}
   <section className="w-full pt-12 pl-0 md:w-1/2 md:pl-12 order-2 md:order-3  mb-[50px] md:mb-[120px]" >
    <section className=" w-full sm:min-w-[342px] h-auto md:max-w-*[630px] md:max-h-*[496px]">
    <Image width={630} height={496}layout="responsive" src="/flowerBuilding.png" alt="building with flowers" />
    </section>
  </section>
 </section>
<section className="bg-no-repeat bg-[url('/PrinciplesBG.svg')] bg-cover">
    <section className="overlay">
    
    <OurPrinciples/>
 
    <OurTeam/>
    </section>
</section>
  </section>
  


  )
}

export default AboutUs