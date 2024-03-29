import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Cairo, Roboto_Slab } from 'next/font/google'

const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

function Footer() {
  return (
    <section className="flex flex-col justify-center h-auto min-w-screen max-w-screen items-center bg-main-two pb-5 md:pb-10 md:py-10 lg:h-72 md:flex-row">
      {/* Left hand side of Footer */}
      <section
        className={`flex flex-col flex-1 items-center min-w-screen justify-center pb-3 align-middle md:flex-row md:pb-0 md:pl-20 ${cairo.className}`}
      >
        <section className="relative flex flex-col justify-center h-[65px] w-[180px] md:mr-6 md:h-32 md:w-72">
          <Image
            src="/LogoBlackText.png"
            height={100}
            width={240}
            alt="logo"
            className="md:mt-3 md:pr-4"
          />
        </section>
        <section
          className={`flex flex-1 flex-col items-center  justify-center  my-auto text-2xl ${cairo.className} border-t pt-4 border-t-black md:flex-row md:justify-start md:border-t-0 md:border-l-4 lg:border-l-yellow-300 lg:pt-0`}
        >
          {/* Nav List */}
          <ul className="flex flex-col space-y-6 pt-2 pl-2 text-center md:text-left md:pr-4 lg:pr-0 lg:pt-0 lg:pl-32">
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
        </section>
      </section>

      {/* Right hand/Bottom side of Footer */}
      <section
        className={`flex flex-1 flex-col items-center  justify-center  my-auto text-2xl ${cairo.className} border-t pt-4 border-t-black md:flex-row md:justify-end md:pr-20 lg:border-t-0 lg:pt-0`}
      >
        {/* Social Media */}
        <section className="flex flex-col justify-center pt-2 md:pt-0 md:pl-32 lg:pl-32">
          <h3 className="hidden md:block">Stay Connected</h3>

          {/* Link Container */}
          <section className="flex flex-row space-x-10 pt-3">
            <Link href="google.com">
              <Image
                src="/INiconBlack.png"
                height={30}
                width={30}
                alt="linkedin"
              />
            </Link>
            <Link href="google.com">
              <Image
                src="/XiconBlack.png"
                height={30}
                width={30}
                alt="linkedin"
              />
            </Link>
            <Link href="google.com">
              <Image
                src="/FBiconBlack.png"
                height={30}
                width={30}
                alt="linkedin"
              />
            </Link>
          </section>
          {/* Copyright */}
          <section className="flex flex-row justify-center mt-10 my-auto md:hidden">
            <Image
              src="/copyright.svg"
              height={12}
              width={12}
              alt=""
              className="pb-1"
            />
            <p className="pl-1 text-sm">2023 Powerlines</p>
          </section>
        </section>
      </section>
    </section>
  )
}

export default Footer
