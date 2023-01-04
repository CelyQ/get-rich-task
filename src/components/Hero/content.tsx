import { useEffect, useState } from 'react'
import { SELECTION } from '../../App'
import { Button } from '../Button'

export default function HeroContent({ type }: { type: SELECTION }) {
  const [title, setTitle] = useState('')
  const [buttonText, setButtonText] = useState('')

  useEffect(() => {
    switch (type) {
      case 'PLAYER':
        setTitle('The Player')
        setButtonText('START PLAYING NOW')
        return
      case 'CONTRIBUTOR':
        setTitle('The Contributor')
        setButtonText('JOIN US')
        return
      case 'INVESTOR':
        setTitle('The Investor')
        setButtonText('CONTACT A REPRESENTATIVE')
        return
      case 'AFFILIATE':
        setTitle('The Affiliate')
        setButtonText('TO OUR AFFILIATE PLATFORM')
        return
      default:
        break
    }
  }, [type])

  return (
    <div className="container mx-auto flex flex-col justify-start items-center h-1/2 relative left-0 bottom-0">
      <h2 className="text-white text-2xl pt-8">{title}</h2>
      <p className="text-[#666666] text-sm md:max-w-[560px] text-center py-8">
        Donec rhoncus odio lacus, non blandit justo porttitor in. Curabitur
        tincidunt, metus sit amet cursus commodo, nisi nunc faucibus risus, eu
        dictum est
      </p>
      <Button type={type} onClick={() => {}} text={buttonText} />
    </div>
  )
}
