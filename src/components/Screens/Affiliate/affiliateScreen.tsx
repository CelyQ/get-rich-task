import { Button } from '../../Button'
import affiliateScreenSVG from '../../../assets/heroes/affiliate.svg'

export default function () {
  return (
    <div
      id="affiliate"
      className="flex flex-col w-full h-screen max-h-[-webkit-fill-available] justify-center items-center container mx-auto"
    >
      <div className="h-[293px] md:w-[445px] md:h-[334px]">
        <img
          src={affiliateScreenSVG}
          alt=""
          className="motion-safe:animate-pulse w-full"
        />
      </div>
      <h2 className="text-white text-2xl pt-8">The Affiliate</h2>
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
