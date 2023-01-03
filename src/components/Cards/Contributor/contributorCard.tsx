import { CardContainer } from '../../../containers'
import contributorSVG from '../../../assets/cards/contributor.svg'
import contributorActiveSVG from '../../../assets/cards/contributorActive.svg'

export default function ContributorCard({ onClick }: { onClick: () => void }) {
  return (
    <CardContainer text="I am the Contributor" onClick={onClick}>
      <div className="relative w-[111px] h-[155px] group/card">
        <img
          className="absolute transition-all duration-300 group-hover/card:opacity-0 group-hover/card:scale-110"
          src={contributorSVG}
          alt=""
          width={111}
          height={155}
        />
        <img
          className="absolute transition-all duration-300 opacity-0 group-hover/card:opacity-100 group-hover/card:scale-110"
          src={contributorActiveSVG}
          alt=""
          width={111}
          height={155}
        />
      </div>
    </CardContainer>
  )
}
