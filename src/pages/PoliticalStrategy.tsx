import React from 'react'
import TOCHeaderComponent from '@/components/TOCHeaderComponent'
import TwoColumnLayoutWithImage from '@/components/TwoColumnLayoutWithImage'
import TOCOutcomesComponent from '@/components/TOCOutcomesComponent'

import { OutcomeCardProps, TOCOutcomesComponentProps } from "@/types/global";

const OutcomeCardsData: OutcomeCardProps[] = [{
  image: "/OutcomeMailImage.svg",
  text: "Outcome 1"
},
{
  image: "/OutcomeMailImage.svg",
  text: "Outcome 2"
},
{
  image: "/OutcomeMailImage.svg",
  text: "Outcome 3"
},
]

function PoliticalStrategy() {
  return (
    <div>
      <TOCHeaderComponent header="THEORY OF CHANGE" pageTitle='POLITICAL STRATEGY' />
      <TwoColumnLayoutWithImage header='WHY IS POLITICAL STRATEGY IMPORTANT AND WHAT CHALLENGES ARE WE FACING?' body="Public Utility Commissions (PUCs), responsible for the energy transition, face a shortage of progressive commissioners, either elected or appointed by Governors.  About 80% of them are chosen by the state's governor or legislature, and 20% are elected. Utilities' influence on PUCs prioritizes fossil fuel interests, hindering clean energy and fairness. They lobby against climate and equity policies and sway elections in favor of utility-friendly candidates (Stokes 2020). Additionally, PUC commissioners lack diversity, worsening energy inequities for people of color and women. Powerlines seeks to break this cycle by supporting progressive candidates, raising voter awareness, and mitigating private utility influence." width="608" height="385" imageSrc='/monumentPlaceholder.png' alt="monument place holder" />
      <TOCOutcomesComponent header='OUTCOMES' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' OutcomesCards={OutcomeCardsData} />
    </div>
  )
}

export default PoliticalStrategy