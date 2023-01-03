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
    <div className={`h-fit w-full bg-[#1d1f21] ${classes.gridbox}`}>
      <Parallax pages={8.5 + screenOffset}>
        <ParallaxLayer factor={1 + screenOffset} offset={0}>
          <MainScreen handleClick={handleClick} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1 + screenOffset}
          speed={1.5}
          sticky={{
            start: 1 + screenOffset,
            end: 2 + screenOffset
          }}
        >
          <HeroHeader src={playerHeroSVG} />
        </ParallaxLayer>
        <ParallaxLayer
          id="player"
          offset={1 + screenOffset}
          speed={1.5}
          sticky={{
            start: 1.5 + screenOffset,
            end: 2 + screenOffset
          }}
          className="flex items-end"
        >
          <HeroContent type="PLAYER" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3 + screenOffset}
          speed={1.5}
          sticky={{
            start: 3 + screenOffset,
            end: 4 + screenOffset
          }}
        >
          <HeroHeader src={contributorHeroSVG} />
        </ParallaxLayer>
        <ParallaxLayer
          id="contributor"
          offset={3 + screenOffset}
          speed={1.5}
          sticky={{
            start: 3.5 + screenOffset,
            end: 4 + screenOffset
          }}
          className="flex items-end"
        >
          <HeroContent type="CONTRIBUTOR" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={5 + screenOffset}
          speed={1.5}
          sticky={{
            start: 5 + screenOffset,
            end: 6 + screenOffset
          }}
        >
          <HeroHeader src={investorHeroSVG} />
        </ParallaxLayer>
        <ParallaxLayer
          id="investor"
          offset={5 + screenOffset}
          speed={1.5}
          sticky={{
            start: 5.5 + screenOffset,
            end: 6 + screenOffset
          }}
          className="flex items-end"
        >
          <HeroContent type="INVESTOR" />
        </ParallaxLayer>

        <ParallaxLayer
          offset={7 + screenOffset}
          speed={1.5}
          sticky={{
            start: 7 + screenOffset,
            end: 8 + screenOffset
          }}
        >
          <HeroHeader src={affiliateHeroSVG} />
        </ParallaxLayer>
        <ParallaxLayer
          id="affiliate"
          offset={7 + screenOffset}
          speed={1.5}
          sticky={{
            start: 7.5 + screenOffset,
            end: 8 + screenOffset
          }}
          className="flex items-end"
        >
          <HeroContent type="AFFILIATE" />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
