import HomeHeader from '@/components/HomeHeader'
import WhoWeAre from '@/components/WhoWeAre'
import React from 'react'

function HomePage() {
  return (
    <section className="flex flex-col my-0 min-w-screen max-w-screen">
      <HomeHeader />
      <WhoWeAre />
    </section>
  )
}

export default HomePage
