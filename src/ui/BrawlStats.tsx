import { MapStat } from "@/lib/definitions/maps"
import Link from "next/link"
import styles from './global.module.css'

const BrawlStats = ({stats, classname}: {stats: MapStat[], classname?:  boolean}) => {
  return (
    <div className={classname ? styles.brawlersTop : styles.topBrawlers}>
      {stats.map(stat => 
        <Link key={stat.name} href={`/brawler/${stat.brawlerId}`}>
          <picture>
            <img
              height={0}
              width={0}
              sizes="100vw"
              className={classname ? styles.imageBrawlerTop : styles.topBrawlersImage}
              src={stat.image} 
              alt={stat.name} 
            />
          </picture>
        </Link>
      )}
    </div>
  )
}

export default BrawlStats