export const URL = 'https://api.brawlapi.com/v1'
export const RARITY = 'Rarity'
export const CLASS = 'Class'
export const ALL = 'All'
export const PREV = 'prev'
export const NEXT = 'next'
export const FIRST_BRAWLER_ID = '16000000'
export const LAST_BRAWLER_ID = '16000077'
export const UPCOMING = 'upcoming'
export const BUTTONS_ARR = [
  {
    text: "Prev Brawler",
    path: "M21 12L3 12M3 12L11.5 3.5M3 12L11.5 20.5",
    isUp: false,
    step: PREV
  },
  {
    text: "Next Brawler",
    path: "M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5",
    isUp: true,
    step: NEXT
  }
]