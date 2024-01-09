import React from 'react'
import { Josefin_Sans, Playfair_Display } from 'next/font/google'
import { ToCBodyListProps } from '@/types/global'
const josefinSans = Josefin_Sans({ subsets: ['latin'] })
const playfairDisplay = Playfair_Display({ subsets: ['latin'] })
const TOCBodyList = ({
  header,
  subheader,
  bulletPoints,
  footer
}: ToCBodyListProps) => {
  return (
    <section className="mx-auto w-full px-20">
      <h1>{header}</h1>
    </section>
  )
}

export default TOCBodyList
