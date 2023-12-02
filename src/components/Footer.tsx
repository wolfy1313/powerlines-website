import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Josefin_Sans, Playfair_Display } from 'next/font/google'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

function Footer() {
  return (
    <section className="flex flex-row justify-center h-72 min-w-screen max-w-screen bg-main-gray py-10">
      {/* Left hand side of Footer */}
      <section
        className={`flex flex-row flex-1 w-full justify-center ${josefinSans.className}`}
      >
        <section className="relative h-full flex flex-col justify-center md:h-[230px] md:w-[240px]">
          <Image src="./logo.svg" fill alt="logo" className="md: mt-3" />
        </section>
        {/* Text Container */}
        <section className="flex flex-col justify-center ml-32">
          {/* Title text */}
          <section className="font-bold mb-3 text-2xl">
            <h2 className="flex flex-row ">
              Bringing <h2 className="text-main-yellow pl-1 ">Power</h2>
            </h2>
            <h2 className="">to the Public</h2>
          </section>

          {/* Subtitle text */}
          <h3 className={`${playfairDisplay.className}`}>
            NGO passionate about reshaping the <br /> energy system
          </h3>
        </section>
      </section>

      {/* Right hand side of Footer */}
      <section
        className={`flex flex-1 flex-row border-l justify-center border-l-black my-auto text-2xl ${josefinSans.className}`}
      >
        {/* Nav List */}
        <ul className="flex flex-col space-y-3 pl-32">
          <li>
            <Link href="/our-work">
              <p>Our Work</p>
            </Link>
          </li>
          <li>
            <Link href="/about-us">
              <p></p>About Us
            </Link>
          </li>
          <li>
            <Link href="/conatct-us">
              <p>Contact Us</p>
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy">
              <p>Privacy Policy</p>
            </Link>
          </li>
        </ul>

        {/* Social Media */}
        <section className="flex flex-col justify-center pl-32">
          <h3>Stay Connected</h3>
          <section className="flex flex-row space-x-10 pt-3">
            <Link href="google.com">
              <Image
                src="./linkedinlogo.svg"
                height={30}
                width={30}
                alt="linkedin"
              />
            </Link>
            <Link href="google.com">
              <Image
                src="./twitterlogo.svg"
                height={30}
                width={30}
                alt="linkedin"
              />
            </Link>
            <Link href="google.com">
              <Image
                src="./facebooklogo.svg"
                height={30}
                width={30}
                alt="linkedin"
              />
            </Link>
          </section>
        </section>
      </section>
    </section>
  )
}

export default Footer
