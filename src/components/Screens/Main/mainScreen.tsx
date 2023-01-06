import { Fragment, useState } from 'react'
import { SELECTION } from '../../../App'
import { HoloText } from '../../HoloText'
import * as Card from '../../Cards'
import { Popup } from '../../Popup'

export default function MainScreen({
  handleClick
}: {
  handleClick: (s: SELECTION) => void
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <Fragment>
      <section className="flex flex-col items-center gap-1 pt-16 md:pt-28">
        <HoloText />
        <h3 className="uppercase text-white text-xs leading-[18px] tracking-[10px] py-[3px]">
          WITH BLACKJACK.FUN
        </h3>
        <div className="flex flex-col gap-0.5 items-center py-4 text-sm px-8 relative">
          <p className="text-[#666666] text-center py-2 md:py-0 text-sm leading-[22px]">
            BlackJack.fun is a complete Crypto Casino, with a focus on Blackjack
            Games.
          </p>
          <p className="text-[#666666] text-sm leading-[22px] text-center">
            But we don’t stop there.
          </p>
          <span
            className="text-[#45D8FF] cursor-pointer hover:underline"
            onClick={() => setIsPopupOpen(true)}
          >
            READ OUR STORY
          </span>
          <Popup isOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
        </div>
      </section>
      <section className="">
        <div className="flex flex-col items-center">
          <h2 className="uppercase text-white text-[23px] text-center pt-[99px] pb-[32px] leading-[34.5px] -tracking-[0.5px] font-medium px-[10px]">
            SELECT YOUR CHARACTER
          </h2>
          {/* h-full py-10 md:py-20 grid grid-cols-2 gap-y-20 sm:grid-cols-2 md:grid-cols-4 gap-x-8 md:gap-[56px] justify-center items-center flex-wrap" */}
          <div className="md:flex md:flex-wrap md:gap-x-[49.04px] md:px-[3px] md:p-0 md:gap-0 grid grid-cols-2 gap-y-20 sm:grid-cols-2 md:grid-cols-4 gap-x-8">
            <Card.Player
              onClick={() => handleClick('PLAYER')}
              classNames="md:pr-[14.79px]"
            />
            <Card.Contributor
              onClick={() => handleClick('CONTRIBUTOR')}
              // classNames="md:pr-[49.04px]"
            />
            <Card.Investor
              onClick={() => handleClick('INVESTOR')}
              // classNames="md:pr-[61.51px]"
            />
            <Card.Affiliate
              onClick={() => handleClick('AFFILIATE')}
              classNames="md:pl-[12.47px]"
            />
          </div>
        </div>
      </section>
    </Fragment>
  )
}
