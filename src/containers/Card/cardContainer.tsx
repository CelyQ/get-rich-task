import classNames from 'classnames'

export default function CardContainer({
  children,
  text,
  onClick,
  classes
}: {
  children: React.ReactNode
  text: string
  onClick: () => void
  classes?: string
}) {
  return (
    <div
      className={classNames(
        'flex flex-col justify-center items-center max-w-min gap-y-[15px]',
        classes
      )}
    >
      <div className="cursor-pointer" onClick={onClick}>
        {children}
      </div>
      <span className="text-white text-sm -tracking-[0.5px] leading-[21px] text-center h-[41px]">
        {text}
      </span>
    </div>
  )
}
