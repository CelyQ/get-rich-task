import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { z } from 'zod'

export default function Name({ label, name }: { label: string; name: string }) {
  const [value, setValue] = useState('')
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    const val = z.string().min(1)
    const { success } = val.safeParse(value)

    if (success === isValid) return
    setIsValid(success)
  }, [value])

  return (
    <div className="flex flex-col w-full gap-y-[6px]">
      <label htmlFor="first-name" className="font-medium text-[10px] px-[34px]">
        {label}
      </label>
      <input
        name={name}
        type="text"
        className={classNames(
          'bg-[#212226] py-[10px] px-[34px] text-[#D5D6E4] text-[10px] leading-5 font-medium outline-none border border-[#2B2D30]',
          {
            'border-[#3CCEA2]': isValid
          }
        )}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}
