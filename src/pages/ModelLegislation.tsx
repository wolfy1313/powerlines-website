import React from 'react'
import TOCHeaderComponent from '@/components/TOCHeaderComponent'
import TwoColumnLayoutWithImage from '@/components/TwoColumnLayoutWithImage'
import TOCOutcomesComponent from '@/components/TOCOutcomesComponent'

import {
  OutcomeCardProps,
  TOCOutcomesComponentProps,
  bulletPoint
} from '@/types/global'
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

const bulletPoints: bulletPoint[] = [
  [
    'Lorem Ipsum',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  ],
  [
    'Lorem Ipsum',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  ],
  [
    'Lorem Ipsum',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  ],
  [
    'Lorem Ipsum',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
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
        height="385"
        imageSrc="/monumentPlaceholder.png"
        alt="monument place holder"
      />
      <TOCOpportunitiesComponent
        header="OPPORTUNITIES"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor nec feugiat nisl pretium fusce. In mollis nunc sed id semper risus in. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Dignissim suspendisse in est ante in nibh mauris cursus. Urna et pharetra pharetra massa. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Est sit amet facilisis magna etiam tempor orci eu lobortis. Scelerisque in dictum non consectetur a erat. Venenatis a condimentum vitae sapien pellentesque habitant. Malesuada proin libero nunc consequat. Erat pellentesque adipiscing commodo elit. Morbi leo urna molestie at elementum eu facilisis. Commodo quis imperdiet massa tincidunt nunc pulvinar. Cum sociis natoque penatibus et magnis dis parturient. Platea dictumst vestibulum rhoncus est pellentesque elit. Et tortor at risus viverra adipiscing at in tellus integer."
      />
      <TOCBodyList
        header="THEORY OF CHANGE"
        subheader="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor nec feugiat nisl pretium fusce. In mollis nunc sed id semper risus in. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa."
        bulletPoints={bulletPoints}
        footer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor nec feugiat nisl pretium fusce. In mollis nunc sed id semper risus in. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Dignissim suspendisse in est ante in nibh mauris cursus. Urna et pharetra pharetra massa."
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
