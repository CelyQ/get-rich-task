import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'

import oval from '../../assets/close-button-oval.svg'
import x from '../../assets/close-button-x.svg'

export default function Modal({
  children,
  onClose
}: {
  children: ReactNode
  onClose: () => void
}) {
  const appRoot = document.getElementById('root') as HTMLElement

  return createPortal(
    <>
      <div className="fixed w-full h-full flex justify-center items-center">
        <div
          id="overlay"
          className="fixed w-full h-full top-0 left-0 bg-blend-overlay bg-black/80 z-10 flex justify-center items-center text-white"
          onClick={onClose}
        ></div>
        <div className="bg-[#212226] w-full max-w-[289px] h-full max-h-[694px] z-20 rounded-3xl text-white">
          <div className="flex items-center px-[23px] gap-x-[20px]">
            <h2 className="py-[22px] font-medium text-sm leading-6">
              Let’s get to know eachother
            </h2>
            <div
              className="ml-auto cursor-pointer relative w-[25px] h-[25px] flex justify-center items-center"
              onClick={onClose}
            >
              <img src={oval} className="absolute z-10" />
              <img src={x} className="absolute z-20" />
            </div>
          </div>
          <div className="bg-[#18191D] h-[calc(100%-68px)] rounded-3xl flex flex-col items-center pl-[16px] pr-[19px] py-[25px]">
            {children}
          </div>
        </div>
      </div>
    </>,
    appRoot
  )
}
