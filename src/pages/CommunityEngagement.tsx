'use client'
import React from 'react'
import TOCHeaderComponent from '@/components/TOCHeaderComponent'
import TwoColumnLayoutWithImage from '@/components/TwoColumnLayoutWithImage'
import ToCResourcesAndReports from '@/components/ToCResourcesAndReports'
import dynamic from 'next/dynamic'
import { ResourcesAndReportsCardsProps } from '@/types/global'

const ResourceandReportsData: ResourcesAndReportsCardsProps[] = [
  {
    image: '/meeting.png',
    alt: 'people working at at table',
    caption: 'WHITE PAPER',
    subHeading: 'Lorem Ipsum',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    cta: 'Download',
    downloadIcon: 'sim_card_download.svg',
    downloadFile: 'filename.pdf',
    downloadFileTitle: 'Full White Paper'
  },
  {
    image: '/handOnSolarPanel.png',
    alt: 'hand on solar panel',
    caption: 'WHITE PAPER',
    subHeading: 'Lorem Ipsum',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    cta: 'Download',
    downloadIcon: 'sim_card_download.svg',
    downloadFile: 'filename.pdf',
    downloadFileTitle: 'Full White Paper'
  },
  {
    image: '/climateJusticeProtest.png',
    alt: 'climate protest',
    caption: 'WHITE PAPER',
    subHeading: 'Lorem Ipsum',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    cta: 'Download',
    downloadIcon: 'sim_card_download.svg',
    downloadFile: 'filename.pdf',
    downloadFileTitle: 'Full White Paper'
  }
]
function CommunityEngagement() {
  return (
    <section>
      <TOCHeaderComponent
        header="THEORY OF CHANGE"
        pageTitle="COMMUNITY ENGAGEMENT"
      />
      <TwoColumnLayoutWithImage
        header="WHY IS COMMUNITY ENGAGEMENT IMPORTANT AND WHAT CHALLENGES ARE WE FACING?"
        body="Public Utility Commissions (PUCs), responsible for the energy transition, face a shortage of progressive commissioners, either elected or appointed by Governors.  About 80% of them are chosen by the state's governor or legislature, and 20% are elected. Utilities' influence on PUCs prioritizes fossil fuel interests, hindering clean energy and fairness. They lobby against climate and equity policies and sway elections in favor of utility-friendly candidates (Stokes 2020). Additionally, PUC commissioners lack diversity, worsening energy inequities for people of color and women. Powerlines seeks to break this cycle by supporting progressive candidates, raising voter awareness, and mitigating private utility influence."
        width="555"
        height="356"
        imageSrc="/community-eng-hero.svg"
        alt="monument place holder"
      />
      section
      <ToCResourcesAndReports
        ResourcesAndReportsCards={ResourceandReportsData}
      />
    </section>
  )
}

export default CommunityEngagement
