import { Button } from '../../Button'
import PlayerScreenSVG from './playerScreenSVG'

export default function PlayerScreen() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center min-h-screen container gap-y-8">
      <PlayerScreenSVG />
      <h2 className="text-white text-2xl">The Player</h2>
      <p className="text-[#666666] text-sm md:max-w-[560px] text-center">
        Donec rhoncus odio lacus, non blandit justo porttitor in. Curabitur
        tincidunt, metus sit amet cursus commodo, nisi nunc faucibus risus, eu
        dictum est
      </p>
      <Button type={'PLAYER'} onClick={() => {}} text="START PLAYING NOW" />
    </div>
  )
}
