import React from 'react'
import OurWorkHeader from '@/components/OurWorkHeader'
import OurWorkProblem from '@/components/OurWorkProblem'
import OurWorkImage from '@/components/OurWorkImage'
import OurWorkSolution from '@/components/OurWorkSolution'
import OurWorkSolutionImage from '@/components/OurWorkSolutionImage'
import OurWorkProblemHeader from '@/components/OurWorkProblemHeader'
import OurWorkLatestWork from '@/components/OurWorkLatestWork'
import OurWorkSolutionHeader from '@/components/OurWorkSolutionHeader'
import TheoryOfChange from '@/components/TheoryOfChange'

function OurWorkPage() {
  return (
    <section className='flex flex-col '>

      <section className='m-0 '>
        <OurWorkHeader />
      </section>

      {/* {Our Problem Section} */}
      <section className={`bg-no-repeat bg-[url('/OurWorkBG_NEW.png')] bg-cover`}>
        <section className=' flex flex-col-reverse px-3 py-3 md:flex md:flex-row max-w-screen md:px-10 md:py-10'>
          <section className='flex md:px-7 px-3 items-center ' >
            <OurWorkProblem />
          </section>
          <section className='px-4'>
            <OurWorkImage />
          </section>
          <section className='ml-1 md:hidden'>
            <OurWorkProblemHeader />
          </section>
        </section>

        {/* {Our Solution Section} */}
        <section className='md:flex max-w-screen px-3 py-3 md:px-10 md:py-10 bg-light-yellow'>
          <section className='ml-1 md:hidden'>
            <OurWorkSolutionHeader />
          </section>
          <section className='px-4 pt-2'>
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
        <section className='mx-12 md:mx-12 border-b-4'>
          <OurWorkLatestWork />
        </section>
      </section>


    </section>

  )
}

export default OurWorkPage