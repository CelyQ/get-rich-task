import { CardContainer } from '../../../containers'
import PlayerSVG from './playerSVG'

export default function PlayerCard({ onClick }: { onClick: () => void }) {
  return (
    <CardContainer text="I am the Player" onClick={onClick}>
      <PlayerSVG />
    </CardContainer>
  )
}
