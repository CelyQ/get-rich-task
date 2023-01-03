import { CardContainer } from '../../../containers'
import PlayerSVG from '../../../assets/player.svg'
import PlayerActiveSVG from '../../../assets/playerActive.svg'

export default function PlayerCard({ onClick }: { onClick: () => void }) {
  return (
    <CardContainer text="I am the Player" onClick={onClick}>
      <div className="relative w-[111px] h-[155px] group/card">
        <img
          className="absolute transition-all duration-300 group-hover/card:opacity-0 group-hover/card:scale-110"
          src={PlayerSVG}
          alt=""
          width={111}
          height={155}
        />
        <img
          className="absolute transition-all duration-300 opacity-0 group-hover/card:opacity-100 group-hover/card:scale-110"
          src={PlayerActiveSVG}
          alt=""
          width={111}
          height={155}
        />
      </div>
    </CardContainer>
  )
}
