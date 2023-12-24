import DidYouKnow from '@/components/DidYouKnow'
import HomeHeader from '@/components/HomeHeader'
import WhoWeAre from '@/components/WhoWeAre'
import TheoryOfChange from '@/components/TheoryOfChange'
import AboutUs from './AboutUs'
import React from 'react'
import Latest from '@/components/Latest'

function HomePage() {
  return (
    <section className="flex flex-col my-0 min-w-screen max-w-screen">
      {/* Header */}
      <HomeHeader />
      {/* Who We Are */}
      <WhoWeAre />
      {/* Theory of Change */}
      {/* Workaround div inserted to add background without potentially having merge conflict for adding to TheoryOfChange.tsx -JH*/}
      <div className="bg-no-repeat bg-light-yellow bg-cover">
        <TheoryOfChange />
      </div>
      {/* Did you know */}
      <DidYouKnow />
      {/* Latest on Powerlines */}
      <Latest />
    </section>
  )
}

export default HomePage
