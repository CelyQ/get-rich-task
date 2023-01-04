import classes from './App.module.css'

import { Main as MainScreen } from './components/Screens'

import playerHeroSVG from './assets/heroes/player.svg'
import contributorHeroSVG from './assets/heroes/contributor.svg'
import investorHeroSVG from './assets/heroes/investor.svg'
import affiliateHeroSVG from './assets/heroes/affiliate.svg'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import useWindowSize from './hooks/useWindowSize'

import { HeroContent, HeroHeader } from './components/Hero'

export type SELECTION =
  | ('PLAYER' | 'CONTRIBUTOR' | 'INVESTOR' | 'AFFILIATE')
  | null

const handleClick = (s: SELECTION) => {
  if (!s) return

  const id = s.toLowerCase()
  const el = document.getElementById(id)

  el?.scrollIntoView({ behavior: 'smooth' })
}

export default function App() {
  const { width } = useWindowSize()
  const isMobile = width < 768

  const screenOffset = isMobile ? 1 : 0

  return (
    <div className={`h-fit w-full bg-[#1d1f21]`}>
      <Parallax pages={12 + screenOffset}>
        <ParallaxLayer offset={0}>
          <MainScreen handleClick={handleClick} />
        </ParallaxLayer>

        <ParallaxLayer
          speed={0.5}
          sticky={{
            start: 1 + screenOffset,
            end: 2 + screenOffset
          }}
        >
          <HeroHeader src={playerHeroSVG} />
        </ParallaxLayer>
        <ParallaxLayer
          id="player"
          speed={0.5}
          sticky={{
            start: 1.5 + screenOffset,
            end: 2 + screenOffset
          }}
          className="flex items-end"
        >
          <HeroContent type="PLAYER" />
        </ParallaxLayer>

        <ParallaxLayer
          speed={0.5}
          sticky={{
            start: 4 + screenOffset,
            end: 5 + screenOffset
          }}
        >
          <HeroHeader src={contributorHeroSVG} />
        </ParallaxLayer>
        <ParallaxLayer
          id="contributor"
          speed={0.5}
          sticky={{
            start: 4.5 + screenOffset,
            end: 5 + screenOffset
          }}
          className="flex items-end"
        >
          <HeroContent type="CONTRIBUTOR" />
        </ParallaxLayer>

        <ParallaxLayer
          speed={0.5}
          sticky={{
            start: 6.5 + screenOffset,
            end: 9 + screenOffset
          }}
        >
          <HeroHeader src={investorHeroSVG} />
        </ParallaxLayer>
        <ParallaxLayer
          id="investor"
          offset={5 + screenOffset}
          speed={0.5}
          sticky={{
            start: 7 + screenOffset,
            end: 9 + screenOffset
          }}
          className="flex items-end"
        >
          <HeroContent type="INVESTOR" />
        </ParallaxLayer>

        <ParallaxLayer
          speed={0.5}
          sticky={{
            start: 10.5 + screenOffset,
            end: 11 + screenOffset
          }}
        >
          <HeroHeader src={affiliateHeroSVG} />
        </ParallaxLayer>
        <ParallaxLayer
          id="affiliate"
          speed={0.5}
          sticky={{
            start: 11 + screenOffset,
            end: 11 + screenOffset
          }}
          className="flex items-end"
        >
          <HeroContent type="AFFILIATE" />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
