
import React, { useState, useEffect } from 'react'

import { Josefin_Sans, Playfair_Display } from "next/font/google";
import Image from 'next/image'
import TrunctableText from './TrunctableText';
import Link from 'next/link';

import { TOCResourcesAndReportsProps, ResourcesAndReportsCardsProps } from '@/types/global';
const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })



const ToCResourcesAndReports: React.FC<TOCResourcesAndReportsProps> = ({ ResourcesAndReportsCards }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Once the component mounts, update the state to indicate it's on the client
        setIsClient(true);
    }, []);

    return (
        <div className="min-w-full max-w-full mx-auto">
            <section className="p-10 md:p-20 md:pt-0">
                <h1 className={`mb-4 text-darker-yellow text-2xl md:text-3xl font-semibold leading-normal ${josefinSans.className}`}>Resource and Reports</h1>
                <section className="grid grid-cols-1  gap-4 md:gap-10">
                    {ResourcesAndReportsCards.map((ResourcesAndReportsCard: ResourcesAndReportsCardsProps) => (
                        <div key={ResourcesAndReportsCard.caption} className="flex flex-col md:flex-row gap-20">
                            <section className="h-330 w-520">
                                <Image width='505' height='330' src={ResourcesAndReportsCard.image} alt={ResourcesAndReportsCard.alt} />
                            </section>
                            <section className="h-330 w-520">
                                <h2 className={`mb-4 text-darker-yellow text-sm md:text-base font-normal leading-8 ${josefinSans.className}`}>{ResourcesAndReportsCard.caption}</h2>
                                <h1 className={`mb-4 text-black  text-xl md:text-2xl font-semibold leading-8 ${josefinSans.className}`}>{ResourcesAndReportsCard.subHeading}</h1>
                                {isClient && (
                                    <TrunctableText text={ResourcesAndReportsCard.body} maxLength={150} />
                                )}
                                <h6 className={`mb-6 text-black text-sm md:text-base tracking-tighter font-normal leading-8 ${josefinSans.className}`}>{ResourcesAndReportsCard.cta}</h6>
                                <div className="flex">
                                    <section className="relative h-100 w-100 flex flex-row items-center mr-4">
                                        <Image width={20} height={20} src={ResourcesAndReportsCard.downloadIcon} alt="Download Icon" />
                                    </section>
                                    <section className="flex flex-row items-center relative">
                                        <a href={ResourcesAndReportsCard.downloadFile} download={ResourcesAndReportsCard.downloadFileTitle} className="text-darker-yellow font-semibold leading-normal">
                                            {ResourcesAndReportsCard.downloadFileTitle}
                                        </a>
                                    </section>
                                </div>
                            </section>
                        </div>
                    ))}
                </section>
            </section>
        </div>
    )
}

export default ToCResourcesAndReports