import { CardContainer } from '../../../containers'
import PlayerSVG from '../../../assets/cards/player.svg'
import PlayerActiveSVG from '../../../assets/cards/playerActive.svg'

export default function PlayerCard({
  onClick,
  classNames
}: {
  onClick: () => void
  classNames?: string
}) {
  return (
    <CardContainer
      text="I am the Player"
      onClick={onClick}
      classes={classNames}
    >
      <div className="relative w-[104.89px] h-[146.49px] group/card">
        <img
          className="absolute transition-all duration-300 group-hover/card:opacity-0 group-hover/card:scale-110"
          src={PlayerSVG}
          alt=""
          width={104.89}
          height={146.49}
        />
        <img
          className="absolute transition-all duration-300 opacity-0 group-hover/card:opacity-100 group-hover/card:scale-110"
          src={PlayerActiveSVG}
          alt=""
          width={104.89}
          height={146.49}
        />
      </div>
    </CardContainer>
  )
}
