import { CardContainer } from '../../../containers'
import ContributorSVG from './contributorSVG'

export default function ContributorCard({ onClick }: { onClick: () => void }) {
  return (
    <CardContainer text="I am the Contributor" onClick={onClick}>
      <ContributorSVG />
    </CardContainer>
  )
}
