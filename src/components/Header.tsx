'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { Josefin_Sans } from 'next/font/google'
import { useState } from 'react'
const josefinSans = Josefin_Sans({ subsets: ['latin'] })

function Header() {
  // State to handle dropdown visibility
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false)
  // State to handle mobile hamburger menu
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const [isHamburgerVisible, setIsHamburgerVisible] = useState<boolean>(false)

  // Function to toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible)

  const toggleBurger = () => setIsHamburgerVisible(!isHamburgerVisible)

  //Check screen size
  const checkMobileScreen = () => {
    setIsMobile(window.innerWidth <= 768)
  }

  // Listen for window resize
  useEffect(() => {
    checkMobileScreen()
    window.addEventListener('resize', checkMobileScreen)

    return () => {
      window.removeEventListener('resize', checkMobileScreen)
    }
  }, [])

  return (
    <section
      className={`z-10 flex flex-row justify-between p-4 max-w-screen bg-main-gray md:pt-[8px] md:px-[100px] md:pb-[4px] md:justify-between`}
    >
      <Link href="/">
        <Image src="/powerlineslogo.svg" width={100} height={100} alt="logo" />
      </Link>
      {isMobile ? (
        // Render hamburger menu for mobile screens
        <div className="flex items-center cursor-pointer">
          {!isHamburgerVisible ? (
            <>
              <button onClick={toggleBurger}>
                <Image
                  src="/hamburger_menu.svg"
                  alt="menu-icon"
                  width={30}
                  height={30}
                />
              </button>
            </>
          ) : (
            <section className="flex flex-col h-screen w-screen ">
              <div className="flex align-top justify-between cursor-pointer">
                <Link href="/">
                  <Image src="/powerlineslogo.svg" width={100} height={100} alt="logo" />
                </Link>
                <button className='pr-12' onClick={toggleBurger}>
                  <Image
                    src="/MobileXButton.svg"
                    alt="menu-icon"
                    width={30}
                    height={30}
                  />
                </button>
              </div>
              <ul
                className={`flex flex-col gap-20 items-center font-bold text-2xl ${josefinSans.className} my-auto md:py-[12px] pb-48`}
              >
                <li className="pt-1">
                  <button onClick={toggleBurger}>
                    <Link href="/">HOME</Link>
                  </button>
                </li>
                <li className={`pt-1 px-2 relative ${isDropdownVisible ? "bg-light-yellow" : "bg-main-gray"} `}>

                  <div className="flex flex-row">
                    <button onClick={toggleDropdown}>OUR WORK</button>
                    <Image
                      src="/dropdownarrow.svg"
                      alt="dropdownarrow"
                      height={20}
                      width={20}
                      className='mx-3'
                      onClick={toggleDropdown}
                    />
                  </div>
                  {isMobile && isDropdownVisible && (
                    <div className=' '>
                      <ul className="absolute left-0 mt-1 w-full bg-main-gray">
                        <button onClick={() => { toggleDropdown(); toggleBurger() }}>
                          <li className="hover:bg-gray-400 font-normal pt-1 leading-relaxed text-lg">
                            <Link className={`${isDropdownVisible ? "hover:pl-1" : "pl-0"}`} href="/political-strategy">Political Strategy</Link>
                          </li>
                        </button>
                        <button onClick={() => { toggleDropdown(); toggleBurger() }}>
                          <li className="hover:bg-gray-400 font-normal pt-1 leading-relaxed text-lg">
                            Model Legislation
                          </li>
                        </button>
                        <button onClick={() => { toggleDropdown(); toggleBurger() }}>
                          <li className="hover:bg-gray-400 font-normal pt-1 leading-relaxed text-lg">
                            <section className={`${isDropdownVisible ? "hover:pl-1" : "pl-0"}`}>
                              <Link className="" href="/community-engagement">
                                Stakeholder Engagement</Link>
                            </section>
                          </li>
                        </button>
                      </ul>
                      <li className="pt-1">
                        <button onClick={toggleBurger}>
                          <Link href="/about-us">ABOUT US</Link>
                        </button>
                      </li>
                      <li className="flex flex-col justify-center my-auto py-1 px-1 md:px-[32px]">
                        <button onClick={toggleBurger}>
                          <Link href="/contact-us">CONTACT US</Link>
                        </button>
                      </li>
                    </div>

                  )}
                </li>
                <li className="pt-1">
                  <button onClick={toggleBurger}>
                    <Link href="/about-us">ABOUT US</Link>
                  </button>
                </li>
                <li className="flex flex-col justify-center my-auto py-1 px-1 md:px-[32px]">
                  <button onClick={toggleBurger}>
                    <Link href="/contact-us">CONTACT US</Link>
                  </button>
                </li>
              </ul>
            </section>
          )}
        </div>
      ) : (
        // Render regular navigation for larger screens
        <section className="flex flex-col justify-center ">
          <ul
            className={`flex flex-row gap-2.5 font-bold text-sm ${josefinSans.className} my-auto md:py-[12px]`}
          >
            <li
              className={`pt-1 px-2 relative ${isDropdownVisible ? 'bg-light-yellow' : 'bg-main-gray'
                } `}
            >
              <div className="flex flex-row">
                <button onClick={toggleDropdown}>OUR WORK</button>
                <Image
                  src="/dropdownarrow.svg"
                  alt="dropdownarrow"
                  height={10}
                  width={10}
                  className="mx-1"
                />
              </div>
              {isDropdownVisible && (
                <ul className="absolute left-0 mt-1 w-40 pl-4 py-4 bg-light-yellow border-l-2 border-l-main-yellow shadow-md space-y-3">
                  <li className="hover:bg-gray-100 hover:border-main-yellow hover:border-2 hover:border-r-0">
                    <Link
                      className={`${isDropdownVisible ? 'hover:pl-1' : 'pl-0'}`}
                      href="/ourWork"
                    >
                      Overview
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100 hover:border-main-yellow hover:border-2 hover:border-r-0">
                    <Link
                      className={`${isDropdownVisible ? 'hover:pl-1' : 'pl-0'}`}
                      href="/political-strategy"
                    >
                      Political Strategy
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100 hover:border-main-yellow hover:border-2 hover:border-r-0">
                    <Link
                      className={`${isDropdownVisible ? 'hover:pl-1' : 'pl-0'}`}
                      href="/model-legislation"
                    >
                      Model Legislation
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100 hover:border-main-yellow hover:border-2 hover:border-r-0">
                    <section
                      className={`${isDropdownVisible ? 'hover:pl-1' : 'pl-0'}`}
                    >
                      <Link className="" href="/community-engagement">
                        Stakeholder Engagement
                      </Link>
                    </section>
                  </li>
                </ul>
              )}
            </li>
            <li className="pt-1">
              <Link href="/about-us">ABOUT US</Link>
            </li>
            <li className="flex flex-col justify-center my-auto   bg-main-yellow rounded-full py-1 px-1 md:px-[32px]">
              <Link href="/contact-us">CONTACT US</Link>
            </li>
          </ul>
        </section>
      )}
    </section>
  )
}

export default Header
