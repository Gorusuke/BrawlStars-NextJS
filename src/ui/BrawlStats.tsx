import { MapStat } from "@/lib/definitions/maps"
import Image from "next/image"
import Link from "next/link"
import styles from './global.module.css'

const BrawlStats = ({stats, classname}: {stats: MapStat[], classname?:  boolean}) => {
  const [container, image] = ['flex gap-3', 'w-[50px] h-[50px] rounded-[50%] cursor-pointer']
  console.log({container, image})
  return (
    <div className={classname ? styles.brawlersTop : styles.topBrawlers}>
      {stats.map(stat => 
        <Link key={stat.name} href={`/brawler/${stat.brawlerId}`}>
          <Image 
            height={0}
            width={0}
            sizes="100vw"
            className={classname ? styles.imageBrawlerTop : styles.topBrawlersImage}
            src={stat.image} 
            alt={stat.name} 
          />
        </Link>
      )}
    </div>
  )
}

export default BrawlStats