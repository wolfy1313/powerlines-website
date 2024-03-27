import React from 'react'
import { Cairo, Roboto_Slab } from "next/font/google";

const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

interface TOCOpportunitiesComponentProps {
  header: string;
  content: string;
}


const TOCOpportunitiesComponent: React.FC<TOCOpportunitiesComponentProps> = ({ header, content }) => {
  return (
    <section className='min-w-screen max-w-screen md:px-20 md:pb-4 md:pt-0'>
      <h1 className={`mb-4 text-[#B6163E] text-4xl ${cairo.className}`}>{header}</h1>
      <h3 className={`mb-4 ${robotoSlab.className} text-xl`}>{content}</h3>
    </section>
  )
}

export default TOCOpportunitiesComponent