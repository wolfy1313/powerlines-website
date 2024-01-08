// Define Project Types & Interfaces Here
export interface ContactUsData {
  name: string
  email: string
  message: string
}

export interface OutcomeCardProps {
  image: string;
  text?: string;
  alt: string;
  height: string;
  width: string
}

export interface TOCOutcomesComponentProps {
  header: string;
  content: string;
  OutcomesCards: OutcomeCardProps[]
}

export interface OurPrinciplesComponentProps extends OutcomeCardProps {
}

export interface TrunctableTextProps {
  text: string;
  maxLength: number; // Maximum number of characters to display when truncated
}

export interface ResourcesAndReportsCardsProps {
  image: string;
  alt: string;
  caption: string;
  subHeading: string;
  cta: string;
  body:string;
  downloadIcon: string;
  downloadFile: string;
  downloadFileTitle: string;
  

}

export interface TOCResourcesAndReportsProps {
  
  ResourcesAndReportsCards: ResourcesAndReportsCardsProps[]
}