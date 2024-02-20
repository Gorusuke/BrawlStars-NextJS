import Link from 'next/link'
import Image from 'next/image'
import { BrawlerInterface } from '@/lib/definitions/brawler'


const getAllBrawlers = async () => {
  const response = await fetch('https://api.brawlapi.com/v1/brawlers')
  const { list } = await response.json()
  const listSorted = [...list].sort((a: BrawlerInterface, b: BrawlerInterface) => a.id - b.id)
  return listSorted
}

const Brawlers = async () => {
  
  const brawlersData = await getAllBrawlers()
  // console.log(brawlersData)

  return (
    <>
      {/* <Filters setText={setText} filterBy={filterBy} setFilterBy={setFilterBy} /> */}
      <h1 className='title'>Brawlers</h1>
      <section className='my-8'>
        {/* {filterBy !== ALL && <BrawlerByType brawlers={brawlers} selection={filterBy} />} */}
        {/* {filterBy === ALL && filterBrawlers(brawlerPagination, text).map(brawler => { */}
        {brawlersData.map(brawler => {
          // const powersAndGadgets = [...brawler.starPowers, ...brawler.gadgets]
          return (
            <div
              className="brawler"
              style={{border: `4px solid ${brawler.rarity.color}`}}
              key={brawler.id}
            >
              <Link href={`/brawler/${brawler.id}`}>
                <section className="container">
                  <Image
                    // className="image"
                    height={175}
                    width={175}
                    src={brawler.imageUrl2}
                    alt={brawler.name}
                  />
                  <div className="info">
                    <h3>{brawler.name}</h3>
                    <span className="class">{brawler.class.name}</span>
                    <span style={{color: brawler.rarity.color}}>{brawler.rarity.name}</span>
                    {/* <div className="powers">
                      {powersAndGadgets.map(gadget => <Powers key={gadget.id} power={gadget} className="powers-image" />)}
                    </div> */}
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