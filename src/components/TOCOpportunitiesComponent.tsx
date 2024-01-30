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
    <section className='min-w-screen max-w-screen md:px-20 md:pb-5 md:pt-0'>
      <h1 className={`mb-4 text-main-one text-xl ${cairo.className}`}>{header}</h1>
      <h3 className={`mb-8 ${robotoSlab.className} text-sm`}>{content}</h3>
    </section>
  )
}

export default TOCOpportunitiesComponent