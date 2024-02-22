import { URL } from "./constants"
import { BrawlerInterface } from "./definitions/brawler"
import { GameModesInterface } from "./definitions/gameModes"
import { statsBrawlers } from "./utils"

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

export const getAllMaps = async () => {
  const response = await fetch(`${URL}/maps`)
  const { list } = await response.json()
  return list
}

export const getMap = async (id: string) => {
  const response = await fetch(`${URL}/maps/${id}`)
  const map = await response.json()
  const allGameModes = await getAllGameModes()
  const { list }: GameModesInterface = allGameModes
  const gameMode = list.find(game => game.name === map.gameMode.name)
  const stats = await statsBrawlers(map.stats, 12)
  return {
    ...map,
    stats,
    gameMode: {
      ...map.gameMode,
      description: gameMode!.description,
      mode: gameMode!.title,
    }
  }
}