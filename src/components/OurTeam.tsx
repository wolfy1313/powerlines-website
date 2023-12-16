import React from 'react'
import { Josefin_Sans,Playfair_Display } from 'next/font/google'
const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })
import Image from 'next/image'

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
    <section className="flex flex-wrap justify-center pt-2 md:pt-3 mb-10 mx-16">

    
    <section className="mb-4 flex-1 ml-2">
    <section className="relative w-[295px] h-[326px] overflow-hidden">
      <Image src="/femaleOutline2.png" layout="fill" objectFit="cover" alt="other image" />
      <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 md:p-1 ">
        <p className="text-[20px] text-white">Name: Another Placeholder</p>
        <p className="text-[16px] text-white">Role</p>
      </section>
    </section>
  </section>
     
    <section className="mb-4 flex-1 ml-2">
    <section className="relative w-[295px] h-[326px] overflow-hidden">
      <Image src="/maleOutline.png" layout="fill" objectFit="cover" alt="other image" />
      <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1">
        <p className="text-[20px] text-white">Name: Another Placeholder</p>
        <p className="text-[16px] text-white">Role</p>
      </section>
    </section>
  </section>
  
    <section className="mb-4 flex-1 ml-2">
    <section className="relative w-[295px] h-[326px] overflow-hidden">
      <Image src="/femaleOutline2.png" layout="fill" objectFit="cover" alt="other image" />
      <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1">
        <p className="text-[20px] text-white">Name: Another Placeholder</p>
        <p className="text-[16px] text-white">Role</p>
      </section>
    </section>
  </section>
   
  <section className="mb-4 flex-1 ml-2">
    <section className="relative w-[295px] h-[326px] overflow-hidden">
      <Image src="/femaleOutline2.png" layout="fill" objectFit="cover" alt="other image" />
      <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1">
        <p className="text-[20px] text-white">Name: Another Placeholder</p>
        <p className="text-[16px] text-white">Role</p>
      </section>
    </section>
  </section>
   
  <section className="mb-4 flex-1 ml-2">
    <section className="relative w-[295px] h-[326px] overflow-hidden">
      <Image src="/maleOutline.png" layout="fill" objectFit="cover" alt="other image" />
      <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1">
        <p className="text-[20px] text-white">Name: Another Placeholder</p>
        <p className="text-[16px] text-white">Role</p>
      </section>
    </section>
  </section>
  <section className="mb-4 flex-1 ml-2 mr-2">
    <section className="relative w-[295px] h-[326px] overflow-hidden">
      <Image src="/maleOutline.png" layout="fill" objectFit="cover" alt="other image" />
      <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1">
        <p className="text-[20px] text-white">Name: Another Placeholder</p>
        <p className="text-[16px] text-white">Role</p>
      </section>
    </section>
  </section>
  <section className="mb-4 flex-1 ml-2">
    <section className="relative w-[295px] h-[326px] overflow-hidden">
      <Image src="/maleOutline.png" layout="fill" objectFit="cover" alt="other image" />
      <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1">
        <p className="text-[20px] text-white">Name: Another Placeholder</p>
        <p className="text-[16px] text-white">Role</p>
      </section>
    </section>
  </section>
  <section className="mb-4 flex-1 ml-2">
    <section className="relative w-[295px] h-[326px] overflow-hidden">
      <Image src="/femaleOutline2.png" layout="fill" objectFit="cover" alt="other image" />
      <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1">
        <p className="text-[20px] text-white">Name: Another Placeholder</p>
        <p className="text-[16px] text-white">Role</p>
      </section>
    </section>
  </section>
  <section className="mb-4 flex-1 ml-2">
    <section className="relative w-[295px] h-[326px] overflow-hidden">
      <Image src="/maleOutline.png" layout="fill" objectFit="cover" alt="other image" />
      <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1">
        <p className="text-[20px] text-white">Name: Another Placeholder</p>
        <p className="text-[16px] text-white">Role</p>
      </section>
    </section>
  </section>
  
</section>

    </section>
 
  )
}

export default OurTeam