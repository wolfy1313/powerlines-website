import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Josefin_Sans } from 'next/font/google'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })

function Header() {
  return (
    <section className="flex flex-row justify-between md:pt-[8px] md:px-[100px] md:pb-[4px] bg-main-gray">
      <Image src="./logo.svg" width={100} height={100} alt="logo" />

      <ul
        className={`flex flex-row gap-2.5 font-bold ${josefinSans.className} align-middle md:py-[12px]`}
      >
        <li className="pt-3">
          <Link href="/our-work">Our Work</Link>
        </li>
        <li className="pt-3">
          <Link href="/about-us">About Us</Link>
        </li>
        <li className="md:px-[32px] pt-3 bg-main-yellow rounded-full">
          <Link href="/contact-us">Contact Us</Link>
        </li>
      </ul>
    </section>
  )
}

export default Header
