import React from 'react'
import { Cairo, Roboto_Slab } from 'next/font/google'
import Image from 'next/image'
import OurPrinciples from '@/components/OurPrinciples'
const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })
import OurTeam from '@/components/OurTeam'

function AboutUs() {
  return (
    
<section className="min-w-full max-w-full mx-auto  ">
    {/* main Heading */}
        <section className="flex items-center h-72 overflow-hidden">
          <h2 className={`flex relative left-28 mr-64 font-bold text-xl md:text-6xl ${cairo.className}`}>
            ABOUT POWERLINES
          </h2>
          <div className="w-[500px]">
            <Image 
              src="/AboutPowerlinesCircle.svg"
              alt="circle"
              width={400}
              height={400}
              layout="responsive"
              className=''
            />
          </div>
        </section>

    {/* Hero Image wrap*/}
    <section className="flex flex-wrap  p-5 md:p-12  mb-[90px] md:mb-[150px]  bg-[url('/AboutUsHeroBackground.svg')] z-50 ">
        
        {/* Our Mission Container */}
        <section className="flex justify-center items-center align-middle mb-[50px] md:mb-52 gap-6"> 
        
          {/* Our Mission Text Container  */}
          <div className="w-full md:w-1/2 pl-10 h-auto order-3 md:order-2 ">
              <div>
                  {/* Our Mission Header */}
                  <h2 className={`text-xl md:text-3xl font-bold mb-4 text-about-us-heading hidden md:block ${cairo.className}`}>OUR MISSION</h2>
                  
                  {/* Our Mission sub-heading text */}
                  <p className={`text-xl md:text-4xl font-semibold leading-8 mb-8  ${cairo.className}`}>PowerLines aims to reshape our energy system by accelerating clean energy and equity through utility regulation.</p> 
                  
                  {/* Our mission body text */}
                  <p className={`text-base md:text-xl font-light leading-9 ${robotoSlab.className}`}>We seek to create a world in which clean, affordable, and reliable energy systems contribute to safe, healthy, and vibrant communities.</p>
              </div>
          </div>
        
          {/* Our Mission Image Container */}
          <div className="w-full  pl-0 md:w-1/2 md:pl-12 order-2 md:order-3 " >
            <div className=" w-full sm:min-w-[342px] h-auto md:max-w-*[630px] md:max-h-*[496px]">
              <Image width={630} height={496} layout="responsive" src="/OurMissionImage.svg" alt="Diverse Group smiling" />
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