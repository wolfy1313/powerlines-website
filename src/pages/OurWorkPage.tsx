import React from 'react'
import OurWorkHeader from '@/components/OurWorkHeader'
import OurWorkProblem from '@/components/OurWorkProblem'
import OurWorkImage from '@/components/OurWorkImage'

function OurWorkPage() {
  return (
    <section className='flex flex-col '>
      <section className='m-0'>
        <OurWorkHeader />
      </section>
      <section className='flex max-w-screen pt-7 mx-10'>
        <section className='pr-4'>
          <OurWorkProblem />
        </section>
        <section className='pl-4 mx-10'>
          <OurWorkImage />
        </section>
      </section>
    </section>

  )
}

export default OurWorkPage