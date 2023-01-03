export default function HeroHeader({ src }: { src: string }) {
  return (
    <div className="container mx-auto flex justify-center items-end h-3/5">
      <div className="h-[293px] md:w-[445px] md:h-[334px]">
        <img src={src} alt="" className="motion-safe:animate-pulse w-full" />
      </div>
    </div>
  )
}
