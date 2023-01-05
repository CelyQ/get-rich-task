import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'

import oval from '../../assets/oval.svg'

export default function Modal({
  children,
  onClose
}: {
  children: ReactNode
  onClose: () => void
}) {
  const appRoot = document.getElementById('root') as HTMLElement

  return createPortal(
    <div
      id="overlay"
      className="fixed w-full h-full top-0 left-0 bg-blend-overlay bg-gray-800/75 z-20 flex justify-center items-center text-white"
    >
      <div className="bg-[#212226] fixed w-full max-w-[480px] h-full">
        <div className="flex items-center px-[23px] gap-x-[20px]">
          <h2 className="py-[22px] font-medium text-sm leading-6">
            Let’s get to know eachother
          </h2>
          <div className="ml-auto cursor-pointer" onClick={onClose}>
            <img src={oval} />
          </div>
        </div>
        <div className="bg-[#18191D] h-full w-full rounded-3xl flex flex-col items-center">
          {children}
        </div>
      </div>
    </div>,
    appRoot
  )
}
