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
    <section className={`${josefinSans.className} cursor-pointer grid grid-cols-3 md:place-content-between mx-10 border-t-2 border-b-2 font-medium`} onClick={toggleDropdown}>
      <div className=' py-5 text-lg sm:text-xl md:text-3xl col-span-2'>{title}</div>
      <button className='grid place-content-end pr-8 pb-5 col-start-3' onClick={toggleDropdown}>
        {isDropdownVisible ? <UpArrow /> : <DownArrow />}
      </button>
      {isDropdownVisible && (
        <div className='col-span-3 pr-8 pb-8'>
          <div className={`${playfairDisplay.className}  text-sm font-normal md:text-lg pr-2 pl-2 md:pr-20 md:pl-20 pb-10`}>{content}</div>
          <div className={`${josefinSans.className} font-bold pl-20`}>{download}</div>
          <div className={`${josefinSans.className} flex underline font-semibold pl-20 text-main-yellow`}>{link}</div>
        </div>
      )}
    </section>
  );
};

function OurWorkLatestWork() {
  return (
    <div className='flex flex-col '>
      <div className='pt-16 pb-10 border-b-2 mx-10'>
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