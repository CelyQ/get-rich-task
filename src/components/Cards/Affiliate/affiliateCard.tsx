import { CardContainer } from '../../../containers'
import AffiliateSVG from './affiliateSVG'

export default function AffiliateCard({ onClick }: { onClick: () => void }) {
  return (
    <CardContainer text="I am the Affiliate" onClick={onClick}>
      <AffiliateSVG />
    </CardContainer>
  )
}
