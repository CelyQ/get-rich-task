import { CardContainer } from '../../../containers'
import InvestorSVG from './investorSVG'

export default function InvestorCard({ onClick }: { onClick: () => void }) {
  return (
    <CardContainer text="I am the Investor" onClick={onClick}>
      <InvestorSVG />
    </CardContainer>
  )
}
