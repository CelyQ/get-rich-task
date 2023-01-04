import { CardContainer } from '../../../containers'
import contributorSVG from '../../../assets/cards/contributor.svg'
import contributorActiveSVG from '../../../assets/cards/contributorActive.svg'

export default function ContributorCard({
  onClick,
  classNames
}: {
  onClick: () => void
  classNames?: string
}) {
  return (
    <CardContainer
      text="I am the Contributor"
      onClick={onClick}
      classes={classNames}
    >
      <div className="relative w-[110.41px] h-[154.19px] group/card">
        <img
          className="absolute transition-all duration-300 group-hover/card:opacity-0 group-hover/card:scale-110"
          src={contributorSVG}
          alt=""
          width={110.41}
          height={154.19}
        />
        <img
          className="absolute transition-all duration-300 opacity-0 group-hover/card:opacity-100 group-hover/card:scale-110"
          src={contributorActiveSVG}
          alt=""
          width={110.41}
          height={154.19}
        />
      </div>
    </CardContainer>
  )
}
