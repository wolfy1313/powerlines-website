import React from 'react'
import { Cairo, Roboto_Slab } from 'next/font/google'
import Image from 'next/image'

const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

interface TwoColumnLayoutWithImageProps {
  header: string
  body: string
  body2?: string
  imageSrc: string
  alt: string
  width: number | `${number}`
  height: number | `${number}`
  subHeaderColor?: string
}

const TwoColumnLayoutWithImage: React.FC<TwoColumnLayoutWithImageProps> = ({
  header,
  imageSrc,
  body,
  body2,
  width,
  height,
  alt,
  subHeaderColor
}) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between my-10 mx-6 md:mt-20 md:mx-20">
      {/* Text column  */}
      <section className="md:w-1/2">
        <h2
          className={`md:text-[37px] pr-2 md:font-semi-bold md:leading-[45px] text-[21px] mb-1 md:mb-3 ${
            cairo.className
          } text-start ${
            subHeaderColor ? `text-${subHeaderColor}` : 'text-blue-dark'
          }`}
        >
          {header}
        </h2>
        <p
          className={`md:text-xl font-light md:leading-[40px] leading-8 ${robotoSlab.className} md:px-0 mb-3`}
        >
          {body}
        </p>
        {body2 && (
          <p
            className={`md:text-sm font-light leading-9 mt-8 ${robotoSlab.className}`}
          >
            {body2}
          </p>
        )}
      </section>

      {/* Image Column  */}
      <section>
        <Image
          width={width}
          height={height}
          src={imageSrc}
          alt={alt}
          layout="responsive"
          className="md:px-0 md:pt-2"
        />
      </section>
    </div>
  )
}

export default TwoColumnLayoutWithImage
