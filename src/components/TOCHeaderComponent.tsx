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
    <div className={`min-w-screen max-w-screen h-[320px] bg-no-repeat bg-[url('/TOCHeaderBackgroundGradient.svg')] bg-cover flex flex-col items-center justify-center text-center ${cairo.className} text-white`}>
        
        {/* header */}
        <h1 className={` pb-4 font-normal text-2xl md:text-4xl`}>{header}
        </h1>
        {/* sub-header */}
        <h2 className="font-bold text-3xl md:text-7xl">{pageTitle}</h2>  
    </div> 
  )
}

export default TOCHeaderComponent;