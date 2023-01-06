import { z } from 'zod'
import { useEffect, useState } from 'react'
import classNames from 'classnames'

export default function EmailInput() {
  const [value, setValue] = useState('')
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    const emails = z.string().email()
    const { success } = emails.safeParse(value)

    if (success === isValid) return
    setIsValid(success)
  }, [value])

  return (
    <div className="flex flex-col w-full gap-y-[6px]">
      <label htmlFor="email" className="font-medium text-[10px] px-[34px]">
        Email
      </label>
      <input
        name="email"
        type="text"
        className={classNames(
          'bg-[#212226] py-[10px] px-[34px] text-[#D5D6E4] text-[10px] leading-5 font-medium outline-none border border-[#2B2D30]',
          {
            'border-[#3CCEA2]': isValid,
            'border-[#D73A30]': !isValid && value.length > 0
          }
        )}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}
