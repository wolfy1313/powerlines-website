import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Josefin_Sans, Playfair_Display } from 'next/font/google'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

function Footer() {
  return (
    <section className="flex flex-col justify-center h-auto min-w-screen max-w-screen items-center bg-main-gray py-10 lg:h-72 lg:flex-row">
      {/* Left hand side of Footer */}
      <section
        className={`flex flex-col flex-1 items-center min-w-screen justify-center pb-3 align-middle md:flex-row md:pb-0 ${josefinSans.className}`}
      >
        <section className="relative flex flex-col justify-center h-[100px] w-[100px] mr-6 md:h-[230px] md:w-[240px]">
          <Image
            src="/powerlineslogo.svg"
            fill
            alt="logo"
            className="md: mt-3"
          />
        </section>
        {/* Text Container */}
        <section className="flex flex-col justify-center md:ml-32">
          {/* Title text */}
          <section className="font-bold mb-3 text-2xl">
            <h2 className="flex flex-row ">
              Bringing <span className="text-main-yellow pl-1 ">Power</span>
            </h2>
            <h2 className="">to the Public</h2>
          </section>

          {/* Subtitle text */}
          <h3 className={`${playfairDisplay.className}`}>
            NGO passionate about reshaping the <br /> energy system
          </h3>
        </section>
      </section>

      {/* Right hand/Bottom side of Footer */}
      <section
        className={`flex flex-1 flex-col items-center  justify-center  my-auto text-2xl ${josefinSans.className} border-t pt-4 border-t-black md:flex-row lg:border-t-0 lg:border-l lg:border-l-black lg:pt-0`}
      >
        {/* Nav List */}
        <ul className="flex flex-col space-y-3 pt-2 pl-2 md:pr-16 lg:pr-0 lg:pt-0 lg:pl-32">
          <li>
            <Link href="/ourWork">
              <p>Our Work</p>
            </Link>
          </li>
          <li>
            <Link href="/about-us">
              <p></p>About Us
            </Link>
          </li>
          <li>
            <Link href="/contact-us">
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
        <section className="flex flex-col justify-center pt-2 md:pt-0 md:pl-32 lg:pl-32">
          <h3 className="hidden md:block">Stay Connected</h3>

          {/* Link Container */}
          <section className="flex flex-row space-x-10 pt-3">
            <Link href="google.com">
              <Image
                src="/linkedinlogo.svg"
                height={30}
                width={30}
                alt="linkedin"
              />
            </Link>
            <Link href="google.com">
              <Image
                src="/twitterlogo.svg"
                height={30}
                width={30}
                alt="linkedin"
              />
            </Link>
            <Link href="google.com">
              <Image
                src="/facebooklogo.svg"
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
