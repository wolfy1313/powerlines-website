import React from 'react'
import Image from 'next/image'

function OurWorkImage() {
  return (
    <section className=''>
      <Image src="./ProblemImage.svg" width={2100} height={472} alt="image of wind turbines and solar panels" />
    </section>
  )
}

export default OurWorkImage