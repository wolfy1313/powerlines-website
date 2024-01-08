"use client"
import React from 'react'
import TOCHeaderComponent from '@/components/TOCHeaderComponent'
import TwoColumnLayoutWithImage from '@/components/TwoColumnLayoutWithImage'
import ToCResourcesAndReports from '@/components/ToCResourcesAndReports'
import dynamic from 'next/dynamic';
import { ResourcesAndReportsCardsProps } from '@/types/global'

const ResourceandReportsData: ResourcesAndReportsCardsProps[]=[{
  image: "/meeting.png",
  alt: "people working at at table",
  caption:"WHITE PAPER",
  subHeading: "Lorem Ipsum",
  body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  cta: "Download",
  downloadIcon: "sim_card_download.svg",
  downloadFile: "filename.pdf",
  downloadFileTitle: "Full White Paper",
},
{
    image: "/handOnSolarPanel.png",
  alt: "hand on solar panel",
  caption:"WHITE PAPER",
  subHeading: "Lorem Ipsum",
  body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  cta: "Download",
  downloadIcon: "sim_card_download.svg",
  downloadFile: "filename.pdf",
  downloadFileTitle: "Full White Paper",
},
{
    image: "/climateJusticeProtest.png",
    alt: "climate protest",
    caption:"WHITE PAPER",
    subHeading: "Lorem Ipsum",
    body:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    cta: "Download",
    downloadIcon: "sim_card_download.svg",
    downloadFile: "filename.pdf",
    downloadFileTitle: "Full White Paper",
},
]
function CommunityEngagement() {
  return (
    <section>
        <TOCHeaderComponent header="THEORY OF CHANGE" pageTitle='COMMUNITY ENGAGEMENT' />
        <TwoColumnLayoutWithImage header="WHY IS COMMUNITY ENGAGEMENT IMPORTANT AND WHAT CHALLENGES ARE WE FACING?" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." width="555" height="356" imageSrc='/monumentPlaceholder.png' alt="monument place holder"/>
        <ToCResourcesAndReports ResourcesAndReportsCards={ResourceandReportsData}/>
    </section>
  )
}

export default CommunityEngagement