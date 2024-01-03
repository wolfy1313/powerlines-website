import React from 'react'
import { Josefin_Sans,Playfair_Display } from 'next/font/google'
const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })
import Image from 'next/image'

function OurTeam() {
  return (
    <section className="min-w-full max-w-6xl mx-auto bg-white border-20 border-border-yellow">
    <section className="flex flex-row 
    justify-center">
      <section className="flex flex-col 
      items-center justify-center">
        <h2 className={`font-bold tracking-wider text-2xl  text-center md:text-3xl mt-8 md:mt-28 text-darker-yellow ${josefinSans.className}`}>
        OUR TEAM
        </h2>
        <p className={`text-[20px] text-center font-normal leading-9 mt-14 mb-24 mr-16 ml-16 ${playfairDisplay.className}`}>Our passionate and enthusiastic team ready to change the energy system.</p>
      </section>
    </section>
    <section className="grid grid-cols-2 md:grid-cols-3 gap-2 justify-items-center mx-auto pt-2 md:pt-3 mb-10 max-w-6xl">

    
    <section className="mb-4 flex-1 ml-2 mr-2
    h-[197px] md:h-[326px]">
    <section className="relative 
      overflow-hidden max-h-full">
      <Image src="/femaleOutline2.png" width="295" height="326" alt="other image" />
      <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2 ">
        <p className="text-base md:text-[20px] text-white mx-2">Name</p>
        <p className="text-small text-white mx-2">Role</p>
      </section>
    </section>
  </section>
     
    <section className="mb-4 flex-1 ml-2 mr-2 h-[197px] md:h-[326px]">
    <section className=" relative overflow-hidden max-h-full">
      <Image src="/maleOutline.png" width="295"  height="326"  alt="other image"/>
      <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2">
        <p className=" text-base md:text-[20px] text-white mx-2">Name</p>
        <p className="text-small mx-2 text-white">Role</p>
      </section>
    </section>
  </section>
  

  <section className="mb-4 flex-1 ml-2 mr-2
    h-[197px] md:h-[326px]">
    <section className="relative 
      overflow-hidden max-h-full">
      <Image src="/femaleOutline2.png" width="295" height="326" alt="other image" />
      <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2 ">
        <p className="text-base md:text-[20px] text-white mx-2">Name</p>
        <p className="text-small text-white mx-2">Role</p>
      </section>
    </section>
  </section>
   
  <section className="mb-4 flex-1 ml-2 mr-2
    h-[197px] md:h-[326px]">
    <section className="relative 
      overflow-hidden max-h-full">
      <Image src="/femaleOutline2.png" width="295" height="326" alt="other image" />
      <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2 ">
        <p className="text-base md:text-[20px] text-white mx-2">Name</p>
        <p className="text-small text-white mx-2">Role</p>
      </section>
    </section>
  </section>
   
  <section className="mb-4 flex-1 ml-2 mr-2 h-[197px] md:h-[326px]">
    <section className=" relative overflow-hidden max-h-full">
      <Image src="/maleOutline.png" width="295"  height="326"  alt="other image"/>
      <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2">
        <p className=" text-base md:text-[20px] text-white mx-2">Name</p>
        <p className="text-small mx-2 text-white">Role</p>
      </section>
    </section>
  </section>
  

  <section className="mb-4 flex-1 ml-2 mr-2 h-[197px] md:h-[326px]">
    <section className=" relative overflow-hidden max-h-full">
      <Image src="/maleOutline.png" width="295"  height="326"  alt="other image"/>
      <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2">
        <p className=" text-base md:text-[20px] text-white mx-2">Name</p>
        <p className="text-small mx-2 text-white">Role</p>
      </section>
    </section>
  </section>
  

  <section className="mb-4 flex-1 ml-2 mr-2 h-[197px] md:h-[326px]">
    <section className=" relative overflow-hidden max-h-full">
      <Image src="/maleOutline.png" width="295"  height="326"  alt="other image"/>
      <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2">
        <p className=" text-base md:text-[20px] text-white mx-2">Name</p>
        <p className="text-small mx-2 text-white">Role</p>
      </section>
    </section>
  </section>
  


  <section className="mb-4 flex-1 ml-2 mr-2
    h-[197px] md:h-[326px]">
    <section className="relative 
      overflow-hidden max-h-full">
      <Image src="/femaleOutline2.png" width="295" height="326" alt="other image" />
      <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2 ">
        <p className="text-base md:text-[20px] text-white mx-2">Name</p>
        <p className="text-small text-white mx-2">Role</p>
      </section>
    </section>
  </section>

  <section className="mb-4 flex-1 ml-2 mr-2 h-[197px] md:h-[326px]">
    <section className=" relative overflow-hidden max-h-full">
      <Image src="/maleOutline.png" width="295"  height="326"  alt="other image"/>
      <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2">
        <p className=" text-base md:text-[20px] text-white mx-2">Name</p>
        <p className="text-small mx-2 text-white">Role</p>
      </section>
    </section>
  </section>
  
  
</section>

    </section>
 
  )
}

export default OurTeam