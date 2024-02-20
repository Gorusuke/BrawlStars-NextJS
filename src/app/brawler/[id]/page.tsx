import { NEXT, PREV } from "@/lib/constants"
import { getBrawlerById } from "@/lib/data"
import { cutText, linkRouter } from "@/lib/utils"
import Powers from "@/ui/Powers"
import Image from "next/image"
import Link from "next/link"

const Brawler = async ({ params }: { params: { id: string }}) => {
  const { id } = params
  const brawler = await getBrawlerById(id)

  return (
    <>
      {Boolean(Object.values(brawler).length) &&
        <div className="grid p-4 h-[55vh] place-content-center">
          <div className="flex justify-between mb-5">
            <Link href={linkRouter(PREV, id)}>
              <button className=" flex items-center gap-1 text-base bg-transparent cursor-pointer hover:text-[#ffe058]">
                <svg 
                  width="24px" 
                  height="24px" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  fill="currentColor" 
                  xmlns="http://www.w3.org/2000/svg" 
                  color="currentColor"
                >
                  <path d="M21 12L3 12M3 12L11.5 3.5M3 12L11.5 20.5" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Prev Brawler
              </button>
            </Link>
            <Link href={linkRouter(NEXT, id)}>
              <button className=" flex items-center gap-1 text-base bg-transparent cursor-pointer hover:text-[#ffe058]">
                Next Brawler
                <svg 
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  fill="currentColor" 
                  xmlns="http://www.w3.org/2000/svg"
                  color="currentColor"
                >
                  <path 
                    d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                  </path>
                </svg>
              </button>
            </Link>
          </div>
          <div className="bg-white grid grid-cols-[minmax(calc(360px_-_32px),_750px)] h-min rounded-2xl text-center">
            <section className="grid grid-cols-[2fr_2.5fr] gap-4 relative">
              <Image
                className="rounded-[16px_0_0_16px] z-10"
                width={307}
                height={307}
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