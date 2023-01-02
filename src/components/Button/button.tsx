import classNames from 'classnames'
import { Yellow as YellowShape } from './yellow'

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
  const getFillColor = () => {
    switch (type) {
      case 'PLAYER':
        return '#A9B12B'
      case 'CONTRIBUTOR':
        return '#29B149'
      case 'INVESTOR':
        return '#FF40C1'
      case 'AFFILIATE':
        return '#0F7EB7'
      default:
        return ''
    }
  }

  const className = classNames({
    'group-hover/button:fill-[#7B8300]': type === 'PLAYER',
    'group-hover/button:fill-[#05711E]': type === 'CONTRIBUTOR',
    'group-hover/button:fill-[#D82EA0]': type === 'INVESTOR',
    'group-hover/button:fill-[#004467]': type === 'AFFILIATE'
  })

  return (
    <button className="relative w-[227px] h-[44px] flex justify-center items-center cursor-pointer group/button">
      <YellowShape color={getFillColor()} className={className} />
      <span className="text-white relative z-10">{text}</span>
    </button>
  )
}
