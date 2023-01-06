import oval from '../../assets/close-button-oval.svg'
import x from '../../assets/close-button-x.svg'

export default function Popup({
  isOpen,
  setIsPopupOpen
}: {
  isOpen: boolean
  setIsPopupOpen: (isOpen: boolean) => void
}) {
  if (!isOpen) return null

  return (
    <div className="bg-[#212226] max-w-[530px] absolute translate-y-[52px] z-20 rounded-3xl">
      <div className="flex px-6 py-[22px]">
        <h2 className="text-white font-poppins text-[14px] leading-6 font-medium px-[20px]">
          Our Story
        </h2>
        <div
          className="ml-auto cursor-pointer relative w-[25px] h-[25px] flex justify-center items-center"
          onClick={() => setIsPopupOpen(false)}
        >
          <img src={oval} className="absolute z-10" />
          <img src={x} className="absolute z-20" />
        </div>
      </div>
      <div className="bg-[#18191D] rounded-3xl">
        <p className="text-sm text-[#666666] leading-[22px] font-medium font-poppins p-[40px] pb-[27px] text-center">
          BlackJack.fun is a complete Crypto Casino, with a focus on Blackjack
          Games. But we didn’t stop there. We gave our community a platform to
          get involved in, from suggestions to full on ideas that we created
          with and for our players. This transparency helped us create unique
          relations based on trust between our services and our consumers. Today
          we are expanding this mentality to you too. You will have the chance
          to earn money and be a part of our awesome community. After years of
          experience with our community we made the process to get involved very
          easy. It even looks like game... A very profitable game. So what do
          you say, wanna play?
        </p>
      </div>
    </div>
  )
}
