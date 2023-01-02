export default function CardContainer({
  children,
  text,
  onClick
}: {
  children: React.ReactNode
  text: string
  onClick: () => void
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="cursor-pointer" onClick={onClick}>
        {children}
      </div>
      <span className="text-white text-sm">{text}</span>
    </div>
  )
}
