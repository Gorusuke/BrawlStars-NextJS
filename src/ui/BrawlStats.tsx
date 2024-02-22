import { MapStat } from "@/lib/definitions/maps"
import Image from "next/image"
import Link from "next/link"
import styles from './global.module.css'

const BrawlStats = ({stats}: {stats: MapStat[]}) => {
  return (
    <div className={styles.topBrawlers}>
      {stats.map(stat => 
        <Link key={stat.name} href={`/brawler/${stat.brawlerId}`}>
          <Image 
            height={0}
            width={0}
            sizes="100vw"
            className={styles.topBrawlersImage}
            src={stat.image} 
            alt={stat.name} 
          />
        </Link>
      )}
    </div>
  )
}

export default BrawlStats