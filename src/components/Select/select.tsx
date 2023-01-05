import classNames from 'classnames'
import { useState } from 'react'

import arrowDown from '../../assets/arrow-down.svg'

type Option = {
  label: string
  value: string
} | null

export default function Select() {
  const options = [
    {
      label: 'Option 1',
      value: 'option1'
    },
    {
      label: 'Option 2',
      value: 'option2'
    }
  ]

  const [selected, setSelected] = useState<Option>(null)

  return (
    <div className="cursor-pointer flex flex-col gap-y-2 group/select relative">
      <div
        className={classNames(
          'px-[34px] py-[10px] relative flex items-center bg-[#212226] border border-[#2B2D30] z-20',
          {
            'border-[#3CCEA2]': selected
          }
        )}
      >
        <img
          src={arrowDown}
          className="absolute right-[22px] group-hover/select:rotate-180"
        />
        <span
          className={classNames(
            'text-[10px] leading-5 font-medium select-none',
            {
              'text-[#808191]': !selected
            }
          )}
        >
          {selected ? selected.label : 'Unspecified'}
        </span>
      </div>
      <div className="absolute top-0 h-full w-full max-h-0 overflow-hidden group-hover/select:max-h-full group-hover/select:overflow-visible">
        <div className=" transition-[max-height] duration-200 relative flex flex-col gap-y-1 py-2">
          {options.map((option) => (
            <div
              className="px-[34px] py-[10px] flex items-center text-[#D5D6E4] text-[10px] leading-5 font-medium select-none relative top-10 bg-[#212226]"
              onClick={() => {
                setSelected(option)
              }}
            >
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
