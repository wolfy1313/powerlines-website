import React from 'react'
import { Josefin_Sans,Playfair_Display } from 'next/font/google'
const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })
import Image from 'next/image'

function OurTeam() {
  return (
    <section className="min-w-full max-w-full  bg-white border-20 border-border-yellow">
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
   

    
    <section className="grid grid-cols-2  md:grid-cols-3 gap-2 justify-items-center mx-auto pt-2 md:pt-3 mb-10 max-w-6xl lg:max-w-none ml-4 mr-4 xl:ml-15 xl:mr-15">
      {/* name1 */}
      <section className=" flex-1 mb-4 w-full sm:min-w-[165px]  md:max-w-[295px] xl:max-w-sm   h-auto sm:min-h-[197px] md:h-[352px] overflow-hidden bg-[#B08B1A26]">
    <section className="relative h-full bg-no-repeat bg-contain bg-center bg-[url('/maleTransparent.png')]">
    <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2">
        <p className={`${josefinSans.className} text-base md:text-[20px]  text-white mx-2 font-bold leading-normal` }>Name</p>
        <p className={`${playfairDisplay.className} text-small  text-white mx-2 font-normal leading-normal` }>Role</p>
    </section>
    </section>
    </section>
    {/* name2 */}
      
    <section className=" flex-1 mb-4 w-full sm:min-w-[165px]  md:max-w-[295px] xl:max-w-sm  min-h-[197px] sm:h-auto md:h-[352px] overflow-hidden bg-yellow-100 bg-opacity-50 sm:mx-2">
    <section className="relative h-full bg-no-repeat bg-contain bg-center bg-[url('/femaleTransparent.png')]">
    <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2">
        <p className={`${josefinSans.className} text-base md:text-[20px]  text-white mx-2 font-bold leading-normal` }>Name</p>
        <p className={`${playfairDisplay.className} text-small  text-white mx-2 font-normal leading-normal` }>Role</p>
    </section>
    </section>
    </section>
      {/* name1 */}
      <section className=" flex-1 mb-4 w-full sm:min-w-[165px]  md:max-w-[295px] xl:max-w-sm   h-auto sm:min-h-[197px] md:h-[352px] overflow-hidden bg-[#B08B1A26]">
    <section className="relative h-full bg-no-repeat bg-contain bg-center bg-[url('/maleTransparent.png')]">
    <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2">
        <p className={`${josefinSans.className} text-base md:text-[20px]  text-white mx-2 font-bold leading-normal` }>Name</p>
        <p className={`${playfairDisplay.className} text-small  text-white mx-2 font-normal leading-normal` }>Role</p>
    </section>
    </section>
    </section>
   {/* name2 */}
      
   <section className=" flex-1 mb-4 w-full sm:min-w-[165px]  md:max-w-[295px] xl:max-w-sm  min-h-[197px] sm:h-auto md:h-[352px] overflow-hidden bg-yellow-100 bg-opacity-50 sm:mx-2">
    <section className="relative h-full bg-no-repeat bg-contain bg-center bg-[url('/femaleTransparent.png')]">
    <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2">
        <p className={`${josefinSans.className} text-base md:text-[20px]  text-white mx-2 font-bold leading-normal` }>Name</p>
        <p className={`${playfairDisplay.className} text-small  text-white mx-2 font-normal leading-normal` }>Role</p>
    </section>
    </section>
    </section>
  {/* name1 */}
  <section className=" flex-1 mb-4 w-full sm:min-w-[165px]  md:max-w-[295px] xl:max-w-sm   h-auto sm:min-h-[197px] md:h-[352px] overflow-hidden bg-[#B08B1A26]">
    <section className="relative h-full bg-no-repeat bg-contain bg-center bg-[url('/maleTransparent.png')]">
    <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2">
        <p className={`${josefinSans.className} text-base md:text-[20px]  text-white mx-2 font-bold leading-normal` }>Name</p>
        <p className={`${playfairDisplay.className} text-small  text-white mx-2 font-normal leading-normal` }>Role</p>
    </section>
    </section>
    </section>
    {/* name2 */}
      
   <section className=" flex-1 mb-4 w-full sm:min-w-[165px]  md:max-w-[295px] xl:max-w-sm  min-h-[197px] sm:h-auto md:h-[352px] overflow-hidden bg-yellow-100 bg-opacity-50 sm:mx-2">
    <section className="relative h-full bg-no-repeat bg-contain bg-center bg-[url('/femaleTransparent.png')]">
    <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2">
        <p className={`${josefinSans.className} text-base md:text-[20px]  text-white mx-2 font-bold leading-normal` }>Name</p>
        <p className={`${playfairDisplay.className} text-small  text-white mx-2 font-normal leading-normal` }>Role</p>
    </section>
    </section>
    </section>
     {/* name1 */}
  <section className=" flex-1 mb-4 w-full sm:min-w-[165px]  md:max-w-[295px] xl:max-w-sm   h-auto sm:min-h-[197px] md:h-[352px] overflow-hidden bg-[#B08B1A26]">
    <section className="relative h-full bg-no-repeat bg-contain bg-center bg-[url('/maleTransparent.png')]">
    <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2">
        <p className={`${josefinSans.className} text-base md:text-[20px]  text-white mx-2 font-bold leading-normal` }>Name</p>
        <p className={`${playfairDisplay.className} text-small  text-white mx-2 font-normal leading-normal` }>Role</p>
    </section>
    </section>
    </section>
     {/* name2 */}
  
   <section className=" flex-1 mb-4 w-full sm:min-w-[165px]  md:max-w-[295px] xl:max-w-sm  min-h-[197px] sm:h-auto md:h-[352px] overflow-hidden bg-yellow-100 bg-opacity-50 sm:mx-2">
    <section className="relative h-full bg-no-repeat bg-contain bg-center bg-[url('/femaleTransparent.png')]">
    <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2">
        <p className={`${josefinSans.className} text-base md:text-[20px]  text-white mx-2 font-bold leading-normal` }>Name</p>
        <p className={`${playfairDisplay.className} text-small  text-white mx-2 font-normal leading-normal` }>Role</p>
    </section>
    </section>
    </section>
    {/* name1 */}
  <section className=" flex-1 mb-4 w-full sm:min-w-[165px]  md:max-w-[295px] xl:max-w-sm   h-auto sm:min-h-[197px] md:h-[352px] overflow-hidden bg-[#B08B1A26]">
    <section className="relative h-full bg-no-repeat bg-contain bg-center bg-[url('/maleTransparent.png')]">
    <section className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-1 md:p-2">
        <p className={`${josefinSans.className} text-base md:text-[20px]  text-white mx-2 font-bold leading-normal` }>Name</p>
        <p className={`${playfairDisplay.className} text-small  text-white mx-2 font-normal leading-normal` }>Role</p>
    </section>
    </section>
    </section>
    
</section>

    </section>
 
  )
}

export default OurTeam