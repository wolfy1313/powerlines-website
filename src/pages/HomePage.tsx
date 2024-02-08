'use client'

import DidYouKnow from '@/components/DidYouKnow'
import HomeHeader from '@/components/HomeHeader'
import WhoWeAre from '@/components/WhoWeAre'
import TheoryOfChange from '@/components/TheoryOfChange'
import AboutUs from './AboutUs'
import React, { useRef } from 'react'
import Latest from '@/components/Latest'

function HomePage() {
  const whoWeAreRef = useRef<HTMLDivElement>(null)

  return (
    <section className="flex flex-col my-0 min-w-screen max-w-screen">
      {/* Header */}
      <HomeHeader
        scrollToWhoWeAre={() =>
          whoWeAreRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
      />
      {/* Who We Are */}
      <WhoWeAre ref={whoWeAreRef} />
      {/* Theory of Change */}
      {/* Workaround div inserted to add background without potentially having merge conflict for adding to TheoryOfChange.tsx -JH*/}
      <div className="bg-no-repeat bg-[url('/ToCGradientBG.png')] bg-cover">
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
