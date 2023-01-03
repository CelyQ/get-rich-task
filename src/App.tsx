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

const handleClick = (s: SELECTION) => {
  if (!s) return

  const id = s.toLowerCase()
  const el = document.getElementById(id)

  el?.scrollIntoView({ behavior: 'smooth' })
}

export default function App() {
  return (
    <div className={`h-fit w-full bg-[#1d1f21] ${classes.gridbox}`}>
      <div className="container mx-auto max-h-[-webkit-fill-available]">
        <MainScreen handleClick={handleClick} />
        <PlayerScreen />
        <ContributorScreen />
        <InvestorScreen />
        <AffiliateScreen />
      </div>
    </div>
  )
}
