import React from 'react'
import { Cairo, Roboto_Slab } from 'next/font/google'
import Image from 'next/image'
const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })
import OurPrinciplesCard from './OurPrinciplesCard'

function OurPrinciples() {
  return (
    <section className="min-w-screen max-w-screen ">
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

        <p className={` text-xl md:text-3xl font-semibold leading-9 my-9 md:my-24 ml-4 md:ml-16 ${cairo.className}`}> We&apos;re an organization that champion people and<br /> communities to address climate & environmental issues.</p>
      </section>

      {/* Our Principle Section 
      Set of 4 cards that describe the Principles the company is focusing on
      */}
      <section className="flex flex-col items-center justify-center my-8 mx-auto px-6  max-w-[1242px]">

        {/* Heading, aligned to the left */}
        <h1 className={`w-full text-xl md:text-4xl font-bold leading-9 text-about-us-heading my-4 ${cairo.className}`}>OUR PRINCIPLES</h1>

        {/* Cards Container */}
        <section className=" grid grid-cols-1 md:grid-cols-2 gap-5">

          {/*Card Content*/}
          <OurPrinciplesCard
            image="/our-principles-image1.svg"
            alt="raised fist"
            heading="Center and empower people and communities in our work"
            text="We tailor solutions to each community's unique needs, avoiding a one-size-fits-all approach. Valuing diverse expertise, we embrace varied approaches in both external (culturally sensitive community engagement) and internal efforts (prioritizing staff mental health)."
          />

          <OurPrinciplesCard
            image="/our-principles-image2.svg"
            alt="group of people"
            heading="Meet people where they are"
            text="We appreciate different experiences and viewpoints, approaching things with empathy by listening and engaging in diverse contexts. We support communities by offering resources, amplifying voices, and encouraging inclusive language, especially in technical discussions. We honor the expertise of community leaders and strive for respectful collaboration."
          />

          <OurPrinciplesCard
            image="/our-principles-image3.svg"
            alt="helping hand"
            heading="Embrace a culture of radical hope"
            text="We're committed to urgent solutions for the climate crisis. Positive change is not just a goal but a reachable reality. Rejecting the status quo, we actively seek alternatives with a nuanced approach, exploring innovative top-down and bottom-up methods."
          />

          <OurPrinciplesCard
            image="/our-principles-image4.svg"
            alt="green environmental world"
            heading="Advance climate action and environmental justice"
            text="We focus on solutions that address how climate issues affect communities differently, especially those of color, low-income, and frontline communities. We prioritize equity alongside urgent climate action, seeing them as complementary, not conflicting. Recognizing the moral and practical importance of equity and justice, we believe a fair transition is essential for full decarbonization."
          />

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