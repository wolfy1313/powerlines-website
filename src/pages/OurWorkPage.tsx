import React from 'react'
import OurWorkHeader from '@/components/OurWorkHeader'
import OurWorkProblem from '@/components/OurWorkProblem'
import OurWorkImage from '@/components/OurWorkImage'
import OurWorkSolution from '@/components/OurWorkSolution'
import OurWorkSolutionImage from '@/components/OurWorkSolutionImage'
import OurWorkLatestWork from '@/components/OurWorkLatestWork'
import TheoryOfChange from '@/components/TheoryOfChange'

function OurWorkPage() {
  return (
    <section className='flex flex-col '>

      {/* {Our Problem Section} */}
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

      {/* {Our Solution Section} */}
      <section className='flex max-w-screen pt-7 mx-10 py-6 bg-light-yellow'>
        <section className='pr-4'>
          <OurWorkSolutionImage />
        </section>
        <section className='pl-4 mx-10'>
          <OurWorkSolution />
        </section>
      </section>

      {/* {Theory of Change Section} */}
      <section>
        <TheoryOfChange />
      </section>

      {/* {Latest Work Section} */}
      <section>
        <OurWorkLatestWork />
      </section>


    </section>

  )
}

export default OurWorkPage