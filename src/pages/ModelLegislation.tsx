import React from 'react'
import TOCHeaderComponent from '@/components/TOCHeaderComponent'
import TwoColumnLayoutWithImage from '@/components/TwoColumnLayoutWithImage'
import TOCOutcomesComponent from '@/components/TOCOutcomesComponent'
import ReviewCurrentPUCs from '@/components/ReviewCurrentPUCs'

import {
  OutcomeCardProps,
  TOCOutcomesComponentProps,
  bulletPoint
} from '@/types/global'
import TOCOpportunitiesComponent from '@/components/TOCOpportunitiesComponent'
import TOCBodyList from '@/components/TOCBodyList'
const OutcomeCardsData: OutcomeCardProps[] = [
  {
    image: '/OutcomeMailboxWHITE.png',
    text: 'Outcome 1',
    alt: 'mailbox icon',
    height: 'h-20',
    width: 'w-20'
  },
  {
    image: '/OutcomeMailboxWHITE.png',
    text: 'Outcome 2',
    alt: 'mailbox icon',
    height: 'h-20',
    width: 'w-20'
  },
  {
    image: '/OutcomeMailboxWHITE.png',
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
    'Advocacy with Governors:',
    'Engage with governors, advocating for the appointment of climate and equity champions to PUCs through organized coalitions.'
  ],
  [
    'Candidate Recruitment:',
    'Actively recruit qualified candidates for PUC races, ensuring a strong pool of individuals committed to the cause.'
  ],
  [
    'Commissioner Training',
    'Facilitate ongoing training for PUC commissioners and staff, equipping them with resources and effective strategies.'
  ]
]

function ModelLegislation() {
  return (
    <div>
      <TOCHeaderComponent
        header="THEORY OF CHANGE"
        pageTitle="MODEL LEGISLATION"
      />
      <TwoColumnLayoutWithImage
        header="WHY IS MODEL LEGISLATION IMPORTANT AND WHAT CHALLENGES ARE WE FACING?"
        body="Public Utility Commissions (PUCs), responsible for the energy transition, face a shortage of progressive commissioners, either elected or appointed by Governors. About 80% of them are chosen by the state's governor or legislature, and 20% are elected. Utilities' influence on PUCs prioritizes fossil fuel interests, hindering clean energy and fairness. They lobby against climate and equity policies and sway elections in favor of utility-friendly candidates (Stokes 2020). Additionally, PUC commissioners lack diversity, worsening energy inequities for people of color and women. Powerlines seeks to break this cycle by supporting progressive candidates, raising voter awareness, and mitigating private utility influence."
        width="608"
        height="608"
        imageSrc="/ModelLegislationImage.svg"
        alt="monument place holder"
      />
      <TOCOpportunitiesComponent
        header="OPPORTUNITIES"
        content="We urgently need more PUC commissioners who champion climate and equity. To achieve this, campaigns can influence governors and state legislatures to appoint such commissioners and encourage like-minded candidates to run and win PUC elections. These elections offer high returns-on-investment for climate and equity, with candidates raising an average of only $[] per election over the last decade. Closing the voter dropoff gap between Democratic and Republican PUC candidates can greatly enhance the competitiveness of climate and equity champions. This strategy has proven successful, as seen in North Carolina and the 2022 Louisiana PSC race where climate justice priorities were advanced."
      />
      <ReviewCurrentPUCs
      />
      <TOCBodyList
        header="THEORY OF CHANGE"
        subheader="Through data-driven research, PowerLines will identify key appointments and elections with the greatest impact. PowerLines will then work with electoral and advocacy partners to push for the appointment and election of climate and equity champions to PUCs."
        bulletPoints={bulletPoints}
        footer="Our goal through this strategy works because putting more money into PUC campaigns can help improve climate outcomes. PUC races don't cost much compared to the impact they can have, making it a smart investment. Not many people are paying attention to these issues right now, so raising awareness about important things like water quality and linking them to everyday concerns like energy bills can get more people involved. This strategy focuses on races where success is more probable, especially those that can change commissions from red to blue."
      />
      <TOCOutcomesComponent
        header="OUTCOMES"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        OutcomesCards={OutcomeCardsData}
      />
    </div>
  )
}

export default ModelLegislation
