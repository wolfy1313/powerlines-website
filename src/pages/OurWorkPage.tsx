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

      <section className='m-0 '>
        <OurWorkHeader />
      </section>

      {/* {Our Problem Section} */}
      <section className=' flex flex-col-reverse md:flex md:flex-row max-w-screen px-10 py-10'>
        <section className='flex  px-7 items-center ' >
          <OurWorkProblem />
        </section>
        <section className='px-8 mx-10 '>
          <OurWorkImage />
        </section>
      </section>

      {/* {Our Solution Section} */}
      <section className='md:flex max-w-screen py-10 px-10 bg-light-yellow'>
        <section className='px-8 mx-10 '>
          <OurWorkSolutionImage />
        </section>
        <section className='px-7 flex items-center' >
          <OurWorkSolution />
        </section>
      </section>

      {/* {Theory of Change Section} */}
      <section className="bg-contain bg-no-repeat bg-[url('/OurWorkToCBG.svg')] md:bg-cover">
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