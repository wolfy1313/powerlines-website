import React from 'react'
import Image from 'next/image'

function OurWorkImage() {
  return (
    <div>
      <section>
        <Image src="./ProblemImage.svg" width={604} height={472} alt="image of wind turbines and solar panels" />
      </section>
    </div>
  )
}

export default OurWorkImage