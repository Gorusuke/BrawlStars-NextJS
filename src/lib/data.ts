import { BrawlerInterface } from "./definitions/brawler"

export const getAllBrawlers = async () => {
  const response = await fetch('https://api.brawlapi.com/v1/brawlers')
  const { list } = await response.json()
  const listSorted = [...list].sort((a: BrawlerInterface, b: BrawlerInterface) => a.id - b.id)
  return listSorted
}

export const getBrawlerById = async (id: string) => {
  const response = await fetch(`https://api.brawlapi.com/v1/brawlers/${id}`)
  return await response.json()
}