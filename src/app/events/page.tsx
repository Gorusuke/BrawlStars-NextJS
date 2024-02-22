import { getAllEvents } from "@/lib/data"
import EventCards from "@/ui/EventCards"

const Events = async () => {
  const brawlEvents = await getAllEvents()

  return Object.keys(brawlEvents).length &&
    <>
      <h1 className='text-center my-8 mx-0 text-4xl font-bold mb-10'>Events</h1>
      {Object.entries(brawlEvents).map(brawlEvent => {
        const [title, type] = brawlEvent
        return <EventCards key={title} event={type} title={title} />
      })}
    </>
}

export default Events