import React from 'react'
import Image from 'next/image'
import { Cairo, Roboto_Slab } from 'next/font/google'

const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

interface TOCHeaderComponentProps {
  header: string;
  pageTitle: string

}

const TOCHeaderComponent: React.FC<TOCHeaderComponentProps> = ({ header, pageTitle }) => {
  return (
    <section className='min-w-screen max-w-screen'>
      <section className={`bg-no-repeat bg-[url('/TOCHeaderBackgroundGradient.svg')] bg-cover font-bold text-center
${cairo.className}`}>
        <h2 className={`pt-16 pb-4 font-normal text-2xl md:text-4xl text-white`}>{header}</h2>
        <h1 className="pb-32 text-3xl md:text-7xl text-white">{pageTitle}</h1>
      </section>
    </section>
  )
}

export default TOCHeaderComponent;