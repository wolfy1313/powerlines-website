import React from 'react'
import OurWorkHeader from '@/components/OurWorkHeader'
import OurWorkProblem from '@/components/OurWorkProblem'
import OurWorkImage from '@/components/OurWorkImage'

function OurWorkPage() {
  return (
    <section className='flex flex-col m-10'>
      <section>
        <OurWorkHeader />
      </section>
      <section className='flex max-w-screen pt-7'>
        <section className='pr-4'>
          <OurWorkProblem />
        </section>
        <section className='pl-4'>
          <OurWorkImage />
        </section>
      </section>
    </section>

  )
}

export default OurWorkPage