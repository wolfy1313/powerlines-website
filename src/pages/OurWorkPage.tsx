import React from 'react'
import OurWorkHeader from '@/components/OurWorkHeader'
import OurWorkProblem from '@/components/OurWorkProblem'
import OurWorkImage from '@/components/OurWorkImage'
import OurWorkSolution from '@/components/OurWorkSolution'
import OurWorkSolutionImage from '@/components/OurWorkSolutionImage'
import OurWorkProblemHeader from '@/components/OurWorkProblemHeader'
import OurWorkLatestWork from '@/components/OurWorkLatestWork'
import TheoryOfChange from '@/components/TheoryOfChange'

function OurWorkPage() {
  return (
    <section className='flex flex-col '>

      <section className='m-0 '>
        <OurWorkHeader />
      </section>

      {/* {Our Problem Section} */}
      <section className=' flex flex-col-reverse px-3 py-3 md:flex md:flex-row max-w-screen md:px-10 md:py-10'>
        <section className='flex md:px-7 px-3 items-center md:order-2' >
          <OurWorkProblem />
        </section>
        <section className='px-8 mx-10 md:order-3'>
          <OurWorkImage />
        </section>
        <section className='ml-1 md:hidden'>
          <OurWorkProblemHeader />
        </section>
      </section>

      {/* {Our Solution Section} */}
      <section className='md:flex max-w-screen px-3 py-3 md:px-10 md:py-10 bg-light-yellow'>
        <section className='px-8 mx-10 pt-8'>
          <OurWorkSolutionImage />
        </section>
        <section className='flex md:px-7 px-3 items-center' >
          <OurWorkSolution />
        </section>
      </section>

      {/* {Theory of Change Section} */}
      <section className="bg-no-repeat bg-[url('/OurWorkToCBG.svg')] bg-cover">
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