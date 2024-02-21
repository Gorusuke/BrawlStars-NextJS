import { AllTypes, BrawlerInterface } from "@/lib/definitions/brawler"
import { filterByType } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import styles from './global.module.css'

const BrawlersByType = ({ brawlers, filterBy }: { brawlers: BrawlerInterface[], filterBy: string | undefined}) => {
  const result: AllTypes | undefined = filterByType(brawlers, filterBy)
  const rarityNames = result ? Object.keys(result) : []

  return (
    <>
      {rarityNames.map((name) => (
        <section className={`${styles.container} max-w-screen-xl my-0 mx-auto`} key={name}>
          <h2 className={styles.brawlTitle}>{name}</h2>
          <div className={styles.brawlContainer}>
            { // @ts-expect-error Property map does not exist on type never.
              result[name as keyof AllTypes].map((brawler) => (
              <Link key={brawler.id} href={`/brawler/${brawler.id}`}>
                <Image
                  className="rounded-lg cursor-pointer"
                  height={100}
                  width={100}
                  style={{border: `4px solid ${brawler.rarity.color}`}}
                  src={brawler.imageUrl2}
                  alt={brawler.name}
                />
              </Link>
            ))}
          </div>
        </section>
      ))}
    </>
  )
}

export default BrawlersByType