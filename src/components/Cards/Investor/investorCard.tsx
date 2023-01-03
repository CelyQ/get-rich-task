import { CardContainer } from '../../../containers'
import InvestorSVG from '../../../assets/cards/investor.svg'
import InvestorActiveSVG from '../../../assets/cards/investorActive.svg'

export default function InvestorCard({ onClick }: { onClick: () => void }) {
  return (
    <CardContainer text="I am the Investor" onClick={onClick}>
      <div className="relative w-[111px] h-[155px] group/card">
        <img
          className="absolute transition-all duration-300 group-hover/card:opacity-0 group-hover/card:scale-110"
          src={InvestorSVG}
          alt=""
          width={111}
          height={155}
        />
        <img
          className="absolute transition-all duration-300 opacity-0 group-hover/card:opacity-100 group-hover/card:scale-110"
          src={InvestorActiveSVG}
          alt=""
          width={111}
          height={155}
        />
      </div>
    </CardContainer>
  )
}
