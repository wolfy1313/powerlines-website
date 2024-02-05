import React from 'react'
import { Josefin_Sans, Playfair_Display } from "next/font/google";

const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

interface TOCOpportunitiesComponentProps {
  header: string;
  content: string;
}


const TOCOpportunitiesComponent: React.FC<TOCOpportunitiesComponentProps> = ({ header, content }) => {
  return (
    <section className='min-w-screen max-w-screen md:px-20 md:pb-5 md:pt-0'>
      <h1 className={`mb-4 text-main-one text-xl ${josefinSans.className}`}>{header}</h1>
      <h3 className={`mb-8 ${playfairDisplay.className} text-sm`}>{content}</h3>
    </section>
  )
}

export default TOCOpportunitiesComponent