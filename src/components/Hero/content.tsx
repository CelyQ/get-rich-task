import { useEffect, useState } from 'react'
import { SELECTION } from '../../App'
import { Button } from '../Button'
import { Modal } from '../Modal'
import { Select } from '../Form/Inputs/Select'

import infoOval from '../../assets/info-oval.svg'
import infoI from '../../assets/info-i.svg'

import formSubmitSVG from '../../assets/form/form-submit.svg'
import formSubmitActiveSVG from '../../assets/form/form-submit-active.svg'
import classNames from 'classnames'
import { EmailInput } from '../Form/Inputs/Email'
import { NameInput } from '../Form/Inputs/Name'

export default function HeroContent({ type }: { type: SELECTION }) {
  const [title, setTitle] = useState('')
  const [buttonText, setButtonText] = useState('')

  const [isOpen, setIsOpen] = useState(false)

  type Option = {
    value: string
    label: string
  } | null

  const [selectedOption, setSelectedOption] = useState<Option>(null)

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

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="w-full flex items-center gap-x-[13px]">
          <div className="relative h-[18px] w-[18px] pl-[11px] flex justify-center items-center">
            <img src={infoOval} className="absolute" />
            <img src={infoI} className="absolute" />
          </div>
          <div className="h-min">
            <span className="text-[10px] text-[#808191] h-[20px] leading-5 font-medium font-inter">
              All fields are mandatory
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-y-[9px] pt-[26px] w-full font-inter">
          <NameInput label="First Name" name="first-name" />
          <NameInput label="Last Name" name="last-name" />
          <div className="flex flex-col w-full gap-y-[6px]">
            <label
              htmlFor="inquiry"
              className="font-medium text-[10px] px-[34px]"
            >
              Inquiry
            </label>
            <Select />
          </div>
          <EmailInput />
          <div className="flex flex-col w-full gap-y-[6px]">
            <label
              htmlFor="message"
              className="font-medium text-[10px] px-[34px]"
            >
              Message
            </label>
            <textarea
              name="message"
              className="bg-[#212226] px-[34px] py-[10px] text-[#D5D6E4] text-[10px] leading-5 font-medium outline-none border border-[#2B2D30] h-[110px] resize-none"
            />
          </div>
          <div className="py-[25px] flex justify-center items-center">
            <button className="relative flex justify-center items-center w-[227px] h-[44px] group/submit">
              <img src={formSubmitSVG} className="absolute" />
              <img
                src={formSubmitActiveSVG}
                className="absolute hidden group-hover/submit:block"
              />
              <span className="text-[16px] leading-6 font-medium font-poppins z-10">
                I WANT TO GET RICH
              </span>
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}
