// Define Project Types & Interfaces Here
export interface ContactUsData {
  name: string
  email: string
  message: string
}

export interface OutcomeCardProps {
  image: string;
  text?: string
}

export interface TOCOutcomesComponentProps {
  header: string;
  content: string;
  OutcomesCards: OutcomeCardProps[]
}