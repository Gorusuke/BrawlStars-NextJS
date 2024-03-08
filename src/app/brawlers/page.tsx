import Link from 'next/link'
import Image from 'next/image'
import Powers from '@/ui/Powers'
import { getAllBrawlers } from '@/lib/data'
import Filters from '@/ui/client/Filter'
import { filterBrawlers, getPagination } from '@/lib/utils'
import { ALL, CARDS_PER_PAGE, LEFT_ARROW, NEXT, PREV, RIGHT_ARROW } from '@/lib/constants'
import BrawlersByType from '@/ui/BrawlerByType'
import ArrowButtons from '@/ui/ArrowButtons'
import Pagination from '@/ui/client/Pagination'
import styles from '@/ui/global.module.css'
import { headers } from 'next/headers'

const Brawlers = async ({searchParams}: {searchParams: { [key: string]: string | undefined }}) => {
  const { page = 1, query, filterBy = ALL } = searchParams
  const allBrawlers = await getAllBrawlers()
  const brawlersData = filterBrawlers(allBrawlers, (query ?? ''))
  const showAll = filterBy === ALL
  const {prev, next} = getPagination(0, CARDS_PER_PAGE * Number(page))
  const brawlersPagination = brawlersData.slice(prev, next)
  const totalPages = Math.ceil((Number(query) || brawlersData.length) / CARDS_PER_PAGE)
  
  const createPageURL = (state: string) => {
    const headersList = headers()
    const header_url = headersList.get('x-url') || "";
    const pathname = headersList.get('x-pathname');
    const params = header_url.split('?')[1] || ''
    const getParams = params.includes('&') ? params.split('&') : [params]
    const hoal = getParams.find(pa => pa.includes('page'))
    const pageNumber = Number(hoal?.at(-1))
    let newUrl = ''
    if(state === NEXT){
      newUrl = params.replace(`page=${pageNumber}`, `page=${pageNumber + 1}`)
    } else {
      newUrl = params.replace(`page=${pageNumber}`, `page=${pageNumber - 1}`)
    }
    return `${pathname}?${newUrl}`
  };
  

  return (
    <>
      <Filters />
      <h1 className='text-center text-4xl font-bold mb-10 my-7'>Brawlers</h1>
      <section className={`${showAll ? 'grid grid-cols-[repeat(auto-fit,_minmax(380px,_1fr))] gap-5 pb-12' : ''}`}>
        {!showAll && <BrawlersByType brawlers={allBrawlers} filterBy={filterBy}/>}
        {showAll && !brawlersPagination.length && <p className=' text-center text-3xl my-10'>This brawler <b>{query}</b> doesn&#39;t exist </p> }
        {showAll && brawlersPagination.map(brawler => {
          const powersAndGadgets = [...brawler.starPowers, ...brawler.gadgets]
          return (
            <div
              className="cursor-pointer rounded-xl hover:scale-105 transition-all"
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
      {Boolean(brawlersData.length) && filterBy === ALL &&
        <div className='flex justify-center items-center mb-12'>
          <Link scroll={false} href={createPageURL(PREV)} className={Number(page) <= 1 ? '' : styles.arrowButton}>
            <ArrowButtons text='' path={LEFT_ARROW} isUp={false} disabled={Number(page) <= 1} />
          </Link>
          <div style={{margin: '0 20px'}}>
            <Pagination totalPages={totalPages}/>
          </div>
          <Link scroll={false} href={createPageURL(NEXT)} className={(Number(page) >= totalPages) ? '' : styles.arrowButton}>
            <ArrowButtons text='' path={RIGHT_ARROW} isUp={false} disabled={Number(page) >= totalPages}/>
          </Link>
        </div>
      }
    </>
  )
}

export default Brawlers