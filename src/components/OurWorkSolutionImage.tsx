import React from 'react'
import Image from 'next/image'

function OurWorkSolutionImage() {
  return (
    <section className='mb-4'>
      <Image src="./SolutionImage.svg" width={2100} height={472} alt="image of wind turbines and solar panels" />
    </section>
  )
}

export default OurWorkSolutionImage