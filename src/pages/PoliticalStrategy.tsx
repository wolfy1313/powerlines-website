import React from 'react'
import TOCHeaderComponent from '@/components/TOCHeaderComponent'
import TwoColumnLayoutWithImage from '@/components/TwoColumnLayoutWithImage'
import TOCOutcomesComponent from '@/components/TOCOutcomesComponent'

import { OutcomeCardProps, TOCOutcomesComponentProps } from '@/types/global'
import TOCOpportunitiesComponent from '@/components/TOCOpportunitiesComponent'
import TOCBodyList from '@/components/TOCBodyList'
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

function PoliticalStrategy() {
  return (
    <div>
      <TOCHeaderComponent
        header="THEORY OF CHANGE"
        pageTitle="POLITICAL STRATEGY"
      />
      <TwoColumnLayoutWithImage
        header="WHY IS POLITICAL STRATEGY IMPORTANT AND WHAT CHALLENGES ARE WE FACING?"
        body="Public Utility Commissions (PUCs), responsible for the energy transition, face a shortage of progressive commissioners, either elected or appointed by Governors.  About 80% of them are chosen by the state's governor or legislature, and 20% are elected. Utilities' influence on PUCs prioritizes fossil fuel interests, hindering clean energy and fairness. They lobby against climate and equity policies and sway elections in favor of utility-friendly candidates (Stokes 2020). Additionally, PUC commissioners lack diversity, worsening energy inequities for people of color and women. Powerlines seeks to break this cycle by supporting progressive candidates, raising voter awareness, and mitigating private utility influence."
        width="608"
        height="385"
        imageSrc="/monumentPlaceholder.png"
        alt="monument place holder"
      />
      <TOCOpportunitiesComponent
        header="OPPORTUNITIES"
        content="We urgently need more PUC commissioners who champion climate and equity. To achieve this, campaigns can influence governors and state legislatures to appoint such commissioners and encourage like-minded candidates to run and win PUC elections. These elections offer high returns-on-investment for climate and equity, with candidates raising an average of only $[] per election over the last decade. Closing the voter dropoff gap between Democratic and Republican PUC candidates can greatly enhance the competitiveness of climate and equity champions. This strategy has proven successful, as seen in North Carolina and the 2022 Louisiana PSC race where climate justice priorities were advanced."
      />
      <TOCBodyList header="THEORY OF CHANGE" />
      <TOCOutcomesComponent
        header="OUTCOMES"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        OutcomesCards={OutcomeCardsData}
      />
    </div>
  )
}

export default PoliticalStrategy
