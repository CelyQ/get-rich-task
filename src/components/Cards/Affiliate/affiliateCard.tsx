import { CardContainer } from '../../../containers'
import affiliateSVG from '../../../assets/cards/affiliate.svg'
import affiliateActiveSVG from '../../../assets/cards/affiliateActive.svg'

export default function AffiliateCard({
  onClick,
  classNames
}: {
  onClick: () => void
  classNames?: string
}) {
  return (
    <CardContainer
      text="I am the Affiliate"
      onClick={onClick}
      classes={classNames}
    >
      <div className={`relative w-[103.32px] h-[144.29px] group/card`}>
        <img
          className="absolute transition-all duration-300 group-hover/card:opacity-0 group-hover/card:scale-110"
          src={affiliateSVG}
          alt=""
          width={103.32}
          height={144.29}
        />
        <img
          className="absolute transition-all duration-300 opacity-0 group-hover/card:opacity-100 group-hover/card:scale-110"
          src={affiliateActiveSVG}
          alt=""
          width={103.32}
          height={144.29}
        />
      </div>
    </CardContainer>
  )
}
