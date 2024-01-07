
import React, { useState,useEffect } from 'react'

import { Josefin_Sans, Playfair_Display } from "next/font/google";
import Image from 'next/image'
import TrunctableText from './TrunctableText';

const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })



const ToCResourcesAndReports = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Once the component mounts, update the state to indicate it's on the client
        setIsClient(true);
    }, []);

  return (
    <div className={`min-w-screen max-w-screen md:m-20 md:pt-0`}>
        <h1 className={`mb-4 text-darker-yellow text-3xl font-semibold leading-normal ${josefinSans.className}`}>Resource and Reports</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-2 ">
            <section className="relative h-330 w-520">
            <Image width='505' height='330' src='/meeting.png' alt="meeting"/>
                </section>
                <section className="relative h-330 w-520">
                <h1 className={`mb-4 text-darker-yellow text-base font-normal leading-8 ${josefinSans.className}`}>WHITE PAPER</h1>
                <h1 className={`mb-4 text-black text-2xl font-semibold leading-8 ${josefinSans.className}`}>Lorem Ipsum</h1>
                {isClient &&(
                <TrunctableText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" maxLength={150}/>
                )}
                </section>
        </section>
        </div>
  )
}

export default ToCResourcesAndReports