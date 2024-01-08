
import React, { useState,useEffect } from 'react'

import { Josefin_Sans, Playfair_Display } from "next/font/google";
import Image from 'next/image'
import TrunctableText from './TrunctableText';
import Link from 'next/link';

const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })



const ToCResourcesAndReports = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Once the component mounts, update the state to indicate it's on the client
        setIsClient(true);
    }, []);

  return (
    <div className={`min-w-full max-w-full mx-auto `}>
       <section className=" p-10 md:p-20 md:pt-0 ">
        <h1 className={`mb-4 text-darker-yellow text-3xl font-semibold leading-normal ${josefinSans.className}`}>Resource and Reports</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 ">
            <section className="relative h-330 w-520">
            <Image width='505' height='330' src='/meeting.png' alt="meeting"/>
                </section>
                <section className="relative h-330 w-520">
                <h1 className={`mb-4 text-darker-yellow text-base font-normal leading-8 ${josefinSans.className}`}>WHITE PAPER</h1>
                <h1 className={`mb-4 text-black text-2xl font-semibold leading-8 ${josefinSans.className}`}>Lorem Ipsum</h1>
                {isClient &&(
                <TrunctableText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" maxLength={150}/>
                )}
                <h6 className={`mb-6 text-black text-base font-normal leading-8 ${josefinSans.className}`}>Download</h6>
                <div className="flex">
    <section className="relative h-100 w-100 flex flex-row items-center mr-4">
        <Image width={20} height={20} src="/sim_card_download.svg" alt="Image Description" />
    </section>
    <section className="flex flex-row items-center relative">
        <a href="/sim_card_download.svg" download="filename.pdf" className="text-darker-yellow font-semibold leading-normal">
            Full White Paper
        </a>
    </section>
</div>


                </section>
        </section>
       </section>
        </div>
  )
}

export default ToCResourcesAndReports