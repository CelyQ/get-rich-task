import { useState, useEffect } from 'react'

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

  return (
    <div
      className={`h-full w-full min-h-screen bg-[#1d1f21] ${classes.gridbox}`}
    >
      <div className="container mx-auto">{renderScreen()}</div>
    </div>
  )
}
