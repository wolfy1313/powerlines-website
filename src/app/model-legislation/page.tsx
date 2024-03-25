import ModelLegislation from '@/pages/ModelLegislation'
import ReviewCurrentPUCs from '@/components/ReviewCurrentPUCs'
import React from 'react'

export default function page() {
  return (
    <section>
      <ModelLegislation />
      {/* added ReviewCurrentPUCs to ModelLegislation.tsx page  */}
      {/* <ReviewCurrentPUCs/> */}
    </section>
  )
}
