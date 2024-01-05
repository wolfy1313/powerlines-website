import React from "react";
import { Josefin_Sans, Playfair_Display } from "next/font/google";
import Image from 'next/image'

import { TOCOutcomesComponentProps, OutcomeCardProps } from "@/types/global";


const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })


const TOCOutcomesComponent: React.FC<TOCOutcomesComponentProps> = ({ header, content, OutcomesCards }) => {
  return (
    <div className={`min-w-screen max-w-screen md:p-20 md:pt-0`}>
      <h1 className={`mb-4 text-main-yellow text-xl ${josefinSans.className}`}>{header}</h1>
      <h3 className={`mb-8 ${playfairDisplay.className} text-sm`}>{content}</h3>
      <section className="flex flex-row justify-around mx-20">
        {OutcomesCards.map((OutcomeCard: OutcomeCardProps) => (
          <div key={OutcomeCard.text} className=" flex flex-col items-center">
            <div className=" bg-main-yellow rounded-full p-4 pb-5 relative  h-20 w-20" >
              <Image fill src={OutcomeCard.image} alt="mailbox icon" className="p-5" />
            </div>
            <h2 className={`${josefinSans.className} mt-2 font-semibold`}>{OutcomeCard.text}</h2>
          </div>
        ))}
      </section>
    </div>
  )
}

export default TOCOutcomesComponent