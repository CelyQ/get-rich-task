import { CardContainer } from '../../../containers'
import affiliateSVG from '../../../assets/cards/affiliate.svg'
import affiliateActiveSVG from '../../../assets/cards/affiliateActive.svg'

export default function AffiliateCard({ onClick }: { onClick: () => void }) {
  return (
    <CardContainer text="I am the Affiliate" onClick={onClick}>
      <div className="relative w-[111px] h-[155px] group/card">
        <img
          className="absolute transition-all duration-300 group-hover/card:opacity-0 group-hover/card:scale-110"
          src={affiliateSVG}
          alt=""
          width={111}
          height={155}
        />
        <img
          className="absolute transition-all duration-300 opacity-0 group-hover/card:opacity-100 group-hover/card:scale-110"
          src={affiliateActiveSVG}
          alt=""
          width={111}
          height={155}
        />
      </div>
    </CardContainer>
  )
}
