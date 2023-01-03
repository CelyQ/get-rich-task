import { Button } from '../../Button'
import contributorScreenSVG from '../../../assets/heroes/contributor.svg'

export default function ContributorScreen() {
  return (
    <div
      className={`flex flex-col w-full h-screen max-h-[-webkit-fill-available] justify-center items-center container`}
    >
      <img
        src={contributorScreenSVG}
        alt=""
        className="motion-safe:animate-pulse"
      />
      <h2 className="text-white text-2xl pt-8">The Contribuitor</h2>
      <p className="text-[#666666] text-sm md:max-w-[560px] text-center py-8">
        Donec rhoncus odio lacus, non blandit justo porttitor in. Curabitur
        tincidunt, metus sit amet cursus commodo, nisi nunc faucibus risus, eu
        dictum est
      </p>
      <div className="pb-8">
        <Button type={'CONTRIBUTOR'} onClick={() => {}} text="JOIN US" />
      </div>
    </div>
  )
}
