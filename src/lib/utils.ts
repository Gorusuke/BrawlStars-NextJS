import { CARD_PER_PAGE, CLASS, FIRST_BRAWLER_ID, LAST_BRAWLER_ID, NEXT, PREV, RARITY } from "./constants"
import { getAllBrawlers } from "./data"
import { AllClasses, AllRarity, BrawlerInterface } from "./definitions/brawler"
import { Maps, MapsNamesInterface, Stat } from "./definitions/maps"

export const cutText = (text: string) => {
  if (text.length > 150) {
    const splitText = text.split('.', 2)
    return `${splitText.join('.')}.`
  }
  return text
}

export const linkRouter = (step: string, newId: string) => {
  const lastBrawler = (Number(LAST_BRAWLER_ID)).toString()
  const firstBrawler = (Number(FIRST_BRAWLER_ID)).toString()
  if (step === PREV) {
    if (newId === firstBrawler) return `/brawler/${LAST_BRAWLER_ID}`
    return `/brawler/${Number(newId) - 1}`
  } else if (step === NEXT) {
    if (newId === lastBrawler) return `/brawler/${FIRST_BRAWLER_ID}`
    return `/brawler/${Number(newId) + 1}`
  }
  return ''
}

export const filterBrawlers = (data: BrawlerInterface[], text: string) => {
  if (text.length) {
    return data.filter(brawl => brawl.name.toLowerCase().includes(text.toLowerCase()))
  }
  return data
}

export const filterByType = (data: BrawlerInterface[], text: string | undefined) => {
  const allRarity: AllRarity = {
    'Common':  [],
    'Rare': [],
    'Super Rare': [],
    'Epic':  [],
    'Mythic': [],
    'Legendary': []
  }
  const allClasses: AllClasses = {
    'Damage Dealer':  [],
    'Tank':  [],
    'Marksman':  [],
    'Artillery':  [],
    'Controller':  [],
    'Assassin':  [],
    'Support':  [],
  }
  data.forEach(brawl => {
    allRarity[brawl.rarity.name as keyof AllRarity].push(brawl)
    allClasses[brawl.class.name as keyof AllClasses].push(brawl)
  })
  if (text === RARITY) return allRarity
  if (text === CLASS) return allClasses
}

export const groupByMapsTitle = (data: Maps[]) => {
  const mapsName: MapsNamesInterface = {
    'Basket Brawl': [],
    'Big Game': [],
    'Boss Fight': [],
    'Bot Drop': [],
    'Bounty': [],
    'Brawl Ball': [],
    'Duels': [],
    'Duo Showdown': [],
    'Gem Grab': [],
    'Heist': [],
    'Hold The Trophy': [],
    'Hot Zone': [],
    'Hunters': [],
    'Knockout': [],
    'Last Stand': [],
    'Lone Star': [],
    'Payload': [],
    'Pumpkin Plunder': [],
    'Robo Rumble': [],
    'Siege': [],
    'Solo Showdown': [],
    'Super City Rampage': [],
    'Takedown': [],
    'Volley Brawl': [],
    'Wipeout': [],
  }
  const dataSorted = [...data].sort((a: Maps, b: Maps) => a.gameMode.name > b.gameMode.name ? 1 : -1)
  dataSorted.forEach(map => {
    mapsName[map.gameMode.name as keyof MapsNamesInterface].push(map)
  })
  return mapsName
}

export const statsBrawlers = async (stats: Stat[], highValue: number) => {
  const allBrawlers = await getAllBrawlers()
  const brawlersByStats = allBrawlers.filter(brawl => stats.slice(0, highValue).some((stat: Stat) => stat.brawler === brawl.id))
  const newStats = brawlersByStats.map(x => ({ image: x.imageUrl3, name: x.name, brawlerId: x.id }))
  return newStats
}

export const getDate = (eventDate: string, now: string) => {
  const date1 = new Date(now)
  const date2 = new Date(eventDate)
  const diff = ((date2.getTime() - date1.getTime()) / 1000) / 60
  const result = Math.abs(Math.round(diff))
  return (result / 60).toString().split('.');
}

export const getPagination = (prev: number, next: number) => {
  prev = next - CARD_PER_PAGE
  next = prev + CARD_PER_PAGE
  return {prev, next}
}