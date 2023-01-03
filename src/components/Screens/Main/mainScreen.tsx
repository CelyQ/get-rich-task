import { Fragment } from 'react'
import { SELECTION } from '../../../App'
import { HoloText } from '../../HoloText'
import * as Card from '../../Cards'

export default function MainScreen({
  handleClick
}: {
  handleClick: (s: SELECTION) => void
}) {
  return (
    <Fragment>
      <section className="flex flex-col items-center gap-1 pt-16 md:pt-40">
        <HoloText />
        <h3 className="uppercase text-white">WITH BLACKJACK.FUN</h3>
        <div className="flex flex-col gap-0.5 items-center py-8 text-sm px-8">
          <p className="text-[#666666] text-center py-2 md:py-0">
            BlackJack.fun is a complete Crypto Casino, with a focus on Blackjack
            Games.
          </p>
          <p className="text-[#666666]">But we don’t stop there.</p>
          <a
            className="text-[#45D8FF] cursor-pointer hover:underline"
            href="https://blackjack.fun/"
            target="_blank"
          >
            READ OUR STORY
          </a>
        </div>
      </section>
      <section className="">
        <div className="flex flex-col items-center">
          <h2 className="uppercase text-white text-2xl text-center">
            SELECT YOUR CHARACTER
          </h2>
          <div className="h-full py-10 md:py-20 grid grid-cols-2 gap-y-20 sm:grid-cols-2 md:grid-cols-4 gap-x-8 md:gap-[56px] justify-center items-center flex-wrap">
            <Card.Player onClick={() => handleClick('PLAYER')} />
            <Card.Contributor onClick={() => handleClick('CONTRIBUTOR')} />
            <Card.Investor onClick={() => handleClick('INVESTOR')} />
            <Card.Affiliate onClick={() => handleClick('AFFILIATE')} />
          </div>
        </div>
      </section>
    </Fragment>
  )
}
