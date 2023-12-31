import React from 'react'
import { Josefin_Sans,Playfair_Display } from 'next/font/google'
import Image from 'next/image'
const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

function OurPrinciples() {
  return (
    <section className="min-w-screen max-w-screen">
          <section className="flex flex-wrap"> 
          <section className="flex flex-wrap justify-center md:justify-start gap-4 mt-[-50px] md:mt-[-70px]">
  {/* Container for both images */}
  <section className="flex w-full md:w-auto">
    {/* Image Column 1 */}
    <section className="w-1/2 max-h-*[424px] overflow-hidden">
      <Image width={686} height={424} layout="responsive" objectFit="cover" src="/powerlines.png" alt="solar panels and windmill" />
    </section>

    {/* Image Column 2 */}
    <section className="w-1/2 max-h-*[424px] overflow-hidden ml-4">
      <Image width={425} height={424} layout="responsive" objectFit="cover" src="/plantPowerlineTower.png" alt="plant powerline tower" />
    </section>
  </section>
</section>

  <p className={` text-2xl md:text-3xl font-semibold leading-9 my-9 md:my-24 ml-4 md:ml-16 ${josefinSans.className}`}> We&apos;re an organization that champion people and<br/> communities to address climate & environmental issues.</p>
  </section>
  <section className="w-full 3/3 mt-10">
  <p className={`text-3xl font-semibold leading-9 my-2 ml-4 md:ml-16 text-darker-yellow mb-10 ${josefinSans.className}`}>OUR PRINCIPLES</p>
  
  <section className="flex flex-wrap justify-center">
  <section className="w-full max-h-*[680px] md:w-[611px] md:h-[379px] p-6 bg-white border border-main-yellow rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">

{/* Card Content */}
<section className="flex flex-col md:flex-row items-center gap-4 md:gap-4" >
    {/* Column 1 - Yellow Circle with Image */}
    <section className="flex-shrink-0">
    <section className="w-90px h-90px bg-ellipse-yellow rounded-full overflow-hidden">
        <section className="mt-[12.1px] mr-[13.8px] mb-[15.6px] ml-[13.8px]">
        <Image src="/fistRaised.png" alt="raised" width={62.308} height={62.308} />
        </section>
      </section>
</section>
 {/* Column 2 - Heading Text */}
 <section className="md:ml-4">
<p className={`text-3xl font-semibold leading-9 ${josefinSans.className}`}> Center and empower people and communities in our work</p>
</section>
</section>
<p className={`text-sm font-normal leading-6 mt-[2rem] ${playfairDisplay.className}`}> We appreciate different experiences and viewpoints, approaching things with empathy by listening and engaging in diverse contexts. We support communities by offering resources, amplifying voices, and encouraging inclusive language, especially in technical discussions. We honor the expertise of community leaders and strive for respectful collaboration.</p>
</section>


{/* card2 */}
<section className="w-full max-h-*[680px] md:w-[611px] md:h-[379px] p-6 bg-white border border-main-yellow rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">

{/* Card Content */}
<section className="flex flex-col md:flex-row items-center gap-4 md:gap-4" >
     {/* Column 1 - Yellow Circle with Image */}
    <section className="w-90px h-90px bg-ellipse-yellow rounded-full">
    <section className="flex-shrink-0">
    
    <section className="mt-[19.1px] mr-[20.3px] mb-[20.3px] ml-[19.1px]">
<Image aria-hidden="true" width={50.625} height={50.625}layout="responsive" src="/collaborationMeeting.png" alt="people sitting down for a meeting" />
</section>
</section>
</section>
 {/* Column 2 - Heading Text */}
 <section className="md:ml-4">
<p className={`text-3xl font-semibold leading-9 ${josefinSans.className}`}> Meet people where they are at</p>
</section>
</section>
<p className={`text-sm font-normal leading-6 mt-[2rem] ${playfairDisplay.className}`}> We appreciate different experiences and viewpoints, approaching things with empathy by listening and engaging in diverse contexts. We support communities by offering resources, amplifying voices, and encouraging inclusive language, especially in technical discussions. We honor the expertise of community leaders and strive for respectful collaboration.</p>
</section>
{/* card3 */}
<section className="w-full max-h-*[680px] md:w-[611px] md:h-[379px] p-6 bg-white border border-main-yellow rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">

{/* Card Content */}
<section className="flex flex-col md:flex-row items-center gap-4 md:gap-4">
    
    <section className="w-90px h-90px bg-ellipse-yellow rounded-full">
         {/* Column 1 - Yellow Circle with Image */}
         <section className="flex-shrink-0">
    <section className="mt-[18px] mr-[19.1px] mb-[19.1px] ml-[18px]">
<Image aria-hidden="true" width={52.875} height={52.875}layout="responsive" src="/peopleGear.png" alt="gear in center with profile of people on each corner with an arrow going from one person to the next" />
</section>
</section>
</section>
 {/* Column 2 - Heading Text */}
 <section className="md:ml-4">
<p className={`text-3xl font-semibold leading-9  ${josefinSans.className}`}> Embrace a culture of radical hope</p>
</section>
</section>
<p className={`text-sm font-normal leading-6 mt-[2rem] ${playfairDisplay.className}`}>We&apos;re committed to urgent solutions for the climate crisis. Positive change is not just a goal but a reachable reality. Rejecting the status quo, we actively seek alternatives with a nuanced approach, exploring innovative top-down and bottom-uup methods.</p>
</section>
{/* card4 */}
<section className="w-full max-h-*[700px] md:w-[611px] md:h-[379px] p-6 bg-white border border-main-yellow rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">

{/* Card Content */}
<section  className="flex flex-col md:flex-row items-center gap-4 md:gap-4" >
        {/* Column 1 - Yellow Circle with Image */}
<section className="flex-shrink-0">
    <section className="w-90px h-90px bg-ellipse-yellow rounded-full">
        <section className="mr-[15.8px] mb-[15.8px] ml=[15.8px] mt-[15.8px] ">
<Image aria-hidden="true" width={58.5} height={58.5}layout="responsive" src="/globePlant.png" alt="plant wrapped around the world" />
</section>
</section>
</section>
  {/* Column 2 - Heading Text */}
  <section className="md:ml-4">
<p className={`text-3xl font-semibold leading-9 ${josefinSans.className}`}> Advance climate action and environmental justice</p>
</section>
</section>
<p className={`text-sm font-normal leading-6 mt-[2rem] ${playfairDisplay.className}`}>We focus on solutions that address how climate issues affect communities differently, especially those of color, low-income, and frontline communities. We prioritize equity alongside urgent climate action, seeing them as complementary, not conficting. Recognizing the moral and practical importance of equity and justice, we believe a fair transtion is essential for full decarbonization.</p>
</section>
  </section>
 
 </section>
 <section>
 <section>

 </section>
 </section>
    </section>
  )
}

export default OurPrinciples