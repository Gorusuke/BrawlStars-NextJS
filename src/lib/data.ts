import { URL } from "./constants"
import { BrawlerInterface } from "./definitions/brawler"

export const getAllBrawlers = async () => {
  const response = await fetch(`${URL}/brawlers`)
  const { list } = await response.json()
  const listSorted = [...list].sort((a: BrawlerInterface, b: BrawlerInterface) => a.id - b.id)
  return listSorted
}

export const getBrawlerById = async (id: string) => {
  const response = await fetch(`${URL}/brawlers/${id}`)
  return await response.json()
}

export const getAllGameModes = async () => {
  const response = await fetch(`${URL}/gamemodes`)
  return await response.json()
}