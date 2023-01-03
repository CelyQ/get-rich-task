import { Button } from '../../Button'
import AffiliateScreenSVG from './affiliateScreenSVG'

export default function () {
  return (
    <div className="flex flex-col w-full h-screen max-h-[-webkit-fill-available] justify-center items-center container">
      <AffiliateScreenSVG />
      <h2 className="text-white text-2xl">The Affiliate</h2>
      <p className="text-[#666666] text-sm md:max-w-[560px] text-center py-8">
        Donec rhoncus odio lacus, non blandit justo porttitor in. Curabitur
        tincidunt, metus sit amet cursus commodo, nisi nunc faucibus risus, eu
        dictum est
      </p>

      <Button
        type={'AFFILIATE'}
        onClick={() => {}}
        text="TO OUR AFFILIATE PLATFORM"
      />
    </div>
  )
}
