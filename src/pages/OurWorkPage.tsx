import React from 'react'
import OurWorkHeader from '@/components/OurWorkHeader'
import OurWorkProblem from '@/components/OurWorkProblem'
import OurWorkImage from '@/components/OurWorkImage'

function OurWorkPage() {
  return (
    <section className='min-w-max w-screen'>
      <section>
        <OurWorkHeader />
      </section>
      <section className='flex w-screen'>
        <section>
          <OurWorkProblem />
        </section>
        <section>
          <OurWorkImage />
        </section>
      </section>
    </section>

  )
}

export default OurWorkPage