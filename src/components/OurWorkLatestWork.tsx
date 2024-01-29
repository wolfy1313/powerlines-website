'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Josefin_Sans, Playfair_Display } from 'next/font/google';
import Link from 'next/link';

const josefinSans = Josefin_Sans({ subsets: ['latin'] });
const playfairDisplay = Playfair_Display({ subsets: ['latin'] });
const UpArrow = () => (
  <Image
    height={35}
    width={30}
    src="./arrowup.svg"
    alt='up arrow'
    className=' items-center justify-center align-middle my-0'
  />
);
const DownArrow = () => (
  <Image
    height={35}
    width={30}
    src="./downArrowButton.svg"
    alt='down arrow'
  />
);

interface SectionProps {
  title: string;
  content: string;
  download: string;
  link: any
}

const Section: React.FC<SectionProps> = ({ title, content, download, link }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
    ;
  };

  return (
    <section className={`${josefinSans.className}  grid grid-cols-1 md:place-content-between mx-6  border-t-4  font-medium overflow-hidden transition-[max-height] duration-500 ease-in-out ${isDropdownVisible ? "md:max-h-96" : "max-h-[5.75rem] md:max-h-24"}`} >
      <div className='flex justify-between items-center'>
        <div className=' py-5 text-lg sm:text-xl md:text-2xl col-span-2 max-w-2xl cursor-pointer' onClick={toggleDropdown}>{title}</div>
        <button className={`grid place-content-end cursor-pointer ${isDropdownVisible ? "pb-1" : "pb-5"} pr-8 col-start-3`} onClick={toggleDropdown}>
          {isDropdownVisible ? <UpArrow /> : <DownArrow />}
        </button>
      </div>
      <div className={`col-span-3 pr-8 pb-8 overflow-hidden transition-[max-height] duration-500 ease-in-out ${isDropdownVisible ? "max-h-72" : "max-h-0"}`}>
        <div className={`${playfairDisplay.className}  text-sm font-normal md:text-lg pr-2 pl-2 md:pr-20 md:pl-20 pt-4 pb-10`}>{content}</div>
        <div className={`${josefinSans.className} font-bold pl-2 md:pl-20`}>{download}</div>
        <div className={`${josefinSans.className} flex underline font-semibold pl-2 md:pl-20 text-main-yellow`}>{link}</div>
      </div>
    </section>
  );
};

function OurWorkLatestWork() {
  return (
    <div className='flex flex-col'>
      <div className='pt-16 pb-10 '>
        <h1 className={`${josefinSans.className} text-darker-yellow text-center text-3xl md:text-5xl font-bold`} >
          OUR LATEST WORK
        </h1>
      </div>

      <Section
        title='Lorem Ipsum dolor sit amet, consectetur adipiscing elit '
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        download='Download'
        link={<Link href={`./about-us`} className='flex'>
          <Image src="/simcarddownload.svg" width={20} height={20} alt="download image" />
          Full White Paper
        </Link>}
      />

      <Section
        title='Lorem Ipsum dolor sit amet, consectetur adipiscing elit '
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        download='Download'
        link={<Link href={`./about-us`} className='flex'>
          <Image src="/simcarddownload.svg" width={20} height={20} alt="download image" />
          Full White Paper
        </Link>}
      />

      <Section
        title='Lorem Ipsum dolor sit amet, consectetur adipiscing elit '
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        download='Download'
        link={<Link href={`./about-us`} className='flex'>
          <Image src="/simcarddownload.svg" width={20} height={20} alt="download image" />
          Full White Paper
        </Link>}
      />

    </div>
  );
}

export default OurWorkLatestWork;