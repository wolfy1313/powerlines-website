// Define Project Types & Interfaces Here
export interface ContactUsData {
  name: string
  email: string
  message: string
}

export interface OutcomeCardProps {
  image: string
  text?: string
  alt: string
  height: string
  width: string
  iconColor?: string
}

export interface OurPrinciplesProps {
  image: string
  alt: string
  heading?: string
  text?: string
}

export interface OurTeamProps {
  image: string
  name: string
  role: string
  genre: string
}

export interface TOCOutcomesComponentProps {
  header: string
  content: string
  OutcomesCards: OutcomeCardProps[]
  headerColor?: string
  iconColor?: string
}

export interface OurPrinciplesComponentProps extends OutcomeCardProps {}

export interface TrunctableTextProps {
  text: string
  maxLength: number // Maximum number of characters to display when truncated
}

export interface ResourcesAndReportsCardsProps {
  image: string
  alt: string
  caption: string
  subHeading: string
  cta: string
  body: string
  downloadIcon: string
  downloadFile: string
  downloadFileTitle: string
}

export interface TOCResourcesAndReportsProps {
  ResourcesAndReportsCards: ResourcesAndReportsCardsProps[]
  color?: string
}

export type bulletPoint = [string, string]
export interface ToCBodyListProps {
  header: string
  subheader: string
  bulletPoints: bulletPoint[]
  footer: string
  subheaderColor?: string
  bulletColor?: string
}

export interface ToCCardProps {
  header: string
  imageSrc: string
  checklist: string[]
  href: string
}
