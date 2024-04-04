import React from 'react'
import OurWorkHeader from '@/components/OurWorkHeader'
import OurWorkProblem from '@/components/OurWorkProblem'
import OurWorkImage from '@/components/OurWorkImage'
import OurWorkSolution from '@/components/OurWorkSolution'
import OurWorkSolutionImage from '@/components/OurWorkSolutionImage'
import OurWorkProblemHeader from '@/components/OurWorkProblemHeader'
import OurWorkLatestWork from '@/components/OurWorkLatestWork'
import OurWorkSolutionHeader from '@/components/OurWorkSolutionHeader'
import TheoryOfChangeVersion2 from '@/components/TheoryOfChangeVersion2'

function OurWorkPage() {
  return (
    <section className='flex flex-col '>

      <section className='m-0 '>
        <OurWorkHeader />
      </section>

      {/* {Our Problem Section} */}
      <section className={`bg-white`}>
        <section className=' flex flex-col px-3 py-3 md:flex md:flex-row max-w-screen md:px-10 md:py-10'>
          <section className='hidden md:flex md:px-7 px-3 items-center ' >
            <OurWorkProblem />
          </section>
          <section className='px-4'>
            <OurWorkImage />
          </section>
          <section className='ml-1 md:hidden'>
            <OurWorkProblemHeader />
          </section>
          <section className='flex md:hidden md:px-7 px-3 items-center ' >
            <OurWorkProblem />
          </section>
        </section>

        {/* {Our Solution Section} */}
        <section className='md:flex max-w-screen px-3 py-3 md:px-10 md:py-10 '>
          <section className='px-4 pt-2'>
            <OurWorkSolutionImage />
          </section>
          <section className='ml-1 md:hidden'>
            <OurWorkSolutionHeader />
          </section>
          <section className='flex md:px-7 px-3 items-center' >
            <OurWorkSolution />
          </section>
        </section>

        {/* {Theory of Change Section} */}
        {/* bg-no-repeat bg-[url('/OurWorkToCBG.svg')] bg-cover */}
        <section className="bg-[#F4F3F3] md:px-10 px-3">
          <TheoryOfChangeVersion2 />
        </section>

        {/* {Latest Work Section} */}
        <section className='box-border mx-12 md:mx-12 border-b-4'>
          <OurWorkLatestWork />
        </section>
      </section>


    </section>

  )
}

export default OurWorkPage