import React from 'react'
import { Cairo, Roboto_Slab } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import ToCCard from './ToCCard'
const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

function TheoryOfChange() {
  return (
    <section className="min-w-screen max-w-screen bg-section-yellow ">
      <section className="flex flex-row justify-center">
        <section className="flex flex-col items-center justify-center">
          <h2
            className={`font-bold tracking-wide text-2xl md:text-[40px] text-center  mt-8 md:mt-28 ${cairo.className}`}
          >
            THEORY OF CHANGE
          </h2>
        </section>
      </section>
      <section className="flex flex-row flex-1 justify-center min-w-screen my-auto mb-10">
        <section
          className={`flex flex-col ${robotoSlab.className}  text-[15px] md:text-xl   font-light flex flex-col items-center  max-w-screen md:min-w-screen  mt-2 lg:mt-10`}
        >
          <h2 className=" max-w-screen text-center md:min-w-screen mb-10 mx-10 lg:leading-10">
            We aim to reshape the energy system by accelerating clean energy and
            equity through utility regulation by targeting{" "}
            <br className="block md:hidden" /> state{" "}
            <br className="hidden md:block" /> public utilities commissions. To
            <br className="block md:hidden" /> tackle this challenge, PowerLines
            pursues <br className="block md:hidden" /> a three-part theory of
            change.
          </h2>

          {/* Cards */}
          <section
            className={`mx-2 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-12 mb-8 lg:mb-24 ${robotoSlab.className}`}
          >
            <ToCCard
              header="Political strategy"
              imageSrc="/TOCCardGroup1.png"
              href="/political-strategy"
              checklist={["Appoints Champions", "Elects Champions"]}
            />

            <ToCCard
              header="Model Legislation"
              imageSrc="/TOCCardGroup2.png"
              href="/model-legislation"
              checklist={["Passes Legislation", "Lorem Ipsum"]}
            />

            <ToCCard
              header="Stakeholder Engagement"
              imageSrc="/TOCCardGroup3.png"
              href="/community-engagement"
              checklist={[
                "Youth Groups",
                "The Public",
                "Environmental Justice",
              ]}
            />
          </section>
        </section>
      </section>
    </section>
  );
}

export default TheoryOfChange
