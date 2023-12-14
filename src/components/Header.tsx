'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Josefin_Sans } from 'next/font/google'
import { useState } from 'react'
const josefinSans = Josefin_Sans({ subsets: ['latin'] })

function Header() {
  // State to handle dropdown visibility
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false)

  // Function to toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible)

  return (
    <section className="z-10 flex flex-row justify-around max-w-screen bg-main-gray md:pt-[8px] md:px-[100px] md:pb-[4px] md:justify-between">
      <Link href="/">
        <Image src="/powerlineslogo.svg" width={100} height={100} alt="logo" />
      </Link>
      <section className="flex flex-col justify-center ">
        <ul
          className={`flex flex-row gap-2.5 font-bold text-sm ${josefinSans.className} my-auto md:py-[12px]`}
        >
          <li className="pt-1 relative ">
            <div className="flex flex-row">
              <button onClick={toggleDropdown}>Our Work</button>
              <Image
                src="/dropdownarrow.svg"
                alt="dropdownarrow"
                height={10}
                width={10}
              />
            </div>
            {isDropdownVisible && (
              <ul className="absolute left-0 mt-1 w-40 bg-light-yellow border-l-2 border-l-main-yellow shadow-md space-y-3">
                <li className="hover:bg-gray-100">
                  <Link href="/political-strategy">Political Strategy</Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link href="/model-legislation">Model Legislation</Link>
                </li>
                <li className="hover:bg-gray-100">
                  <Link href="/stakeholder-engagement">
                    Stakeholder Engagement
                  </Link>
                </li>
              </ul>
            )}
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
