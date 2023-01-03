import { useState, useEffect } from 'react'
import classNames from 'classnames'

import classes from './App.module.css'
import {
  Main as MainScreen,
  Player as PlayerScreen,
  Contributor as ContributorScreen,
  Investor as InvestorScreen,
  Affiliate as AffiliateScreen
} from './components/Screens'

export type SELECTION =
  | ('PLAYER' | 'CONTRIBUTOR' | 'INVESTOR' | 'AFFILIATE')
  | null

export default function App() {
  const [selection, setSelection] = useState<SELECTION>(
    localStorage.getItem('selection') as SELECTION
  )

  const handleClick = (s: SELECTION) => {
    setSelection(s)
    if (!s) {
      localStorage.removeItem('selection')
      return
    }
    localStorage.setItem('selection', s)
  }

  useEffect(() => {
    globalThis.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        handleClick(null)
      }
    })
  }, [])

  const renderScreen = () => {
    switch (selection) {
      case 'PLAYER':
        return <PlayerScreen />
      case 'CONTRIBUTOR':
        return <ContributorScreen />
      case 'INVESTOR':
        return <InvestorScreen />
      case 'AFFILIATE':
        return <AffiliateScreen />
      default:
        return <MainScreen handleClick={handleClick} />
    }
  }

  const renderBackButton = () => {
    if (!selection) return null
    return (
      <span
        className="md:hidden fixed top-0 left-0 p-8 cursor-pointer group/back-button"
        onClick={() => handleClick(null)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width={32}
          height={32}
        >
          <path
            className={classNames({
              'fill-[#A9B12B] group-hover/back-button:fill-[#7B8300]':
                selection === 'PLAYER',
              'fill-[#29B149] group-hover/back-button:fill-[#05711E]':
                selection === 'CONTRIBUTOR',
              'fill-[#FF40C1] group-hover/back-button:fill-[#D82EA0]':
                selection === 'INVESTOR',
              'fill-[#0F7EB7] group-hover/back-button:fill-[#004467]':
                selection === 'AFFILIATE'
            })}
            d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512s256-114.6 256-256zM116.7 244.7l112-112c4.6-4.6 11.5-5.9 17.4-3.5s9.9 8.3 9.9 14.8l0 64 96 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l-96 0 0 64c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5l-112-112c-6.2-6.2-6.2-16.4 0-22.6z"
          />
        </svg>
      </span>
    )
  }

  return (
    <div className={`h-full w-full bg-[#1d1f21] ${classes.gridbox}`}>
      {renderBackButton()}
      <div className="container mx-auto h-screen max-h-[-webkit-fill-available]">
        {renderScreen()}
      </div>
    </div>
  )
}
