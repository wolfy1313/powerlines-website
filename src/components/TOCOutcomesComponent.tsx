import React from "react";
import { Josefin_Sans, Playfair_Display } from "next/font/google";
import Image from 'next/image'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

interface TOCOutcomesComponentProps {
  header: string;
  content: string;
  imageLabel: string;
}

const TOCOutcomesComponent: React.FC<TOCOutcomesComponentProps> = ({ header, content, imageLabel }) => {
  return (
    <div className={`min-w-screen max-w-screen ${josefinSans.className}`}>
      <h1>{header}</h1>
      <h3>{content}</h3>
      <section>
        <Image src="./OutcomeMailImage.svg" alt="mailbox icon" />
      </section>
    </div>
  )
}

export default TOCOutcomesComponent