'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CLASS, RARITY, ALL } from "@/lib/constants";
import ArrowButtons from "../ArrowButtons";
import styles from '../global.module.css'

const Filters = () => {
  const { replace } = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const brawlersType = [ALL, RARITY, CLASS]
  const showFilters = searchParams.get('showFilters')?.toString()
  const filterBy = searchParams.get('filterBy')?.toString() || ALL

  const ulrFunctions = () => {
    const params = new URLSearchParams(searchParams) 
    const query = searchParams.get('query')?.toString()
    const handleSearch = (value: string) => {
      if(value) {
        params.set('query', value)
        params.set('page', '1')
      }
      else params.delete('query')
      replace(`${pathname}?${params.toString()}`)
    }
  
    const handleShowSort = () => {
      if(!showFilters) params.set('showFilters', 'true');
      else params.delete('showFilters')
      replace(`${pathname}?${params.toString()}`)
    }
  
    const handleSort = (type: string) => {
      params.set('filterBy', type)
      if(showFilters) params.delete('showFilters')
      if(query) params.delete('query')
      replace(`${pathname}?${params.toString()}`)
    }
    return {handleSearch, handleShowSort, handleSort}
  }

  const {handleSearch, handleShowSort, handleSort} = ulrFunctions()

  return (
    <section className={styles.filterContainer}>
      <div className={styles.search}>
        {filterBy === ALL &&
          <>
            <input
              className={styles.input}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder='Type a brawler name'
              type="text"
              defaultValue={searchParams.get('query')?.toString()}
            />
            <picture>
              <img className={styles.icon} src='/search.svg' alt="search" width={20} height={0} />
            </picture>
          </>
        }
      </div>
      <div className={styles.sort}>
        <ArrowButtons 
          text="Sort by" 
          path="M6 9L12 15L18 9" 
          isUp 
          onClick={handleShowSort} 
        />
        {showFilters && 
          <ul className={styles.sortList}>
            {brawlersType.map(type => <li key={type} className={styles.sortElement} onClick={() => handleSort(type)}>{type}</li>)}
          </ul>
        }
      </div>
    </section>
  )
}

export default Filters