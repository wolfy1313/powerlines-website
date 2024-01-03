import React from 'react'
import Image from 'next/image'
import { Josefin_Sans, Playfair_Display } from 'next/font/google'

const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

interface TOCHeaderComponentProps {
  header: string;
  pageTitle: string

}

const TOCHeaderComponent: React.FC<TOCHeaderComponentProps> = ({ header, pageTitle }) => {
  return (
    <section className='min-w-screen max-w-screen'>
      <section className={`bg-no-repeat bg-[url('/TOCHeaderBG.svg')] bg-cover font-bold text-center
${josefinSans.className}`}>
        <h2 className={`p-16 text-2xl md:text-3xl`}>{header}</h2>
        <h1 className="pb-32 text-3xl md:text-5xl text-white">{pageTitle}</h1>
      </section>
    </section>
  )
}

export default TOCHeaderComponent;