import Link from "next/link"
import BrawlStats from "./BrawlStats"
import Tooltip from "./Tooltip"
import { UPCOMING } from "@/lib/constants"
import { getDate } from "@/lib/utils"
import { Active, Upcoming } from "@/lib/definitions/events"
import Image from "next/image"
import styles from '@/ui/global.module.css'

const EventCards = ({ event, title }: {event: Active[] | Upcoming[], title: string}) => {
  const isUpcoming = title.toLowerCase() === UPCOMING

  return (
    <>
      <h2 className="mb-5 font-semibold text-2xl" style={{textTransform: 'capitalize'}}>{title}</h2>
      <div className='grid gap-5' style={{gridTemplateColumns: 'repeat(auto-fit, minmax(415px, 1fr))', marginBottom: '50px'}}>
        {event.map(brawlEvent => {
          const time = isUpcoming ? brawlEvent.startTime : brawlEvent.endTime
          const now = new Date().toLocaleString("en-US")
          const eventDate = new Date(time).toLocaleString("en-US")
          const [diffHour, diffMinutes] = getDate(eventDate, now)
          const hour = Number(diffHour)
          const minutes = Math.floor(Number('0.' + diffMinutes) * 60)
          return (
            <div key={brawlEvent.map.id} className='flex flex-col border-black border-2 border-solid'>
              <div>
                <div className='flex items-center bg-black text-sm font-semibold gap-1' style={{justifyContent: 'flex-end'}}>
                  <span>New Event in: {`${hour}h ${minutes}m`}</span>
                  <Tooltip title='Click to see the map' high='35px'>
                    <Link href={`/maps/${brawlEvent.map.id}`}>
                      <Image
                        className=" hover:scale-105"
                        width={25}
                        height={25}
                        src='https://cdn-old.brawlify.com/icon/Info-Round.png' 
                        alt="info"
                      />
                    </Link>
                  </Tooltip>
                </div>
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  className='w-full h-auto object-contain' 
                  src={brawlEvent.map.environment.imageUrl} 
                  alt={brawlEvent.map.environment.name} 
                />
                <div className='flex gap-4 px-2 py-1 items-center font-semibold mt-[-7px] h-14' style={{ backgroundColor: brawlEvent.map.gameMode.bgColor }}>
                  <Image 
                    className={styles.eventImage} 
                    height={0}
                    width={0}
                    sizes="100vw"
                    src={brawlEvent.map.gameMode.imageUrl} 
                    alt={brawlEvent.map.gameMode.name} 
                  />
                  <div className='leading-none'>
                    <h3 className="text-xl">{brawlEvent.map.gameMode.name.toUpperCase()}</h3>
                    <span>{brawlEvent.map.name}</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center bg-black" style={{padding: '10px'}}>
                <BrawlStats classname stats={brawlEvent.map.stats} />
                <span>Recommended brawlers for this event</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default EventCards