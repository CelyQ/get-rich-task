import { Button } from '../../Button'
import ContributorScreenSVG from './contributorScreenSVG'

export default function ContributorScreen() {
  return (
    <div
      className={`flex flex-col w-full h-full justify-center items-center container`}
    >
      <ContributorScreenSVG />
      <h2 className="text-white text-2xl">The Contribuitor</h2>
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
