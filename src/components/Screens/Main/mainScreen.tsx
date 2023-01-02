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
      <section className="flex flex-col items-center gap-1 mt-40">
        <HoloText />
        <h3 className="uppercase text-white">WITH BLACKJACK.FUN</h3>
        <div className="flex flex-col gap-0.5 items-center py-11 text-sm">
          <p className="text-[#666666]">
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
      <section>
        <div className="py-11 flex flex-col items-center">
          <h2 className="uppercase text-white text-2xl">
            SELECT YOUR CHARACTER
          </h2>
          <div className="py-11 flex gap-[56px] justify-center items-center">
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
