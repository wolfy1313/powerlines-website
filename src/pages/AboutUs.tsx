import React from 'react'
import { Cairo, Roboto_Slab } from 'next/font/google'
import Image from 'next/image'
import OurPrinciples from '@/components/OurPrinciples'
const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })
import OurTeam from '@/components/OurTeam'

function AboutUs() {
  return (
    
<section className="min-w-full max-w-full mx-auto">
    {/* main Heading */}
        <section className="flex items-center h-[118px] md:h-72 overflow-hidden mt-20">
          <h2 className={`flex relative left-8 md:left-28 mr-64 font-bold text-2xl md:text-6xl mb-6  md:mb-0 ${cairo.className}`}>
            ABOUT POWERLINES
          </h2>
          <div className="absolute right-[0px] w-[480px]  md:right-[-100px] md:w-[1800px]">
            <Image 
              src="/AboutPowerlinesCircle.svg"
              alt="circle"
              width={1669}
              height={235}
              className='w-full h-full'
            />
          </div>
        </section>

    {/* Hero Image wrap*/}
    <section className="flex flex-wrap  py-5 md:py-12 z-50 ">
        
        {/* Our Mission Container */}
        <section className="flex flex-col md:flex-row md:px-5 mx-auto md:px-12 md:pr-24 gap-4 md:gap-12 justify-center items-center align-middle mb-[70px] md:mb-32  max-w-[1439px] max-h-[638px]"> 
        
          {/* Our Mission Text Container  */}
          <div className="w-full md:w-1/2 md:pl-10 h-auto order-3 md:order-2 ">
              <div className='px-6 md:px-8'>
                  {/* Our Mission Header */}
                  <h2 className={`text-xl md:text-3xl font-bold md:mb-4 text-green-dark  md:block ${cairo.className}`}>OUR MISSION</h2>
                  
                  {/* Our Mission sub-heading text */}
                  <p className={`text-xl md:text-4xl font-semibold md:leading-8 md:mb-8  ${cairo.className}`}>PowerLines aims to reshape our energy system by accelerating clean energy and equity through utility regulation.</p> 
                  
                  {/* Our mission body text */}
                  <p className={`text-base md:text-xl font-light md:leading-9 ${robotoSlab.className}`}>We seek to create a world in which clean, affordable, and reliable energy systems contribute to safe, healthy, and vibrant communities.</p>
              </div>
          </div>
        
          {/* Our Mission Image Container */}
          <div className="w-full px-6 md:px-0 md:pl-0 md:w-1/2 md:pl-12 order-2 md:order-3 " >
            <div className=" w-full sm:min-w-[342px] h-auto md:max-w-*[632px] md:max-h-*[466px] rounded-lg">
              <Image width={630} height={496} layout="responsive" src="/OurMissionImage.png" alt="Diverse Group smiling" />
            </div>
          </div>
      </section>
   
        
        <section className="overlay">
          <OurPrinciples />

          <OurTeam />
        </section>
        
    </section>
    </section>



  )
}

export default AboutUs