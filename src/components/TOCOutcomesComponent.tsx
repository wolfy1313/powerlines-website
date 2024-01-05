import React from "react";
import { Josefin_Sans, Playfair_Display } from "next/font/google";
import Image from 'next/image'
import YellowCircleWithImage from "./YellowCircleWithImage";

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
            <YellowCircleWithImage image={OutcomeCard.image} text={OutcomeCard.text} alt={OutcomeCard.alt} height={OutcomeCard.height} width={OutcomeCard.width} />
          </div>
        ))}
      </section>
    </div>
  )
}

export default TOCOutcomesComponent