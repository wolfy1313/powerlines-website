import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Josefin_Sans } from 'next/font/google'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })

function Header() {
  return (
    <section className="flex flex-row justify-around max-w-screen bg-main-gray md:pt-[8px] md:px-[100px] md:pb-[4px] md:justify-between">
      <Image src="./logo.svg" width={100} height={100} alt="logo" />
      <section className="flex flex-col justify-center ">
        <ul
          className={`flex flex-row gap-2.5 font-bold text-sm ${josefinSans.className} my-auto md:py-[12px]`}
        >
          <li className="pt-1">
            <Link href="/OurWork">Our Work</Link>
          </li>
          <li className="pt-1">
            <Link href="/About">About Us</Link>
          </li>
          <li className="flex flex-col justify-center my-auto   bg-main-yellow rounded-full py-1 px-1 md:px-[32px]">
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </section>
    </section>
  )
}

export default Header
