import React from "react";
import { Josefin_Sans, Playfair_Display } from "next/font/google";
import Image from 'next/image'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

interface TOCOutcomesComponentProps {
  header: string;
  content: string;
}

const TOCOutcomesComponent: React.FC<TOCOutcomesComponentProps> = ({ header, content, imageLabel }) => {
  return (
    <div className={`min-w-screen max-w-screen`}>
      <h1 className={`mb-4 text-main-yellow text-xl ${josefinSans.className}`}>{header}</h1>
      <h3 className={`mb-8 ${playfairDisplay.className} text-sm`}>{content}</h3>
      <section className="flex flex-row justify-around mx-20">
        <div className=" flex flex-col items-center">
          <div className=" bg-main-yellow rounded-full p-4 pb-5" >
            <Image src="./OutcomeMailImage.svg" alt="mailbox icon" width={32} height={32} className=" bg-main-yellow" />
          </div>
          <h2 className="mt-2 font-semibold">Outcome 1</h2>
        </div>
        <div className=" flex flex-col items-center">
          <div className=" bg-main-yellow rounded-full p-4 pb-5" >
            <Image src="./OutcomeMailImage.svg" alt="mailbox icon" width={32} height={32} className=" bg-main-yellow" />
          </div>
          <h2 className="mt-2 font-semibold">Outcome 2</h2>
        </div>
        <div className=" flex flex-col items-center">
          <div className=" bg-main-yellow rounded-full p-4 pb-5" >
            <Image src="./OutcomeMailImage.svg" alt="mailbox icon" width={32} height={32} className=" bg-main-yellow" />
          </div>
          <h2 className="mt-2 font-semibold">Outcome 3</h2>
        </div>
      </section>
    </div>
  )
}

export default TOCOutcomesComponent