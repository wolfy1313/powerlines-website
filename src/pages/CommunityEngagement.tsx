'use client'
import React from 'react'
import TOCHeaderComponent from '@/components/TOCHeaderComponent'
import TwoColumnLayoutWithImage from '@/components/TwoColumnLayoutWithImage'
import ToCResourcesAndReports from '@/components/ToCResourcesAndReports'
import TOCBodyList from '@/components/TOCBodyList'
import dynamic from 'next/dynamic'
import {
  ResourcesAndReportsCardsProps,
  bulletPoint,
  OutcomeCardProps
} from '@/types/global'
import TOCOutcomesComponent from '@/components/TOCOutcomesComponent'
import { Cairo, Roboto_Slab } from 'next/font/google'

const cairo = Cairo({ subsets: ['latin'] })
const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

const OutcomeCardsData: OutcomeCardProps[] = [
  {
    image: '/OutcomeMailImage.svg',
    text: 'Outcome 1',
    alt: 'mailbox icon',
    height: 'h-20',
    width: 'w-20'
  },
  {
    image: '/OutcomeMailImage.svg',
    text: 'Outcome 2',
    alt: 'mailbox icon',
    height: 'h-20',
    width: 'w-20'
  },
  {
    image: '/OutcomeMailImage.svg',
    text: 'Outcome 3',
    alt: 'mailbox icon',
    height: 'h-20',
    width: 'w-20'
  }
]

const bulletPoints: bulletPoint[] = [
  [
    'Increased Funding',
    'Allocate more financial resources to PUC races and fundraising efforts, which is critical to catalyzing positive change that yields favorable climate outcomes.'
  ],
  [
    'Advocacy with Governors',
    'Engage with governors, advocating for the appointment of climate and equity champions to PUCs through organized coalitions.'
  ],
  [
    'Candidate Recruitment',
    'Actively recruit qualified candidates for PUC races, ensuring a strong pool of individuals committed to the cause.'
  ],
  [
    'Commissioner Training',
    'Facilitate ongoing training for PUC commissioners and staff, equipping them with resources and effective strategies.'
  ]
]

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
        subHeaderColor="green-dark"
      />

      <section className="flex flex-col justify-center text-start mx-6 mt-6 md:mb-0 md:mx-20 md:mt-10">
        <h2 className={`md:text-[37px] md:font-semi-bold md:leading-[45px] text-[21px] mb-1 md:mb-3 text-[#437859] ${cairo.className}`}>
          OPPORTUNITIES
        </h2>
        <p className={`md:text-xl font-light md:leading-[40px] md:tracking-wide ${robotoSlab.className}`}>
          We urgently need more PUC commissioners who champion climate and
          equity. To achieve this, campaigns can influence governors and state
          legislatures to appoint such commissioners and encourage like-minded
          candidates to run and win PUC elections. These elections offer high
          returns-on-investment for climate and equity, with candidates raising
          an average of only $[] per election over the last decade. Closing the
          voter dropoff gap between Democratic and Republican PUC candidates can
          greatly enhance the competitiveness of climate and equity champions.
          This strategy has proven successful, as seen in North Carolina and the
          2022 Louisiana PSC race where climate justice priorities were
          advanced.
        </p>
      </section>

      <section className="flex flex-col justify-center text-start mx-6 mt-10 md:mb-0 md:mx-20 md:mt-10">
        <h2 className={`md:text-[37px] md:font-semi-bold md:leading-[45px] text-[21px] mb-1 md:mb-3 text-[#437859] ${cairo.className}`}>
          CASE STUDIES
        </h2>
        <p className={`md:text-xl font-light md:leading-[40px] md:tracking-wide ${robotoSlab.className}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
          tempor nec feugiat nisl pretium fusce. In mollis nunc sed id semper
          risus in. Mattis ullamcorper velit sed ullamcorper morbi tincidunt
          ornare massa.
        </p>
      </section>

      <section className="flex flex-col justify-center text-start mx-6 mt-10 md:mb-0 md:mx-20 md:mt-10">
        <h2 className={`md:text-[37px] md:font-semi-bold md:leading-[45px] text-[21px] mb-1 md:mb-3 text-[#437859] ${cairo.className}`}>
          INTERVENTION PROCESS
        </h2>
        <p className={`md:text-xl font-light md:leading-[40px] md:tracking-wide ${robotoSlab.className}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
          tempor nec feugiat nisl pretium fusce. In mollis nunc sed id semper
          risus in. Mattis ullamcorper velit sed ullamcorper morbi tincidunt
          ornare massa.
        </p>
      </section>

      <TOCBodyList
        header="THEORY OF CHANGE"
        subheader="Through data-driven research, PowerLines will identify key appointments and elections with the greatest impact. PowerLines will then work with electoral and advocacy partners to push for the appointment and election of climate and equity champions to PUCs."
        bulletPoints={bulletPoints}
        footer="Our goal through this strategy works because putting more money into PUC campaigns can help improve climate outcomes. PUC races don't cost much compared to the impact they can have, making it a smart investment. Not many people are paying attention to these issues right now, so raising awareness about important things like water quality and linking them to everyday concerns like energy bills can get more people involved. This strategy focuses on races where success is more probable, especially those that can change commissions from red to blue."
        subheaderColor="green-dark"
        bulletColor="green-light"
      />
      <TOCOutcomesComponent
        header="OUTCOMES"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        OutcomesCards={OutcomeCardsData}
        headerColor="green-dark"
        iconColor="#A0C67F"
      />

      <ToCResourcesAndReports
        ResourcesAndReportsCards={ResourceandReportsData}
        color="green-dark"
      />
    </section>
  )
}

export default CommunityEngagement
