import { FIRST_BRAWLER_ID, LAST_BRAWLER_ID, NEXT, PREV } from "./constants"

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