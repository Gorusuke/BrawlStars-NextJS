import { NEXT, PREV } from "@/lib/constants"
import { getBrawlerById } from "@/lib/data"
import { cutText, linkRouter } from "@/lib/utils"
import ArrowButtons from "@/ui/ArrowButtons"
import Powers from "@/ui/Powers"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

const buttonsArr = [
  {
    text: "Prev Brawler",
    path: "M21 12L3 12M3 12L11.5 3.5M3 12L11.5 20.5",
    isUp: false,
    step: PREV
  },
  {
    text: "Next Brawler",
    path: "M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5",
    isUp: true,
    step: NEXT
  }
]

export const metadata: Metadata = {
  title: `Brawler - ${'sdad'}`,
};

const Brawler = async ({ params }: { params: { id: string }}) => {
  const { id } = params
  const brawler = await getBrawlerById(id)

  return (
    <>
      {Boolean(Object.values(brawler).length) &&
        <div className="grid p-4 min-h-[55vh] place-content-center">
          <div className="flex justify-between mb-5">
            {buttonsArr.map(button => 
              <Link href={linkRouter(button.step, id)} key={button.text}>
                <ArrowButtons text={button.text} path={button.path} isUp={button.isUp} />
              </Link>
            )}
          </div>
          <div className="bg-white grid grid-cols-[minmax(calc(360px_-_32px),_750px)] h-min rounded-2xl text-center">
            <section className="grid grid-cols-[2fr_2.5fr] gap-4 relative">
              <Image
                className="h-80 w-80 rounded-[16px_0_0_16px] z-10"
                height={0}
                width={0}
                sizes='100vw'
                src={brawler.imageUrl2}
                alt={brawler.name}
                style={{border: `10px solid ${brawler.rarity.color}`}}
              />
              <div className="text-black pr-4 flex flex-col gap-4">
                <h2 className="mt-4 text-2xl font-semibold">{brawler.name}</h2>
                <span className='font-normal block text-sm'>{cutText(brawler.description)}</span>
                <span className='font-semibold block text-base'>{brawler.class.name}</span>
                <span className='font-semibold block text-base' style={{color: brawler.rarity.color}}>{brawler.rarity.name}</span>
                <div className="inline-flex justify-center gap-4">
                  {[...brawler.starPowers, ...brawler.gadgets].map(gadget => <Powers key={gadget.id} power={gadget} tooltip />)}
                </div>
              </div>
            </section>
          </div>
        </div>
      }
    </>
  )
}

export default Brawler