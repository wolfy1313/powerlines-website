import React from 'react'
import { Josefin_Sans, Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

function TheoryOfChange() {
  return (
    <section className="min-w-screen max-w-screen bg-section-yellow ">
      <section className="flex flex-row justify-center">
        <section className="flex flex-col items-center justify-center">
          <h2
            className={`font-bold tracking-wider text-2xl  text-center md:text-3xl mt-8 md:mt-28 ${josefinSans.className}`}
          >
            THEORY OF CHANGE
          </h2>
        </section>
      </section>
      <section className="flex flex-row flex-1 justify-center min-w-screen my-auto mb-10">
        <section
          className={`flex flex-col ${playfairDisplay.className} flex flex-col items-center  max-w-screen md:min-w-screen md:tracking-wider md:text-xl mt-10`}
        >
          <h2 className=" max-w-screen text-center md:min-w-screen mb-10 mx-10 leading-10">
            We aim to reshape the energy system by accelerating clean energy and
            equity through utility regulation by targeting{' '}
            <br className="block md:hidden" /> state{' '}
            <br className="hidden md:block" /> public utilities commissions. To
            <br className="block md:hidden" />
            tackle this challenge, PowerLines pursues{' '}
            <br className="block md:hidden" /> a three-part theory of change.
          </h2>

          {/* Cards */}
          <section
            className={`flex flex-col justify-center w-11/12 ${playfairDisplay.className} md:flex-row md:w-full`}
          >
            <section className="bg-white shadow-custom rounded-3xl overflow-hidden mx-2 my-5 flex flex-col h-428 w-400 text-center md:flex-grow md:flex-shrink md:basis-1/3 md: w-600">
              <section className="mt-5 h-113 w-140">
                <Image
                  src="/political-strategy.svg"
                  alt="political strategy icon"
                  width={161}
                  height={170}
                  className="color-yellow md:mt-3 mx-auto"
                />
              </section>
              <section className="px-6 py-4 flex-grow">
                <section
                  className={`font-bold text-xl mb-2 ${josefinSans.className}`}
                >
                  Political Strategy
                </section>
                <ul className="list-inside text-black-400 space-y-4 text-base p-5 pl-20 md:pl-24">
                  <li className="flex flex-row whitespace-nowrap">
                    <Image src="/checkmark.svg" height={20} width={20} alt="" />
                    Appoints Champions
                  </li>
                  <li className="flex flex-row text-left">
                    <Image src="/checkmark.svg" height={20} width={20} alt="" />{' '}
                    Elects Champions
                  </li>
                </ul>
              </section>

              <section className="text-center mb-5">
                <Link
                  href="#"
                  className={`inline-flex items-center my-0 mx-0 px-3 py-2 text-sm font-bold text-center text-[#E2B103] bg-main-white border-2 border-main-yellow rounded-2xl ${josefinSans.className}`}
                >
                  Learn More
                  <Image
                    src="/arrow-right2.svg"
                    alt=""
                    height={5}
                    width={28}
                    className="ml-2"
                  />
                </Link>
              </section>
            </section>

            <section className="bg-white shadow-custom rounded-3xl overflow-hidden mx-2 my-5 flex flex-col h-428 w-400 text-center md:flex-grow md:flex-shrink md:basis-1/3">
              <section className="mt-5 h-113 w-140">
                <Image
                  src="/model-legislation.svg"
                  alt="model legislation icon"
                  width={161}
                  height={170}
                  className="color-yellow md:mt-3 mx-auto"
                />
              </section>
              <section className="px-6 py-4 flex-grow">
                <section
                  className={`font-bold text-xl text-center mb-2 ${josefinSans.className}`}
                >
                  Model Legislation
                </section>
                <ul className="list-inside text-black-400 text-base p-5 space-y-4 pl-20 md:pl-24">
                  <li className="flex flex-row">
                    <Image src="/checkmark.svg" height={20} width={20} alt="" />{' '}
                    Passes Legislation
                  </li>
                  <li className="flex flex-row">
                    <Image src="/checkmark.svg" height={20} width={20} alt="" />{' '}
                    Lorem Ipsum
                  </li>
                </ul>
              </section>
              <section className="text-center mb-5">
                <Link
                  href="#"
                  className={`inline-flex items-center my-0 mx-0 px-3 py-2 text-sm font-bold text-center text-[#E2B103] bg-main-white border-2 border-main-yellow rounded-2xl ${josefinSans.className}`}
                >
                  Learn More
                  <Image
                    src="/arrow-right2.svg"
                    alt=""
                    height={5}
                    width={28}
                    className="ml-2"
                  />
                </Link>
              </section>
            </section>

            <section className="bg-white shadow-custom rounded-3xl overflow-hidden mx-2 my-5 flex flex-col h-428 w-400 text-center md:flex-grow md:flex-shrink md:basis-1/3">
              <section className="mt-5 h-113 w-140">
                <Image
                  src="/stakeholder-engagement.svg"
                  alt="stakeholder engagement icon"
                  width={161}
                  height={170}
                  className="color-yellow md:mt-3 mx-auto"
                />
              </section>
              <section className="px-1 py-4 flex-grow">
                <section
                  className={`font-bold text-xl text-center mb-2 whitespace-nowrap ${josefinSans.className}`}
                >
                  Stakeholder Engagement
                </section>
                <ul className="list-inside text-black-400 text-base p-5 space-y-4 pl-20">
                  <li className="flex flex-row">
                    <Image src="/checkmark.svg" height={20} width={20} alt="" />{' '}
                    Youth Groups
                  </li>
                  <li className="flex flex-row">
                    <Image src="/checkmark.svg" height={20} width={20} alt="" />{' '}
                    The Public
                  </li>
                  <li className="flex flex-row">
                    <Image src="/checkmark.svg" height={20} width={20} alt="" />{' '}
                    Environmental Justice
                  </li>
                </ul>
              </section>
              <section className="text-center mb-5">
                <Link
                  href="#"
                  className={`inline-flex items-center my-0 mx-0 px-3 py-2 text-sm font-bold text-center text-[#E2B103] bg-main-white border-2 border-main-yellow rounded-2xl ${josefinSans.className}`}
                >
                  Learn More
                  <Image
                    src="/arrow-right2.svg"
                    alt=""
                    height={5}
                    width={28}
                    className="ml-2"
                  />
                </Link>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  )
}

export default TheoryOfChange
