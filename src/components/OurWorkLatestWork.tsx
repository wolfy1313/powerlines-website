'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Cairo, Roboto_Slab } from 'next/font/google';
import Link from 'next/link';

const cairo = Cairo({ subsets: ['latin'] });
const robotoSlab = Roboto_Slab({ subsets: ['latin'] });
const UpArrow = () => (
  <Image
    height={35}
    width={30}
    src="/arrowUpiOS.png"
    alt='up arrow'
    className=' items-center justify-center align-middle my-0'
  />
);
const DownArrow = () => (
  <Image
    height={35}
    width={30}
    src="/arrowBackiOS.png"
    alt='down arrow'
  />
);

interface SectionProps {
  title: string;
  content: string;
  download: string;
  link: any;
  isFirst: boolean;
  isLast: boolean
}

const Section: React.FC<SectionProps> = ({ title, content, download, link, isFirst, isLast }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
    ;
  };

  return (
    <section className={`${cairo.className}  grid grid-cols-1 md:place-content-between mx-4 font-medium overflow-hidden transition-[max-height] duration-500 ease-in-out ${isDropdownVisible ? "md:max-h-96" : "max-h-[6.5rem] md:max-h-24"}`}
      style={{
        border: '1px solid transparent',
        borderImage: 'linear-gradient(to right, #d91d4c, #67aad3)',
        borderImageSlice: (isFirst) ? '1 0 1 0' : (isLast) ? '0 0 1 0' : '0 0 1 0'
      }} >
      <div className='flex justify-between items-center pt-2'>
        <div className=' py-5 text-lg sm:text-xl md:text-2xl col-span-2 max-w-2xl cursor-pointer' onClick={toggleDropdown}>{title}</div>
        <button className={`grid place-content-end cursor-pointer ${isDropdownVisible ? "pb-1" : "pb-5"} pr-8 col-start-3`} onClick={toggleDropdown}>
          {isDropdownVisible ? <UpArrow /> : <DownArrow />}
        </button>
      </div>
      <div className={`col-span-3 pr-8 pb-8 overflow-hidden transition-[max-height] duration-500 ease-in-out ${isDropdownVisible ? "max-h-72" : "max-h-0"}`}>
        <div className={`${robotoSlab.className}  text-sm font-light md:text-xl pr-2 pl-2 md:pr-20 md:pl-20 pt-4 pb-14`}>{content}</div>
        <div className={`${cairo.className} font-bold pl-2 md:pl-20`}>{download}</div>
        <div className={`${cairo.className} flex underline font-semibold pl-2 md:py-4 md:pl-20 text-[#264D70] md:text-xl`}>{link}</div>
      </div>
    </section>
  );
};

function OurWorkLatestWork() {
  const sections = [
    {
      title: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit ',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      download: 'Download',
      link: <Link href={`./about-us`} className='flex gap-3'><Image src="/newSimCardDownload.png" width={20} height={20} alt="download image" className='' />Full White Paper</Link>,
    },
    {
      title: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit ',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      download: 'Download',
      link: <Link href={`./about-us`} className='flex gap-3'><Image src="/newSimCardDownload.png" width={20} height={20} alt="download image" className='' />Full White Paper</Link>,
    },
    {
      title: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit ',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      download: 'Download',
      link: <Link href={`./about-us`} className='flex gap-3'><Image src="/newSimCardDownload.png" width={20} height={20} alt="download image" className='' />Full White Paper</Link>,
    },
    {
      title: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit ',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      download: 'Download',
      link: <Link href={`./about-us`} className='flex gap-3'><Image src="/newSimCardDownload.png" width={20} height={20} alt="download image" className='' />Full White Paper</Link>,
    },
  ]

  return (
    <div className='flex flex-col'>
      <div className='pt-16 pb-10 '>
        <h1 className={`${cairo.className} text-black text-center text-3xl md:text-5xl font-bold`} >
          OUR LATEST WORK
        </h1>
      </div>

      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          content={section.content}
          download={section.download}
          link={section.link}
          isFirst={index === 0}
          isLast={index === sections.length - 1}
        />
      ))}
    </div>
  );
}

export default OurWorkLatestWork;


{/* <Section
title='Lorem Ipsum dolor sit amet, consectetur adipiscing elit '
content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
download='Download'
link={<Link href={`./about-us`} className='flex gap-3'>
  <Image src="/newSimCardDownload.png" width={20} height={20} alt="download image" className='' />
  Full White Paper
</Link>}
/> */}