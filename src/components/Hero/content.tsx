import { useEffect, useState } from 'react'
import { SELECTION } from '../../App'
import { Button } from '../Button'
import { Modal } from '../Modal'

import infoOval from '../../assets/info-oval.svg'
import infoI from '../../assets/info-i.svg'

export default function HeroContent({ type }: { type: SELECTION }) {
  const [title, setTitle] = useState('')
  const [buttonText, setButtonText] = useState('')

  const [isOpen, setIsOpen] = useState(false)

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
    <>
      <div className="container mx-auto flex flex-col justify-start items-center h-1/2 relative left-0 bottom-0">
        <h2 className="text-white text-2xl pt-8">{title}</h2>
        <p className="text-[#666666] text-sm md:max-w-[560px] text-center py-8">
          Donec rhoncus odio lacus, non blandit justo porttitor in. Curabitur
          tincidunt, metus sit amet cursus commodo, nisi nunc faucibus risus, eu
          dictum est
        </p>
        <Button type={type} onClick={() => setIsOpen(true)} text={buttonText} />
      </div>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <div className="w-full flex items-center gap-x-[13px]">
            <div className="relative h-[18px] w-[18px] pl-[11px] flex justify-center items-center">
              <img src={infoOval} className="absolute" />
              <img src={infoI} className="absolute" />
            </div>
            <div className="h-min">
              <span className="text-[10px] text-[#808191] h-[20px] leading-5 font-medium">
                All fields are mandatory
              </span>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
