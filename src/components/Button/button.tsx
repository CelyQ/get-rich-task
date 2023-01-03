import { Yellow as YellowShape } from './yellow'
import { Green as GreenShape } from './green'
import { Purple as PurpleShape } from './purple'
import { Blue as BlueShape } from './blue'

import { SELECTION } from '../../App'

export default function Button({
  text,
  type,
  onClick
}: {
  text: string
  type: SELECTION
  onClick: () => void
}) {
  const getShapeWidthClass = () => {
    switch (type) {
      case 'PLAYER':
        return 'w-[227px]'
      case 'CONTRIBUTOR':
        return 'w-[167px]'
      case 'INVESTOR':
        return 'w-[298px]'
      case 'AFFILIATE':
        return 'w-[307px]'
      default:
        return ''
    }
  }

  const renderShape = () => {
    switch (type) {
      case 'PLAYER':
        return (
          <YellowShape
            color="#A9B12B"
            className="group-hover/button:fill-[#7B8300]"
          />
        )
      case 'CONTRIBUTOR':
        return (
          <GreenShape
            color="#29B149"
            className="group-hover/button:fill-[#05711E]"
          />
        )
      case 'INVESTOR':
        return (
          <PurpleShape
            color="#FF40C1"
            className="group-hover/button:fill-[#D82EA0]"
          />
        )
      case 'AFFILIATE':
        return (
          <BlueShape
            color="#0F7EB7"
            className="group-hover/button:fill-[#004467]"
          />
        )
      default:
        return <></>
    }
  }

  return (
    <button
      className={`relative h-[44px] ${getShapeWidthClass()} flex justify-center items-center cursor-pointer group/button transition-transform duration-300 hover:scale-105`}
    >
      {renderShape()}
      <span className="text-white relative z-10">{text}</span>
    </button>
  )
}
