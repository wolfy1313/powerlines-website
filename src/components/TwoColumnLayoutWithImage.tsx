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
}

const TwoColumnLayoutWithImage: React.FC<TwoColumnLayoutWithImageProps> = ({
  header,
  imageSrc,
  body,
  body2,
  width,
  height,
  alt
}) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-around md:mt-20">
      {/* Text column  */}
      <section className="md:w-1/2">
        <h2
          className={`md:text-[37px] px-2 md:font-semi-bold md:leading-[45px] text-[21px] mb-6 ${cairo.className} text-blue-dark md:pr-28 text-start`}
        >
          {header}
        </h2>
        <p
          className={`md:text-xl font-light leading-8 ${robotoSlab.className} px-2 md:px-0 md:pr-24`}
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
          className="px-2 md:px-0"
        />
      </section>
    </div>
  )
}

export default TwoColumnLayoutWithImage
