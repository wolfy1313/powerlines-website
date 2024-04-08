import React from 'react'
import { Cairo, Roboto_Slab } from 'next/font/google'
const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })
import Image from 'next/image'
import OurTeamCard from './OurTeamCard'

function OurTeam() {
  return (
    <section className="max-w-[1243px] m-auto">
   
        {/* Start of Our Team Section */}
        <div className="flex flex-col 
        items-center justify-center gap-2 md:gap-3.5">
          
          {/* heading */}
          <h2 className={`font-bold text-green-dark tracking-wider text-2xl text-center md:text-5xl mt-8 md:mt-32 md:leading-10 ${cairo.className}`}>
          OUR TEAM
          </h2>
          
          {/* heading sub-text */}
          <p className={`md:text-[20px] text-center font-light leading-6 md:leading-9 mb-6 md:mb-12 mx-8 md:mx-16 ${robotoSlab.className}`}>Our passionate and enthusiastic team ready to change the energy system.</p>
        </div>
    

      {/* Team reusable component. If you need to edit the format, go OurTeamCard component */}
      <section className="grid grid-cols-2  md:grid-cols-4 gap-6 justify-items-center mx-auto max-w-6xl lg:max-w-none pb-8 md:pb-16 px-6 md:px-0">

        <OurTeamCard
          image="/maleTransparent.png"
          name="name"
          role="role"
          genre="male"
        />

        <OurTeamCard
          image="/femaleTransparent.png"
          name="name"
          role="role"
          genre="female"
        />

        <OurTeamCard
          image="/femaleTransparent.png"
          name="name"
          role="role"
          genre="female"
        />

        <OurTeamCard
          image="/maleTransparent.png"
          name="name"
          role="role"
          genre="male"
        />

        <OurTeamCard
          image="/maleTransparent.png"
          name="name"
          role="role"
          genre="male"
        />

        <OurTeamCard
          image="/maleTransparent.png"
          name="name"
          role="role"
          genre="male"
        />

        <OurTeamCard
          image="/femaleTransparent.png"
          name="name"
          role="role"
          genre="female"
        />

        <OurTeamCard
          image="/maleTransparent.png"
          name="name"
          role="role"
          genre="male"
        />
      </section>

      {/* adisors section */}
      <div className="">
          
          {/* heading */}
          <h2 className={`font-bold text-green-dark tracking-wider text-2xl  text-center md:text-5xl mb-6 md:mb-8 leading-10 ${cairo.className}`}>
          ADVISORS
          </h2>
        </div>
      {/* advisors reusable component. If you need to edit the format, go OurTeamCard component */}
      <section className="grid grid-cols-2  md:grid-cols-4 gap-6 justify-items-center mx-auto max-w-6xl lg:max-w-none pb-20 md:pb-10">

        <OurTeamCard
          image="/femaleTransparent.png"
          name="name"
          role="role"
          genre="female"
        />

        <OurTeamCard
          image="/maleTransparent.png"
          name="name"
          role="role"
          genre="male"
        />

        <OurTeamCard
          image="/maleTransparent.png"
          name="name"
          role="role"
          genre="male"
        />

        <OurTeamCard
          image="/femaleTransparent.png"
          name="name"
          role="role"
          genre="female"
        />

      </section>
    </section>
 
  )
}

export default OurTeam