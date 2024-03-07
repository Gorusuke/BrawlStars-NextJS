import { GameModeSkeleton } from "@/ui/Skeletons";
import styles from '@/ui/global.module.css'

export default function Loading() {
  return (
    <section className={styles.skeletonGameMode}>
      {[...Array(15)].map((_, idx) => <GameModeSkeleton key={idx}/>)}
    </section>
  )
}