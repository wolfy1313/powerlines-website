"use client"
import React from 'react'
import TOCHeaderComponent from '@/components/TOCHeaderComponent'
import TwoColumnLayoutWithImage from '@/components/TwoColumnLayoutWithImage'
import ToCResourcesAndReports from '@/components/ToCResourcesAndReports'
import dynamic from 'next/dynamic';


function CommunityEngagement() {
  return (
    <section>
        <TOCHeaderComponent header="THEORY OF CHANGE" pageTitle='COMMUNITY ENGAGEMENT' />
        <TwoColumnLayoutWithImage header="WHY IS COMMUNITY ENGAGEMENT IMPORTANT AND WHAT CHALLENGES ARE WE FACING?" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." width="555" height="356" imageSrc='/monumentPlaceholder.png' alt="monument place holder"/>
        <ToCResourcesAndReports/>
    </section>
  )
}

export default CommunityEngagement