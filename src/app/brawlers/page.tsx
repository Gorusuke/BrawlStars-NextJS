import Link from 'next/link'
import Image from 'next/image'
import Powers from '@/ui/Powers'
import { getAllBrawlers } from '@/lib/data'
import Filters from '@/ui/client/Filter'
import { filterBrawlers } from '@/lib/utils'

const Brawlers = async ({searchParams}: {searchParams: { [key: string]: string | undefined }}) => {
  const { query } = searchParams 
  const allBrawlers = await getAllBrawlers()
  const brawlersData = filterBrawlers(allBrawlers, (query ?? ''))

  return (
    <>
      <Filters />
      <h1 className='text-center text-4xl font-bold mb-10 my-7'>Brawlers</h1>
      <section className='grid grid-cols-[repeat(auto-fit,_minmax(380px,_1fr))] gap-5 pb-20'>
        {/* {filterBy !== ALL && <BrawlerByType brawlers={brawlers} selection={filterBy} />} */}
        {/* {filterBy === ALL && filterBrawlers(brawlerPagination, text).map(brawler => { */}
        {brawlersData.map(brawler => {
          const powersAndGadgets = [...brawler.starPowers, ...brawler.gadgets]
          return (
            <div
              className="cursor-pointer rounded-xl"
              style={{border: `4px solid ${brawler.rarity.color}`}}
              key={brawler.id}
            >
              <Link href={`/brawler/${brawler.id}`}>
                <section className="bg-white text-black flex gap-4 rounded-lg">
                  <Image
                    className="h-44 w-auto rounded-[7px_0_0_7px]"
                    height={0}
                    width={0}
                    sizes='100vw'
                    src={brawler.imageUrl2}
                    alt={brawler.name}
                  />
                  <div className="h-max text-center w-full">
                    <h3 className='my-3 mx-0 font-bold text-xl'>{brawler.name}</h3>
                    <span className='block font-semibold text-[#444] text-md'>{brawler.class.name}</span>
                    <span className='block font-semibold text-[#444] text-md' style={{color: brawler.rarity.color}}>{brawler.rarity.name}</span>
                    <div className="flex justify-center mt-3 gap-2">
                      {powersAndGadgets.map(gadget => <Powers key={gadget.id} power={gadget} />)}
                    </div>
                  </div>
                </section>
              </Link>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Brawlers