'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { Cairo } from 'next/font/google'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
const cairo = Cairo({ subsets: ['latin'] })


function Header() {
  const UpArrow = () => (
    <Image
      src="/arrowup.svg"
      alt="up arrow"
      height={20}
      width={20}
      className="mx-3"
      onClick={toggleDropdown}
    />
  );
  const DownArrow = () => (
    <Image
      src="/dropdownarrow.svg"
      alt="dropdownarrow"
      height={20}
      width={20}
      className="mx-3"
      onClick={toggleDropdown}
    />
  );
  //get route
  const pathname = usePathname()
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
      className={`z-10 flex flex-row justify-between p-4 max-w-screen md:pt-[8px] md:px-[100px] md:pb-[4px] md:justify-between bg-[#F7F7F7] bg-cover bg-top bg-no-repeat border-b-2 border-[#F7F7F7]`}
    >
      <Link href="/">
        <Image src="/LogoBlackText.png" width={141} height={60} alt="logo" />
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
                  <Image
                    src="/LogoBlackText.png"
                    width={100}
                    height={100}
                    alt="logo"
                  />
                </Link>
                <button className="pr-12" onClick={toggleBurger}>
                  <Image
                    src="/MobileXButton.svg"
                    alt="menu-icon"
                    width={30}
                    height={30}
                  />
                </button>
              </div>
              <ul
                className={`flex flex-col gap-20 items-center font-bold text-2xl ${cairo.className} my-auto mx-0 md:py-[12px] pb-48 text-black`}
              >
                <li className="pt-1">
                  <button onClick={toggleBurger}>
                    <Link href="/">HOME</Link>
                  </button>
                </li>
                <li
                  className={`pt-1 px-2 relative ${isDropdownVisible ? 'text-black' : 'bg-main-two'
                    } `}
                >
                  <div className="flex flex-row pl-3 ">
                    <button onClick={toggleDropdown}>OUR WORK</button>
                    {isDropdownVisible ? (<UpArrow />) : (<DownArrow />)}
                  </div>
                  {isMobile && isDropdownVisible && (
                    <div className=" m-0 ">
                      <ul className="absolute text-center left-0 mt-1 w-full bg-main-two">
                        <li className="hover:bg-gray-400 font-normal pt-4 leading-relaxed text-base">
                          <button
                            onClick={() => {
                              toggleDropdown()
                              toggleBurger()
                            }}
                          >
                            <Link
                              className={` ${isDropdownVisible ? 'hover:pl-1' : 'pl-0'
                                }`}
                              href="/our-work"
                            >
                              Overview
                            </Link>
                          </button>
                        </li>
                        <li className="hover:bg-gray-400 font-normal pt-1 leading-relaxed text-base">
                          <button
                            onClick={() => {
                              toggleDropdown()
                              toggleBurger()
                            }}
                          >
                            <Link
                              className={` ${isDropdownVisible ? 'hover:pl-1' : 'pl-0'
                                }`}
                              href="/political-strategy"
                            >
                              Political Strategy
                            </Link>
                          </button>
                        </li>
                        <li className="hover:bg-gray-400 font-normal pt-1 leading-relaxed text-base">
                          <button
                            onClick={() => {
                              toggleDropdown()
                              toggleBurger()
                            }}
                          >
                            Model Legislation
                          </button>
                        </li>
                        <li className="hover:bg-gray-400 font-normal pt-1 leading-relaxed text-base px-0 text-nowrap">
                          <button
                            onClick={() => {
                              toggleDropdown()
                              toggleBurger()
                            }}
                          >
                            <section
                              className={`${isDropdownVisible ? 'hover:pl-1 ' : 'pl-0'
                                }`}
                            >
                              <Link
                                className="px-0"
                                href="/community-engagement"
                              >
                                Stakeholder Engagement
                              </Link>
                            </section>
                          </button>
                        </li>
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
            className={` text-black flex flex-row gap-2.5 font-bold text-sm ${cairo.className} my-auto md:py-[12px]`}
          >
            <li
              className={`py-2 px-2 relative ${isDropdownVisible ? 'bg-[#F7F7F7] text-black' : 'bg-none'
                } `}
            >
              <div className={`flex flex-row items-start relative ${isDropdownVisible ? 'h-5 w-full rounded-md bg-gradient-to-r from-[#FFD00F] to-[#F89735]' : 'bg-none'}`}>
                <div className={`flex flex-row ${isDropdownVisible ? ' h-4 w-full bg-[#f7f7f7]' : 'bg-none'}`}>
                  <button onClick={toggleDropdown}>OUR WORK</button>
                  <Image
                    src="/dropdownarrow.svg"
                    alt="dropdownarrow"
                    height={10}
                    width={10}
                    className="mx-1"
                  />
                </div>
              </div>
              {isDropdownVisible && (
                <ul className="absolute left-0 mt-1 w-40 pl-4 py-4 bg-[#F7F7F7] border-l-2 shadow-md space-y-3">
                  <li className="hover:bg-gray-100 hover:border-main-one hover:border-2 hover:border-r-0">
                    <Link
                      className={`${isDropdownVisible ? 'hover:pl-1' : 'pl-0'}`}
                      href="/our-work"
                    >
                      Overview
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100 hover:border-main-one hover:border-2 hover:border-r-0">
                    <Link
                      className={`${isDropdownVisible ? 'hover:pl-1' : 'pl-0'}`}
                      href="/political-strategy"
                    >
                      Political Strategy
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100 hover:border-main-one hover:border-2 hover:border-r-0">
                    <Link
                      className={`${isDropdownVisible ? 'hover:pl-1' : 'pl-0'}`}
                      href="/model-legislation"
                    >
                      Model Legislation
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100 hover:border-main-one hover:border-2 hover:border-r-0">
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
            <li className="py-2 pr-2">
              <Link href="/about-us">ABOUT US</Link>
            </li>
            <li className="flex flex-col justify-center my-auto rounded-lg bg-gradient-to-l from-[#F89735] to-[#FFD00F] py-1 px-1 md:px-6"
            /* Frame 2 */

            /* Auto layout */
            >
              <Link className='' href="/contact-us">CONTACT US</Link>
            </li>
          </ul>
        </section>
      )
      }
    </section >
  )
}

export default Header
